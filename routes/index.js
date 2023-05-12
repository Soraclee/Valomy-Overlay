process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

var express = require("express");
var router = express.Router();

const https = require("https");
var path = require("path");
const fs = require("fs");
const axios = require("axios");
const io = require("socket.io")(5001, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const WebSocket = require("ws");
var wsdata = null;
websocketConnect();
const settings = JSON.parse(
  fs.readFileSync("./settings.json", { encoding: "utf-8" })
);

setInterval(async () => {
  tokens = await data();
}, 3000000); //50min (token expires after 60min)

var data = async function () {
  if (
    fs.existsSync(
      `${process.env.LOCALAPPDATA}\\Riot Games\\Riot Client\\Config\\lockfile`
    )
  ) {
    var lockfileContents = fs.readFileSync(
      `${process.env.LOCALAPPDATA}\\Riot Games\\Riot Client\\Config\\lockfile`,
      "utf8"
    );
    var matches = lockfileContents.match(/(.*):(.*):(.*):(.*):(.*)/);
    var port = matches[3];
    var pw = matches[4];
    return await axios
      .get(`https://127.0.0.1:${port}/entitlements/v1/token`, {
        headers: {
          Authorization: `Basic ${Buffer.from(`riot:${pw}`, "utf8").toString(
            "base64"
          )}`,
          "user-agent": "ShooterGame/21 Windows/10.0.19042.1.768.64bit",
          "X-Riot-ClientVersion": "release-02.03-shipping-8-521855",
          "Content-Type": "application/json",
          "rchat-blocking": "true",
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      })
      .catch((error) => {
        // handle error
      });
  } else {
    wsdata = null;
    console.log("Valorant n'est pas ouvert, réessaie dans 10 secondes ...");
    await sleep(10000);
    return await data();
  }
};

async function websocketConnect() {
  wsdata = await fetchLogin();
  var ws = new WebSocket(
    `wss://riot:${wsdata.pw}@127.0.0.1:${wsdata.port}/`,
    "wamp"
  );
  ws.on("open", async (open) => {
    tokens = tokens == undefined ? await data() : tokens;
    var presence = await axios
      .get(`https://127.0.0.1:${wsdata.port}/chat/v4/presences`, {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `riot:${wsdata.pw}`,
            "utf8"
          ).toString("base64")}`,
          "user-agent": "ShooterGame/21 Windows/10.0.19042.1.768.64bit",
          "X-Riot-ClientVersion": "release-02.03-shipping-8-521855",
          "Content-Type": "application/json",
          "rchat-blocking": "true",
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      })
      .catch((error) => {
        return error;
      });

    if (presence instanceof Error) {
      console.log("Une requête à Valorant a généré une erreur.");
      ws.close();
      return;
    }

    try {
      var f = presence.data.presences.filter(
        (item) => item.puuid == tokens.data.subject
      );
      var d = JSON.parse(Buffer.from(f[0].private, "base64").toString("utf-8"));
      cstate = d.sessionLoopState;
      ws.send('[5, "OnJsonApiEvent"]');
    } catch (e) {
      console.log("Une requête à Valorant a généré une erreur.");
      ws.close();
    }
  });

  ws.on("message", async (data) => {
    var pdata = JSON.parse(data);
    if (
      typeof pdata[2] == "object" &&
      pdata[2].eventType == "Update" &&
      pdata[2].uri == "/chat/v4/presences" &&
      pdata[2].data.presences[0].puuid == tokens.data.subject
    ) {
      var decode = JSON.parse(
        Buffer.from(pdata[2].data.presences[0].private, "base64").toString(
          "utf-8"
        )
      );
      if (cstate != decode.sessionLoopSate) {
        if (decode.sessionLoopState == "MENUS") {
          cstate = decode.sessionLoopState;
          console.log("State: MENUS");
          return io.emit("update", { state: "Menu", data: decode });
        }
        if (decode.sessionLoopState == "PREGAME") {
          cstate = decode.sessionLoopState;
          console.log("State: PREGAME");
          return io.emit("update", { state: "PreGame", data: decode });
        }
        if (decode.sessionLoopState == "INGAME") {
          cstate = decode.sessionLoopState;
          console.log("State: INGAME");
          return io.emit("update", { state: "Ingame", data: decode });
        }
      }
    }
  });

  ws.on("close", async (data) => {
    console.log(
      "Socket is closed. Reconnect will be attempted in 10 second.",
      data.reason
    );
    ws.close();
    io.emit("update", { state: "Menu" });
    console.log("State: Close");
    setTimeout(function () {
      if (ws.readyState == 2 || ws.readyState == 3) {
        websocketConnect();
      }
    }, 10000);
  });

  ws.on("error", async (data) => {
    console.error("Socket encountered error: ", data.message, "Closing socket");
    ws.close();
  });
}

async function fetchLogin() {
  if (
    fs.existsSync(
      `${process.env.LOCALAPPDATA}\\Riot Games\\Riot Client\\Config\\lockfile`
    )
  ) {
    var lockfileContents = fs.readFileSync(
      `${process.env.LOCALAPPDATA}\\Riot Games\\Riot Client\\Config\\lockfile`,
      "utf8"
    );
    var matches = lockfileContents.match(/(.*):(.*):(.*):(.*):(.*)/);
    var port = matches[3];
    var pw = matches[4];
    return { port: port, pw: pw };
  } else {
    console.log("Valorant n'est pas ouvert, réessaie dans 10 secondes ...");
    await sleep(10000);
    return await fetchLogin();
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function getNamebySubject(tokens) {
  var playerid = await axios
    .put(
      `https://pd.${settings.region}.a.pvp.net/name-service/v2/players`,
      [tokens.data.subject],
      {
        headers: {
          Authorization: "Bearer " + tokens.data.accessToken,
          "X-Riot-Entitlements-JWT": tokens.data.token,
          "X-Riot-ClientVersion": "release-03.00-shipping-22-574489",
          "X-Riot-ClientPlatform":
            "ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9",
        },
      }
    )
    .catch((error) => {
      return error;
    });

  if (playerid.response && playerid.response.status == 400) {
    tokens = await data();
    playerid = await axios
      .put(
        `https://pd.${settings.region}.a.pvp.net/name-service/v2/players`,
        [tokens.data.subject],
        {
          headers: {
            Authorization: "Bearer " + tokens.data.accessToken,
            "X-Riot-Entitlements-JWT": tokens.data.token,
            "X-Riot-ClientVersion": "release-03.00-shipping-22-574489",
            "X-Riot-ClientPlatform":
              "ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9",
          },
        }
      )
      .catch((error) => {
        return error;
      });
  }

  if (playerid.response) return errorhandler(playerid.response.status, res);

  return playerid.data;
}

async function getMMRbySubject(
  subject = "dc5abcce-65e3-5841-8cd1-c7a11d3fb205"
) {
  let mmrInfo = await axios
    .get(
      `https://api.henrikdev.xyz/valorant/v2/by-puuid/mmr/${settings.region}/${subject}`
    )
    .catch((error) => {
      return error;
    });

  return mmrInfo;
}

var tokens;
var cstate;

/* GET home page. */
router.get("/", async function (req, res, next) {
  tokens = tokens == undefined ? await data() : tokens;
  dataPlayerMMR = await getMMRbySubject();
  dataPlayerJson = await JSON.parse(JSON.stringify(dataPlayerMMR.data.data));
  res.render("index", {
    title: "Valomy",
    dataPlayer: dataPlayerJson,
  });
});

io.on("connection", async (socket) => {
  console.log("Connected");
  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
  if (wsdata == null) {
    console.log(
      "Une requête à Valorant a généré une erreur. Raison: wsdata = null"
    );
    io.emit("initialize", { state: "Menu" });
    console.log("State: Close");
    return;
  }
  var presence = await axios
    .get(`https://127.0.0.1:${wsdata.port}/chat/v4/presences`, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `riot:${wsdata.pw}`,
          "utf8"
        ).toString("base64")}`,
        "user-agent": "ShooterGame/21 Windows/10.0.19042.1.768.64bit",
        "X-Riot-ClientVersion": "release-02.03-shipping-8-521855",
        "Content-Type": "application/json",
        "rchat-blocking": "true",
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    })
    .catch((error) => {
      return error;
    });
  if (presence instanceof Error) {
    console.log(
      "Une requête à Valorant a généré une erreur. Raison: Presence Error"
    );
    io.emit("initialize", { state: "Menu" });
    console.log("State: Close");
    return;
  }
  try {
    var f = presence.data.presences.filter(
      (item) => item.puuid == tokens.data.subject
    );
    var d = JSON.parse(
      Buffer.from(
        Buffer.from(f[0].private, "base64").toString("utf-8")
      ).toString("utf-8")
    );
    if (d.sessionLoopState == "MENUS") {
      io.emit("initialize", { state: "Menu", data: d });
      console.log("State: MENUS");
    }
    if (d.sessionLoopState == "PREGAME") {
      io.emit("initialize", { state: "PreGame", data: d });
      console.log("State: PREGAME");
    }
    if (d.sessionLoopState == "INGAME") {
      io.emit("initialize", { state: "Ingame", data: d });
      console.log("State: INGAME");
    }
  } catch (e) {
    console.log("Une requête à Valorant a généré une erreur.");
    io.emit("update", { state: "Menu" });
    console.log("State: Close");
    return;
  }
});

module.exports = router;

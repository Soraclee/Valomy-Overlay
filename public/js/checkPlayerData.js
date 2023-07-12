async function searchPlayerbySubject(subject, region) {
  let mmr = await fetch(
    `https://api.henrikdev.xyz/valorant/v2/by-puuid/mmr/${region}/${subject}`
  );

  let mmrJson = mmr.status == 200 ? await mmr.json() : "N.A";

  return mmrJson;
}

async function infosPlayer(pseudo) {
  let pseudoValid = pseudo.toString().replace("#", "/");

  let infosPlayer = await fetch(
    `https://api.henrikdev.xyz/valorant/v1/account/${pseudoValid}`
  );

  let infosPlayerJson =
    infosPlayer.status == 200 ? await infosPlayer.json() : "N.A";

  return infosPlayerJson;
}

function formattedDate() {
  // Obtenez la date actuelle
  var date = new Date();

  // Obtenez les composants de date nécessaires
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, "0");
  var day = date.getDate().toString().padStart(2, "0");

  // Formattez la date selon le format souhaité
  var formattedDate = year + "-" + month + "-" + day + "T00:00:00Z";

  return formattedDate;
}

async function getActNow() {
  let acts = await fetch(`https://valorant-api.com/v1/seasons`);

  let actsJson = await acts.json();

  let actnow = null;

  for (let i = 0; i < actsJson["data"].length; i++) {
    if (actsJson["data"][i]["type"] == "EAresSeasonType::Act") {
      console.log(actsJson["data"][i]);
      if (
        actsJson["data"][i]["startTime"] < formattedDate() &&
        actsJson["data"][i]["endTime"] > formattedDate()
      ) {
        console.log(formattedDate() + " En cours");
        actnow = actsJson["data"][i]["uuid"];
        console.log(actnow);
      }
    }
  }

  return actnow;
}

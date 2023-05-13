async function searchPlayerbySubject(subject) {
  let mmr = await fetch(
    `https://api.henrikdev.xyz/valorant/v2/by-puuid/mmr/eu/${subject}`
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

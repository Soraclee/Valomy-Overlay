# Valomy (Valorant Overlay)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**Valomy** est un overlay de stream pour Valorant, il vous montre automatiquement grâce à l'api de Valorant votre rang et les statistiques du compte connecté sur Valorant.

**Étapes de la mise en place de l'overlay sur votre stream :**

- Vous devez d'abord télécharger le projet.
  <img alt="Télécharger le projet" src="https://i.ibb.co/0BqgJdr/image.png" width="100%" style="border-radius: 5px">

- Vous devez extraire le fichier <code>zip/rar</code>.

- Vous devez installer Node.js (si Node.js est déjà installé, vous pouvez sauter l'installation) :

  - Un fichier d'installation de Node.js est disponible sous le nom <code>node-v18.16.0-64.msi</code> dans le dossier du projet.

- Une fois installé, vous devez installer les paquets du projet avec la commande <code>npm install</code> directement dans le dossier du projet ou vous pouvez exécuter le fichier <code>install.cmd</code> pour installer les paquets du projet.
  <img src="https://i.ibb.co/HDYgmhK/image.png" alt="npm install" width="100%" style="border-radius: 5px" />
  OU
  <img src="https://i.ibb.co/tYH7gfQ/image.png" alt="install.cmd" width="100%" style="border-radius: 5px"  />

- Vous devez vous rendre dans le fichier <code>settings.json</code> pour changer votre région correspondant à votre compte Valorant, les régions disponibles sont les suivantes :

  | Region Name      | Region Code |
  | ---------------- | :---------: |
  | Europe           |     eu      |
  | Asie Pacifique   |     ap      |
  | Amérique du Nord |     na      |
  | Corée du Sud     |     kr      |
  | Amérique Latine  |    latam    |
  | Brésil           |     br      |

    <img src="https://i.ibb.co/p226tSV/image.png" alt="Toutes les régions disponibles" width="100%" style="border-radius: 5px" />

- Vous pouvez lancer le script avec la commande <code>npm run serve</code> ou exécuter le fichier <code>start.cmd</code>
  <img src="https://i.ibb.co/cTwTsLX/image.png" alt="npm run serve" width="100%" style="border-radius: 5px" />

- Vous pouvez vous rendre à l'adresse suivante pour voir si vous avez accès à votre overlay : http://localhost:3000
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="Page of localhost:3000" width="100%" style="border-radius: 5px" />

- Nous allons maintenant ajouter l'overlay au flux (Streamlabs, OBS, Twitch Studio, etc.).

  - Vous accédez à votre logiciel de diffusion.
  - Vous ajoutez une nouvelle source à votre scène de type "Source Navigateur".
  - Ensuite, vous mettez l'url localhost dans l'url de la "Source du navigateur" : http://localhost:3000
  - Mettez les dimensions 1920x1080.

    <img alt="Sur votre plateforme de diffusion" src="https://i.ibb.co/JnNjkWY/image.png" width="100%" style="border-radius: 5px" />

    <img alt="Ajouter une nouvelle source à votre scène" src="https://i.ibb.co/L0vft4D/image.png" width="100%" style="border-radius: 5px" />

    <img alt="Ajouter l'url localhost" src="https://i.ibb.co/ryXpQ4y/image.png" width="100%" style="border-radius: 5px" />

**Résultat :**

<img alt="Démonstration de l'overlay" src="https://i.ibb.co/98xLLCx/image.png" width="100%" style="border-radius: 5px" />

**Informations :**

Toutes les 4 minutes, l'overlay changera la façon dont il est affiché, toutes les 4 minutes, il n'affichera que le rang.
Si l'overlay ne trouve pas votre compte, il affichera par défaut le profil de Soracle#Anemy, jusqu'à ce qu'il trouve votre profil. (Vous devez être connecté au Riot Client et l'avoir lancer au moins pour qu'il vous trouve).

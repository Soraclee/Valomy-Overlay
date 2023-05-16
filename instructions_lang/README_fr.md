# Valomy (Overlay Valorant)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**Valomy** est un overlay de stream pour Valorant, il vous montre automatiquement grâce à l'api de Valorant votre rang et les statistiques du compte connecté sur Valorant.

**Vidéo explicative (Ancienne Explication) :**

[<img src="https://i.ibb.co/mHqKm8T/valomy-play.png" width="100%">](https://www.youtube.com/watch?v=HotLe4x-S9U "Valomy - Overlay de stream Valorant")

**Étapes de la mise en place de l'overlay sur votre stream :**

- Vous devez d'abord télécharger la dernière version de l'overlay en choisissant votre plateforme.
  <img alt="Télécharger le projet" src="https://i.ibb.co/MPgFkJ8/image.png" width="100%" style="border-radius: 5px">
  <img alt="Différentes plateformes disponibles" src="https://i.ibb.co/xJMf0gY/image.png" width="100%" style="border-radius: 5px">

- Vous devez extraire le fichier <code>zip/rar</code>.

- Vous mettez le fichier exécutable et le fichier <code>settings.json</code> dans le même dossier
  <img src="https://i.ibb.co/vhwkTg6/image.png" alt="Le fichier executable et le settings.json dans le même dossier" />

- Une fois installé, vous devez vous rendre dans le fichier <code>settings.json</code> pour changer votre région correspondant à votre compte Valorant et vous pouvez modifier la langue d'affichage des informations sur l'overlay puis vous enregistrez. Les régions et les langues disponibles sont les suivantes :

  | Nom de la région | Code de la Région |
  | ---------------- | :---------------: |
  | Europe           |        eu         |
  | Asie Pacifique   |        ap         |
  | Amérique du Nord |        na         |
  | Corée du Sud     |        kr         |
  | Amérique Latine  |       latam       |
  | Brésil           |        br         |

  | Nom de la langue     | Code de la langue |
  | -------------------- | :---------------: |
  | Arabe (U.A.E.)       |       ar-AE       |
  | Allemand             |       de-DE       |
  | Anglais (États-Unis) |       en-US       |
  | Espagnol             |       es-ES       |
  | Espagnol (Mexique)   |       es-MX       |
  | Français             |       fr-FR       |
  | Indonésien           |       id-ID       |
  | Italien              |       it-IT       |
  | Japonais             |       ja-JP       |
  | Coréen               |       ko-KR       |
  | Polonais             |       pl-PL       |
  | Portugais (Brésil)   |       pt-BR       |
  | Russe                |       ru-RU       |
  | Thaïlandais          |       th-TH       |
  | Turc                 |       tr-TR       |
  | Vietnamien           |       vi-VN       |
  | Chinois (simplifié)  |       zh-CN       |
  | Chinois (Taïwan)     |       zh-TW       |

  <code>settings.json</code>
  <img src="https://i.ibb.co/MGLJ5Jz/image.png" alt="settings.json" width="100%" style="border-radius: 5px" />

- Vous pouvez lancer l'exécutable qui se trouve dans le dossier.
  <img src="https://i.ibb.co/Zh68gh3/image.png" alt="Lancement de l'exécutable" width="100%" style="border-radius: 5px" />

- Vous pouvez vous rendre à l'adresse suivante pour voir si vous avez accès à votre overlay : http://localhost:3000 (Vous devez lancer avant Valorant ou le Client Riot)
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="Page de localhost:3000" width="100%" style="border-radius: 5px" />

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
Si l'overlay ne trouve pas votre compte, il affichera par défaut le profil de Soracle#Anemy, jusqu'à ce qu'il trouve votre profil. (Vous devez être connecté au Riot Client et l'avoir lancé au moins pour qu'il vous trouve).

**Fonctionnalités :**

- Affichage du rang et quelques données de votre compte connecté à Valorant, si vous changez de compte l'overlay prendra en compte les informations automatiquement. Les données affichées sur l'overlay :

  - Le rang
  - Le niveau du compte
  - L'elo du compte
  - Le nombre de parties gagnées cet acte.

- Pendant la phase de choix d'agent, l'agent sélectionné sera affiché sur l'overlay avec les données suivantes :
  - L'agent sélectionné.
  - Le rôle de l'agent
  - La description de l'agent

D'autres fonctionnalités arriveront petit à petit, je vous invite à voir si des mises à jour de l'overlay sont disponible pour profiter des nouvelles fonctionnalités futur.

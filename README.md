# Valomy (Valorant Overlay)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**Valomy** is a stream overlay for Valorant, it shows you automatically thanks to the Valorant api your rank and statistics of the account connected on Valorant

**Steps to set up the overlay on your stream :**

- You must first download the project.
  <img alt="Download Project" src="https://i.ibb.co/v30PX60/image.png" width="100%" style="border-radius: 5px">

- You need to extract the <code>zip/rar</code> file

- You must install Node.js (If Node.js is already installed you can skip the installation) :

  - A Node.js installation file is available with the name : <code>node-v18.16.0-64.msi</code>

- Once installed, you must install the project packages with the <code>npm install</code> command directly in the project folder or you can run the <code>install.cmd</code> file to install the project packages
  <img src="https://i.ibb.co/HDYgmhK/image.png" alt="npm install" width="100%" style="border-radius: 5px" />
  OR
  <img src="https://i.ibb.co/tYH7gfQ/image.png" alt="" width="100%" style="border-radius: 5px"  />

- You must go to the <code>settings.json</code> file to change your region corresponding to your Valorant account, the available regions are the following:

  | Region Name   | Region Code |
  | ------------- | :---------: |
  | Europe        |     eu      |
  | Asia Pacific  |     ap      |
  | North America |     na      |
  | Sud Korea     |     kr      |
  | Latin America |    latam    |
  | Brazil        |     br      |

    <img src="https://i.ibb.co/p226tSV/image.png" alt="all regions available" width="100%" style="border-radius: 5px" />

- You can start the script with the command <code>npm run serve</code> or run the file <code>start.cmd</code>
  <img src="https://i.ibb.co/cTwTsLX/image.png" alt="npm run serve" width="100%" style="border-radius: 5px" />

- You can go to the following address to see if you have access to your overlay : http://localhost:3000
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="Page of Localhost:3000" width="100%" style="border-radius: 5px" />

- Now we will add the overlay to the stream (Streamlabs, OBS, Twitch Studio etc.)

  - You go to your broadcast software.
  - You add a new source to your scene of type "Browser Source".
  - Then you put the url localhost in the url of the "Browser Source" : http://localhost:3000
  - Put the dimensions 1920x1080.

    <img alt="On your broadcast platform" src="https://i.ibb.co/JnNjkWY/image.png" width="100%" style="border-radius: 5px" />

    <img alt="Adding a new source to your scene" src="https://i.ibb.co/L0vft4D/image.png" width="100%" style="border-radius: 5px" />

    <img alt="Add localhost url" src="https://i.ibb.co/ryXpQ4y/image.png" width="100%" style="border-radius: 5px" />

**Result :**

<img alt="Demonstration of the overlay" src="https://i.ibb.co/98xLLCx/image.png" width="100%" style="border-radius: 5px" />

**Information :**

The overlay every 4mins will change the way it is displayed, every 4 mins it will display only the rank.
If the overlay does not find your account it will default to Soracle#Anemy's profile, until it finds your profile. (You have to be connected to the Riot Client at least for it to find you)

# Valomy (Valorant Overlay)

**Valomy** is a stream overlay for Valorant, it shows you automatically thanks to the Valorant api your rank and statistics of the account connected on Valorant

**Steps to set up the overlay on your stream :**

- You must first download the project
  <img alt="Download Project" src="https://i.ibb.co/v30PX60/image.png">

- Once installed you must install the <code>npm install</code> packages (You must have Node installed)
  <img src="https://i.ibb.co/HDYgmhK/image.png" alt="npm install">

- You need to go to the <code>settings.json</code> file to change your region, the available regions are as follows :

  - eu, ap, na, kr, latam, br
    <img src="https://i.ibb.co/p226tSV/image.png" alt="all regions available">

- You can start the script with the command <code>npm run serve</code>
  <img src="https://i.ibb.co/cTwTsLX/image.png" alt="npm run serve">

- You can go to the following address to see if you have access to your overlay : http://localhost:3000
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="Page of Localhost:3000">

- Now we will add the overlay to the stream (Streamlabs, OBS, Twitch Studio etc.)

  - You go to your broadcast software
  - You add a new source to your scene of type "Browser Source"
  - Then you put the url localhost in the url of the "Browser Source" : http://localhost:3000
  - Put the dimensions 1920x1080

    <img alt="On your broadcast platform" src="https://i.ibb.co/JnNjkWY/image.png">

    <img alt="Adding a new source to your scene" src="https://i.ibb.co/L0vft4D/image.png">

    <img alt="Add localhost url " src="https://i.ibb.co/ryXpQ4y/image.png">

**Result :**

<img alt="Demonstration of the overlay" src="https://i.ibb.co/98xLLCx/image.png">

**Information :**

The overlay every 4mins will change the way it is displayed, every 4 mins it will display only the rank.
If the overlay does not find your account it will default to Soracle#Anemy's profile, until it finds your profile. (You have to be connected to the Riot Client at least for it to find you)

## Badges

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

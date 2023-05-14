# Valomy (Valorant Überlagerung)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**Valomy** ist ein Stream Overlay für Valorant, es zeigt Ihnen automatisch dank der Valorant api Ihren Rang und die Statistiken des Kontos auf Valorant verbunden

**Schritte zum Einrichten des Overlays für Ihren Stream :**

- Sie müssen das Projekt zunächst herunterladen.
  <img alt="Projekt herunterladen" src="https://i.ibb.co/0BqgJdr/image.png" width="100%" style="border-radius: 5px">

- Sie müssen die <code>zip/rar</code>-Datei entpacken.

- Sie müssen Node.js installieren (wenn Node.js bereits installiert ist, können Sie die Installation überspringen):

  - Es gibt eine Node.js-Installationsdatei mit dem Namen :
    <code>node-v18.16.0-64.msi</code>

- Nach der Installation müssen Sie die Projektpakete mit dem Befehl <code>npm install</code> direkt im Projektordner installieren oder Sie können die Datei <code>install.cmd</code> ausführen, um die Projektpakete zu installieren.
  <img src="https://i.ibb.co/HDYgmhK/image.png" alt="npm install" width="100%" style="border-radius: 5px" />
  ODER
  <img src="https://i.ibb.co/tYH7gfQ/image.png" alt="install.cmd" width="100%" style="border-radius: 5px"  />

- Sie müssen die Datei <code>settings.json</code> aufrufen, um die Region Ihres Valorant-Kontos zu ändern. Die verfügbaren Regionen sind folgende

  | Name der Region | Code der Region |
  | --------------- | :-------------: |
  | Europa          |       eu        |
  | Asien-Pazifik   |       ap        |
  | Nord-Amerika    |       na        |
  | Südkorea        |       kr        |
  | Lateinamerika   |      latam      |
  | Brasilien       |       br        |

    <img src="https://i.ibb.co/p226tSV/image.png" alt="Alle Regionen verfügbar" width="100%" style="border-radius: 5px" />

- Sie können das Skript mit dem Befehl <code>npm run serve</code> starten oder die Datei <code>start.cmd</code> ausführen
  <img src="https://i.ibb.co/cTwTsLX/image.png" alt="npm run serve" width="100%" style="border-radius: 5px" />

- Sie können die folgende Adresse aufrufen, um zu sehen, ob Sie Zugang zu Ihrem Overlay haben: http://localhost:3000
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="Seite von localhost:3000" width="100%" style="border-radius: 5px" />

- Jetzt fügen wir das Overlay zum Stream hinzu (Streamlabs, OBS, Twitch Studio usw.)

  - Sie gehen zu Ihrer Broadcast-Software.
  - Sie fügen eine neue Quelle vom Typ "Browserquelle" zu Ihrer Szene hinzu.
  - Dann fügen Sie die Url localhost in die Url der "Browserquelle" ein: http://localhost:3000
  - Geben Sie die Abmessungen 1920x1080 an.

    <img alt="Auf Ihrer Sendeplattform" src="https://i.ibb.co/JnNjkWY/image.png" width="100%" style="border-radius: 5px" />

    <img alt="Hinzufügen einer neuen Quelle zu Ihrer Szene" src="https://i.ibb.co/L0vft4D/image.png" width="100%" style="border-radius: 5px" />

    <img alt="Localhost-URL hinzufügen" src="https://i.ibb.co/ryXpQ4y/image.png" width="100%" style="border-radius: 5px" />

**Ergebnis :**

<img alt="Demonstration des Overlays" src="https://i.ibb.co/98xLLCx/image.png" width="100%" style="border-radius: 5px" />

**Information :**

Alle 4 Minuten wird das Overlay die Art der Anzeige ändern, alle 4 Minuten wird nur der Rang angezeigt.
Wenn das Overlay dein Konto nicht findet, wird es standardmäßig das Profil von Soracle#Anemy anzeigen, bis es dein Profil findet. (Du musst im Riot Client eingeloggt sein und ihn zumindest laufen lassen, damit er dich findet).

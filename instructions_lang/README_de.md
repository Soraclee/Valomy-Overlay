# Valomy (Valorant Überlagerung)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**Valomy** ist ein Stream Overlay für Valorant, es zeigt Ihnen automatisch dank der Valorant api Ihren Rang und die Statistiken des Kontos auf Valorant verbunden

**Schritte zum Einrichten des Overlays für Ihren Stream :**

- Sie müssen zunächst die neueste Version des Overlays herunterladen, indem Sie Ihre Plattform auswählen.
  <img alt="Das Projekt herunterladen" src="https://i.ibb.co/MPgFkJ8/image.png" width="100%" style="border-radius: 5px">
  <img alt="Verschiedene Plattformen verfügbar" src="https://i.ibb.co/xJMf0gY/image.png" width="100%" style="border-radius: 5px">

- Sie müssen die <code>zip/rar</code>-Datei entpacken.

- Sie legen die ausführbare Datei und die Datei <code>settings.json</code> in denselben Ordner ab
  <img src="https://i.ibb.co/vhwkTg6/image.png" alt="The executable file and the settings.json in the same folder" />

- Nach der Installation müssen Sie in der Datei <code>settings.json</code> die Region ändern, die Ihrem Valorant-Konto entspricht, und Sie können die Sprache ändern, in der die Overlay-Informationen angezeigt werden, und dann speichern. Die verfügbaren Regionen und Sprachen sind wie folgt:

  | Name der Region | Code der Region |
  | --------------- | :-------------: |
  | Europa          |       eu        |
  | Asien-Pazifik   |       ap        |
  | Nord-Amerika    |       na        |
  | Südkorea        |       kr        |
  | Lateinamerika   |      latam      |
  | Brasilien       |       br        |

  | Sprachenname                  | Sprachcode |
  | ----------------------------- | :--------: |
  | Arabisch (V.A.E.)             |   ar-AE    |
  | Deutsch                       |   de-DE    |
  | Englisch (Vereinigte Staaten) |   en-US    |
  | Spanisch                      |   es-ES    |
  | Spanisch (Mexiko)             |   es-MX    |
  | Französisch                   |   fr-FR    |
  | Indonesisch                   |   id-ID    |
  | Italienisch                   |   it-IT    |
  | Japanisch                     |   ja-JP    |
  | Koreanisch                    |   ko-KR    |
  | Polnisch                      |   pl-PL    |
  | Portugiesisch (Brasilien)     |   pt-BR    |
  | Russisch                      |   ru-RU    |
  | Thailändisch                  |   th-TH    |
  | Türkisch                      |   tr-TR    |
  | Vietnamesisch                 |   vi-VN    |
  | Chinesisch (vereinfacht)      |   zh-CN    |
  | Chinesisch (Taiwan)           |   zh-TW    |

<code>settings.json</code>
<img src="https://i.ibb.co/MGLJ5Jz/image.png" alt="settings.json" width="100%" style="border-radius: 5px" />

- Sie können die ausführbare Datei in diesem Ordner ausführen.
  <img src="https://i.ibb.co/Zh68gh3/image.png" alt="Starten der ausführbaren Datei" width="100%" style="border-radius: 5px" />

- Du kannst die folgende Adresse aufrufen, um zu sehen, ob du Zugang zu deinem Overlay hast: http://localhost:3000 (Du musst vor Valorant oder dem Riot Client laufen)
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

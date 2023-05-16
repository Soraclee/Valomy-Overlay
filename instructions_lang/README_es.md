# Valomy (Superposición Valorant)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**Valomy** es un stream overlay para Valorant, te muestra automáticamente gracias a la api de Valorant tu rango y estadísticas de la cuenta conectada en Valorant

**Pasos para configurar la superposición en su flujo :**

- Primero debe descargar la última versión de la superposición eligiendo su plataforma.
  <img alt="Descargar el proyecto" src="https://i.ibb.co/MPgFkJ8/image.png" width="100%" style="border-radius: 5px">
  <img alt="Diferentes plataformas disponibles" src="https://i.ibb.co/xJMf0gY/image.png" width="100%" style="border-radius: 5px">

- Tienes que extraer el archivo <code>zip/rar</code>.

- Pones el archivo ejecutable y el archivo <code>settings.json</code> en la misma carpeta
  <img src="https://i.ibb.co/vhwkTg6/image.png" alt="El archivo ejecutable y el settings.json en la misma carpeta" />

- Una vez instalado, tienes que ir al archivo <code>settings.json</code> para cambiar tu región correspondiente a tu cuenta Valorant y puedes cambiar el idioma para mostrar la información superpuesta y luego guardar. Las regiones e idiomas disponibles son los siguientes:

  | Nombre de la región | Código de región |
  | ------------------- | :--------------: |
  | Europa              |        eu        |
  | Asia-Pacífico       |        ap        |
  | Norteamérica        |        na        |
  | Corea del Sur       |        kr        |
  | América Latina      |      latam       |
  | Brasil              |        br        |

| Nombre del idioma       | Código de idioma |
| ----------------------- | :--------------: |
| Árabe (EAU)             |      ar-AE       |
| Alemán                  |      de-DE       |
| Inglés (Estados Unidos) |      es-US       |
| Español                 |      es-ES       |
| Español (México)        |      es-MX       |
| Francés                 |      es-ES       |
| Indonesio               |      id-id       |
| Italiano                |      es TI       |
| Japonés                 |      ja-JP       |
| Coreano                 |      ko-KR       |
| Polaco                  |      pl-PL       |
| Portugués (Brasil)      |      pt-BR       |
| Ruso                    |      ru-RU       |
| Tailandés               |      th-TH       |
| Turco                   |      tr-TR       |
| Vietnamita              |      vi-VN       |
| Chino (simplificado)    |      zh-CN       |
| Chino (Taiwán)          |      zh-TW       |

<code>settings.json</code>
<img src="https://i.ibb.co/MGLJ5Jz/image.png" alt="settings.json" width="100%" style="border-radius: 5px" />

- Puede ejecutar el ejecutable de la carpeta.
  <img src="https://i.ibb.co/Zh68gh3/image.png" alt="Iniciar el ejecutable" width="100%" style="border-radius: 5px" />

- Puedes ir a la siguiente dirección para ver si tienes acceso a tu overlay: http://localhost:3000 (Debes ejecutarlo antes que Valorant o el Riot Client)
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="Página de localhost:3000" width="100%" style="border-radius: 5px" />

- Ahora vamos a añadir la superposición a la corriente (Streamlabs, OBS, Twitch Studio, etc.)

  - Ve a tu software de emisión.
  - Añade una nueva fuente a tu escena de tipo "Fuente de navegador".
  - Luego pones la url localhost en la url del "Fuente de navegador" : http://localhost:3000
  - Pon las dimensiones 1920x1080.

    <img alt="En su plataforma de difusión" src="https://i.ibb.co/JnNjkWY/image.png" width="100%" style="border-radius: 5px" />

    <img alt="Añadir una nueva fuente a la escena" src="https://i.ibb.co/L0vft4D/image.png" width="100%" style="border-radius: 5px" />

    <img alt="Añadir url localhost" src="https://i.ibb.co/ryXpQ4y/image.png" width="100%" style="border-radius: 5px" />

**Resultado :**

<img alt="Demostración de la superposición" src="https://i.ibb.co/98xLLCx/image.png" width="100%" style="border-radius: 5px" />

**Información :**

Cada 4 minutos el overlay cambiará la forma en que se muestra, cada 4 minutos sólo mostrará el rango.
Si la ventana superpuesta no encuentra tu cuenta, mostrará por defecto el perfil de Soracle#Anemy, hasta que encuentre tu perfil. (Debes haber iniciado sesión en el cliente de Riot y tenerlo en funcionamiento para que te encuentre).

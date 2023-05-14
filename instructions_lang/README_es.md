# Valomy (Superposición Valorant)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**Valomy** es un stream overlay para Valorant, te muestra automáticamente gracias a la api de Valorant tu rango y estadísticas de la cuenta conectada en Valorant

**Pasos para configurar la superposición en su flujo :**

- Primero debe descargar el proyecto.
  <img alt="Descargar proyecto" src="https://i.ibb.co/0BqgJdr/image.png" width="100%" style="border-radius: 5px">

- Tienes que extraer el archivo <code>zip/rar</code>.

- Debe instalar Node.js (Si Node.js ya está instalado puede omitir la instalación) :

  - Existe un archivo de instalación de Node.js con el nombre : <code>node-v18.16.0-64.msi</code>

- Una vez instalado, debe instalar los paquetes del proyecto con el comando <code>npm install</code> directamente en la carpeta del proyecto o puede ejecutar el archivo <code>install.cmd</code> para instalar los paquetes del proyecto.
  <img src="https://i.ibb.co/HDYgmhK/image.png" alt="npm install" width="100%" style="border-radius: 5px" />
  O
  <img src="https://i.ibb.co/tYH7gfQ/image.png" alt="install.cmd" width="100%" style="border-radius: 5px"  />

- Debes ir al archivo <code>settings.json</code> para cambiar tu región correspondiente a tu cuenta Valorant, las regiones disponibles son las siguientes:

  | Nombre de la región | Código de región |
  | ------------------- | :--------------: |
  | Europa              |        eu        |
  | Asia-Pacífico       |        ap        |
  | Norteamérica        |        na        |
  | Corea del Sur       |        kr        |
  | América Latina      |      latam       |
  | Brasil              |        br        |

    <img src="https://i.ibb.co/p226tSV/image.png" alt="todas las regiones disponibles" width="100%" style="border-radius: 5px" />

- Puede iniciar el script con el comando <code>npm run serve</code> o ejecutar el archivo <code>start.cmd</code>
  <img src="https://i.ibb.co/cTwTsLX/image.png" alt="npm run serve" width="100%" style="border-radius: 5px" />

- Puede ir a la siguiente dirección para ver si tiene acceso a su superposición : http://localhost:3000
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="Página de Localhost:3000" width="100%" style="border-radius: 5px" />

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

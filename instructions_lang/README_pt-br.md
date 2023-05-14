# Valomy (Sobreposição de Valorant)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

O **Valomy** é uma sobreposição de fluxo para o Valorant, que mostra automaticamente, graças à API do Valorant, sua classificação e as estatísticas da conta conectada no Valorant

**Etapas para configurar a sobreposição em sua transmissão:**

- Primeiro, você deve fazer o download do projeto.
  <img alt="Projeto de download" src="https://i.ibb.co/0BqgJdr/image.png" width="100%" style="border-radius: 5px">

- Você precisa extrair o arquivo <code>zip/rar</code>.

- Você deve instalar o Node.js (se o Node.js já estiver instalado, você pode ignorar a instalação):

  - Um arquivo de instalação do Node.js está disponível com o nome : <code>node-v18.16.0-64.msi</code>

- Depois de instalado, você deve instalar os pacotes do projeto com o comando <code>npm install</code> diretamente na pasta do projeto ou pode executar o arquivo <code>install.cmd</code> para instalar os pacotes do projeto.
  <img src="https://i.ibb.co/HDYgmhK/image.png" alt="npm install" width="100%" style="border-radius: 5px" />
  OU
  <img src="https://i.ibb.co/tYH7gfQ/image.png" alt="install.cmd" width="100%" style="border-radius: 5px"  />

- Você deve acessar o arquivo <code>settings.json</code> para alterar a região correspondente à sua conta Valorant; as regiões disponíveis são as seguintes:

  | Nome da região   | Código da região |
  | ---------------- | :--------------: |
  | Europa           |        eu        |
  | Ásia-Pacífico    |        ap        |
  | América do Norte |        na        |
  | Coréia do Sul    |        kr        |
  | América Latina   |      latam       |
  | Brasil           |        br        |

    <img src="https://i.ibb.co/p226tSV/image.png" alt="Todas as regiões disponíveis" width="100%" style="border-radius: 5px" />

- Você pode iniciar o script com o comando <code>npm run serve</code> ou executar o arquivo <code>start.cmd</code>
  <img src="https://i.ibb.co/cTwTsLX/image.png" alt="npm run serve" width="100%" style="border-radius: 5px" />

- Você pode acessar o seguinte endereço para verificar se tem acesso à sua sobreposição: http://localhost:3000
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="Página de localhost:3000" width="100%" style="border-radius: 5px" />

- Agora, adicionaremos a sobreposição à transmissão (Streamlabs, OBS, Twitch Studio etc.)

  - Você acessa seu software de transmissão.
  - Você adiciona uma nova fonte à sua cena do tipo "Fonte do Navegador".
  - Em seguida, você coloca a url localhost na url da "Fonte do Navegador": http://localhost:3000
  - Coloque as dimensões 1920x1080.

    <img alt="Em sua plataforma de transmissão" src="https://i.ibb.co/JnNjkWY/image.png" width="100%" style="border-radius: 5px" />

    <img alt="Adição de uma nova fonte à sua cena" src="https://i.ibb.co/L0vft4D/image.png" width="100%" style="border-radius: 5px" />

    <img alt="Adicionar url do localhost" src="https://i.ibb.co/ryXpQ4y/image.png" width="100%" style="border-radius: 5px" />

**Resultado :**

<img alt="Demonstração da sobreposição" src="https://i.ibb.co/98xLLCx/image.png" width="100%" style="border-radius: 5px" />

**Informações :**

A cada 4 minutos, a sobreposição mudará a forma como é exibida; a cada 4 minutos, ela exibirá apenas a classificação.
Se a sobreposição não encontrar sua conta, ela exibirá o perfil de Soracle#Anemy por padrão até encontrar seu perfil. (Você deve estar conectado ao Riot Client e tê-lo em execução para que ele o encontre).

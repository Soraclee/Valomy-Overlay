# Valomy (Sobreposição de Valorant)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

O **Valomy** é um fluxo de sobreposição para o Valorant, que mostra automaticamente, graças à API do Valorant, a sua classificação e as estatísticas da conta ligada ao Valorant

**Passos para configurar a sobreposição no seu fluxo :**

- Em primeiro lugar, é necessário descarregar o projecto.
  <img alt="Descarregar projecto" src="https://i.ibb.co/0BqgJdr/image.png" width="100%" style="border-radius: 5px">

- É necessário extrair o ficheiro <code>zip/rar</code>.

- É necessário instalar o Node.js (se o Node.js já estiver instalado, pode saltar a instalação) :

  - Está disponível um ficheiro de instalação do Node.js com o nome : <code>node-v18.16.0-64.msi</code>

- Uma vez instalado, você deve instalar os pacotes do projeto com o comando <code>npm install</code> diretamente na pasta do projeto ou pode executar o arquivo <code>install.cmd</code> para instalar os pacotes do projeto.
  <img src="https://i.ibb.co/HDYgmhK/image.png" alt="npm install" width="100%" style="border-radius: 5px" />
  OR
  <img src="https://i.ibb.co/tYH7gfQ/image.png" alt="install.cmd" width="100%" style="border-radius: 5px"  />

- Deve ir ao ficheiro <code>settings.json</code> para alterar a sua região correspondente à sua conta Valorant, as regiões disponíveis são as seguintes:

  | Nome da região   | Código da região |
  | ---------------- | :--------------: |
  | Europa           |        eu        |
  | Ásia-Pacífico    |        ap        |
  | América do Norte |        na        |
  | Coreia do Sul    |        kr        |
  | América Latina   |      latam       |
  | Brasil           |        br        |

    <img src="https://i.ibb.co/p226tSV/image.png" alt="Todas as regiões disponíveis" width="100%" style="border-radius: 5px" />

- Pode iniciar o script com o comando <code>npm run serve</code> ou executar o ficheiro <code>start.cmd</code>
  <img src="https://i.ibb.co/cTwTsLX/image.png" alt="npm run serve" width="100%" style="border-radius: 5px" />

- Pode ir ao seguinte endereço para ver se tem acesso à sua sobreposição: http://localhost:3000
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="Página de localhost:3000" width="100%" style="border-radius: 5px" />

- Agora vamos adicionar a sobreposição ao fluxo (Streamlabs, OBS, Twitch Studio, etc.)

  - Vai ao seu software de difusão.
  - Adiciona uma nova fonte à sua cena do tipo "Fonte do browser".
  - Em seguida, coloca o url localhost no url da "Fonte do browser": http://localhost:3000
  - Colocar as dimensões 1920x1080.

    <img alt="Na sua plataforma de difusão" src="https://i.ibb.co/JnNjkWY/image.png" width="100%" style="border-radius: 5px" />

    <img alt="Adicionar uma nova fonte à sua cena" src="https://i.ibb.co/L0vft4D/image.png" width="100%" style="border-radius: 5px" />

    <img alt="Adicionar url do localhost" src="https://i.ibb.co/ryXpQ4y/image.png" width="100%" style="border-radius: 5px" />

**Resultado :**

<img alt="Demonstração da sobreposição" src="https://i.ibb.co/98xLLCx/image.png" width="100%" style="border-radius: 5px" />

**Informações :**

A cada 4 minutos a sobreposição irá mudar a forma como é mostrada, a cada 4 minutos irá mostrar apenas a classificação.
Se o overlay não encontrar a sua conta, ele irá mostrar o perfil do Soracle#Anemy, até encontrar o seu perfil. (Você deve estar logado no Riot Client e ter ele rodando pelo menos para que ele te encontre).

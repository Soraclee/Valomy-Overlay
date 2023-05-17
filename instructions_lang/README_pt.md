# Valomy (Sobreposição de Valorant)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

O **Valomy** é um fluxo de sobreposição para o Valorant, que mostra automaticamente, graças à API do Valorant, a sua classificação e as estatísticas da conta ligada ao Valorant

**Passos para configurar a sobreposição no seu fluxo :**

- Em primeiro lugar, é necessário descarregar a versão mais recente da sobreposição, seleccionando a sua plataforma.
  <img alt="Descarregar o projecto" src="https://i.ibb.co/MPgFkJ8/image.png" width="100%" style="border-radius: 5px">
  <img alt="Diferentes plataformas disponíveis" src="https://i.ibb.co/xJMf0gY/image.png" width="100%" style="border-radius: 5px">

- É necessário extrair o ficheiro <code>zip/rar</code>.

- Coloca-se o ficheiro executável e o ficheiro <code>settings.json</code> na mesma pasta
  <img src="https://i.ibb.co/vhwkTg6/image.png" alt="O ficheiro executável e o ficheiro settings.json na mesma pasta" />

- Uma vez instalado, é necessário ir ao ficheiro <code>settings.json</code> para alterar a região correspondente à sua conta Valorant e pode alterar o idioma para apresentar as informações de sobreposição e, em seguida, guardar. As regiões e os idiomas disponíveis são os seguintes:

  | Nome da região   | Código da região |
  | ---------------- | :--------------: |
  | Europa           |        eu        |
  | Ásia-Pacífico    |        ap        |
  | América do Norte |        na        |
  | Coreia do Sul    |        kr        |
  | América Latina   |      latam       |
  | Brasil           |        br        |

  | Nome da língua          | Código da língua |
  | ----------------------- | :--------------: |
  | Árabe (U.A.E.)          |      ar-AE       |
  | Alemão                  |      de-DE       |
  | Inglês (Estados Unidos) |      en-US       |
  | Espanhol                |      es-ES       |
  | Espanhol (México)       |      es-MX       |
  | Francês                 |      fr-FR       |
  | Indonésio               |      id-ID       |
  | Italiano                |      it IT       |
  | Japonês                 |      ja-JP       |
  | Coreano                 |      ko-KR       |
  | Polaco                  |      pl-PL       |
  | Português (Brasil)      |      pt-BR       |
  | Russo                   |      ru-RU       |
  | Tailandês               |      th-TH       |
  | Turco                   |      tr-TR       |
  | Vietnamita              |      vi-VN       |
  | Chinês (simplificado)   |      zh-CN       |
  | Chinês (Taiwan)         |      zh-TW       |

<code>settings.json</code>
<img src="https://i.ibb.co/MGLJ5Jz/image.png" alt="settings.json" width="100%" style="border-radius: 5px" />

- Pode executar o executável na pasta.
  <img src="https://i.ibb.co/Zh68gh3/image.png" alt="Iniciar o executável" width="100%" style="border-radius: 5px" />

- Podes ir ao seguinte endereço para ver se tens acesso ao teu overlay: http://localhost:3000 (Tens de correr antes do Valorant ou do Riot Client)
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

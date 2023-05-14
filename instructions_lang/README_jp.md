# VALOMY (VALORANT オーバーレイ)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**VALOMY**は VALORANT のストリームオーバーレイで、VALORANT API のおかげで自動的に Valorant に接続しているアカウントのランクと統計情報を表示します。

**ストリームにオーバーレイをセットアップする手順 ：**

- まず、プロジェクトをダウンロードする必要があります。
  <img alt="ダウンロードプロジェクト" src="https://i.ibb.co/0BqgJdr/image.png" width="100%" style="border-radius: 5px">

- <code>zip/rar</code>ファイルを解凍する必要があります。

- Node.js をインストールする必要があります（Node.js がすでにインストールされている場合は、インストールを省略することができます）：

  - Node.js のインストールファイルは、.Node.js という名前で用意されています：<code>node-v18.16.0-64.msi</code>

- インストール後は、プロジェクトフォルダに直接<code>npm install</code>コマンドでプロジェクトパッケージをインストールするか、<code>install.cmd</code>ファイルを実行してプロジェクトパッケージをインストールする必要があります。
  <img src="https://i.ibb.co/HDYgmhK/image.png" alt="npm install" width="100%" style="border-radius: 5px" />
  または
  <img src="https://i.ibb.co/tYH7gfQ/image.png" alt="install.cmd" width="100%" style="border-radius: 5px"  />

- <code>settings.json</code>VALORANT アカウントに対応する地域を変更する必要があり、利用可能な地域は以下の通りです：

  | 地域名         | 地域コード |
  | -------------- | :--------: |
  | ヨーロッパ     |     eu     |
  | アジア太平洋   |     ap     |
  | 北アメリカ     |     na     |
  | スッドコリア   |     kr     |
  | ラテンアメリカ |   latam    |
  | ブラジル       |     br     |

    <img src="https://i.ibb.co/p226tSV/image.png" alt="全地域で利用可能" width="100%" style="border-radius: 5px" />

- <code>npm run serve</code>というコマンドでスクリプトを起動するか、<code>start.cmd</code>というファイルを実行することができます。
  <img src="https://i.ibb.co/cTwTsLX/image.png" alt="npm run serve" width="100%" style="border-radius: 5px" />

- 以下のアドレスにアクセスすると、自分のオーバーレイを確認することができます : http://localhost:3000
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="localhost:3000のページ" width="100%" style="border-radius: 5px" />

- それでは、ストリーム（Streamlabs、OBS、Twitch Studio など）にオーバーレイを追加します。

  - 放送ソフトに行くんですね。
  - シーンに「ブラウザーソース」というタイプの新しいソースを追加します。
  - そして、「ブラウザーソース」の url に localhost を記述します : http://localhost:3000
  - 寸法を 1920x1080 にする。

    <img alt="あなたの放送プラットフォームで" src="https://i.ibb.co/JnNjkWY/image.png" width="100%" style="border-radius: 5px" />

    <img alt="シーンに新しいソースを追加する" src="https://i.ibb.co/L0vft4D/image.png" width="100%" style="border-radius: 5px" />

    <img alt="ローカルホストのURLを追加する" src="https://i.ibb.co/ryXpQ4y/image.png" width="100%" style="border-radius: 5px" />

**結果 ：**

<img alt="オーバーレイのデモ" src="https://i.ibb.co/98xLLCx/image.png" width="100%" style="border-radius: 5px" />

**情報：**

4 分ごとにオーバーレイは表示方法を変更し、4 分ごとにランクだけを表示します。
オーバーレイがあなたのアカウントを見つけられなかった場合、あなたのプロフィールを見つけるまで、Soracle#Anemy のプロフィールをデフォルトとして表示します。(オーバーレイがあなたを見つけるには、少なくとも Riot クライアントにログインし、起動している必要があります)また、Riot クライアントがあなたを見つけるには、少なくとも Riot クライアントにログインしている必要があります。

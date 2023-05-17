# VALOMY (VALORANT オーバーレイ)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**VALOMY**は VALORANT のストリームオーバーレイで、VALORANT API のおかげで自動的に Valorant に接続しているアカウントのランクと統計情報を表示します。

**ストリームにオーバーレイをセットアップする手順 ：**

- まず、プラットフォームを選択して、最新版のオーバーレイをダウンロードする必要があります。
  <img alt="プロジェクトのダウンロード" src="https://i.ibb.co/MPgFkJ8/image.png" width="100%" style="border-radius: 5px">
  <img alt="さまざまなプラットフォームが利用可能" src="https://i.ibb.co/xJMf0gY/image.png" width="100%" style="border-radius: 5px">

- <code>zip/rar</code>ファイルを解凍する必要があります。

- 実行ファイルと<code>settings.json</code>ファイルを同じフォルダに置くと
  <img src="https://i.ibb.co/vhwkTg6/image.png" alt="実行ファイルとsettings.jsonが同じフォルダにあること" />

- インストール後は、<code>settings.json</code>ファイルで、Valorant アカウントに対応する地域を変更し、オーバーレイ情報を表示する言語を変更して保存する必要があります。利用可能な地域と言語は以下の通りです：

  | 地域名         | 地域コード |
  | -------------- | :--------: |
  | ヨーロッパ     |     eu     |
  | アジア太平洋   |     ap     |
  | 北アメリカ     |     na     |
  | スッドコリア   |     kr     |
  | ラテンアメリカ |   latam    |
  | ブラジル       |     br     |

  | 言語名                    | 言語コード |
  | ------------------------- | :--------: |
  | アラビア語（U.A.E.）      |   ar-AE    |
  | ジャーマン                |   de-DE    |
  | 英語（アメリカ）          |   en-US    |
  | スパニッシュ              |   es-ES    |
  | スペイン語（メキシコ）    |   es-MX    |
  | フレンチ                  |   fr-FR    |
  | インドネシア語            |   id-ID    |
  | イタリアン                |   it-IT    |
  | やまと                    |   ja-JP    |
  | コリアン                  |   ko-KR    |
  | ポーリッシュ              |   pl-PL    |
  | ポルトガル語（ブラジル）s |   pt-BR    |
  | ロシアン                  |   ru-RU    |
  | タイ人                    |   th-TH    |
  | トルコ語                  |   tr-TR    |
  | ベトナム                  |   vi-VN    |
  | 中国語（簡体字）          |   zh-CN    |
  | ちゅうごくけい            |   zh-TW    |

<code>settings.json</code>
<img src="https://i.ibb.co/MGLJ5Jz/image.png" alt="settings.json" width="100%" style="border-radius: 5px" />

- フォルダー内の実行ファイルを実行することができます。
  <img src="https://i.ibb.co/Zh68gh3/image.png" alt="実行ファイルを起動する" width="100%" style="border-radius: 5px" />

- 次のアドレスにアクセスして、オーバーレイにアクセスできるかどうかを確認できます：http://localhost:3000（Valorant または Riot Client の前に実行する必要があります）。
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

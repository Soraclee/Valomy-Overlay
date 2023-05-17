# Valomy (발로란트 오버레이)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**Valomy**는 발로란트의 스트림 오버레이로, 발로란트 API를 통해 발로란트에 연결된 계정의 순위와 통계를 자동으로 보여줍니다.

**스트림에서 오버레이를 설정하는 단계 :**

- 먼저 플랫폼을 선택하여 최신 버전의 오버레이를 다운로드해야 합니다.
  <img alt="프로젝트 다운로드" src="https://i.ibb.co/MPgFkJ8/image.png" width="100%" style="border-radius: 5px">
  <img alt="다양한 플랫폼 사용 가능" src="https://i.ibb.co/xJMf0gY/image.png" width="100%" style="border-radius: 5px">

- <code>zip/rar</code> 파일을 압축을 풀어야 합니다.

- 실행 파일과 <code>settings.json</code> 파일을 같은 폴더에 넣습니다.
  <img src="https://i.ibb.co/vhwkTg6/image.png" alt="실행 파일과 settings.json이 같은 폴더에 있습니다." />

- 설치가 완료되면 <code>settings.json</code> 파일로 이동하여 발로란트 계정에 해당하는 지역을 변경하고 오버레이 정보를 표시할 언어를 변경한 다음 저장해야 합니다. 사용 가능한 지역과 언어는 다음과 같습니다:

  | 지역 이름          | 지역 코드 |
  | ------------------ | :-------: |
  | 유럽               |    eu     |
  | 아시아 태평양 지역 |    ap     |
  | 북미               |    na     |
  | 수드 코리아        |    kr     |
  | 라틴 아메리카      |   latam   |
  | 브라질             |    br     |

  | 언어 이름            | 언어 코드 |
  | -------------------- | :-------: |
  | 아랍어(아랍에미리트) |   ar-AE   |
  | 독일어               |   de-DE   |
  | 영어(미국)           |   en-US   |
  | 스페인어             |   es-ES   |
  | 스페인어(멕시코)     |   es-MX   |
  | 프랑스어             |   fr-FR   |
  | 인도네시아어         |   id-ID   |
  | 이탈리아어           |   it-IT   |
  | 일본어               |   ja-JP   |
  | 한국어               |   ko-KR   |
  | 폴란드어             |   pl-PL   |
  | 포르투갈어(브라질)   |   pt-BR   |
  | 러시아어             |   ru-RU   |
  | 태국어               |   th-TH   |
  | 터키어               |   tr-TR   |
  | 베트남어             |   vi-VN   |
  | 중국어(간체)         |   zh-CN   |
  | 중국어(대만)         |   zh-TW   |

<code>settings.json</code>
<img src="https://i.ibb.co/MGLJ5Jz/image.png" alt="settings.json" width="100%" style="border-radius: 5px" />

- 폴더에서 실행 파일을 실행할 수 있습니다.
  <img src="https://i.ibb.co/Zh68gh3/image.png" alt="실행 파일 시작하기" width="100%" style="border-radius: 5px" />

- 다음 주소로 이동하여 오버레이에 액세스할 수 있는지 확인할 수 있습니다: http://localhost:3000 (Valorant 또는 Riot 클라이언트보다 먼저 실행해야 합니다).
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="localhost:3000 페이지" width="100%" style="border-radius: 5px" />

- 이제 스트림에 오버레이를 추가합니다(Streamlabs, OBS, Twitch Studio 등).

  - 생방송 소프트웨어로 이동합니다.
  - 씬에 "브라우저 소스" 유형의 새 소스를 추가합니다.
  - 그런 다음 '브라우저 소스'의 URL에 localhost를 입력합니다: http://localhost:3000.
  - 1920x1080 치수를 입력합니다.

    <img alt="생방송 플랫폼에서" src="https://i.ibb.co/JnNjkWY/image.png" width="100%" style="border-radius: 5px" />

    <img alt="씬에 새 소스 추가하기" src="https://i.ibb.co/L0vft4D/image.png" width="100%" style="border-radius: 5px" />

    <img alt="로컬 호스트 URL 추가" src="https://i.ibb.co/ryXpQ4y/image.png" width="100%" style="border-radius: 5px" />

**결과 :**

<img alt="오버레이 데모" src="https://i.ibb.co/98xLLCx/image.png" width="100%" style="border-radius: 5px" />

**정보 :s**

4분마다 오버레이가 표시되는 방식이 변경되며, 4분마다 순위만 표시됩니다.
오버레이가 내 계정을 찾지 못하면 내 프로필을 찾을 때까지 소라클#애너미의 프로필이 기본값으로 표시됩니다. (최소한 라이엇 클라이언트에 로그인하고 실행 중이어야 프로필을 찾을 수 있습니다).

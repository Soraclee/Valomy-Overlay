# Valomy (발로란트 오버레이)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**Valomy**는 발로란트의 스트림 오버레이로, 발로란트 API를 통해 발로란트에 연결된 계정의 순위와 통계를 자동으로 보여줍니다.

**스트림에서 오버레이를 설정하는 단계 :**

- 먼저 프로젝트를 다운로드해야 합니다.
  <img alt="프로젝트 다운로드" src="https://i.ibb.co/0BqgJdr/image.png" width="100%" style="border-radius: 5px">

- <code>zip/rar</code> 파일을 압축을 풀어야 합니다.

- Node.js를 설치해야 합니다(이미 설치되어 있는 경우 설치를 건너뛸 수 있습니다):

  - 라는 이름의 Node.js 설치 파일을 사용할 수 있습니다:
    <code>node-v18.16.0-64.msi</code>

- 설치가 완료되면 프로젝트 폴더에서 직접 <code>npm install</code> 명령으로 프로젝트 패키지를 설치하거나 <code>install.cmd</code> 파일을 실행하여 프로젝트 패키지를 설치해야 합니다.
  <img src="https://i.ibb.co/HDYgmhK/image.png" alt="npm install" width="100%" style="border-radius: 5px" />
  또는
  <img src="https://i.ibb.co/tYH7gfQ/image.png" alt="install.cmd" width="100%" style="border-radius: 5px"  />

- 발로란트 계정에 해당하는 지역을 변경하려면 <code>settings.json</code> 파일로 이동해야 하며, 사용 가능한 지역은 다음과 같습니다:

  | 지역 이름          | 지역 코드 |
  | ------------------ | :-------: |
  | 유럽               |    eu     |
  | 아시아 태평양 지역 |    ap     |
  | 북미               |    na     |
  | 수드 코리아        |    kr     |
  | 라틴 아메리카      |   latam   |
  | 브라질             |    br     |

    <img src="https://i.ibb.co/p226tSV/image.png" alt="사용 가능한 모든 지역" width="100%" style="border-radius: 5px" />

- <code>npm run serve</code> 명령으로 스크립트를 시작하거나 <code>start.cmd</code> 파일을 실행할 수 있습니다.
  <img src="https://i.ibb.co/cTwTsLX/image.png" alt="npm run serve" width="100%" style="border-radius: 5px" />

- 다음 주소로 이동하여 오버레이에 액세스할 수 있는지 확인할 수 있습니다: http://localhost:3000.
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

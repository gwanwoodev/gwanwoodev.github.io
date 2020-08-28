---
layout: post
title: "윈도우10 정품인증 FLEX"
featured-img: windows10_cert
categories: [Windows]
date: 2020-08-29 08:02
image: /assets/img/posts/windows10_cert_thumb.jpg
author: gwanwoodev
---

# CMD로 정품인증 FLEX

필자가 얼마전에 전역하고, 집에 있는 데스크탑을 살펴 봤는데 상태가 영 엉망이었다..

윈도우7을 사용하고 있었고 정리정돈 되지 않은 바탕화면, D드라이브, 설치 되어있는 안쓰는 응용프로그램들..

이 기회에 윈도우10으로 바꿀겸 포맷하고 자료를 정리하기로 결심 했다.

예전에는 KMSAutoNet 이었던가? 그러한 응용 프로그램을 사용해서 인증을 받았던것으로 기억하는데, 백신에 바이러스가 검출되기도 하고 영 찝찝했던 기분이 들었던 기억이 생각났다.

이번에는 CMD로 시도 해보자.

<b>가급적 CD-Key를 구매하여 사용하자. OEM같은거 사면 싸다..</b>

## 자신의 윈도우부터 확인하자!

먼저 자신의 윈도우 타입부터 알아야 한다. 윈도우의 타입은 아래로 나뉘어 진다.

- Pro 계열
- Home 계열
- Enterprise 계열
- Education 계열

보통 가정용 데스크탑에는 Home 계열이 가장 많이 사용되고 그 다음은 Pro 계열인 것 같다.윈도우의 타입을 확인하려면, <b>설정 -> 시스템 -> 정보 </b> 란에서 확인이 가능하다.

아래에 타입별 KMS CD-KEY를 적었다. 본인의 데스크탑 윈도우의 타입에 맞게 시디키를 사용하면 된다.

| Type       | CD-KEY                        |
| ---------- | ----------------------------- |
| Home       | TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 |
| Pro        | W269N-WFGWX-YVC9B-4J6C9-T83GX |
| Enterprise | NPPR9-FWDCX-D2C8J-H872K-2YT43 |

## 실전! 적용해보기

첫번째, CMD를 관리자권한으로 실행시켜 줍시다.

![windows_auth_01](https://gwanwoodev.github.io/assets/upload/windows_auth01.jpg)

두번째, 아래 명령어를 입력해주고 팝업창이 뜰때까지 조금 기다려 줍니다. 똑같이 입력하면 안되고, 위에서 확인한 자신의 Windows 타입에 맞는 CD-KEY를 입력 하셔야 합니다.

```terminal
slmgr /ipk TX9XD-98N7V-6WMQ6-BX7FG-H8Q99
```

![windows_auth_02](https://gwanwoodev.github.io/assets/upload/windows_auth02.jpg)

세번째, 아래 명령어를 똑같이 입력해주고 마찬가지로 팝업창이 뜰때까지 기다려 줍니다.

```terminal
slmgr /skms kms8.msguides.com
```

![windows_auth_03](https://gwanwoodev.github.io/assets/upload/windows_auth03.jpg)

네번째, 3번과 마찬가지로 아래 명령어를 입력해주고 기다려주면 끝입니다.

```terminal
slmgr /ato
```

![windows_auth_04](https://gwanwoodev.github.io/assets/upload/windows_auth04.jpg)

<b>내컴퓨터 - 속성</b> 을 확인해보면 정품인증 FLEX 되있는 것을 볼 수 있습니다!

---

### 주의 사항

위 방법은 만료일이 있기 때문에(꽤 깁니다) 갑자기 정품인증이 되지 않았다고 뜨면

```terminal
slmgr /ato
```

위 명령어를 한번만 실행시켜주면 다시 갱신되면서 정품인증이 완료됩니다.

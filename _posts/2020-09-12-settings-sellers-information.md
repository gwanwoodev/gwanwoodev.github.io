---
layout: post
title: "구글 애드센스 sellers.json 설정 하는법"
featured-img: settings_sellers_information
categories: [Adsense]
date: 2020-09-12 12:20
image: /assets/img/posts/settings_sellers_information_thumb.jpg
author: gwanwoodev
---

# sellers.json 설정 한번 해보자!

필자는 현재 글을 작성하고 있는 이 블로그에 구글 애드센스를 달아 놓았다. 그래서 주기적으로 애드센스 수익금이 어느정도 쌓였는지 공식홈페이지에 가보는데, 못보던 경고 문구 비슷한게 보였다.

![sellers01](https://gwanwoodev.github.io/assets/upload/sellers01.jpg)

<b>"판매자 정보를 Google sellers.json 파일에 게시하시기 바랍니다. 현재 공개 상태를 검토하려면 계정 설정 페이지를 방문하세요"</b>

대놓고 나와있는 이문구를 처음에는 이해하질 못했다. 정보를 게시를 한다고? 무슨 소리인지 몰라서 <b>자세히 알아보기</b> 버튼을 클릭해 설명을 보았다.

아래는 그 내용 이다.

<b>"정보를 투명하게 공개하고 개인 또는 업체 이름을 나열하는 것이 좋습니다. 이는 광고주가 인벤토리를 확인하는 데 도움이 됩니다. 정보를 투명하게 공개하지 않으면 광고주가 게시자의 이름을 볼 수 없으므로 수익에 영향을 미칠 수 있습니다."</b>

애드센스 파트너들의 정보를 투명하게 공개하고, 광고주들을 더 편하게(?) 하려는 목적인 것 같다.

바로 적용해보도록 하자. 작업 버튼을 눌러주자.

![sellers02](https://gwanwoodev.github.io/assets/upload/sellers02.jpg)

이러한 화면이 뜰텐데 먼저 웹 게시자 ID가 필요하다. 메모장에 복사붙여넣기를 해놓자..
두번째로 시간대는 여러분들의 시간대에 맞게 설정하면 된다. (대부분 서울이겠지?)

그리고 판매자 정보 공개 상태를 공개로 해주면 설정이 끝난다.

여기까지가 1단계이다. 이제 실제로 sellers.json을 작성해야한다.

![sellers03](https://gwanwoodev.github.io/assets/upload/sellers03.jpg)

빨간색으로 체크해놓은 부분들이 일반적인 사용자들이 필요한 항목들이다.

1. seller_id - 위에 웹게시자 ID에 해당한다.
2. seller_type - 우리는 수익을 창출하는 사이트를 소유하고 있고, Google에서 수익을 지급받기 때문에 <b>PUBLISHER</b> 이다.
3. name - 우리의 이름을 의미한다. 업체같은경우는 회사 이름이면 될 것 같다.

![sellers04](https://gwanwoodev.github.io/assets/upload/sellers04.jpg)

우리같은 개인사이트 소유자나 블로거들은 비즈니스 도메인을 적어주지 않아도 무관하다.

최종적으로 필자가 sellers.json을 작성 해 보았다.

![sellers05](https://gwanwoodev.github.io/assets/upload/sellers05.jpg)

아래 내용들은 복사 붙여넣기 해서, 웹게시자 ID와 name만 바꿔서 sellers.json 으로 저장하면 된다.
name같은 경우에는 결제 프로필과 연관되어 있으니, 실명을 영어로 써주면 될 것 같다.

```json
{
  "seller_id": "웹게시자ID",
  "seller_type": "PUBLISHER",
  "name": "이름"
}
```

저장이 완료 되었다면, 그 파일을 본인들의 사이트나 블로그의 최상단 루트에 파일을 넣어주면 된다.

예) 블로그 주소가 https://gwanwoodev.github.io 일 경우,

https://gwanwoodev.github.io/sellers.json 으로 접속했을때, 우리가 저장한 내용이 뜨게 하면 된다.

티스토리같은 경우에는 자체적으로 관리자 페이지에서 할 수 있으니 참고하자.

도움이 되었다면, 덧글과 좋아요를 부탁 합니다.

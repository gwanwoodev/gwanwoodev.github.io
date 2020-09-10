---
layout: post
title: "FontAwesome(폰트어썸) 사용하는법"
featured-img: how_to_use_fontawesome
categories: [ETC, FontAwesome]
date: 2020-09-11 02:30
image: /assets/img/posts/how_to_use_fontawesome_thumb.jpg
author: gwanwoodev
---

# 폰트어썸? 그게 뭐야?

우리가 웹개발을 하다 보면 아이콘이 필요할 때가 많다. 필자 또한 개발을 하면서 더 훌륭한 디자인을 위해서, 깔끔하게 보이기 위해서 사용하곤 한다.

이번 포스팅에서는 <b>FontAwesome</b>을 소개하고자 한다.

이 서비스는 대부분이 돈을 내고 사용해야 하는 유료이지만, 당연히 무료인 아이콘도 많이 제공한다. <br> <span style="text-decoration: line-through">근데 개발하면서 무료 아이콘만으로도 충분히 개발할 수 있어서 크게 걱정할 필요까지는 없다.</span>

말만 주구장창하는 것보다 한버 해보는게 나으니 바로 사용해보도록 하자.

## CDN 설치

필자가 애용하는 방식중 CDN 방식먼저 해보도록 하자. 굉장히 쉽게 적용할 수 있어서 아무것도 모르는 초딩이 와도 적용 할 수 있을 정도이다.

먼저 FontAwesome 공식사이트에 접속하자.

[공식사이트](https://fontawesome.com/)

![fontawesome_01](https://gwanwoodev.github.io/assets/upload/fontawesome_01.jpg)

먼저 접속하게되면 위와 같은 화면이 나온다. Sign In을 눌러준다.

이글을 보는 사람들은 대부분 가입 이력이 없을테니, 회원가입을 먼저 해주자.

회원가입이 끝났다면, 가입한 아이디로 로그인을 한후, 똑같은 위치에 프로필 아이콘을 눌러주면 아래와 같이 사이드바가 띠용~ 하고 나온다.

![fontawesome_02](https://gwanwoodev.github.io/assets/upload/fontawesome_02.jpg)

FontAwesome CDN 을 눌러준다.

![fontawesome_03](https://gwanwoodev.github.io/assets/upload/fontawesome_03.jpg)

성공적으로 들어왔다면, CDN Free 링크가 나와있을텐데, 이 링크를 HTML head태그 안에 그대로 복사 붙여넣기 해주면 세팅은 끝난다.

---

## 필요한 아이콘 사용하기

이제 CDN도 집어넣었으니 우리가 필요한 아이콘을 사용해보자.
폰트어썸 헤더에 Icon 메뉴를 클릭하면 검색할 수 있는 인풋박스가 나온다.

필자는 우리에게 친숙한 Facebook을 사용해보겠다.

![fontawesome_04](https://gwanwoodev.github.io/assets/upload/fontawesome_04.jpg)

검색을 하고나면 위와 같이 다양한 디자인의 아이콘들이 나오는데, 마음에 드는것을 클릭해 주면 된다.

<b>※ 회색 빛깔 아이콘들은 유료버전 이다.</b>

![fontawesome_05](https://gwanwoodev.github.io/assets/upload/fontawesome_05.jpg)

이제 html 태그로 보이는 i 태그를 눌러주면 자동으로 복사(Ctrl + C)가 되므로, 한번 클릭해주고 여러분들의 코드에 붙여넣기 해주면 된다.

아래는 샘플 코드 이다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gwanwoodev</title>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
      integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <span>facebook</span> <i class="fab fa-facebook"></i>
  </body>
</html>
```

![fontawesome_06](https://gwanwoodev.github.io/assets/upload/fontawesome_06.jpg)

성공적으로 아이콘이 적용된것을 확인 할 수 있다.

도움이 되었다면, 덧글과 따봉!

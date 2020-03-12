---
layout: post
title: "Momentum Clone 03. CSS로 꾸며보기"
featured-img: momentum_base
categories: [Clone, Side Project]
date: 2020-03-12 13:32
image: /assets/img/posts/momentum_base_thumb.jpg
---

# Momentum Clone 03. CSS로 꾸며보기

저번 포스팅에서 HTML의 뼈대를 만들어 주었다면,
<br>
이번에는 이 초라하고 못생긴 뼈대를 꾸밀 수 있게 CSS를 작성해보도록 하겠습니다.

시작하기전에, reset.css를 다운받지 않으신 분은 아래 링크에서 다운로드 하시거나
<br>
복사 붙여넣기 하시기 바랍니다.

[reset.css](https://gist.github.com/DavidWells/18e73022e723037a50d6)

그리고 실제로 저희가 작성할 파일은 app.css 파일입니다.
<br>
이 또한 생성하지 않으신분은 파일을 생성해주시면 됩니다.

## app.css 작성하기

먼저 정 가운데에 실시간 시각을 크게 표시해주기 위해서..
<br>
html과 body에 가로 세로 길이를 100%를 주어야 합니다.

```css
/* app.css */
html, body {
    width: 100%;
    height: 100%;
}

/* 테스트용 */
body {
    background-color: black;
}
```

그리고 세세한 스타일링을 해주기 전에, 먼저 가로 세로 가운데 정렬을 해봅시다.
<br>
전체 컨텐츠를 가운데 정렬 해야하니, 전체 컨텐츠를 감싸고 있는 #container에 작성해주면 될 것 같네요.

```css
/* app.css */

#container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
```

여기까지 하셨다면, 아래와 같이, 전체 컨텐츠들이 딱! 가운데정렬이 됬을겁니다.

![momentum_example05](https://gwanwoodev.github.io/assets/upload/momentum_example05.jpg)

이번에는 실시간 시각을 표시해줄 .clock-text의 스타일링과 margin을 설정 해봅시다.

```css
/* app.css */
.clock-text {
    color: white;
    font-size: 6rem;
}

.form {
    margin-top: 30px;
}
```

.clock-text에는 흰색 글씨와, 글씨 크기는 큼지막하게 보여야 하니 6rem 정도를 줍시다.
<br>
또한 .clock-text와 .form의 상하 간격이 너무 좁아서, 30px을 주었습니다.

![momentum_example06](https://gwanwoodev.github.io/assets/upload/momentum_example06.jpg)

점점 모양새가 만들어 지는군요..!
<br>
지금까지의 결과물을 보면, user의 name을 입력받는 input box가 형편없어 보이죠?

스타일링 해줍시다.

```css
/* app.css */
.user-name {
    background: transparent;
    text-decoration: none;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    text-align: center;
    height: 30px;
    width: 100%;
}

::plcaeholder {
    color: white;
}
```

마지막으로 현재 결과물에서는 보이지는 않지만,
<br>
유저가 이름을 입력하고 엔터를 입력하면
<br>
input이 사라지게 되고, 메세지가 뜨도록 구현해야 합니다.

메세지를 표시해줄 클래스도 스타일링을 미리 해줍시다.
<br>
클래스 이름은 .hello-message 정도면 되겠네요.

```css
/* app.css */
.hello-message {
    margin-top: 20px;
    font-size: 25px;
    color: white;
    text-align: center;
}
```

***

![momentum_example07](https://gwanwoodev.github.io/assets/upload/momentum_example07.jpg)

짜잔. 간단하고 심플하게 스타일링이 완료되었습니다.
<br>
다음 포스팅에서는 아래와 같은 '기능'을 추가 해봅시다!

### TODO

* 실시간으로 시간 표시
* 새로고침시, 랜덤한 배경 이미지 설정
* 유저의 이름을 입력받으면, LocalStorage에 저장후 Message 표시
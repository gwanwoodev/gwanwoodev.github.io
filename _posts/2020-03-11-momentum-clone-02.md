---
layout: post
title: "Momentum Clone 02. HTML 뼈대 만들기"
featured-img: momentum_base
categories: [Clone, Side Project]
date: 2020-03-11 09:23
---

# Momentum Clone 02. HTML 뼈대 만들기

환경 설정도 끝났으니, HTML 뼈대를 만들어 봅시다.
<br>
사용자에게 보여줄 컨텐츠는 실시간 시각과, 이름 입력 Form 두가지 입니다.

먼저 Container라는 전체 컨텐츠를 감싸주는 div box를 만들어 보죠.

```html
<body>
    <!-- 전체 콘텐츠를 감싸는 container box -->
    <div id="container">
        <!-- TODO -->
    </div>
</body>
```

container 안에는 실시간 시각과, 이름 입력 Form 두가지의 블럭을 넣어주어야 겠죠?

```html
<body>
    <!-- 전체 콘텐츠를 감싸는 container box -->
    <div id="container">
        <!-- 실시간 시간을 감싸줄 Clock Box -->
        <div class="clock">
            <!-- 실시간 시각 -->
            <span class="clock-text">00:00:00</span>
        </div>

        <!-- Form -->
        <form class="form">
            <!-- 이름 입력 Input -->
            <input type="text" class="user-name" placeholder="Your Name" />
        </form>
    </div>

    <!-- 스크립트 파일 로드 -->
    <script src="./js/background.js"></script>
    <script src="./js/clock.js"></script>
    <script src="./js/form.js"></script>
</body>
```

마지막에는, 저번 포스팅에서 만들어놓은 스크립트 파일들을 로드해주었습니다.

![momentum_example04](https://gwanwoodev.github.io/assets/upload/momentum_example04.jpg)

이제 기본적인 HTML 뼈대는 완성입니다.
<br>
말 그대로 HTML 뼈대만 만든것이기 때문에, 지금은 초라할 수 있지만
<br>
다음 포스팅에서는, 이 초라한 HTML을 css로 꾸며봅시다.

아래 코드는 이번 포스팅의 완성된 HTML 코드 입니다. 참고 바랍니다.

<script src="https://gist.github.com/gwanwoodev/8b238c23da4e501db024fdb0b2fdf306.js"></script>



---
layout: post
title: "Momentum Clone 04. Javascript로 기능 붙이기"
featured-img: momentum_base
categories: [Clone, Side Project]
date: 2020-03-13 14:15
image: /assets/img/posts/momentum_base_thumb.jpg
---

# Momentum Clone 04. Javascript로 기능 붙이기

저번 포스팅 에서는 첫번째로 HTML로 뼈대를 만들었고, CSS로 만들어준 뼈대를 꾸며보았습니다. 
<br>
결과적으로 껍데기만 완성되있던 상태 였는데요.

이번 포스팅에서, 이 껍데기에 Javascript라는 소스를 끼얹어서 기능을 추가해보도록 하겠습니다.

<b>코드를 작성하다가 모르는 함수나 지식이 보인다면, 즉시 구글링해서 찾아보시면서 공부하시기 바랍니다.</b>

시작하기에 앞서, 배경이미지가 필요합니다. 5개정도의 이미지(1920*1080)를 다운로드 받아 놓읍시다.

대충 google에 'wallpaper 1920x1080' 으로 검색하시면 많이 나옵니다.
<br>
파일들의 이름은 'wallpaper1 ~ 5' 로 저장하시면 되겠습니다.

## 랜덤한 배경 이미지 적용 하기

저희가 첫번째로 만들어 볼 기능은, 
<br>
페이지가 새로고침 되었을때, 다운 받아놓은 5개의 이미지 중에서 랜덤한 배경으로 적용하는 기능입니다.

순차적으로 부드럽게 코드를 작성하기 위해서 구현할 순서를 정하였습니다.

* Random한 숫자를 Return 해주는 함수
* 배경 이미지를 적용해주는 함수

이제 Random한 숫자를 Return 해주는 함수를 구현 해봅시다.
<br>
이미지가 5개이기 때문에, 범위는 0~4면 되겠네요.

```javascript
/* background.js */
const DOCUMENT_BODY = document.body;
const WALL_PAPER_ARRAY = ['wallpaper1.jpg', 'wallpaper2.jpg', 'wallpaper3.jpg', 'wallpaper4.jpg', 'wallpaper5.jpg'];
const IMAGE_COUNT = 5;

/* 랜덤 숫자를 Return 해주는 함수 */
getRandomNumber = () => {
    return Math.floor(Math.random() * IMAGE_COUNT); 
}
```

Math 함수 특성상 소수점까지 나와버려서, floor을 사용해서 정수만 나오게끔 하였습니다.

이제 배경 이미지를 적용해주는 함수를 구현 해봅시다.

```javascript
/* background.js */
changeBackground = (choiceImageIndex=0) => {
    DOCUMENT_BODY.style.backgroundImage = `url("wallpaper/${WALL_PAPER_ARRAY[choiceImageIndex]}")`;
}
```

마지막으로, 함수들을 호출하는 initialize 함수를 정의하겠습니다.

```javascript
/* background.js */
initialize = () => {
    const choiceImageIndex = getRandomNumber();
    changeBackground(choiceImageIndex);
}

initialize();
```

여기까지 하셨다면, 새로고침을 연타 해보세요!
<br>
계속해서 배경 이미지가 바뀌는 것을 볼 수 있습니다.

***

## 실시간으로 흘러가는 시간 보여 주기

이제 화면 정가운데에 실시간을 흘러가는 시간을 구현 할겁니다.
<br>
구현 순서는 아래와 같습니다.

* 현재 시간을 받아와서, hh:mm:ss 형식으로 시간 text를 바꿔주는 함수
* 시간이 10 미만일 경우 예외 처리 해주기
* 1초마다 시간이 업데이트 되도록 동작하는 함수

먼저 시간을 받아오고, 시간 text를 바꿔주는 함수를 작성해봅시다.
<br>
저는 getTimeAndSetTime 이라는 이름을 주겠습니다.

```javascript
/* clock.js */
const CLOCK_TEXT = document.querySelector(".clock-text");

getTimeAndSetTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    CLOCK_TEXT.innerText = `${hours}:${minutes}:${seconds}`;
}
```

자바스크립트 Date에서 제공하는 getHours, getMinutes, getSeconds를 사용하여
<br>
시간을 받아와 설정 해주었습니다.

이제 1초마다 HTML에 표시되는 시간이 계속해서 업데이트 되도록 해야 합니다.

```javascript
/* clock.js */
initialize = () => {
    setInterval(getTimeAndSetTime, 1000);
}

getTimeAndSetTime();
initialize();
```

setInterval은 지정한 함수를 반복실행시켜주는 함수입니다.
<br>
추가적으로 설명하자면 1000 = 1초입니다.

여기까지 되셨다면, 결과물을 봅시다!

![momentum_example08](https://gwanwoodev.github.io/assets/upload/momentum_example08.jpg)

1초마다 실시간으로 시간이 업데이트 되는것을 볼수있습니다!

다만 찝찝한 부분이 시, 분 초가 10 미만 일때, 한자리 숫자 일때
<br>
9:2:14 이런식으로 표시가 되있어서, 좀 더 보기 좋도록 10 미만일경우 0을 앞에 붙여주는 함수도 작성 해봅시다.

```javascript
/* clock.js */
checkTime = (clock) => {
    return clock < 10 ? `0${clock}` : `${clock}`;
}
```

checkTime 함수를 작성해 주었으니, getTimeAndSetTime 함수에서 호출해주어야 겠죠?

```javascript
/* clock.js */
getTimeAndSetTime = () => {
    const date = new Date();
    const hours = checkTime(date.getHours()); // 호출!
    const minutes = checkTime(date.getMinutes()); // 호출!
    const seconds = checkTime(date.getSeconds()); // 호출!

    CLOCK_TEXT.innerText = `${hours}:${minutes}:${seconds}`;
}
```

이제 완벽하게 구현이 다되었네요. 대망의 마지막..! form.js를 만지작 할 차례입니다.

***

## username을 입력받아, localStorage에 저장하고 불러오기

이번에도 똑같이 구현 목록을 살펴 봅시다.

* LocalStorage에서 Value를 가져오는 함수
* LocalStorage에 값을 저장하는 함수
* LocalStorage에 값이 없다면 Form을 보여주고, 있다면 Form을 숨기는 함수
* Enter KeyPress 이벤트 정의

먼저 값을 가져오고, 불러오는 함수부터 코드를 작성 해봅시다.

```javascript
/* form.js */
const CONTAINER = document.querySelector("#container");
const FORM = document.querySelector(".form");
const USER_NAME_INPUT = document.querySelector(".user-name");

checkLocalStorage = () => {
    /* TODO */
}

hideForm = () => {
    /* TODO */
}

showHelloMessage = () => {
    /* TODO */
}

getLocalStorage = (key) => { return localStorage.getItem(key); }

saveLocalStorage = () => {
    const data = USER_NAME_INPUT.value;
    localStorage.setItem("username", data);
    hideForm();
}

```

getLocalStorage함수는 key를 파라메터로 받아 해당 key의 value를 Return 해줍니다.

saveLocalStorage함수는  username이라는 key에 사용자가 입력한 value를 localStorage에 저장하는 함수입니다.
<br>
또한 저장 후에는, 이름 입력Form이 사라져야 하니, hideForm()도 호출 시켰습니다.

여기서 잠깐 순서를 짚고 가자면, 아래와 같습니다.

1. 처음 페이지가 로딩되면, localStorage에 저장된 username이 있는지 체크해야한다.
2. username이 입력되면, Form이 사라지고, message가 출력 되어야 한다.

2번 먼저 구현 해봅시다.

```javascript
/* form.js */
initialize = () => {
    USER_NAME_INPUT.addEventListener("keypress", (evt) => {
        if(evt.keyCode === 13) {
            saveLocalStorage(); // localStorage 저장
            hideForm(); // 저장되었으니 Form 숨김!!
            evt.preventDefault(); // 이벤트 중지
        }
    });
}
```

input에 이벤트를 정의 하였습니다. keypress 이벤트가 동작하면,

입력한 keyCode가 13(엔터) 인지 비교해서, 엔터가 맞다면, 코드를 실행합니다.

이제 Form을 숨겨주는 hideForm 함수와, Form을 숨긴후 메세지를 표시해주는 showHelloMessage 함수를 구현해봅시다.

```javascript
/* form.js */
hideForm = () => {
    USER_NAME_INPUT.value = "";
    FORM.style.display = "none";
    showHelloMessage();    
}

showHelloMessage = () => {
    const username = getLocalStorage("username");
    const tag = document.createElement("h1");
    tag.classList.add("hello-message");
    tag.innerText = `Have a Good Day, ${username}.`;
    CONTAINER.appendChild(tag);
}
```

hideForm에서 display: none으로 완전히 안보이도록 해주고 showHelloMessage 함수를 호출합니다.

showHelloMessage에서는 document.createElement를 사용해서 태그를 만들어 주고

저번 css 포스팅에서 미리 작성해준  .hello-message 라는 클래스를 넣고 Container에 추가하였습니다.

마지막으로는 1번. 페이지가 로딩되있을때 localStorage에 username이 있다면 hideForm을 실행해주고, 없다면 Form을 보여주어야 합니다.

이 함수의 이름은 checkLocalStorage 로 정의 하겠습니다.

```javascript
/* form.js */
checkLocalStorage = () => {
    const username = getLocalStorage("username");
    username ? hideForm : "";
}

initialize = () => {
    USER_NAME_INPUT.addEventListener("keypress", (evt) => {
        if(evt.keyCode === 13) {
            saveLocalStorage();
            hideForm();
            evt.preventDefault();
        }
    });
    checkLocalStorage();
}

initialize();

```

3항 연산자로 처리해주었고, 페이지가 로딩 되었을때 딱 한번만 

체크 해주면 되니, initialize에서 호출 하도록 하였습니다.
<br>
이제 완성된 결과물을 확인 해봅시다.

![momentum_example09](https://gwanwoodev.github.io/assets/upload/momentum_example09.jpg)

짜잔.. 완성!

*** 

여기까지, Momentum Clone 완료입니다.
<br>
ES6 포스팅이 끝난 직후의 첫 클론 프로젝트라서, 별볼일 없지만

추후에는 점점 난이도를 높여 가면서, LINE 클론 정도의 수준으로 포스팅 할 예정입니다.

아래는 코드는 완성본 코드 입니다.

<script src="https://gist.github.com/gwanwoodev/24a29cf3a4d75f61cd27922381084853.js"></script>

<script src="https://gist.github.com/gwanwoodev/85725b2535fed607c6a1bdd9a22910a2.js"></script>

<script src="https://gist.github.com/gwanwoodev/ead7c6b34f5bca544c4f5b5ffbf37511.js"></script>
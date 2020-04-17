---
layout: post
title: "React.js 01. 리액트가 뭔가요?"
featured-img: featured_reactjs
categories: [React.js]
date: 2020-04-17 14:14
image: /assets/img/posts/featured_reactjs_thumb.jpg
---

# 리액트가 뭔가요? (What is React.js?)

배웠던 지식들을 복습 할 겸. 리액트의 핵심을 포스팅 하고자 합니다.
그 전에, ES6+를 모르시는 분은 아래 링크에서 ES6에 대해서 공부하시고 보시는 것을 추천 드립니다.

[ES6 살펴 보기](https://gwanwoodev.github.io/learn-es6/)

당연히 리액트를 사용 할 테니, 이게 뭐하는 녀석인지 알아야 겠죠?
React.js는 Facebook에서 개발되었습니다. 2020년 04월 17일 기준으로 Github Star 수는 147K 네요.

![react_github](https://gwanwoodev.github.io/assets/upload/react_github.jpg)

React는 '컴포넌트' 라는 개념에 집중이 되어 있는 UI 라이브러리 입니다.

생태계가 매우 넓기도 하고, 지금도 꾸준히 증가세를 보이는 중이구요. 사용하는 스타트업이나 대기업도 많습니다.

잠시 Angular 이야기를 꺼내 보자면 Angular는 Router, HTTP-Client 등 웹을 개발할때 필요한 대부분의 것들이 내장 되어있습니다.

하지만 React라는 녀석은 오로지 UI 라이브러리이면서, HTTP-Client, Router 등은 내장 되어 있지 않습니다.

그렇다면 직접 라이브러리를 만들어서 사용하거나, 다른 사람이 만들어놓은 라이브러리들을 사용하면 됩니다.

***

## Virtual DOM

Virtual DOM은 가상의 DOM 입니다. 리액트는 가상돔에 한번 렌더링을 하고, 기존의 DOM과의 비교를 해서 

변화가 이루어진 곳만 업데이트 됩니다.

그렇다면 React만 Virtual DOM을 사용하는가? 

아닙니다. 흔히 3대장으로 불리는 녀석중 Vue라는 녀석도 가상돔을 사용하고 있습니다.

## 글을 마치며..

프론트엔드의 시대가 이미 바뀌었습니다. 지금도 리액트는 생태계가 넓어지고 있으며

Airbnb, Twitch, Coludflare 등 많은 기업들이 이 녀석을 채택 하고 있습니다.

<b>정리</b>

* React는 UI 라이브러리 이다.
* Virtual DOM을 사용해서, 변화가 있는 부분만 업데이트 한다.
* Router나 상태 관리는 써드파티 라이브러리를 사용하면 된다.
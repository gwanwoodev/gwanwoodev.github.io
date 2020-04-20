---
layout: post
title: "React.js 02. 리액트 개발 환경 구성하기"
featured-img: featured_reactjs
categories: [React.js]
date: 2020-04-20 10:13
image: /assets/img/posts/settings_enviroment_reactjs_thumb.jpg
---

# 리액트 개발 환경 구성하기

저번 포스팅에서는 React.js가 무엇인지, 어떤용도인지 보았습니다. 

이번 포스팅 에서는 create-react-app을 사용하여 개발 환경을 구성해보도록 하겠습니다.

먼저 개발 환경을 구성하기 전에, React.js는 우리가 예전에 사용하던 jQuery나 다른 라이브러리 처럼

```javascript
<script src="jquery.min.js"></script>
```

처럼 불러와서 사용 하지 않습니다. 물론 페이스북에서 CDN을 제공하기는 하지만,
리액트라는 녀석을 완벽하게 다룰 수 없고 굉장히 제한적 입니다.

<b>그렇다면 어떻게 제대로 다룰 수 있나요?</b>

* Node.js
* Webpack
* Babel

등의 도구들을 설치해서 '설정' 해야합니다.

우리가 위의 것들을 배우기에는 <b>Learning Curve</b>가 높고 시간도 오래걸릴 뿐 아니라
내가 개발을 하는것인지, '설정' 을 하는것인지 재미가 굉장히 없습니다.

이런 문제점 때문에 Facebook에서는 <b>create-react-app</b> 이라는 도구를 제공했습니다.

명령어 하나로 리액트 개발 환경이 구성 되어있는 Template 프로젝트가 생성됩니다.

우리는 이 create-react-app을 사용 해 볼겁니다.

***

## Installation

아래 프로그램들을 설치 해야 합니다. 아래 링크들을 전부 설치 하면서 글을 읽어 주시면 되겠습니다.

1. [Node.js (Click)](https://nodejs.org/ko)

위에서 설명한 Webpack과 Babel 같은 도구들은 Node.js 기반으로 만들어 져 있기 때문에, 설치해 주어야 합니다.

2. [VS Code (Click)](https://code.visualstudio.com)

필자가 애용하는 코드 에디터 입니다. 가볍고 제공되는 확장프로그램(extension)이 많습니다.

## create-react-app

필요한 프로그램 설치가 완료 되었다면, create-react-app을 사용 해봅시다.

Terminal에서 프로젝트를 만들고 싶은 경로로 설정 해줍시다. 저는 D드라이브의 workspace 폴더에 생성하겠습니다.

```terminal
cd d:
cd workspace
```

아래 명령어를 입력해주면 프로젝트가 생성 됩니다.

```terminal
npx create-react-app blg-react

# 혹은
npm install -g create-react-app
create-react-app blg-react

```

<b>잠깐! npx와 npm의 차이가 무엇 인가요?</b> 

<i>이 부분에 대해서는 따로 포스팅을 할 예정입니다.</i>

blg-react는 생성할 프로젝트의 폴더 명입니다.

설치가 완료되면 Happy Hacking! 이라는 문구가 뜨게 될텐데, 앱을 시작 해봅시다.

```terminal
cd blg-react
npm start
```

잠시 기다리면 리액트 앱이 성공적으로 실행 된것을 볼 수 있습니다.

![settings_enviroment_done](https://gwanwoodev.github.io/assets/upload/settings_enviroment_done.jpg)
---
layout: post
title: "React.js 03. 리액트 JSX 이해하고 사용하기"
featured-img: reactjs_with_jsx
categories: [React.js]
date: 2020-04-23 10:38
image: /assets/img/posts/reactjs_with_jsx_thumb.jpg
---

# JSX 이해하고 사용하기

저번 시간에는 create-react-app을 사용하여, 리액트 프로젝트를 생성하고 실행까지 해보았습니다.

오늘은 JSX 라는 녀석을 알아 볼겁니다. 먼저 저번에 생성한 프로젝트의 src/App.js 코드를 하나하나 살펴 보도록 하죠.

<script src="https://gist.github.com/gwanwoodev/93fd2c558fe1bbfe9a33552174207b92.js"></script>

제 블로그에서 ES6 포스팅을 보신 분이라면 import / export는 모두 아실 겁니다.

첫번째 코드는 React와, 그 안에 있는 Component를 불러왔습니다.
우리가 배울 JSX라는 녀석을 사용하려면 React를 꼭 Import 해주어야 합니다.

우리가 import를 쓰게 되면 나중에 프로젝트를 빌드할때 parcel이나 webpack 혹은 gulp 등

모듈 번들러(module-bundler)가 모든 코드가 잘 실행 될 수 있게끔 순서를 정하고 한개의 파일로 합쳐주게 됩니다.

리액트는 기본적으로 웹팩을 사용합니다. 저희는 create-react-app으로 프로젝트를 생성하였는데 기본적인 webpack 설정이 다 되어 있는 상태입니다.

***

## 컴포넌트의 종류

컴포넌트는 기본적으로 두가지의 종류로 나뉩니다.

* 클래스로 컴포넌트를 만들 수 있습니다.
* 함수로 컴포넌트를 만들 수 있습니다.

이 포스팅에서는 클래스 컴포넌트로 되어 있습니다.

클래스 컴포넌트는 <b>무조건</b> render 함수가 존재 해야하고, 그 안에서는 <b>JSX</b>를 Return 해주어야 합니다.

위의 코드에서 return안의 <b>HTML 같이 생긴 코드</b>들이 JSX 입니다.

마지막 줄에서 App 컴포넌트를 export(내보내기)를 했으니 어딘가에서 이 App을 import하여 사용을 하겠지요?

index.js 파일을 열어 봅시다.

<script src="https://gist.github.com/gwanwoodev/0e95edabbdf72283373b745a775f8b1e.js"></script>

App.js를 import 하는것을 볼 수 있습니다.

그리고 브라우저에서 우리가 만든 컴포넌트를 보여주기 위해서는 ReactDOM.render 함수를 사용 해야 합니다.

첫번째 파라미터는 렌더링할 결과물, 두번째 파라미터는 어떤 DOM에 그릴지 정해줍니다.
App 컴포넌트를 root 라는 id를 가질 DOM에 그려주는 것이죠.

public/index.html 파일을 열어보시면 실제로 root라는 id를 가진 녀석을 찾아 볼 수 있습니다.

***

## JSX 좀더 알아보기

return 안에 있는 HTML 같은 코드들은 실제 HTML이 아닙니다. 이건 실제로 자바스크립트 입니다.

JSX로 작성하게 되면 이를 React.createElement를 사용하는 자바스크립트 형태로 변환 시켜주게 됩니다.

App.js에 기본적인 내용들을 지우고 컴포넌트 작성을 연습 해봅시다.

<script src="https://gist.github.com/gwanwoodev/5189331acfb1107909e0351c8084e521.js"></script>

### 태그를 열었으면 항상 닫아 줍시다

태그는 항상 닫혀있어야 합니다.

```html
<div></div> <!-- 어떠한 태그를 열었다면 꼭 닫아야 합니다. -->
<input type="text" /> <!-- input과 같이 HTML에서 안닫아도 되는 태그들도 필수적으로 닫아야 합니다. -->
```

태그를 닫지 않게 되면 

<i>Parsing error: Unterminated JSX contents</i> 

에러를 볼 수 있으니 꼭 태그는 닫아 줍시다.

### 두개 이상의 엘리먼트는 하나의 엘리먼트로 감싸야 합니다.

```javascript
import React, {Component} from 'react';

class App extends Component {
  render() {
    return(
      <div>
        2 elements test
      </div>
      <div>
        yeap
      </div>
    )
  }
}

export default App;
```

코드를 보면 return 안에 두개의 엘리먼트가 존재하는데 이렇게 되면 오류가 나타납니다.

<i>Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?</i>

당연히 이 오류는 하나의 태그로 감싸주면 없어집니다.

<script src="https://gist.github.com/gwanwoodev/d02f68fb2146f538f65f1cb5d02b89a9.js"></script>

그런데 단순히 오류를 없애기 위해서 하나의 div로 감싸주는 형태는 보기 안좋을 때가 많습니다.

그럴때 Fragment를 사용합니다.

<script src="https://gist.github.com/gwanwoodev/82c7f92fac4980e1a04aaa85aaf8e885.js"></script>

Fragment를 사용하면 실제 브라우저에서는 나타나지 않습니다. <b>감싸기용</b> 이라고 이해하시면 됩니다.

### 자바스크립트 값 사용하기

JSX에서 어떠한 자바스크립트 값을 사용하려면 아래와 같이 작성하면 되겠습니다.

<script src="https://gist.github.com/gwanwoodev/47b2c776a175643bcd908fc07ea1e8b3.js"></script>

*** 

## 조건부 렌더링과 스타일링

JSX에서 조건부 렌더링을 할땐 삼항 연산자나 AND 연산자를 사용합니다.

<i>if문은 사용할 수 없습니다.</i>

무조건 <b>IIEF(즉시 실행 함수 표현)</b>을 사용합니다.
삼항 연산자 예제부터 살펴 봅시다.

<script src="https://gist.github.com/gwanwoodev/4650d63b20be685534f37987b09d9eea.js"></script>

이렇게 하면 user 변수의 값에 따라 보여지는게 달라질 것입니다.

두번째로 AND 연산자를 사용 할건데요, AND 연산자는 우리의 조건이 true 일때만 보여주고
false면 아무것도 보여주고 싶지 않을때 사용합니다.

<script src="https://gist.github.com/gwanwoodev/1bfc8618c27dd42c5fa4e37701b776a6.js"></script>

소규모의 조건부 렌더링이라면 위와 같은 두가지 방식으로 작성하면 되지만,
좀 복잡해질 경우에는 JSX 밖에서 로직을 작성해주는게 좋습니다.

### 스타일링

JSX에서는 html에서 스타일링 해주는 것과는 약간 다릅니다. 바로 예제 코드부터 살펴 봅시다.

<script src="https://gist.github.com/gwanwoodev/c4714284f3c71c1255e1078a5241f30c.js"></script>

html에서 css 스타일링을 해줄때는 background-color, font-size 와 같은 형식으로 작성을 했지만

JSX에서는 backgroundColor, fontSize 와 같은 Camel-Case 형식의 객체 형태로 작성해야 합니다.

또 다른 점은  class를 설정해줄때 class="example" 과 같은 형식이 아니라,
className="example" 을 사용합니다.

그렇다면 className을 이용한 스타일링을 해봅시다.

<script src="https://gist.github.com/gwanwoodev/d9c6477c11493bcc8f77b1b52798fa25.js"></script>

<script src="https://gist.github.com/gwanwoodev/da57e8f3f2c2cb8874fcb952fd159dfc.js"></script>

App.js 에서 example 이라는 className을 지정해주었고, App.css에서 example class의 스타일을 해주었습니다. 그리고 이 css 파일을 App.js에 import 해주었죠.

나중에는 styled-components 같은 라이브러리를 이용해서 스타일링 해줄 수도 있습니다.

리액트 JSX 포스팅은 여기 까지 입니다.
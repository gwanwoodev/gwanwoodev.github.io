---
layout: post
title: "Styled Components 정리"
featured-img: styled_components
categories: [React.js, Styled-Components]
date: 2020-04-23 13:26
image: /assets/img/posts/styled_components_thumb.jpg
---

# Styled Components 정리

리액트의 스타일링 방법은 여러가지가 있습니다. 
<br>
그 중 한가지 방법인 styled-components에 대해 알아보겠습니다.

css는 class가 중복이 될 수 있습니다. 프로젝트의 css파일을 분리해서 작성한다 하더라도 웹팩에서 빌드하게 될때 하나의 파일로 합쳐지게 되면 class가 전역에서 작동하게 될 수 밖에 없습니다.

중복을 피하기 위해서 세세한 작성을 하는 등 불편함이 많았죠.

styled-components는 백틱(`)을 이용한, 템플릿 리터럴의 안쪽에 스타일을 정의 하는 방식입니다.

예제와 함께 살펴 볼껀데, 저는 CRA(create-react-app)로 생성한 프로젝트로 진행 하겠습니다.

## Install

```terminal
npm install styled-components
```

## Example Code

```javascript
import React from "react";
import Styled from "styled-components";

const Button = Styled.button`
  border: none;
  background-color: palevioletred;
  padding: 8px 16px;
  border-radius: 20px;
  color: white;
`;

function App() {
  return(
    <div>
      <Button>Button Style</Button>
    </div>
  )
}

export default App;
```

<i>Styled-Components는 NO-CLASS를 지향합니다. 스타일을 외부 CSS로 분리 하지 않으며, 컴포넌트 내부에 정의 하기때문에 클래스가 전역에서 중복 될 일이 사라졌습니다.</i>

styled-components를 import하였고 Button이라는 변수에 스타일을 담아서 JSX에 뿌려줍니다.

button이 아닌 div라던가 p태그 또한 아래와 같이 스타일링 해줄 수 있습니다.

```javascript
import React from "react";
import Styled from "styled-components";

const Button = Styled.button`
  border: none;
  background-color: palevioletred;
  padding: 8px 16px;
  border-radius: 20px;
  color: white;
`;

const Paragraph = Styled.p`
  font-size: 20px;
  color: black;
`;

function App() {
  return(
    <div>
      <Paragraph>Click Button!</Paragraph>
      <Button>Button Style</Button>
    </div>
  )
}

export default App;
```

***

## Global Styles

CSS나 SCSS에서 자주 사용하는 reset.css나 nomarlize.css같은 글로벌 스타일도 구현할 수 있습니다.

styled-components의 createGlobalStyle을 이용하면 됩니다.

```javascript
import Styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100vh;
  }
`;

function App() {
  return(
    <div>
      <GlobalStyle />
    </div>
  )
}

export default App;

```

## extend

또한, 이미 작성해놓은 컴포넌트의 스타일을 새로 만들 컴포넌트에 상속시켜 중복되는 스타일 코드를 줄일 수 있습니다.

```javascript
import React from "react";
import Styled from "styled-components";

const Button = Styled.button`
  font-size: 20px;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
`;

const BlackButton = Styled(Button)`
  background-color: black;
  color: white;
`;

const PinkButton = Styled(Button)`
  background-color: pink;
  color: white;
`;

function App() {
  return(
    <div>
      <Button>Normal Button</Button>
      <BlackButton>Black Button</BlackButton>
      <PinkButton>Pink Button</PinkButton>
    </div>
  )
}

export default App;
```

Styled 함수에 상속 하고자 하는 스타일 컴포넌트를 파라미터로 주고 백틱(`)으로 개별 스타일링을 적용 해주면 되겠습니다.

<b>상속을 받으면서 다른 종류의 태그로도 상속을 받을 수 있습니다.</b>

```javascript
import React from "react";
import Styled from "styled-components";

const Paragraph = Styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Italic = Styled(Paragraph.withComponent("span"))`
  font-style: italic;
  font-weight: normal;
`;

function App() {
  return(
    <div>
      <Paragraph>This is Paragraph</Paragraph>
      <Italic>This is Span</Italic>
    </div>
  )
}

export default App;
```

withComponent에 변경하고자 하는 태그를 쓰면,

1. 상속을 받으면서 <br>
2. 태그를 변경하고 <br>
3. 커스텀 스타일을 입혀줄 수 있습니다.

***

## Mixin

Mixin은 재사용 가능하게 하는 방법 중 하나 입니다.

왠만하면 Sass를 사용할때 Mixin을 사용해본 경험이 있을겁니다. 없어도 상관없구요.
styled-components에도 Mixin을 사용 할 수 있습니다.

```javascript
import React from "react";
import Styled, {css} from "styled-components";

const Button = Styled.button`
  color: white;
  background-color: black;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
`;

const hover = css`
  &:hover {
    background-color: skyblue;
  }
`;

const PinkButton = Styled(Button)`
  background-color: pink;
  ${hover}
`;

const GreenButton = Styled(Button)`
    background-color: green;
    ${hover}
`;

function App() {
  return(
    <div className="App">
      <Button>Button</Button>
      <PinkButton>PinkButton</PinkButton>
      <GreenButton>GreenButton</GreenButton>
    </div>
  )
}

export default App;
```

css를 추가로 import하고, 백틱(`)과 함께 hover 스타일을 정해준후,
PinkButton과 GreenButton은 Button을 상속받으면서 ${hover}로 hover 스타일을 지정 해준 코드입니다.

초록버튼과 핑크버튼은 hover라는 mixin을 재사용하여 사용 한 모습입니다.

***

## Theme

<i>styled-components 또한 외부에서 정의한 color를 import 시킬 수 있습니다. </i>

```javascript
// color.js
const color = {
    default: "white",
    palevioletred: "palevioletred",
}

export default color;
```

이 color 테마를 import해서 Provider 방식으로 사용할 수 있습니다.

<script src="https://gist.github.com/gwanwoodev/2814a043dbbc822af1d78718d6fa9344.js"></script>

ThemeProvider의 theme이라는 props에 import한 color 객체를 넣어주었습니다.

Child인 Button들에는 color의 옵션들인 default, palevioletred를 넘겨주었고, 
실제 Button 스타일 컴포넌트에 props를 받아서 3항 연산자로 색상을 정한 모습입니다.

![styled_components_01](https://gwanwoodev.github.io/assets/upload/styled_components_01.jpg)

styled-components 에 대해서 굵고 빠르게 핵심만 정리 해보았습니다.

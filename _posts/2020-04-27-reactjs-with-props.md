---
layout: post
title: "React.js 04. 리액트 Props"
featured-img: reactjs_with_props
categories: [React.js]
date: 2020-04-27 10:02
image: /assets/img/posts/reactjs_with_props_thumb.jpg
---

# Props

이번 포스팅 에서는 리액트에서 컴포넌트를 다루는 방법 중 하나인 props를 알아 봅시다.

props는 <b>부모 컴포넌트가 자식 컴포넌트에게 주는 값</b> 입니다.

데이터는 <i>'위에서 아래로만 간다'</i> 라고 생각하시면 될 것 같습니다.
자식 컴포넌트에서는 받기밖에 못하고 부모에게 데이터를 줄 수는 없는 것이죠. 또한 받은것을 수정 하지도 못합니다.

자식 입장에서는 말 그대로 받기만 하는 데이터 라고 생각하시면 됩니다.

그럼 바로 리액트 Props를 활용 해봅시다.

## Create Components

먼저 부모는 App.js가 될 것이고, 자식 컴포넌트를 만들어 봅시다.

저는 src 폴더안에 MyInfo.js를 생성 하겠습니다.

<script src="https://gist.github.com/gwanwoodev/4113f9243670e9f1c50ec897c74a638a.js"></script>

Class Components 에서는 받아온 props 값을 <b>this</b> 키워드로 조회 합니다. 저는 name, age, phNum, message 총 4개의 props를 this를 통하여 p태그에 넣어주었습니다.

부모 컴포넌트인 App.js를 작성 해봅시다.

<script src="https://gist.github.com/gwanwoodev/47467fca807bd1b84fa8b445107fc1c2.js"></script>

import 키워드를 통해서 MyInfo 컴포넌트를 불러와 일반적인 HTML 태그를 사용하듯이 

```javascript
<Component />
```

형식으로 호출 해주면 되는데, props 같은 경우는 key=value 형식으로 넣어주면 되겠습니다.

약간 html에서 태그에 class를 지정해주는 것과 비슷 합니다.

작성후 실행 해봅시다.

```terminal
npm start
```

![reactjs_props_01](https://gwanwoodev.github.io/assets/upload/reactjs_props_01.jpg)

짜잔. 부모 컴포넌트에서 내려준 4개의 props가 자식 컴포넌트에서 성공적으로 받아온것을 확인 할 수 있습니다.

## Default Props

규모가 꽤 있는 프로젝트를 개발 한다고 해봅시다. 사람은 누구나 실수는 있는법..이죠?

부모 컴포넌트에서 props를 내려 주는것을 깜빡 하거나, 필수 값이 아닌 경우 같이 특정 상황에서는 어떻게 해야할까요?

<b>Default Props 라는 것이 있습니다.</b>

ES6에서의 Default Values와 같은 개념입니다. Props의 기본값을 설정하는 것인데 바로 코드를 봅시다.

<script src="https://gist.github.com/gwanwoodev/69433cd217e4af1a421db5e5972c0080.js"></script>

저렇게 작성하면, 부모 컴포넌트인 App.js에서 Props값을 생략 할 경우, defaultProps값으로 대체 됩니다.

***

## Functional Components

Props를 받아와서 보여주기만 하는 역할을 한다면, Class형 Components보다 간편하게 작성할 수 있습니다.

바로 함수형 컴포넌트로 작성 하는 것인데요. MyInfo 컴포넌트는 4개의 Props를 받아와서 출력만 해주는 역할을 하니 함수형 컴포넌트가 적합 합니다. 

<script src="https://gist.github.com/gwanwoodev/54ed30c075b8af18ddaeef8bc05d2265.js"></script>

위와 같이 작성 해줄 수 있습니다. 훨씬 코드가 깔끔 해졌는데요.

다음 포스팅에서는 동적인 데이터를 다룰 수 있는 state에 대해 배워 봅시다.
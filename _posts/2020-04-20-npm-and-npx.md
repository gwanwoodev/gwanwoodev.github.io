---
layout: post
title: "npm 과 npx 차이"
featured-img: npm_and_npx
categories: [Node.js]
date: 2020-04-20 14:23
image: /assets/img/posts/npm_and_npx_thumb.jpg
---

# NPM vs NPX

먼저 npm 과 npx 의 차이를 이야기 하기 전에, 글로벌 모듈에 관해 이야기를 해보겠습니다.

```terminal
npm install create-react-app
```

아무 옵션없이 install을 하게 된다면 프로젝트를 생성 할 때마다 위와 같은 명령어를 입력하여 모듈을 설치 해야 할 것입니다.

설치 할때 옵션을 줄 수 있다는 사실을 아시나요?

대표적으로 '-g' 옵션이 있습니다.

```terminal
npm install -g create-react-app
```

여기서 '-g'는 global의 약자 입니다.

'-g' 옵션을 주게되면 컴퓨터의 프로젝트들이 참조 할 수 있는 글로벌한 공간에, 설치 하게 됩니다.

즉 한번 글로벌하게 설치를 하면, 각 각 다른 프로젝트들과 공유해서 사용 할 수 있다는 말입니다.

모듈을 공유해서 쓰는 것은 좋습니다.

하지만 몇몇 개의 애로사항이 존재 합니다.

1. 버전 문제

10개의 프로젝트가 글로벌로 설치된 동일한 모듈을 사용한다고 가정 해봅시다.

이 각각의 프로젝트가 이 모듈의 다른 버전이 필요할때, 혹은 특정 버전이 아니면 실행이 되지 않을때.. 문제가 발생합니다.

2. 낭비

보일러 플레이트 생성 도구 (예시로는 create-react-app 이 있겠습니다.) 같은 경우는

프로젝트 생성 최초 1번만 실행 하면 되는데, 생성 후 계속 글로벌한 공간에 남아있으면 낭비가 되겠지요?

그래서 npx가 나오게 되었습니다.

## NPX 사용 방법

npx는 실행 할 때마다 최신 버전의 모듈을 불러와서, 설치 하고 다시 그 모듈을 삭제하는 방식으로 돌아갑니다.

npx는 1회성 보일러 프로젝트 생성과 같은 모듈에 효과적이라고 할 수 있습니다.

사용 방법은 npm과 동일 합니다.

```terminal
npx install create-react-app
```

npm 과 npx 의 차이 이해하셨나요?

잘 이해되셨다면, 덧글과 좋아요 부탁 드리겠습니다!
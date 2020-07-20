---
layout: post
title: "node-cron으로 Node.js 스케쥴러 설정하기"
featured-img: nodejs_schedule
categories: [Node.js, Node-Cron, Schedule]
date: 2020-07-20 12:36
image: /assets/img/posts/nodejs_schedule_thumb.jpg
author: gwanwoodev
---

# Node.js 스케쥴 설정 하기

필자는 최근에 사이드 프로젝트를 만들고 있었는데, 꼭 구현해야 하는 기능이 있었다.
매일매일 지정한 시간에, 코드를 실행 시켜야 했는데,

처음에는 그렇게 깊게 생각하지 않고 <i>" setInterval 사용하면 되겠지 "</i> 라는 생각에 개발을 진행하였고, 막상 그 부분을 구현 하려고 했는데

<i>" 어라? 생각해보니까 setInterval은 ms단위로 실행시키지, 원하는 시간대를 지정할 수 없구나! </i>

그제서야 깨달았다.

필자가 원하는 것은, 하루에 2번, 07:00, 19:00 두타임에 원하는 코드를 실행 시키는 것이었다.

그래서 찾아보았는데, <b>node-cron</b>이라는 패키지가 있어 이것으로 구현하게 되었다.

## Cron 표현식(expression)

코드를 살펴보니, 크론 이라는 특정 표현식으로 시간을 나타내는것 같았다.

Cron은 유닉스 계열 운영체제에서 시간 기반으로 Job Scheduling을 하는 후면 프로세스의 명칭이고,

이 Job Scheduling에서 파라미터로 넣어주는 시간을 Cron 표현식으로 표현하게 된다.
또 찾아보니, 라이브러리마다 조금씩 표현식이 달랐는데, node-cron이라는 라이브러리를 기준으로 설명 하겠다.

node-cron에 필요한 값은 크게 6가지가 있다.

<i> seconds </i>(0-59) - optional<br>
<i> minute </i>(0-59)<br>
<i> hour </i>(0-23)<br>
<i> day of month </i>(1-31)<br>
<i> month </i>(1-12)<br>
<i> day of week </i>(0-7 or names)<br>

위 값들을 참고해서, 원하는 시간에 스케쥴 설정이 가능하다.

아! 나는 그런거 모르겠고 배우기도 귀찮다! 하는사람은 아래 링크를 사용하면 된다.

[crontab.guru](https://crontab.guru/)

## node-cron으로 스케쥴러 설정하기

```terminal
npm install --save node-cron
```

### node-cron methods

```javascript
const cron = require("node-cron");

const task = cron.schedule("* * * * *", () => {
    console.log("Execute At Every Minutes");
}, {
    scheduled: false
});

task.start();
```

보통 크게 3가지의 메소드를 자주 사용한다.

start, stop, destory

의미들은 다들 유추 할 수 있을거라고 생각하고 넘어가겠다.

그렇다면 매일 12:00에 코드를 실행시키고 싶다는 가정 하에 예제 코드를 작성해보자.

```javascript
const cron = require("node-cron");

const task = cron.schedule("0 12 1-31 * *", () => {
    console.log("Execute At Every Minutes");
}, {
    scheduled: false
});

task.start();
```

Cron 표현식 부분을 순서대로 살펴 보면, 0분에, 12시에, 매일(1~31) 을 의미한다.

<i>추가로 설명하자면 "*" 표시는 any value 이다.</i>
<br>
좀 헷갈릴 수 있는데, 그럴 경우, 친절한 누군가가 만들어놓은 cron generator 서비스를 이용하자!

## End..

필자가 이전에 Heroku sleep 방지 포스팅을 한적이 있다. 여기서,

node-cron을 이용해서, 15분 간격으로 heroku 서버에 request를 해서 sleep 되지 않게 방지 한다거나, 

추가적으로 매일매일 실행이 필요한 스케쥴이 있다면, <b>node-cron</b>으로 스케쥴링 하자!

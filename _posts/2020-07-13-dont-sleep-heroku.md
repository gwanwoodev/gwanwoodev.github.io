---
layout: post
title: "Heroku 아주 쉽게 sleep 방지 하는방법"
featured-img: dont_sleep_heroku
categories: [Heroku, Deploy]
date: 2020-07-13 13:25
image: /assets/img/posts/dont_sleep_heroku_thumb.jpg
author: gwanwoodev
---

# Heroku 아주 쉽게 Sleep 방지 하는 방법

필자는 최근에 사이드 프로젝트를 개발을 완료 해서, 어떤 플랫폼에서 배포를 할까 생각 중 이었다. AWS 프리 티어 기간이 만료되서 결국 Heroku를 선택하게 되었다.

사이드 프로젝트에서 24시간 Array가 값을 계속 들고 있어야 했는데,

시간 날때 데이터를 확인 해보니, "띠용?" 데이터가 없어졌다..!!

알고 보니 , Heroku 무료 서버는 일정 시간 트래픽이 없으면, <b>자동으로 sleep 모드로 들어가서</b> 데이터가 날라 간것..

이번 포스팅 에서는 아주 쉽게 Heroku sleep을 방지하는 방법을 소개 하고자 한다.

그 전에 먼저 Heroku 무료 서버에 대해 알아보자.

## Heroku Free Plan

헤로쿠는 기본적으로 계정 정보에 신용카드 정보를 등록하지 않으면 최대 18시간

Wake up 상태를 유지할 수 있다. 신용카드를 등록하면 하루종일 깨운 상태로 유지하는것이 가능하다.
이번 포스팅에서는 18시간동안 깨어있는 방법을 소개 하고자 한다.

***

## Kaffeine 사용하기!

친절한 외국의 누군가가 30분 주기로 트래픽을 보내주는 녀석을 찾았다.

[Kaffeine](http://kaffeine.herokuapp.com/)

![heroku_example_01](https://gwanwoodev.github.io/assets/upload/heroku_example_01.jpg)

사진과 같이, 본인이 헤로쿠에 배포한 앱의 주소를 적고 아래에 시간을 설정할 수 있다.
<br>
시간을 설정하면, 그 시간부터 6시간동안을 제외한 나머지 시간에 30분 주기로 트래픽을 보낸다!

12:00AM으로 설정 했다면, 12:00~06:00AM 동안은 트래픽을 보내지 않게되어 sleep 모드로 들어간다.

(24시간 돌리고 싶다면, 신용카드정보를 등록하고, 따로 코드를 작성해서 트래픽을 보내게끔 하면 된다.)


### 결론

아주 쉽게 sleep 모드를 방지 할 수 있는 방법 이긴 한데..

<b>아무리 생각해봐도 AWS가 최고 인듯하다....</b>

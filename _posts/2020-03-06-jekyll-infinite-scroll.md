---
layout: post
title: "Jekyll 블로그 무한 스크롤 적용하기 (Github Pages)"
featured-img: jekyll_infinite_scroll
categories: [Jekyll, Github Pages]
date: 2020-03-06 09:49
---

# Jekyll 블로그 무한 스크롤 적용하기 with Github Pages

Github Pages와 Jekyll을 사용해서 블로그를 오픈해서 글을 작성하고 있었지만..
<br>
글이 14개가 되갈 무렵, 이상한 점을 느꼈습니다.

<b>'어라? 페이지네이션이 없네?....'</b>

바로 추가해야겠다는 생각이 들어서 바로 행동에 옮겼지만.. (엄청난 삽질이 있을거라고 누가 알았겠는가..)

Card 형식에는 무한 스크롤이 더 예쁠것 같아서 검색해서 찾아보았습니다.

차근차근 따라오면 저처럼 삽질 안하고 바로 적용 할 수 있을거에요.

저는 [j911](https://j911.me) 님 블로그를 참고 하였습니다.

## Pagination 적용

먼저 계속 스크롤을 하려면 페이징이 구현 되어 있어야 하겠죠?

그래서 먼저 Pagination을 적용해야합니다.

Gemfile과 _config.yml 파일에 아래 내용을 추가 해줍시다.

<script src="https://gist.github.com/gwanwoodev/220cf1e624718e2c9ae8324dfb9df9f3.js"></script>

<script src="https://gist.github.com/gwanwoodev/e01c2dcec1d03b77d0897dffb4067fdb.js"></script>

paginate는 한 페이지에 보여질 게시글 수이며,
<br>
paginate_path는 /page/2 와같은 형태로 접근하도록 했습니다.

그리고 화면에 포스트들을 뿌려주는 html을 수정해야합니다. (index의 레이아웃)

제가 쓰는 테마 같은 경우는 default.html 입니다.

<script src="https://gist.github.com/gwanwoodev/2cb92dce439adb6ba7edafdf468a75b9.js"></script>

site.posts 를 paginator.posts로 바꿔주시면 됩니다.

그리고 중요한점...!!
<br>
제가 이 이후에 몇시간 동안 삽질을 엄청했습니다 -ㅅ-..

<b>index.md파일의 확장자를 html로 바꿔줘야합니다</b>.. 
<br>
(이거 몰라서 왜안되지 하면서 멘탈이 깨졌었네요 ㅜ)

여기 까지가 Pagination의 완성입니다.!
<br>
적용하고 나면, 여러분들의 블로그에 /page/2 에서 다음 Contents를 볼수 있을겁니다.

***

## 무한스크롤 적용하기

이제 무한스크롤 라이브러리를 다운받아야 하는데,
<br>
유일하게 [j911](https://j911.me)님이 만들어 두신 라이브러리가 있어서 활용 했습니다.

근데 Mobile 환경에서, Scroll Size가 안맞아, 적용되지 않는 Issue가 있어서, 제가 따로 수정해놨습니다.
<br>
아래 링크에서 다운받으시면 됩니다.

[InfiniteScroll.js 수정본](https://gwanwoodev.github.io/assets/js/InfiniteScroll.js)

원본 InfiniteScroll 라이브러리의 출처는 아래와 같습니다.

[https://github.com/J911/jekyll-infinite-scroll](https://github.com/J911/jekyll-infinite-scroll)


다운 받으셨으면, 적용을 해주어야 겠죠?

<script src="https://gist.github.com/gwanwoodev/06aa6b1d5625dfe7dd323bd5fdb06bbc.js"></script>

라이브러리를 불러와주고, 변수에 값을 넣어놓았습니다.

postWrapper 변수는 게시글전체를 감싸고 있는 태그의 Class나 Id를 기입해주시면 됩니다.
<br>
제 블로그 같은 경우에는 .post-list입니다.

paginatePath 변수는 제 글을 보고 따라하셨다면 똑같이 기입 해주시면 됩니다.

적용후 확인하면 무한스크롤이 적용되는 것을 볼 수 있을겁니다.

## 글을마치며..

원래 Tistory 블로그를 하다가 Jekyll로 막 넘어 왔을때는
<br>
생소한 부분이 많았습니다. 진짜 삽질 많이 했는데

제 글을 보시고 조금이라도 도움이 되셨으면 좋겠네요.
---
layout: post
title: "React.js 09. Array (1)"
featured-img: reactjs_array
categories: [React.js]
date: 2020-06-25 14:15
image: /assets/img/posts/reactjs_array_thumb.jpg
---

# Array

간만의 포스팅이네요. 이번에는 리액트에서 어떻게 배열을 다루는지 알아 보도록 합시다.

보통 기존 자바스크립트를 사용할때 배열에 추가를 할때 push / pop 메소드를 사용했을겁니다.
<br>
하지만 React.js 로 코드를 작성할 때는, 절대로 state 내부값을 수정하면 안됩니다.

push, pop splice 등과 같은 built_in function은 배열을 직접적으로 수정하기 때문에, 
리액트에서 강조하는 <b>불변성 유지</b>를 어기게 되고, 문제가 발생하게 됩니다.

그렇다면 어떻게 다루어야 할까요?

map, concat 과 같은 <b>새 배열</b>을 만들어내는 함수들을 사용해야 합니다.

바로 코드를 작성 해봅시다.

***

## Array Insert

```javascript
// App.js 
import React, {Component} from 'react';

class App extends Component {
    state = {
        posts: [
            {
                id: 1,
                title: `let's start react.js`,
                content: 'awesome react.js...',
                author: 'gwanwoodev'
            },
            {
                id: 2,
                title: `let's start styled-component`,
                content: 'awesome styled-component...',
                author: 'gwanwoodev'
            },
            {
                id: 3,
                title: `let's start mongodb`,
                content: `awesome mongodb...`,
                author: 'annonymous'
            }
        ]
    }

    render() {
        const {posts} = this.state;

        return(
            <div>
                <Posts posts={posts}/>
            </div>    
        );
    }
}

export default App;
```

App.js에서, posts에 간단한 블로그 형식의 데이터를 넣어주었습니다.

이 posts를 Posts 컴포넌트에 props로 넘겼습니다.

```javascript
// Posts.js
import React from "react";

function Post({post}) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>author: {post.author}</p>
        </div>
    );
}

function Posts({posts}) {
    return(
        <div>
            {posts.map(post => (
                <Post post={post}/>
            ))}
        </div>
    )
}

export default Posts;
```

Posts와, Post 컴포넌트를 봅시다.

Posts에서 먼저 App.js로부터 넘겨받은 posts props를 javascript map함수를 통해,
<br>
Post 컴포넌트에 각 데이터들을 넘겨주었지요.

데이터가 3개있었으니, 결과적으로 Post컴포넌트는 3번 불러와지게 됩니다.

여기서 실행을 해보면, 정상적으로 실행이 될테지만, Warning이 발생합니다.

![reactjs_array_01](https://gwanwoodev.github.io/assets/upload/reactjs_array_01.jpg)

```javascript
Warning: Each child in a list should have a unique "key" prop.
```

얼핏 보아도 유니크한 key prop이 필요하다는 내용인데요,
<br>
key를 부여하지 않게되면, 리액트는 굉장히 비효율적으로 업데이트를 하게 됩니다.

유니크한 값을 key로 부여해주면 리액트가 더욱 똑똑하게 효율적으로 변화를 감지하고 업데이트 하기 때문에, key값을 꼭 부여해줍시다.

key값으로 적당한 값은 id가 있으니, 아래와 같이 key값을 넣어주면 되겠습니다.

```javascript
//Posts.js

function Posts({posts}) {
    return(
        <div>
            {posts.map(post => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    )
}
```

개발 하면서, 마땅한 key값이 없다면, map함수의 index를 이용하는 방법도 있습니다.

```javascript
//Posts.js

function Posts({posts}) {
    return(
        <div>
            {posts.map((post, index) => (
                <Post post={post} key={index}/>
            ))}
        </div>
    )
}
```

이 같은 경우는 Warning이 사라질 뿐, key가 없는것과 성능은 똑같습니다.

(그냥 무조건 key값을 주면 모든 문제는 해결!!)

***

## Recap

* React가 강조하는 <b>불변성 유지</b>를 위해, concat, map과 같은 함수를 사용합시다.
* Array를 Rendering 할때는 Unique한 Key값을 사용합시다.
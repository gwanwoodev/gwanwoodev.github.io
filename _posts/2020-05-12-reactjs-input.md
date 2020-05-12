---
layout: post
title: "React.js 08. Input"
featured-img: reactjs_input
categories: [React.js]
date: 2020-05-12 14:
image: /assets/img/posts/reactjs_input_thumb.jpg
---

# Input 상태 관리

이번 포스팅에서는 Input 컴포넌트의 상태 관리를 어떻게 하는지 알아 봅시다.

먼저 App.js에서, InputComponent를 Import 합니다.

```javascript
import React, {Component} from 'react';
import InputComponent from "./InputComponent";

class App extends Component {
    render() {
        return(
            <InputComponent />
        )
    }
}

export default App;
```

이제 InputComponent를 작성 해봅시다.

```javascript
import React, {Component} from "react";

class InputComponent extends Component {
    state = {
        name: ''
    }
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return(
            <form>
                <input placeholder="name" value={this.state.name} onChange={this.handleChange} />
                <p>{this.state.name}</p>
            </form>
        )
    }
}

export default InputComponent;
```

먼저 state에 name이라는 녀석을 정의 해주었습니다.

handleChange의 내용을 보면, <i>event.target.value</i> 를 setState에 넣어 주었는데, 이렇게 하면
event 객체에 담겨있는 현재 텍스트값을 읽어올 수 있습니다.

form 안의 input을 보면, onChange를 볼 수 있는데, onChange는 input의 텍스트값이 바뀔때마다 실행이 되는 event 함수입니다.

정리 하자면, input의 value가 바뀔때마다, 우리가 정의한 handleChange가 실행이 되는 것이지요.

실행해서 테스트 해봅시다.

```terminal
npm start
```

input에 아무 글자를 입력해보세요, 그 값을 받아서, 업데이트 되는 것을 확인 할 수 있습니다.

![reactjs_input_ex01](https://gwanwoodev.github.io/assets/upload/reactjs_input_ex01.jpg)

위 코드에서는 input이 한개일 경우에만 작동하도록 되어있지요?

그렇다면 input이 여러개 일 경우에는 어떻게 할까요?

```javascript
import React, {Component} from "react";

class InputComponent extends Component {
    state = {
        name: '',
        age: 0
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <form>
                <input
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    name="age"
                />

                <p>{this.state.name} {this.state.age}</p>
            </form>
        )
    }
}

export default InputComponent;
```

input의 name 속성을 이용하면, event.target.name로 값을 읽을 수 있습니다.

handleChange 함수 안에 setState에서 사용된 문법은 <i>Computed Property Names</i> 라는 문법인데,

모르시는 분은 ES6 포스팅을 다시 한번 읽어 보시면 좋을 것 같습니다.

이제 결과를 확인 해볼까요?

```terminal
npm start
```
두 input에서 값을 입력해보세요!

![reactjs_input_ex02](https://gwanwoodev.github.io/assets/upload/reactjs_input_ex02.jpg)

***

## Pass Data To Parent-Component

state 안의 value들을 부모 컴포넌트로 전달 해주고 싶을 경우에는, 

<b>부모 컴포넌트에서 메소드를 정의</b>하고 이 메소드를 자식에게 전달 후, 

<b>자식 내부</b>에서 이 전달 받은 함수를 호출하는 방식을 사용 합니다.

위 예제로 설명을 해보겠습니다.

* App Component에서, 특정 메소드를 정의합니다.
* 정의한 메소드를 InputComponent에 전달 합니다.
* InputComponent에서 props로 전달받은 함수를 호출 합니다.
* App Component에서 파라미터로 받은 값을 사용 할 수 있습니다.

먼저 App.js 코드를 작성 해봅시다.

```javascript
import React, {Component} from 'react';
import InputComponent from "./InputComponent";

class App extends Component {
    handleCreate = (data) => {
        console.log(data);
    }

    render() {
        return(
            <InputComponent onCreate={this.handleCreate}/>
        )
    }
}

export default App;
```

handleCreate라는 메소드를 정의하였고, 이 함수는 data라는 파라메터를 console로 찍어주는 역할을 합니다.

그리고 InputComponent에 onCreate라는 Props에 담아 넘겼지요.

InputComponent 코드를 살펴 봅시다.

```javascript
import React, {Component} from "react";

class InputComponent extends Component {
    state = {
        name: '',
        age: 0
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            age: 0
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    name="age"
                />

                <p>{this.state.name} {this.state.age}</p>
                <button type="submit">Submit!</button>
            </form>
        )
    }
}
export default InputComponent;
```

handleSubmit 함수부터 보면, <i>event.preventDefault()</i> 는 이벤트 중지를 시키는 함수입니다.

보통 submit을 하게 되면 페이지는 Re-load 되고, 그렇게 되면 갖고있는 상태값들이 초기화 되어 버리기 때문에, re-load를 방지해주기 위해 호출 해주었습니다.

추가적으로 props로 받은 onCreate에 현재 state(name과 age)를 담아 넘겼습니다.

setState를 통해, submit되고 난후의 값 초기화도 해주었고요.

render 쪽에서는 form에 onSubmit Event를 handleSubmit으로 정의해주었고, submit 버튼을 만들었습니다.

바로 결과를 확인 해봅시다.

```terminal
npm start
```

submit 버튼을 누르기 전

![reactjs_input_ex03](https://gwanwoodev.github.io/assets/upload/reactjs_input_ex03.jpg)

submit 버튼을 누른 후

![reactjs_input_ex04](https://gwanwoodev.github.io/assets/upload/reactjs_input_ex04.jpg)

잘 동작이 되나요? 마지막으로 이 과정을 정리 해봅시다.

### 정리

* App.js에서 handleCreate(파라메터를 받아 console로 찍어줌)를 정의
* InputComponent에 onCreate Props에 담아 내려 보냄
* InputComponent에서 props로 내려받은 onCreate를 state를 담아, 호출
* App.js에서 InputComponent의 state를 data라는 이름의 파라메터로 받아 출력!
* Bonus - event.preventDefault는 이벤트 실행 중지 역할을 함.
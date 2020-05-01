---
layout: post
title: "React.js 06. 리액트 라이프사이클(LifeCycle)"
featured-img: reactjs_with_lifecycle
categories: [React.js]
date: 2020-05-01 10:21
image: /assets/img/posts/reactjs_with_lifecycle_thumb.jpg
---

# Life Cycle API

이번 포스팅에서는 React.js의 라이프 사이클(LifeCycle)을 알아 봅시다.

컴포넌트가 브라우저에 렌더링 되기 전에 호출되는 API들이 몇몇개 있는건 아실겁니다.

이 API들 중에서, React 16.3 이후 Deprecated된 몇몇개의 것들은 언급하지 않겠습니다.

일단 첫번째로, 대표적으로 constructor가 있겠습니다.

```javascript
constructor(props) {
    super(props);
}
```

constructor는 컴포넌트 생성자(Constructor) 함수이며, 컴포넌트가 만들어질 때마다 이 함수가 실행 됩니다.

## componentDidMount

componentDidMount API는 Component가 <b>화면에 나타나게 됬을때</b> 실행 됩니다.

보통 비동기 요청으로 데이터를 받아오거나, DOM의 속성을 변경하거나 할때 사용 합니다.

<i> 사용 빈도가 높습니다 </i>


## static getDerivedStateFromProps

getDerivedStateFromProps는 props로 받아온 value를 state로 동기화 하는 작업을 할때 사용합니다.

```javascript
static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.value !== prevState.value) {
        return { value: nextProps.value }
    }
    return null;
}
```

먼저 위 함수는 setState를 호출하는 용도가 아닙니다. Props로 받아온 값을 State에 설정해줄때 사용합니다.

다른 리액트 LifeCycle APi와는 다르게 static 키워드가 붙으며

이 함수에서는 this 키워드를 사용 할 수 없습니다. 특정 값을 return 해주게 되면 해당 내용들이 컴포넌트의 state로 설정되고,

<i>null이 반환되면 따로 업데이트 할 것이 없기 때문에 아무 일도 일어나지 않습니다.</i>

## shouldComponentUpdate

shouldComponentUpdate는 컴포넌트가 Re-rendering 할지 안할지를 정해줄 수 있는 함수입니다.

```javascript
shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 5;
}
```

return 값이 false가 되면 업데이트를 하지 않기 때문에, 위 코드에서는 숫자의 마지막 자리가 5이면
Re-rendering을 하지 않게 되는 것이죠.

<i> 여기서 원래 기본값(Default Values)은 true 입니다. </i>

이 LifeCycle API는 컴포넌트를 최적화 할때 가장 많이, 유용하게 사용하게 됩니다.

불필요하게 사용되고 있는 CPU 자원을 줄여주기 위해서 shoudComponentUpdate를 통한 최적화를 하는 것이죠.

## getSnapshotBeforeUpdate

getSnapshotBeforeUpdate는, 컴포넌트에 변화가 생기기 <b>직전</b>의 DOM 상태를 가져와, 어떠한 값을 반환하게 되면 그 다음 실행 되는 <i>componentDidUpdate</i> 함수에서 받아와 그 값을 사용할 수 있습니다.

```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if(prevProps.color !== this.props.color) {
        return this.myRef.style.color;
    }
    return null;
}
```

<i>추가적으로 Functional Components + React Hooks 를 사용할때 위 함수를 대체 할수 있는 기능이 없습니다.</i>

DOM에 변화가 반영되기 직전의 DOM 속성을 확인할때 이 LifeCycle API를 사용하면 된다는 것만 기억하면 될 것 같습니다.

## componentDidUpdate

<i>componentDidUpdate</i>는  Re-rendering이 끝난 후, 변화가 모두 끝난 후에 실행되는 함수 입니다.

3번째 파라메터로 getSnapshotBeforeUpdate 에서 return된 값을 사용 할 수 있습니다.

```javascript
componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidupdate", pervProps, prevState);
    if(snapshot) {
        console.log("업데이트 전의 색상", snapshot);
    }
}
```

***

## Unmount

Unmount는 컴포넌트가 화면에서 사라지는 것을 의미하며, 이에 관한 LifeCycle API는

<i>componentWillUnmount</i> 가 있겠습니다.

## componentWillUnmount

<i>componentWillUnmount</i>는 해당 컴포넌트가 화면에서 사라지기 직전에 실행되는 함수입니다.

```javascript
componentWillUnmount() {
    console.log("componentWillUnmount");
}
```

이 함수에서는 DOM에 직접 등록한 이벤트를 제거하거나 

<i>setTimeout</i> 을 걸어 놓았다면, <i>clearTimeout</i>으로 제거를 하는 용도로 사용 합니다.

<i> 외부 라이브러리를 사용하고 해당 라이브러리에 dispose가 있다면, 이 함수를 호출해주시면 되겠습니다.</i>

***

리액트 라이프사이클(LifeCycle) 포스팅은 여기까지 입니다. 

에러를 잡을 수 있는 한가지의 API가 더 있는데 다음 포스팅에서는 error를 catch할 수 있는 <i>componentDidCatch</i> 에 대해 알아봅시다.


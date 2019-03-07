---
title: 요청 취소
description: Axios 라이브러리 요청 취소에 대해 학습합니다.
---

# 해제(Cancellation)

취소 토큰(cancel token)을 사용하여 요청을 취소 할 수 있습니다.

:::tip NOTE
Axios 취소 토큰 API는 [취소가능한 promises 제안](https://github.com/tc39/proposal-cancelable-promises)을 기반으로 합니다.
:::

아래와 같이 `CancelToken.source()` 팩토리를 사용하여 취소 토큰을 만들 수 있습니다.

```js{1-2}
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 오류 처리
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// 요청 취소 (message 매개 변수는 선택 사항)
source.cancel('Operation canceled by the user.');
```

`executor` 함수를`CancelToken` 생성자(class)에 전달하여 취소 토큰을 만들 수도 있습니다.

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // excutor 함수는 cancel 함수를 매개 변수로 받습니다.
    cancel = c;
  })
});

// 요청 취소
cancel();
```

:::tip NOTE
동일한 취소 토큰으로 여러 요청을 취소 할 수 있습니다.
:::
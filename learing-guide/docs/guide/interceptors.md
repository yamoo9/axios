---
title: 인터셉터
description: Axios 라이브러리 인터셉터에 대해 학습합니다.
---

# 인터셉터

`then`이나`catch`로 처리되기 전에 요청이나 응답을 가로챌 수 있습니다.

```js
// 요청 인터셉터 추가
axios.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 수행할 일
    // ...
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error);
  });

// 응답 인터셉터 추가
axios.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공
    // ...
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    // ...
    return Promise.reject(error);
  });
```

추후 인터셉터를 제거(Eject) 해야 할 수도 있습니다.

```js
const myInterceptor = axios.interceptors.request.use(function () { /*...*/ });
axios.interceptors.request.eject(myInterceptor);
```

사용자 정의 axios 인스턴스에 인터셉터를 추가 할 수 있습니다.

```js
const instance = axios.create();
instance.interceptors.request.use(function () { /*...*/ });
```
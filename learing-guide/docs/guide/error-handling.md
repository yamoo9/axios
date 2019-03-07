---
title: 오류 처리
description: Axios 라이브러리 오류 처리에 대해 학습합니다.
---

# 오류 처리

axios 라이브러리 오류 처리 방법은 다음과 같습니다.

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    else if (error.request) {
      // 요청이 이루어 졌으나 응답을 받지 못했습니다.
      // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
      // Node.js의 http.ClientRequest 인스턴스입니다.
      console.log(error.request);
    }
    else {
      // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

config 옵션 `validateStatus`을 사용하여 사용자 정의 HTTP 상태 코드 오류 범위를 정의 할 수 있습니다.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    // 상태 코드가 500 이상일 경우 거부. 나머지(500보다 작은)는 허용.
    return status < 500;
  }
})
```
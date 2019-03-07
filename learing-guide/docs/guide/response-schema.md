---
title: 응답 스키마
description: Axios 라이브러리 응답 스키마에 대해 학습합니다.
---

# 응답 스키마(Schema)

요청에 따른 응답 결과는 다음 정보가 들어 있습니다.

```js
{
  // `data`는 서버가 제공한 응답(데이터)입니다.
  data: {},

  // `status`는 서버 응답의 HTTP 상태 코드입니다.
  status: 200,

  // `statusText`는 서버 응답으로 부터의 HTTP 상태 메시지입니다.
  statusText: 'OK',

  // `headers` 서버가 응답 한 헤더는 모든 헤더 이름이 소문자로 제공됩니다.
  headers: {},

  // `config`는 요청에 대해 `axios`에 설정된 구성(config)입니다.
  config: {},

  // `request`는 응답을 생성한 요청입니다.
  // 브라우저: XMLHttpRequest 인스턴스
  // Node.js: ClientRequest 인스턴스(리디렉션)
  request: {}
}
```

`then`을 사용하면 다음과 같이 응답을 받을 수 있습니다.

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

:::tip NOTE
`catch`를 사용하거나 `then`의 2번째 전달인자로 [reject 콜백](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)을 설정하면, 응답은 [오류 처리](./error-handling) 섹션에서 설명한 것처럼 `error` 객체를 전달합니다.
:::
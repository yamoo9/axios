---
title: Form 전송 주의사항
description: Axios 라이브러리 Form 전송 주의사항에 대해 학습합니다.
---

# application/x-www-form-urlencoded

기본적으로 axios는 JavaScript 객체를 'JSON'으로 직렬화(serialize) 합니다.
[application/x-www-form-urlencoded](https://developer.mozilla.org/ko/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data) 포멧 대신 데이터를 보내려면 다음 옵션 중 하나를 사용할 수 있습니다.

## 브라우저

브라우저에서 다음과 같이 [URLSearchParams API](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)를 사용할 수 있습니다.

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

:::tip NOTE
URLSearchParams는 [모든 브라우저에서 지원되지는 않지만](http://www.caniuse.com/#feat=urlsearchparams),
사용할 수 있는 [polyfill](https://github.com/WebReflection/url-search-params)이 있습니다.
:::

또는 [qs](https://github.com/ljharb/qs) 라이브러리를 사용하여 데이터를 인코딩 할 수 있습니다.

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

ES6+ 사용하는 경우는 아래와 같이 작성할 수 있습니다.

```js
import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
```

## Node.js

다음과 같이 [querystring](https://nodejs.org/api/querystring.html) 모듈을 사용할 수 있습니다.

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

물론 qs 라이브러리를 사용할 수도 있습니다.

```js
const qs = require('qs');
axios.post('http://something.com/', qs.stringify({ foo: 'bar' }));
```

:::tip NOTE
Node.js의 `querystring` 메소드는 [중첩된 객체를 문자열화 하는데 문제점](https://github.com/nodejs/node-v0.x-archive/issues/1665)이 있습니다.
중첩된 객체를 문자열화 해야할 경우가 잦을 경우 `qs` 라이브러리 사용이 권장됩니다.
:::
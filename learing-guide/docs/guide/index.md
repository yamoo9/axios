---
title: Axios
description: Axios 라이브러리에 대해 소개합니다.
---

## Axios란?

[Axios](https://github.com/axios/axios)는 브라우저, Node.js를 위한 [Promise API](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 활용하는 HTTP 비동기 통신 라이브러리입니다.

## 기능

- 브라우저 환경: [XMLHttpRequests](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest) 요청 생성
- Node.js 환경: [http](https://nodejs.org/api/http.html) 요청 생성
- [Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise) API 지원
- 요청/응답 차단(Intercept)
- 요청/응답 데이터 변환
- 취소 요청
- JSON 데이터 자동 변환
- [사이트 간 요청 위조(XSRF)](https://goo.gl/HHzpwP) 보호를 위한 클라이언트 사이드 지원

## 브라우저 호환성

axios 라이브러리 브라우저 호환성 표 입니다.

<base-img style="border:0" url="browser-chrome.png" /> | <base-img style="border:0" url="browser-firefox.png" /> | <base-img style="border:0" url="browser-safari.png" /> | <base-img style="border:0" url="browser-opera.png" /> | <base-img style="border:0" url="browser-edge.png" /> | <base-img style="border:0" url="browser-ie.png" /> |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

[<base-img url="axios.svg" style="border:0; margin-left: 0" />](https://saucelabs.com/u/axios)
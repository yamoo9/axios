---
title: Config 기본 설정
description: Axios 라이브러리 Config 기본 설정에 대해 학습합니다.
---

# Config 기본 설정

모든 요청에 ​​적용될 구성 기본(Config Defaults) 값을 지정할 수 있습니다.

## 글로벌 axios 기본(defaults) 설정

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

## 사용자 정의 인스턴스 기본 설정

```js
// axios 인스턴스를 만들 때 구성 기본 값 설정
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 인스턴스가 생성 된 후 기본값 변경
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

## 구성 우선 순위 규칙

구성(Config)은 우선 순위(order of precedence) 규칙에 따라 병합됩니다. 순서는 [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28)에 있는 라이브러리 기본 값, 인스턴스의 `defaults` 속성, 그리고 요청에서 설정한 인자 순입니다. 후자는 전자보다 우선합니다. 예제를 참고하세요.

```js
// 라이브러리에서 제공하는 config 기본 값을 사용하여 인스턴스를 만들면
// 이 시점에서 라이브러리의 기본 값인 timeout 구성은 '0' 입니다.
const instance = axios.create();

// 라이브러리의 timeout 기본 값을 2.5초로 재 정의하여
// 인스턴스의 모든 요청은 2.5초 간만 대기 후 타임아웃 처리합니다.
instance.defaults.timeout = 2500;

// 최종적으로 인스턴스에 설정된 timeout 구성 값 5000으로 덮어씁니다.
instance.get('/longRequest', {
  timeout: 5000
});

// 우선 순위
// 인스턴스 호출 메서드 옵션 > 인스턴스.defaults 설정 옵션 > 인스턴스.create()에 설정된 옵션
```
---
title: 참고
description: Axios 라이브러리 참고 사항에 대해 학습합니다.
---

# 참고

## 시멘틱 버전(Semvers)

Axios의 Semvers(emantic Versioning) 정책은 `1.0` 릴리스에 도달 할 때까지
새로운 변경 사항은 새로운 마이너 버전 변경 사항으로 릴리스 될 것입니다.
예를 들어 `0.5.1`과 `0.5.4`는 같은 API를 갖지만, `0.6.0`은 큰 변화를 가집니다.

## 프로미스 호환 문제

axios는 네이티브 ES6 [Promises 브라우저 호환성](https://caniuse.com/#feat=promises)에 따라 달라집니다.
배포 환경이 ES6 Promises를 지원하지 않으면 [polyfill](https://github.com/jakearchibald/es6-promise) 할 수 있습니다.

## TypeScript

axios는 [TypeScript](http://typescriptlang.org) 정의(definitions)가 포함되어 있습니다.

```ts
import axios from 'axios';
axios.get('/user?ID=12345');
```

## 리소스

* [변경 로그](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [업그레이드 가이드](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [에코 시스템(생태계)](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [컨트리뷰트(기여) 가이드](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [윤리 강령](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## 크레딧

axios는 Angular에서 제공되는 `$http` 서비스에 크게 영향을 받았습니다.
궁극적으로 axios는 Angular 외부에서 사용할 수 있는 독립형 `$http`와 유사한 서비스를 제공하려는 노력으로 만들어졌습니다.

## 라이선스

MIT
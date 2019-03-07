module.exports = {

  // ————————————————————————————————————————————————————————————————
  // 헤드(HEAD)
  // ————————————————————————————————————————————————————————————————
  // i18n 설정
  // https://vuepress.vuejs.org/guide/i18n.html#site-level-i18n-config
  locales: {
    '/': { lang: 'ko-KR' }
  },
  // 페이지 제목
  title: 'Axios 러닝 가이드',
  // 페이지 설명
  description: 'Axios 라이브러리 공식 문서(번역판)',
  // <head> 콘텐츠 추가
  head: [
    ['link', { rel: 'icon', href: '/Ax.png' }]
  ],

  // ————————————————————————————————————————————————————————————————
  // 테마 설정(THEME CONFIGURATION)
  // ————————————————————————————————————————————————————————————————
  themeConfig: {

    // Navbar 로고
    logo: `/Ax.png`,

    // Navbar 내비게이션 링크
    nav: [
      // 드롭다운 메뉴 설정 시, items 속성(배열) 추가
      { text: '가이드북', link: '/guide/' },
      { text: '공식 문서', link: 'https://github.com/axios/axios' },
    ],

    // 사이드바
    sidebar: [
      // CASE. [경로, 이름] 설정
      // '/',
      '/guide/',
      '/guide/install',
      '/guide/usage',
      '/guide/api',
      '/guide/response-schema',
      '/guide/config-defaults',
      '/guide/interceptors',
      '/guide/error-handling',
      '/guide/cancellation',
      '/guide/form-format',
      '/guide/refs',

      // CASE. 그룹으로 작성할 경우
      // {
      //   title: '가이드북',
      //   // ↴ 접힘(collapse) 설정
      //   // collapsable: false,
      //   children: [
      //     '/guide/',
      //   ]
      // }
    ],

    // 중첩 헤더 링크 표시 설정 (0-2)
    // 0: 표시 안 함
    // 1: <h2> 까지 표시
    // 2: <h2>, <h3> 까지 표시
    // sidebarDepth: 2,

    // 모든 중첩 헤더 링크 표시 설정
    // displayAllHeaders: true,

    // 활성 헤드 링크 설정
    // ↴ 페이지 스크롤 시, 헤더 링크 URL에 표시 (비 활성화 시, 성능 향상)
    // activeHeaderLinks: false,

    // 검색 설정
    // search: false,
    // searchMaxSuggestions: 10,

    // 서비스워커 설정
    serviceWorker: {
      updatePopup: {
        message: "업데이트 된 새로운 콘텐츠를 활성화하겠습니까?",
        buttonText: "새로고침"
      }
    }

  },

  // ————————————————————————————————————————————————————————————————
  // 마크다운(MARKDOWN)
  // https://vuepress.vuejs.org/config/#markdown
  // ————————————————————————————————————————————————————————————————
  markdown: {
    // 코드 라인 숫자 표시 설정
    lineNumbers: true,
    // 외부 링크
    // externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
    // markdown-it-anchor 옵션
    // anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
    // markdown-it-table-of-contents 옵션
    // toc: { includeLevel: [2, 3] }
  },

  // ————————————————————————————————————————————————————————————————
  // 플러그인(PLUGIN)
  // ————————————————————————————————————————————————————————————————
  // plugins: [
  //   '@vuepress/back-to-top',
  //   [
  //     '@vuepress/medium-zoom',
  //     { selector: '.zoom img' }
  //   ]
  // ],

  // ————————————————————————————————————————————————————————————————
  // 웹팩(WEBPACK)
  // https://vuepress.vuejs.org/config/#configurewebpack
  // ————————————————————————————————————————————————————————————————
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       // ↴ 별칭(alias) 설정
  //       // '@alias': 'path/to/some/dir'
  //     }
  //   }
  // },

  // ————————————————————————————————————————————————————————————————
  // 개발(DEV) 설정
  // ————————————————————————————————————————————————————————————————
  // host: 'localhost',
  port: '9090',
  // ↴ {user}.github.io/{repo}로 배포할 경우, 저장소 이름 설정
  base: '/axios/',

  // ————————————————————————————————————————————————————————————————
  // 빌드(BUILD) 설정
  // ————————————————————————————————————————————————————————————————
  dest: 'axios',
  // ↴ IE를 고려하지 않을 경우 true 설정. 속도 향상
  evergreen: true,
  // ↴ PWA 사용 설정.
  serviceWorker: true
}
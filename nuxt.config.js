import path from 'path';
import fs from 'fs';

const BASE_DIR = process.env.BASE_DIR || '';

module.exports = {
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    }
  },
  head: {
    title: 'dailyscore',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Welcome to SIMPLIZM.' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#000000' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap' }
    ],
    script: [
      { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' },
      { src: '//dapi.kakao.com/v2/maps/sdk.js?appkey=b09efe6458aecd4ee00d548ee66266a1' }
    ]
  },
  router: {
    base: BASE_DIR,
    middleware: 'routeEnter'
  },
  mode: 'spa',
  generate: {
    fallback: true
  },
  /*layoutTransition: {
    name: 'layout',
    mode: 'in-out'
  },*/
  loading: { color: '#ffffff' },
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['~/assets/scss/_variable.scss'] // 전역 scss함수 사용
  },
  css: [
    {src: '~/assets/scss/reset.scss', lang: 'scss'},
    {src: '~/assets/scss/common.scss', lang: 'scss'}
  ],
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/routerPush',
    '~/plugins/globalComponents',
    '~/plugins/axiosConfig',
    '~/plugins/directives'
  ]
}


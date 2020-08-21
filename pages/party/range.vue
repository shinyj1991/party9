<template>
  <article id="partyRange">
    <header class="header">
      <nuxt-link to="/" class="back" :style="{ backgroundImage: `url(${require('~/assets/images/ico/back_30x30_black.png')})` }">뒤로가기</nuxt-link>
      <h1 class="title">카테고리 설정</h1>
    </header>
    <div class="container">
      <ul>
        <li>
          <label>
            <input type="checkbox">
            <span>운동</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            <span>맛집</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            <span>취미</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            <span>공부</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            <span>기타</span>
          </label>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    data: () => ({
      title: ''
    }),
    layout: 'popup',
    methods: {}
  }
</script>

<style lang="scss">
#partyRange {overflow: hidden; position: relative; height: 100vh; padding: 80px 0 0;
  .header {display: flex; align-items: center; position: fixed; top: 0; right: 0; left: 0; height: $headerHeight; padding: 0 30px; border-bottom: 2px solid #cccccc;
    .back {width: 60px; height: 60px; background: center center no-repeat; text-indent: -9999em;}
    .title {margin: 0 0 0 10px; font-weight: 700; font-size: 32px;}
  }
  .container {padding: 30px;
    ul {overflow: hidden; margin: 0 -15px -15px 0;
      li {float: left; width: 220px; margin: 0 15px 15px 0;
        label {position: relative;
          input {position: absolute; top: 0; left: 0; width: 1px; height: 1px; opacity: 0;
            &:checked + span:after {display: block; content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: rgba(0, 0, 0, 0.7);}
          }
          span {display: block; position: relative; width: 100%; height: 220px; border: 2px solid #cccccc; line-height: 216px; text-align: center;}
        }
      }
    }
  }
}
</style>
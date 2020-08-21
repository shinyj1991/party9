<template>
  <article id="partyRange">
    <header class="header">
      <nuxt-link to="/" class="back" :style="{ backgroundImage: `url(${require('~/assets/images/ico/back_30x30_black.png')})` }">뒤로가기</nuxt-link>
      <h1 class="title">정렬</h1>
    </header>
    <div class="container">
      <section>
        <h2>파티 카테고리</h2>
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
              <span>취미</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox">
              <span>게임</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox">
              <span>밥</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox">
              <span>술</span>
            </label>
          </li>
        </ul>
      </section>
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
  .header {display: flex; align-items: center; position: fixed; top: 0; right: 0; left: 0; height: 80px; padding: 0 30px; border-bottom: 2px solid #cccccc;
    .back {width: 60px; height: 60px; background: center center no-repeat; text-indent: -9999em;}
    .title {margin: 0 0 0 10px; font-weight: 700; font-size: 32px;}
  }
  .container {padding: 30px;}
}
</style>
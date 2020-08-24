<template>
  <article id="partyCreate">
    <header class="header">
      <nuxt-link to="/party/list" class="back">뒤로가기</nuxt-link>
      <h1 class="title">파티원모집</h1>
      <button type="button" class="done">완료</button>
    </header>
  </article>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    data: () => ({
      title: ''
    }),
    methods: {}
    
  }
</script>

<style lang="scss">
#partyCreate {
  .header {display: flex; align-items: center; position: fixed; top: 0; right: 0; left: 0; height: $headerHeight; padding: 0 30px; border-bottom: 2px solid #cccccc;
    .back {width: 60px; height: 60px; background: url(~static/images/ico/back_30x30_black.png) center center no-repeat; text-indent: -9999em;}
    .title {margin: 0 0 0 10px; font-weight: 700; font-size: 32px;}
    .done {margin-left: auto; font-size: 28px;}
  }
}
</style>
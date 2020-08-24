<template>
  <nav id="globalNavigation">
    <nuxt-link to="/" class="m1 on">파티목록</nuxt-link>
    <nuxt-link to="/party/create" class="m2">파티원모집</nuxt-link>
    <nuxt-link to="/" class="m3">마이페이지</nuxt-link>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState({
    menuFlag: state => state.ui.menuFlag
  }),
  methods: {
    toggleMenu(event) {
      console.log(event);
      this.$store.commit('ui/toggleMenu');
    }
  }
}
</script>

<style lang="scss" scope>
#globalNavigation {display: flex; position: fixed; right: 0; bottom: 0; left: 0; z-index: 100; background: #f8f9fe;
  a {flex: 1 1 auto; height: 100px; padding: 54px 0 0; font-size: 22px; line-height: 33px; text-align: center; color: #7d8fac;
    &.m1 {background: #f7f7f7 url(~static/images/ico/partylist_25x25_navy.png) center 21px no-repeat;}
    &.m2 {background: #f7f7f7 url(~static/images/ico/add_25x25_gray.png) center 20px no-repeat;}
    &.m3 {background: #f7f7f7 url(~static/images/ico/mypage_25x25_gray.png) center 20px no-repeat;}
  }
}
</style>
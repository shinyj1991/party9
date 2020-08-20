<template>
  <nav id="globalNavigation">
    <nuxt-link to="/">파티리스트</nuxt-link>
    <nuxt-link to="/party/create">파티원모집</nuxt-link>
    <nuxt-link to="/">마이페이지</nuxt-link>
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
#globalNavigation {display: flex; position: fixed; right: 0; bottom: 0; left: 0; z-index: 100;
  a {flex: 1 1 auto; height: 100px; line-height: 100px; text-align: center; background: #f7f7f7;}
}
</style>
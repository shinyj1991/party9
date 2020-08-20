<template>
  <div id="default">
    <nuxt/>
    <global-navigation></global-navigation>
  </div>
</template>

<script>
import GlobalNavigation from '~/components/Layout/globalNavigation.vue';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: mapState({
    loaded: state => state.ui.loaded
  }),
  components: {
    GlobalNavigation
  }
}
</script>

<style lang="scss">
body {background: #ffffff;}
#default {width: 750px; margin: 0 auto;}
</style>


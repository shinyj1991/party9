<template>
  <div id="default" :class="{ loaded: appLoaded }">
    <nuxt/>
    <global-navigation></global-navigation>
  </div>
</template>

<script>
import GlobalNavigation from '~/components/Layout/globalNavigation.vue';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: mapState({
    loaded: state => state.ui.loaded,
    appLoaded: state => state.ui.appLoaded
  }),
  components: {
    GlobalNavigation
  }
}
</script>

<style lang="scss">
body {background: #ffffff;}
#default {width: 750px; margin: 0 auto; padding: 0 0 100px; background: #ffffff;
  &:before {display: block; content: ''; position: fixed; top: 0; right: 0; left: 0; z-index: 9999; height: 100%; background: linear-gradient(180deg, rgba(134,213,254,1) 0%, rgba(46,145,220,1) 100%);}
  &:after {display: block; content: ''; position: fixed; top: 0; right: 0; left: 0; z-index: 9999; height: 100%; background: url(~static/images/ico/logo_229x189.png) center center no-repeat;}
  &.loaded:before {opacity: 0; height: 0; transition: opacity 1000ms, height 1ms 1000ms;}
  &.loaded:after {opacity: 0; height: 0; transition: opacity 1000ms, height 1ms 1000ms;}
}
</style>


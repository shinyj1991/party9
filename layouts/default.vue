<template>
  <div id="default" :class="{ loaded: appLoaded }">
    <nuxt/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: mapState({
    loaded: state => state.ui.loaded,
    appLoaded: state => state.ui.appLoaded
  })
}
</script>

<style lang="scss">
body {background: #ffffff;}
#default {width: 750px; margin: 0 auto; background: #ffffff;}
</style>


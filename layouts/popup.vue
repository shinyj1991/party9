<template>
  <div id="popup">
    <nuxt/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: mapState({
    loaded: state => state.ui.loaded
  })
}
</script>

<style lang="scss">
#popup {width: 750px; min-height: 100vh; margin: 0 auto; background: #ffffff;}
</style>


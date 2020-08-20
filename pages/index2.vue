<template>
  <article class="outer_scroll" ref="outerScroll">
    <div class="inner_scroll" ref="innerScroll">
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </div>
  </article>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    data: () => ({
      title: '',
      touchY: false,
      headerPositionTop: 0,
      scrollLock: false,
      touchmoveTime: 0
    }),
    mounted() {
      window.addEventListener('touchmove', this.detectWindowTouchmove);
    },
    methods: {
      detectWindowTouchmove() {
        console.log('scroll', this.$refs.outerScroll.scrollTop, this.$refs.innerScroll.scrollTop)
      }
    }
  }
</script>

<style lang="scss">
.outer_scroll {height: 100vh; overflow-y: scroll; background: blue;
  .inner_scroll {width: 50%; height: 110vh; overflow-y: scroll; background: red;}
}
</style>
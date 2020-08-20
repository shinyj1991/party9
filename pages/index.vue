<template>
  <article id="main" :style="{marginTop: `${headerPositionTop}px`}">
    <header class="header">
      <div class="head">
        <button type="button" class="area">신림동</button>
        <button type="button" class="sort" :style="{ backgroundImage: `url(${require('~/assets/images/ico/sort_512x512_black.png')})` }">정렬</button>
      </div>
      <div class="menu">
        <button type="button" :class="{on: tabIndex === 0}">파티리스트</button>
        <button type="button" :class="{on: tabIndex === 1}">동네퀘스트</button>
        <div class="focus_line" :style="{transform: `translateX(${-containerPositionLeft * 2}%)`}"></div>
      </div>
    </header>
    <div class="container" :style="{transform: `translateX(${containerPositionLeft}%)`}" ref="container">
      <div :class="{lock: scrollLock}" class="party_wrap" ref="partyWrap">
        <ul>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">7시 도림천에서 3:3 농구조질 파티구함</p>
              <p class="area">도림천 돌바닥</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">퇴근하고 호치킨에서 치맥한잔하실분</p>
              <p class="area">신림동 호치킨</p>
              <p class="when">내일 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">이마트 양파 한망 사서 소분할 파티구함</p>
              <p class="area">서울대입구 하이마트</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">롤 5인큐 돌릴 정글러 구함 (실버 ~ 골드)</p>
              <p class="area">온라인</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">7시 도림천에서 3:3 농구조질 파티구함</p>
              <p class="area">도림천 돌바닥</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">퇴근하고 호치킨에서 치맥한잔하실분</p>
              <p class="area">신림동 호치킨</p>
              <p class="when">내일 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">이마트 양파 한망 사서 소분할 파티구함</p>
              <p class="area">서울대입구 하이마트</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">롤 5인큐 돌릴 정글러 구함 (실버 ~ 골드)</p>
              <p class="area">온라인</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">7시 도림천에서 3:3 농구조질 파티구함</p>
              <p class="area">도림천 돌바닥</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">퇴근하고 호치킨에서 치맥한잔하실분</p>
              <p class="area">신림동 호치킨</p>
              <p class="when">내일 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">이마트 양파 한망 사서 소분할 파티구함</p>
              <p class="area">서울대입구 하이마트</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">롤 5인큐 돌릴 정글러 구함 (실버 ~ 골드)</p>
              <p class="area">온라인</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">7시 도림천에서 3:3 농구조질 파티구함</p>
              <p class="area">도림천 돌바닥</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">퇴근하고 호치킨에서 치맥한잔하실분</p>
              <p class="area">신림동 호치킨</p>
              <p class="when">내일 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">이마트 양파 한망 사서 소분할 파티구함</p>
              <p class="area">서울대입구 하이마트</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">롤 5인큐 돌릴 정글러 구함 (실버 ~ 골드)</p>
              <p class="area">온라인</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div :class="{lock: scrollLock}" class="party_wrap" ref="partyWrap2">
        <ul>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">7시 도림천에서 3:3 농구조질 파티구함</p>
              <p class="area">도림천 돌바닥</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">퇴근하고 호치킨에서 치맥한잔하실분</p>
              <p class="area">신림동 호치킨</p>
              <p class="when">내일 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">이마트 양파 한망 사서 소분할 파티구함</p>
              <p class="area">서울대입구 하이마트</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">롤 5인큐 돌릴 정글러 구함 (실버 ~ 골드)</p>
              <p class="area">온라인</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">7시 도림천에서 3:3 농구조질 파티구함</p>
              <p class="area">도림천 돌바닥</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">퇴근하고 호치킨에서 치맥한잔하실분</p>
              <p class="area">신림동 호치킨</p>
              <p class="when">내일 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">이마트 양파 한망 사서 소분할 파티구함</p>
              <p class="area">서울대입구 하이마트</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">롤 5인큐 돌릴 정글러 구함 (실버 ~ 골드)</p>
              <p class="area">온라인</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">7시 도림천에서 3:3 농구조질 파티구함</p>
              <p class="area">도림천 돌바닥</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">퇴근하고 호치킨에서 치맥한잔하실분</p>
              <p class="area">신림동 호치킨</p>
              <p class="when">내일 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">이마트 양파 한망 사서 소분할 파티구함</p>
              <p class="area">서울대입구 하이마트</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">롤 5인큐 돌릴 정글러 구함 (실버 ~ 골드)</p>
              <p class="area">온라인</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">7시 도림천에서 3:3 농구조질 파티구함</p>
              <p class="area">도림천 돌바닥</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">퇴근하고 호치킨에서 치맥한잔하실분</p>
              <p class="area">신림동 호치킨</p>
              <p class="when">내일 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">이마트 양파 한망 사서 소분할 파티구함</p>
              <p class="area">서울대입구 하이마트</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">롤 5인큐 돌릴 정글러 구함 (실버 ~ 골드)</p>
              <p class="area">온라인</p>
              <p class="when">오늘 / 오후 7시</p>
              <p class="stat">2 / 5</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    data: () => ({
      lastTouchY: false,
      headerPositionTop: 0,
      scrollLock: false,
      lockScrollY: 0,

      containerPositionLeft: 0,
      containerTransitionSpeed: 300,

      startTouch: null,
      moveTouch: null,

      moveTouchX: 0,
      moveTouchY: 0,

      startTime: null,
      moveTime: null,
      allowedTime: 300,

      direction: null,

      tabIndex: 0
    }),
    watch: {
      scrollLock() {
        if (this.scrollLock) {
          // lock
          this.lockScrollY = this.$refs.partyWrap.scrollTop;
          this.$refs.partyWrap.addEventListener('touchmove', this.freezeScroll, { passive: false });
        } else {
          // unlock
          this.$refs.partyWrap.removeEventListener('touchmove', this.freezeScroll, { passive: false });
        }
      }
    },
    mounted() {
      window.addEventListener('touchstart', this.detectWindowTouchstart);
      window.addEventListener('touchmove', this.detectWindowTouchmove);
      window.addEventListener('touchend', this.detectWindowTouchend);
    },
    methods: {
      freezeScroll(event) {
        // console.log(event);
        // event.preventDefault();
        // this.$refs.partyWrap.scrollTo(0, this.lockScrollY);
      },
      detectWindowTouchstart() {
        this.lastTouchY = false;
        this.startTime = new Date().getTime();
        this.startTouch = event.changedTouches[0];
      },
      detectWindowTouchmove() {
        this.moveTouch = event.changedTouches[0];
        this.lastTouchY = this.lastTouchY === false ? this.moveTouch.clientY : this.lastTouchY;

        this.moveTouchX = this.startTouch.clientX - this.moveTouch.clientX;
        this.moveTouchY = this.startTouch.clientY - this.moveTouch.clientY;

        this.moveTime = new Date().getTime() - this.startTime;

        if (this.moveTime < this.allowedTime) {
          if (Math.abs(this.moveTouchX) > Math.abs(this.moveTouchY)) {
            this.direction = 'horizontal';
          } else {
            this.direction = 'vertical';
          }
        }

        if (this.direction === 'horizontal') {
          if (!(this.tabIndex === 0 && this.moveTouchX < 0) && !(this.tabIndex === 1 && this.moveTouchX > 0)) {
            this.containerPositionLeft = -this.moveTouchX / 750 * 50 + (-50 * this.tabIndex);
          }
        }

        if (this.direction === 'vertical') {
          if (this.lastTouchY > this.moveTouch.clientY) {
            // down
            if (this.headerPositionTop > -80) {
              this.headerPositionTop = this.headerPositionTop - Math.abs(this.lastTouchY - this.moveTouch.clientY);
              if (!this.scrollLock) {
                // console.log('down lock');
                this.scrollLock = true;
              }
            } else {
              if (this.scrollLock) {
                // console.log('down unlock');
                this.headerPositionTop = -80;
                this.scrollLock = false;
              }
            }
          } else {
            // up
            if (this.headerPositionTop < 0) {
              this.headerPositionTop = this.headerPositionTop + Math.abs(this.lastTouchY - this.moveTouch.clientY);
              if (!this.scrollLock) {
                // console.log('up lock');
                this.scrollLock = true;
              }
            } else {
              if (this.scrollLock) {
                // console.log('up unlock');
                this.headerPositionTop = 0;
                this.scrollLock = false;
              }
            }
          }
          this.lastTouchY = this.moveTouch.clientY;
        }
      },
      detectWindowTouchend() {
        this.lastTouchY = false;

        this.$refs.container.style.transition = `all ${this.containerTransitionSpeed}ms`;

        if (this.containerPositionLeft > -25) {
          this.containerPositionLeft = 0;
          this.tabIndex = 0;
        } else {
          this.containerPositionLeft = -50;
          this.tabIndex = 1;
        }

        setTimeout(() => {
          this.$refs.container.style.transition = 'none';
        }, this.containerTransitionSpeed);
      }
    }
  }
</script>

<style lang="scss">
#main {overflow: hidden; position: relative; height: 100vh; padding: 160px 0 100px;
  .header {position: absolute; top: 0; right: 0; left: 0; z-index: 100; height: 160px; padding: 0 30px; border-bottom: 2px solid #cccccc; background: #ffffff;
    .head {
      .area {position: relative; height: 80px; padding: 0 30px 0 0;
        &:after {display: block; content: ''; position: absolute; right: 0; top: 35px; border-top: 10px solid #666666; border-right: 8px solid transparent; border-left: 8px solid transparent;}
      }
      .sort {display: block; position: absolute; top: 10px; right: 10px; width: 80px; height: 80px; background: center center no-repeat; text-indent: -9999em; background-size: 50px 50px;}
    }
    .menu {display: flex; position: relative;
      button {flex: 1 1 auto; height: 80px; color: #999999;
        &.on {font-weight: 700; color: #000000;}
      }
      .focus_line {position: absolute; left: 0; bottom: 0; width: 50%; height: 4px; background: #000000;}
    }
  }
  .container {position: relative; width: 200%;
    .party_wrap {overflow-y: scroll; float: left; width: 50%; height: calc(100vh - 160px); padding: 30px;
      // &.lock {overflow: hidden;}
      ul {
        li {border-top: 2px solid #cccccc;
          &:first-child {border-top: none;}
          a {display: block; position: relative; height: 200px; padding: 20px 0 20px 200px;
            .cate {position: absolute; top: 20px; left: 0; width: 160px; height: 160px; background: #cccccc;}
            .name {font-size: 30px;}
            .area {margin: 5px 0 0; color: #999999;}
            .when {margin: 5px 0 0; color: #999999;}
            .stat {position: absolute; right: 0; bottom: 20px;}
          }
        }
      }
    }
  }
}
</style>
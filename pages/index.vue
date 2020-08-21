<template>
  <article id="main" :style="{transform: `translateY(${headerPositionTop}px)`}" ref="header">
    <header class="header">
      <div class="head">
        <button type="button" class="area">신림동</button>
        <nuxt-link to="/party/range" v-if="tabIndex === 0" class="sort" :style="{backgroundImage: `url(${require('~/assets/images/ico/sort_512x512_black.png')})`}">정렬</nuxt-link>
      </div>
      <div class="menu">
        <button type="button" :class="{on: tabIndex === 0}" @click="tabAction(0)">파티리스트</button>
        <button type="button" :class="{on: tabIndex === 1}" @click="tabAction(1)">동네퀘스트</button>
        <div class="focus_line" :style="{transform: `translateX(${-containerPositionLeft * 2}%)`}" ref="focusLine"></div>
      </div>
    </header>
    <div class="container" :style="{transform: `translateX(${containerPositionLeft}%)`}" ref="container">
      <div class="party_wrap" @scroll="watchScroll">
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
      <div class="party_wrap" @scroll="watchScroll">
        <ul>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">음료수서비스드려요~</p>
              <p class="area">깐부치킨 신림점</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">10% 할인 이벤트!</p>
              <p class="area">제주돈네 생오겹살</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="cate"></div>
              <p class="name">생맥주 3 + 1 오세요</p>
              <p class="area">세계맥주</p>
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
      headerPositionTop: 0,

      containerPositionLeft: 0,
      transitionSpeed: 300,

      startTouch: null,
      moveTouch: null,

      moveTouchX: 0,
      moveTouchY: 0,

      startTime: null,
      moveTime: null,
      endTime: null,
      allowedTime: 300,

      direction: null,

      tabIndex: 0,

      lastScrollY: 0,

      horizontalFlag: false
    }),
    mounted() {
      window.addEventListener('touchstart', this.detectWindowTouchstart);
      window.addEventListener('touchmove', this.detectWindowTouchmove);
      window.addEventListener('touchend', this.detectWindowTouchend);
    },
    watch: {
      tabIndex() {
        this.headerPositionTop = 0;
        this.containerPositionLeft = this.tabIndex * -50;
      }
    },
    methods: {
      watchScroll() {
        let computedPosition = this.headerPositionTop;
        if (this.lastScrollY - event.target.scrollTop > 0) {
          computedPosition = computedPosition + (this.lastScrollY - event.target.scrollTop);
          computedPosition = computedPosition > 0 ? 0 : computedPosition;
        } else {
          computedPosition = computedPosition + (this.lastScrollY - event.target.scrollTop);
          computedPosition = computedPosition < -80 ? -80 : computedPosition;
        }
        this.headerPositionTop = computedPosition;
        this.lastScrollY = event.target.scrollTop;
      },
      tabAction(index) {
        this.$refs.container.style.transition = `all ${this.transitionSpeed}ms`;
        this.$refs.header.style.transition = `all ${this.transitionSpeed}ms`;

        this.containerPositionLeft = index * -50;
        this.tabIndex = index;
        this.lastScrollY = this.$refs.container.children[index].scrollTop;

        setTimeout(() => {
          this.$refs.container.style.transition = 'none';
          this.$refs.header.style.transition = 'none';
        }, this.transitionSpeed);
      },
      detectWindowTouchstart() {
        this.startTime = new Date().getTime();
        this.startTouch = event.changedTouches[0];
        this.horizontalFlag = false;
      },
      detectWindowTouchmove() {
        this.moveTouch = event.changedTouches[0];
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
            this.horizontalFlag = true;
          } else {
            this.horizontalFlag = false;
          }
        }
      },
      detectWindowTouchend() {
        if (this.direction === 'horizontal') {
          this.$refs.focusLine.style.transition = `all ${this.transitionSpeed}ms`;
          this.$refs.container.style.transition = `all ${this.transitionSpeed}ms`;
          this.$refs.header.style.transition = `all ${this.transitionSpeed}ms`;

          if (Math.abs(this.moveTouchX / this.moveTime) > 1 && this.horizontalFlag || Math.abs(this.moveTouchX) > 375 && this.horizontalFlag) {
            this.tabIndex = this.tabIndex === 0 ? 1 : 0;
          } else {
            this.containerPositionLeft = this.tabIndex * -50;
          }

          this.lastScrollY = this.$refs.container.children[this.tabIndex].scrollTop;

          setTimeout(() => {
            this.$refs.focusLine.style.transition = 'none';
            this.$refs.container.style.transition = 'none';
            this.$refs.header.style.transition = 'none';
          }, this.transitionSpeed);

          this.horizontalFlag = false;
        }
      }
    }
  }
</script>

<style lang="scss">
#main {overflow: hidden; position: relative; height: 100vh; padding: 160px 0 100px;
  .header {position: absolute; top: 0; right: 0; left: 0; z-index: 100; height: 160px; padding: 0 30px; border-bottom: 2px solid #cccccc; background: #ffffff;
    .head {
      .area {position: relative; height: 80px; padding: 0 30px 0 0; font-weight: 700; font-size: 32px;
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
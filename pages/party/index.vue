<template>
  <article id="main" :style="{transform: `translateY(${headerPositionTop}px)`}" ref="main">
    <header class="header">
      <div class="head">
        <div class="left">
          <nuxt-link to="/party/locate" class="area">광진구외 2개 지역</nuxt-link>
        </div>
        <div class="right">
          <button type="button" class="search">검색</button>
          <nuxt-link to="/party/filter" v-if="tabIndex === 0" class="filter">정렬</nuxt-link>
        </div>
      </div>
      <div class="menu">
        <button type="button" :class="{on: tabIndex === 0}" @click="tabAction(0)">파티목록</button>
        <button type="button" :class="{on: tabIndex === 1}" @click="tabAction(1)">퀘스트</button>
        <div class="focus_line" :style="{transform: `translateX(${-containerPositionLeft * 2}%)`}" ref="focusLine"></div>
      </div>
    </header>
    <div class="container" :style="{transform: `translateX(${containerPositionLeft}%)`}" ref="container">
      <div class="party_wrap" @scroll="watchScroll">
        <ul>
          <li>
            <nuxt-link to="/party/detail">
              <div class="cate"></div>
              <p class="name">7시 도림천에서 3:3 농구조질 파티구함</p>
              <p class="area">도림천 농구장</p>
              <p class="when">
                <span class="date">내일</span>
                <span class="time">오후 7시</span>
              </p>
              <p class="stat">
                <span class="close">모집마감</span>
                <span class="val">6 / 6</span>
              </p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/party/detail">
              <div class="cate"></div>
              <p class="name">퇴근하고 호치킨에서 치맥한잔하실분</p>
              <p class="area">신림역 5번출구 호치킨</p>
              <p class="when">
                <span class="date">오늘</span>
                <span class="time">오후 7시</span>
              </p>
              <p class="stat">
                <span class="last">마감임박</span>
                <span class="val">4 / 5</span>
              </p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/party/detail">
              <div class="cate"></div>
              <p class="name">이마트앞에서 양파한망 같이사서 소분할 파티구함</p>
              <p class="area">신림동 이마트</p>
              <p class="when">
                <span class="date">오늘</span>
                <span class="time">오후 7시</span>
              </p>
              <p class="stat">
                <span class="val">1 / 4</span>
              </p>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="quest_wrap" @scroll="watchScroll">
        <ul>
          <li>
            <nuxt-link to="/party/quest">
              <div class="photo"><img src="~static/images/sample/quest_01.png" alt=""></div>
              <p class="name">파티9함을 통해서 오시면 라면사리 + 음료수 서비스!!</p>
              <p class="area">꼬꼬아찌 신림점</p>
              <p class="period">08.21 (금) ~ 09.04 (금)</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/party/quest">
              <div class="photo"><img src="~static/images/sample/quest_02.png" alt=""></div>
              <p class="name">호치킨에서 파티시 치슐랭 53% 할인</p>
              <p class="area">호치킨 난곡입구</p>
              <p class="period">08.24 (월) ~ 08.28 (금)</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/party/quest">
              <div class="photo"><img src="~static/images/sample/quest_03.png" alt=""></div>
              <p class="name">글라스와인 3+1 이벤트</p>
              <p class="area">오늘,와인한잔 신림점</p>
              <p class="period">08.21 (금) ~ 08.23 (일)</p>
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
      this.$refs.container.addEventListener('touchstart', this.detectWindowTouchstart, {passive: true});
      this.$refs.container.addEventListener('touchmove', this.detectWindowTouchmove, {passive: true});
      this.$refs.container.addEventListener('touchend', this.detectWindowTouchend);
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
        this.$refs.focusLine.style.transition = `all ${this.transitionSpeed}ms`;
        this.$refs.container.style.transition = `all ${this.transitionSpeed}ms`;
        this.$refs.main.style.transition = `all ${this.transitionSpeed}ms`;

        this.containerPositionLeft = index * -50;
        this.tabIndex = index;
        this.lastScrollY = this.$refs.container.children[index].scrollTop;

        setTimeout(() => {
          this.$refs.focusLine.style.transition = 'none';
          this.$refs.container.style.transition = 'none';
          this.$refs.main.style.transition = 'none';
        }, this.transitionSpeed);
      },
      detectWindowTouchstart() {
        this.startTime = new Date().getTime();
        this.startTouch = event.changedTouches[0];
        this.direction = false;
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
          this.$refs.main.style.transition = `all ${this.transitionSpeed}ms`;

          if (Math.abs(this.moveTouchX / this.moveTime) > 1 && this.horizontalFlag || Math.abs(this.moveTouchX) > 375 && this.horizontalFlag) {
            this.tabIndex = this.tabIndex === 0 ? 1 : 0;
          } else {
            this.containerPositionLeft = this.tabIndex * -50;
          }

          this.lastScrollY = this.$refs.container.children[this.tabIndex].scrollTop;

          setTimeout(() => {
            this.$refs.focusLine.style.transition = 'none';
            this.$refs.container.style.transition = 'none';
            this.$refs.main.style.transition = 'none';
          }, this.transitionSpeed);

          this.direction = false;
          this.horizontalFlag = false;
        }
      }
    }
  }
</script>

<style lang="scss">
#main {overflow: hidden; height: 100vh; padding: calc(#{$headerHeight} * 2) 0 100px;
  .header {position: absolute; top: 0; right: 0; left: 0; z-index: 100; height: 160px; padding: 0 30px; border-bottom: 2px solid #b7b7b7; background: #ffffff;
    .head {display: flex; justify-content: space-between; align-items: center; height: $headerHeight;
      .area {display: block; position: relative; padding: 0 30px 0 0; font-weight: 700; line-height: $headerHeight; font-size: 32px;
        &:after {display: block; content: ''; position: absolute; right: 0; top: 35px; border-top: 10px solid #666666; border-right: 8px solid transparent; border-left: 8px solid transparent;}
      }
      .right {display: flex;
        .search {display: block; width: 60px; height: 60px; background: url(~static/images/ico/search_31x31_black.png) center center no-repeat; text-indent: -9999em;}
        .filter {display: block; width: 60px; height: 60px; background: url(~static/images/ico/filter_30x30_black.png) center center no-repeat; text-indent: -9999em;}
      }
    }
    .menu {display: flex; position: relative;
      button {flex: 1 1 auto; height: $headerHeight; font-size: 26px;
        &.on {font-weight: 700;}
      }
      .focus_line {position: absolute; left: 0; bottom: 0; width: 50%; height: 4px; background: #000000;}
    }
  }
  .container {position: relative; width: 200%;
    .party_wrap {overflow-y: scroll; float: left; width: 50%; height: calc(100vh - #{$headerHeight} * 2); padding: 30px;
      // &.lock {overflow: hidden;}
      ul {
        li {border-top: 2px solid #f1f4f7;
          &:first-child {border-top: none;}
          a {display: block; position: relative; height: 250px; padding: 25px 0 25px 200px;
            .cate {position: absolute; top: 20px; left: 0; width: 160px; height: 200px; background: url(~static/images/common/default_thumbnail_160x200.png);}
            .name {overflow: hidden; height: 74px; font-size: 30px; line-height: 37px;}
            .area {margin: 50px 0 0; color: #747474; font-size: 26px; line-height: 37px;}
            .when {overflow: hidden; 
              span {float: left; position: relative; margin: 0 0 0 30px; font-size: 26px; line-height: 37px;
                &:before {display: block; content: ''; position: absolute; top: 5px; left: -16px; width: 2px; height: 26px; background: #707070;}
                &:first-child {margin-left: 0;
                  &:before {display: none;}
                }
              }
              .date {color: #3145a8;}
              .time {color: #747474;}
            }
            .stat {position: absolute; right: 0; bottom: 25px;
              .val {margin: 0 0 0 15px; font-size: 26px; line-height: 37px; color: #000000;}
              .last {display: inline-block; border-radius: 5px; width: 100px; background: #ff6868; font-size: 20px; line-height: 37px; color: #ffffff; text-align: center;}
              .close {display: inline-block; border-radius: 5px; width: 100px; background: #bcbcbc; font-size: 20px; line-height: 37px; color: #ffffff; text-align: center;
                & + .val {color: #bcbcbc;}
              }
            }
          }
        }
      }
    }
    .quest_wrap {overflow-y: scroll; float: left; width: 50%; height: calc(100vh - #{$headerHeight} * 2); padding: 30px;
      // &.lock {overflow: hidden;}
      ul {
        li {border-top: 2px solid #f1f4f7;
          &:first-child {border-top: none;}
          a {display: block; position: relative; height: 250px; padding: 25px 0 25px 200px;
            .photo {position: absolute; top: 20px; left: 0; width: 160px; height: 200px; background: url(~static/images/common/default_thumbnail_160x200.png);}
            .name {overflow: hidden; height: 74px; font-size: 30px; line-height: 37px;}
            .area {color: #747474; font-size: 26px; line-height: 37px;}
            .period {position: absolute; left: 200px; bottom: 25px; font-size: 26px;}
          }
        }
      }
    }
  }
}
</style>
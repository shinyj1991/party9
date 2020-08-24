<template>
  <article id="partyQuest">
    <header class="header">
      <div class="left">
        <a @click="$router.go(-1)" class="back">뒤로가기</a>
      </div>
      <div class="right">
        <button type="button" class="export">공유하기</button>
      </div>
    </header>
    <div class="visual">
      <img src="~static/images/sample/quest_visual_01.png" alt="">
      <a href="tel:01064796698" class="call"><span>전화문의</span></a>
    </div>
    <div class="container">
      <h1>파티9 회원이라면 라면사리 + 음료수 서비스!!</h1>
      <div class="store">
        <div class="photo"></div>
        <p class="name">꼬꼬아찌숯불치킨 신림점</p>
      </div>
      <div class="menu">
        <div class="inner">
          <button type="button" :class="{on: tabIndex === 0}" @click="tabAction(0)">퀘스트정보</button>
          <button type="button" :class="{on: tabIndex === 1}" @click="tabAction(1)">가게정보</button>
          <button type="button" :class="{on: tabIndex === 2}" @click="tabAction(2)">파티보기</button>
          <div class="focus_line" :style="{transform: `translateX(${-containerPositionLeft * 3}%)`}" ref="focusLine"></div>
        </div>
      </div>
      <div class="detail" ref="detail">
        <div class="inner" ref="inner" :style="{
          transform: `translateX(${containerPositionLeft}%)`,
          height: `${innerHeight}px`
        }">
          <div class="quest_info">
            <p class="period">2020.08.21 금 ~ 2020.09.04 금</p>
            <div class="text">
              <p>
                *파티구함 회원분들께만 드리는 특별한 혜택!*<br><br>
                회원들의 사랑에 보답하고자 파티구함으로 꼬꼬아찌 신림점 파티시 ↓↓↓↓<br><br>
                하나! 라면사리 무료 서비스!!!<br>
                ♣순살+라면사리+셀프주먹밥♧ 이 조합 모르는 회원님 없게 해주세요~! 안먹으면 서운한 라면사리, 인원수대로 제공!<br><br>
                둘! 음료수 서비스!!<br>
                500미리? 누구 코에 붙이라구~ 통 크게 1.5리터로 드립니다!<br><br>
                지금 바로 파티를 모집해주세요!!!!!!!
              </p>
            </div>
          </div>
          <div class="store_info">
            <div class="map"></div>
            <dl class="info">
              <dt>가게안내</dt>
              <dd class="tel">02-3442-0127</dd>
              <dd class="locate">서울 관악구 남부순환로 176길 6 (신림동)</dd>
            </dl>
            <dl class="info2">
              <dt>사업자정보</dt>
              <dd>
                <strong>대표자</strong>
                <span>김정선외 1명</span>
              </dd>
              <dd>
                <strong>상호명</strong>
                <span>꼬꼬아찌(신림역점)</span>
              </dd>
              <dd>
                <strong>사업자주소</strong>
                <span>서울특별시 관악구 신림동 1639-26 1층(신림동)</span>
              </dd>
              <dd>
                <strong>사업자등록번호</strong>
                <span>498-16-00718</span>
              </dd>
            </dl>
          </div>
          <div class="party_list">
            <ul>
              <li>
                <nuxt-link to="/party/detail">
                  <div class="cate"></div>
                  <p class="name"><img src="~static/images/common/quest_mark.png" alt="">꼬꼬아찌 라면사리 서비스 준대용 같이 드실 분~~</p>
                  <p class="area">꼬꼬아찌숯불치킨 신림점</p>
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
                  <p class="name"><img src="~static/images/common/quest_mark.png" alt="">퇴근 후에 꼬꼬아찌에서 치맥 한 잔 하실 분??</p>
                  <p class="area">꼬꼬아찌숯불치킨 신림점</p>
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
                  <div class="cate"><img src="~static/images/sample/party_01.png" alt=""></div>
                  <p class="name"><img src="~static/images/common/quest_mark.png" alt="">&lt;&lt;&lt;직장인 파티&gt;&gt;&gt; 맥주한잔 하면서 같이 회사 욕 해요ㅠㅠ</p>
                  <p class="area">꼬꼬아찌숯불치킨 신림점</p>
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
        </div>
      </div>
      <div class="btns" v-if="tabIndex !== 2">
        <button1>파티생성</button1>
      </div>
    </div>
  </article>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    data: () => ({
      join: false,

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

      horizontalFlag: false,
      innerHeight: 0
    }),
    layout: 'popup',
    mounted() {
      this.$refs.detail.addEventListener('touchstart', this.detectWindowTouchstart, {passive: true});
      this.$refs.detail.addEventListener('touchmove', this.detectWindowTouchmove, {passive: true});
      this.$refs.detail.addEventListener('touchend', this.detectWindowTouchend);

      this.innerHeight = this.$refs.inner.children[this.tabIndex].offsetHeight;
    },
    watch: {
      tabIndex() {
        this.containerPositionLeft = this.tabIndex * -33.333333;

        this.innerHeight = this.$refs.inner.children[this.tabIndex].offsetHeight;
      }
    },
    methods: {
      tabAction(index) {
        this.$refs.focusLine.style.transition = `all ${this.transitionSpeed}ms`;
        this.$refs.inner.style.transition = `all ${this.transitionSpeed}ms`;

        this.containerPositionLeft = index * -33.333333;
        this.tabIndex = index;

        setTimeout(() => {
          this.$refs.focusLine.style.transition = 'none';
          this.$refs.inner.style.transition = 'none';
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
          if (!(this.tabIndex === 0 && this.moveTouchX < 0) && !(this.tabIndex === 2 && this.moveTouchX > 0)) {
            this.containerPositionLeft = -this.moveTouchX / 750 * 50 + (-33.333333 * this.tabIndex);
            if (this.moveTouchX > 0) {
              this.horizontalFlag = 'right';
            }
            if (this.moveTouchX < 0) {
              this.horizontalFlag = 'left';
            }
          } else {
            this.horizontalFlag = false;
          }
        }
      },
      detectWindowTouchend() {
        if (this.direction === 'horizontal') {
          this.$refs.focusLine.style.transition = `all ${this.transitionSpeed}ms`;
          this.$refs.inner.style.transition = `all ${this.transitionSpeed}ms`;

          if (Math.abs(this.moveTouchX / this.moveTime) > 1 && this.horizontalFlag || Math.abs(this.moveTouchX) > 375 && this.horizontalFlag) {
            if (this.horizontalFlag === 'right') {
              this.tabIndex++;
            }
            if (this.horizontalFlag === 'left') {
              this.tabIndex--;
            }
          } else {
            this.containerPositionLeft = this.tabIndex * -33.333333;
          }

          setTimeout(() => {
            this.$refs.focusLine.style.transition = 'none';
            this.$refs.inner.style.transition = 'none';
          }, this.transitionSpeed);

          this.direction = false;
          this.horizontalFlag = false;
        }
      }
    } 
  }
</script>

<style lang="scss" scope>
#partyQuest {overflow: hidden; padding: 0 0 100px;
  .header {display: flex; justify-content: space-between; align-items: center; position: absolute; top: 0; right: 0; left: 0; z-index: 10; height: $headerHeight; padding: 0 20px;
    .back {display: block; width: 60px; height: 60px; background: url(~static/images/ico/back_30x30_white.png) center center no-repeat; text-indent: -9999em;}
    .export {width: 60px; height: 60px; background: url(~static/images/ico/export_30x30_white.png) center center no-repeat; text-indent: -9999em;}
  }
  .visual {position: relative; height: 564px;
    &:before {display: block; content: ''; position: absolute; top: 0; right: 0; left: 0; height: 195px; background: linear-gradient(180deg, rgba(0,0,0,1) 0%, transparent 100%); opacity: 0.4;}
    img {width: 100%; height: 564px;}
    .call {position: absolute; right: 28px; bottom: 28px; border-radius: 10px; padding: 0 18px; background: rgba(255, 255, 255, 0.75);
      span {display: block; padding: 0 0 0 28px; font-size: 26px; line-height: 50px; color: #676767; background: url(~static/images/ico/call_20x20_gray.png) 0 center no-repeat;}
    }
  }
  .container {margin: 30px 0 0; padding: 0 30px;
    h1 {padding: 0 0 30px; border-bottom: 2px solid #f1f4f7; font-weight: 700; font-size: 30px;}
    .store {display: flex; align-items: center; padding: 20px 0;
      .photo {width: 50px; height: 50px; background: url(~static/images/common/default_profile_50x50.png) 0 0 no-repeat;}
      .name {margin: 0 0 0 20px; font-weight: 700; font-size: 26px; color: #000000;}
    }
    .menu {margin: 0 -30px; padding: 0 30px; border-bottom: 2px solid #b7b7b7;
      .inner {display: flex; position: relative;
        button {flex: 1 1 33.333333%; height: 80px; font-size: 26px;
          &.on {font-weight: 700;}
        }
        .focus_line {position: absolute; left: 0; bottom: -3px; width: 33.333333%; height: 4px; background: #000000;}
      }
    }
    .detail {margin: 0 -30px;
      .inner {overflow: hidden; position: relative; width: 300%;
        .quest_info {float: left; width: 750px; padding: 50px 30px;
          .period {padding: 0 0 0 42px; background: url(~static/images/ico/calendar_20x20_blue.png) 0 10px no-repeat; font-size: 26px;}
          .text {margin: 30px 0 0; padding: 0 0 0 42px; background: url(~static/images/ico/quote_20x20_blue.png) 0 10px no-repeat;
            p {font-size: 26px; line-height: 40px; color: #676767;}
          }
        }
        .store_info {float: left; width: 750px; padding: 0 30px;
          .map {margin: 0 -30px; height: 402px; background: #cccccc;}
          .info {margin: 30px 0 0;
            dt {margin: 0 0 20px; font-weight: 700; font-size: 26px;}
            dd {margin: 0 0 30px; padding: 0 0 0 42px; font-size: 26px;
              &:last-child {margin-bottom: 0;}
              &.tel {background: url(~static/images/ico/calendar_20x20_blue.png) 0 10px no-repeat;}
              &.locate {background: url(~static/images/ico/locate_20x20_blue.png) 0 10px no-repeat;}
            }
          }
          .info2 {margin: 50px 0 0;
            dt {margin: 0 0 20px; font-weight: 700; font-size: 26px;}
            dd {display: flex; margin: 0 0 30px; font-size: 26px;
              strong {flex: 1 1 200px; letter-spacing: -0.05em;}
              span {flex: 1 1 490px;}
            }
          }
        }
        .party_list {float: left; width: 750px; padding: 0 30px;
          ul {
            li {border-top: 2px solid #f1f4f7;
              &:first-child {border-top: none;}
              a {display: block; position: relative; height: 250px; padding: 25px 0 25px 200px;
                .cate {position: absolute; top: 20px; left: 0; width: 160px; height: 200px; background: url(~static/images/common/default_thumbnail_160x200.png);}
                .name {overflow: hidden; height: 74px; font-size: 30px; line-height: 37px;
                  img {margin: 0 15px 0 0;}
                }
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
      }
    }
    .btns {position: fixed; right: 50px; bottom: 50px; left: 50px;}
  }
}
</style>
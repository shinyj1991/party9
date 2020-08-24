<template>
  <article id="partyDetail">
    <header class="header">
      <div class="left">
        <nuxt-link to="/party/list" class="back">뒤로가기</nuxt-link>
      </div>
      <div class="right">
        <button type="button" class="export">공유하기</button>
      </div>
    </header>
    <div class="container">
      <h1>7시 도림천에서 3:3 농구 조질 파티 구함</h1>
      <div class="detail">
        <div class="visual"></div>
        <div class="info">
          <p class="cate">운동</p>
          <p class="area">도림천 농구장</p>
          <p class="date">오늘 (2020.08.21 금)</p>
          <p class="time">PM 7:00</p>
          <p class="stat">5/6<span class="last">마감임박</span></p>
        </div>
      </div>
      <div class="desc">
        <div class="profile">
          <div class="photo"></div>
          <p class="name">태정태세비욘세</p>
        </div>
        <div class="text">
          <p>도림천따라 신림에서 신대방역 쪽으로 가다보면 있는 농구장에서 7시부터 뜁니다! 끝나고 맘 맞는 사람들끼리 가볍게 한 잔 할 수도 있으니 이번 기회에 좋은 운동메이트 만드실 분들 편하게 연락주세요~</p>
        </div>
      </div>
      <div class="btns">
        <button1 v-if="!join" @click="join = true">파티 참여</button1>
        <button1 v-if="join">대화방 참여</button1>
        <button2 v-if="join" @click="join = false">참여 취소</button2>
        <button type="button" class="report">불량 게시글 신고하기</button>
      </div>
    </div>
  </article>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    data: () => ({
      join: false
    }),
    layout: 'popup',
    methods: {}
    
  }
</script>

<style lang="scss" scope>
#partyDetail {
  .header {display: flex; justify-content: space-between; align-items: center; height: $headerHeight; padding: 0 20px;
    .back {display: block; width: 60px; height: 60px; background: url(~static/images/ico/back_30x30_black.png) center center no-repeat; text-indent: -9999em;}
    .export {width: 60px; height: 60px; background: url(~static/images/ico/export_30x30_black.png) center center no-repeat; text-indent: -9999em;}
  }
  .container {margin: 30px 0 0; padding: 0 30px;
    h1 {padding: 0 0 30px; border-bottom: 2px solid #f1f4f7; font-weight: 700; font-size: 30px;}
    .detail {display: flex; justify-content: space-between; padding: 30px 0; border-bottom: 2px solid #f1f4f7;
      .visual {width: 280px; height: 350px; background: url(~static/images/common/default_thumbnail_280x350.png) 0 0 no-repeat;}
      .info {width: 364px;
        p {padding: 0 0 0 42px; margin: 33px 0 0;
          &:first-child {margin-top: 0;}
          &.cate {background: url(~static/images/ico/category_20x20_blue.png) 0 10px no-repeat;}
          &.area {background: url(~static/images/ico/locate_20x20_blue.png) 0 10px no-repeat;}
          &.date {background: url(~static/images/ico/calendar_20x20_blue.png) 0 10px no-repeat;}
          &.time {background: url(~static/images/ico/time_20x20_blue.png) 0 10px no-repeat;}
          &.stat {background: url(~static/images/ico/profile_20x20_blue.png) 0 10px no-repeat;}
        }
        .last {display: inline-block; border-radius: 5px; width: 100px; margin: 0 0 0 15px; background: #ff6868; font-size: 20px; line-height: 37px; color: #ffffff; text-align: center;}
        .close {display: inline-block; border-radius: 5px; width: 100px; margin: 0 0 0 15px; background: #bcbcbc; font-size: 20px; line-height: 37px; color: #ffffff; text-align: center;}
      }
    }
    .desc {margin: 0 0 100px; padding: 30px 0; border-bottom: 2px solid #f1f4f7;
      .profile {display: flex; align-items: center;
        .photo {width: 50px; height: 50px; background: url(~static/images/common/default_profile_50x50.png) 0 0 no-repeat;}
        .name {margin: 0 0 0 20px; font-weight: 700; font-size: 26px; color: #000000;}
      }
      .text {margin: 24px 0 0; padding: 0 0 0 42px; background: url(~static/images/ico/quote_20x20_blue.png) 0 10px no-repeat;
        p {font-size: 26px; line-height: 40px; color: #676767;}
      }
    }
    .btns {
      button {margin: 20px 0 0;
        &:first-child {margin-top: 0;}
        &.report {width: 100%; height: 56px; font-size: 24px; color: #a1a6b2;}
      }
    }
  }
}
</style>
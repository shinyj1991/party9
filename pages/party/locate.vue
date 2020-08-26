<template>
  <article id="partyLocate">
    <header class="header">
      <a @click="$router.go(-1)" class="back" v-if="step === 1">뒤로가기</a>
      <h1 class="title" v-if="step === 1">지역 설정</h1>
      <h2 class="title" v-if="step === 2">지역 추가</h2>
      <button type="button" class="close" @click="step = 1" v-if="step === 2">닫기</button>
    </header>
    <div class="set_location" v-if="step === 1">
      <div class="title">
        <h3>관심지역</h3>
        <p>최소 1개 이상 3개 이하로 설정할 수 있습니다.</p>
      </div>
      <div class="my_location">
        <div class="location">
          <div class="name">광진구</div>
          <button class="delete">삭제</button>
        </div>
        <div class="location">
          <div class="name">강남구</div>
          <button class="delete">삭제</button>
        </div>
        <div class="register">
          <button type="button" @click="step = 2">지역 추가</button>
        </div>
      </div>
    </div>
    <div class="add_location" v-if="step === 2">
      <div class="depth1">
        <label v-for="location in locationDepth1" :key="location.id" @change="changeLocationDepth1(location)"><input type="radio" :value="location.code" v-model="selectedLocationDepth1"><span>{{ location.name }}</span></label>
      </div>
      <div class="depth2">
        <label v-for="location in locationDepth2" :key="location.id"><input type="radio" :value="location.code" v-model="selectedLocationDepth2"><span>{{ location.name }}</span></label>
      </div>
    </div>
  </article>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import location from '~/static/json/location';

  export default {
    data: () => ({
      step: 1,

      locationDepth1: location,
      locationDepth2: location[0].gugun,

      selectedLocationDepth1: '01',
      selectedLocationDepth2: null
    }),
    layout: 'popup',
    mounted() {
      console.log(this.locationDepth1[0].gugun);
    },
    methods: {
      changeLocationDepth1(location) {
        this.locationDepth2 = location.gugun;
      }
    }
  }
</script>

<style lang="scss">
#partyLocate {overflow: hidden; position: relative;
  .header {position: relative; height: 80px; padding: 0 30px; border-bottom: 2px solid #b7b7b7;
    .back {display: block; position: absolute; top: 10px; left: 10px; width: 60px; height: 60px; background: url(~static/images/ico/back_30x30_black.png) center center no-repeat; text-indent: -9999em;}
    .title {font-weight: 700; font-size: 32px; line-height: 80px; text-align: center;}
    .close {position: absolute; top: 10px; right: 10px; width: 60px; height: 60px; background: url(~static/images/ico/close_24x24_black.png) center center no-repeat; text-indent: -9999em;}
  }
  .set_location {padding: 30px;
    .title {display: flex; align-items: center;
      h3 {font-weight: 700; font-size: 30px;}
      p {margin: 0 0 0 23px; font-size: 26px; color: #afbbc6;}
    }
    .my_location {overflow: hidden; margin: 20px 0 0;
      > div {float: left; position: relative; width: 220px; height: 105px; margin: 0 0 0 15px;
        &:first-child {margin-left: 0;}
        &.location {
          .name {width: 100%; height: 70px; border-radius: 10px; border: 1px solid #e4eaef; font-size: 30px; line-height: 68px; text-align: center;}
          .delete {display: block; position: absolute; left: 50%; bottom: 0; margin: 0 0 0 -14px; width: 28px; height: 28px; background: url(~static/images/ico/close_16x16_black.png) center center no-repeat; text-indent: -9999em;}
        }
        &.register {
          button {width: 100%; height: 70px; border-radius: 10px; background: #2699fb; font-size: 30px; color: #ffffff;
            &:after {display: block; content: ''; position: absolute; left: 50%; bottom: 0; margin: 0 0 0 -14px; width: 28px; height: 28px; background: url(~static/images/ico/add_20x20_blue.png) center center no-repeat; text-indent: -9999em;}
          }
        }
      }
    }
  }
  .add_location {overflow: hidden;
    .depth1 {float: left; overflow-y: scroll; height: calc(100vh - 80px); width: 250px; padding: 30px 0 30px 35px;  bottom: 1px solid #e4eaef; background: #f8f8f8;
      label {display: block; position: relative; margin: 40px 0 0;
        &:first-child {margin-top: 0;}
        input {position: absolute; top: 0; left: 0; width: 1px; height: 1px; opacity: 0;
          &:checked + span {font-weight: 700; color: #2699fb;}
        }
        span {font-size: 28px; color: #000000;}
      }
    }
    .depth2 {float: left; overflow-y: scroll; height: calc(100vh - 80px); width: 500px; padding: 30px 0 30px 60px; margin: 0 0 -26px;
      label {display: block; position: relative; float: left; width: 220px; margin: 0 0 26px;
        input {position: absolute; top: 0; left: 0; width: 1px; height: 1px; opacity: 0;
          &:checked + span {font-weight: 700; color: #2699fb;}
        }
        span {font-size: 28px; color: #747474;}
      }
    }
  }
}
</style>
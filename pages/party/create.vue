<template>
  <article id="partyCreate">
    <header class="header">
      <a @click="$router.go(-1)" class="back" v-if="step === 1">뒤로가기</a>
      <button type="button" class="prev" v-if="step !== 1" @click="stepPrev">이전</button>
      <h1 class="title">파티원모집</h1>
      <button type="button" class="done" v-if="step !== 4" @click="stepNext">다음</button>
      <button type="button" class="done" v-if="step === 4">완료</button>
    </header>
    <div class="step1" v-if="step === 1">
      <div class="depth1">
        <label><input type="radio" value="1" v-model="areaDepth1"><span>서울</span></label>
        <label><input type="radio" value="2" v-model="areaDepth1"><span>경기</span></label>
        <label><input type="radio" value="3" v-model="areaDepth1"><span>인천</span></label>
        <label><input type="radio" value="4" v-model="areaDepth1"><span>대전</span></label>
        <label><input type="radio" value="5" v-model="areaDepth1"><span>세종</span></label>
        <label><input type="radio" value="6" v-model="areaDepth1"><span>충남</span></label>
        <label><input type="radio" value="7" v-model="areaDepth1"><span>충북</span></label>
        <label><input type="radio" value="8" v-model="areaDepth1"><span>광주</span></label>
        <label><input type="radio" value="9" v-model="areaDepth1"><span>전남</span></label>
        <label><input type="radio" value="10" v-model="areaDepth1"><span>전북</span></label>
        <label><input type="radio" value="11" v-model="areaDepth1"><span>대구</span></label>
        <label><input type="radio" value="12" v-model="areaDepth1"><span>경북</span></label>
        <label><input type="radio" value="13" v-model="areaDepth1"><span>부산</span></label>
        <label><input type="radio" value="14" v-model="areaDepth1"><span>울산</span></label>
        <label><input type="radio" value="15" v-model="areaDepth1"><span>경남</span></label>
        <label><input type="radio" value="16" v-model="areaDepth1"><span>강원</span></label>
        <label><input type="radio" value="17" v-model="areaDepth1"><span>제주</span></label>
      </div>
      <div class="depth2">
        <label><input type="radio" value="1" v-model="areaDepth2"><span>강남구</span></label>
        <label><input type="radio" value="2" v-model="areaDepth2"><span>강동구</span></label>
        <label><input type="radio" value="3" v-model="areaDepth2"><span>강북구</span></label>
        <label><input type="radio" value="4" v-model="areaDepth2"><span>강서구</span></label>
        <label><input type="radio" value="5" v-model="areaDepth2"><span>관악구</span></label>
        <label><input type="radio" value="6" v-model="areaDepth2"><span>광진구</span></label>
        <label><input type="radio" value="7" v-model="areaDepth2"><span>구로구</span></label>
        <label><input type="radio" value="8" v-model="areaDepth2"><span>금천구</span></label>
        <label><input type="radio" value="9" v-model="areaDepth2"><span>노원구</span></label>
        <label><input type="radio" value="10" v-model="areaDepth2"><span>도봉구</span></label>
        <label><input type="radio" value="11" v-model="areaDepth2"><span>동대문구</span></label>
        <label><input type="radio" value="12" v-model="areaDepth2"><span>동작구</span></label>
        <label><input type="radio" value="13" v-model="areaDepth2"><span>마포구</span></label>
        <label><input type="radio" value="14" v-model="areaDepth2"><span>서대문구</span></label>
        <label><input type="radio" value="15" v-model="areaDepth2"><span>서초구</span></label>
        <label><input type="radio" value="16" v-model="areaDepth2"><span>성동구</span></label>
        <label><input type="radio" value="17" v-model="areaDepth2"><span>성북구</span></label>
        <label><input type="radio" value="18" v-model="areaDepth2"><span>송파구</span></label>
        <label><input type="radio" value="19" v-model="areaDepth2"><span>양천구</span></label>
        <label><input type="radio" value="20" v-model="areaDepth2"><span>영등포구</span></label>
        <label><input type="radio" value="21" v-model="areaDepth2"><span>용산구</span></label>
        <label><input type="radio" value="22" v-model="areaDepth2"><span>은평구</span></label>
        <label><input type="radio" value="23" v-model="areaDepth2"><span>종로구</span></label>
        <label><input type="radio" value="24" v-model="areaDepth2"><span>중구</span></label>
        <label><input type="radio" value="25" v-model="areaDepth2"><span>중랑구</span></label>
      </div>
    </div>
    <div class="step2" v-if="step === 2">
      <ul>
        <li class="c1">
          <label>
            <input type="checkbox" @change="selectCategory">
            <span>운동</span>
          </label>
        </li>
        <li class="c2">
          <label>
            <input type="checkbox" @change="selectCategory">
            <span>맛집</span>
          </label>
        </li>
        <li class="c3">
          <label>
            <input type="checkbox" @change="selectCategory">
            <span>취미</span>
          </label>
        </li>
        <li class="c4">
          <label>
            <input type="checkbox" @change="selectCategory">
            <span>공부</span>
          </label>
        </li>
        <li class="c5">
          <label>
            <input type="checkbox" @change="selectCategory">
            <span>기타</span>
          </label>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    data: () => ({
      step: 1,
      addressKeyword: '',
      areaDepth1: 1,
      areaDepth2: 0
    }),
    layout: 'popup',
    methods: {
      selectCategory() {
        this.step = 2;
      },
      stepPrev() {
        this.step--;
      },
      stepNext() {
        this.step++;
      },
      getAddress() {
        this.$store.dispatch('kakao/address/getAddress', this.addressKeyword)
      }
      /*...mapActions({
        getAddress: 'kakao/address/getAddress'
      })*/
    }
  }
</script>

<style lang="scss">
#partyCreate {padding: 80px 0 0;
  .header {position: fixed; top: 0; right: 0; left: 0; height: $headerHeight; padding: 0 30px; border-bottom: 2px solid #b7b7b7;
    .back {display: block; position: absolute; top: 10px; left: 10px; width: 60px; height: 60px; background: url(~static/images/ico/back_30x30_black.png) center center no-repeat; text-indent: -9999em;}
    .title {font-weight: 700; font-size: 32px; line-height: 80px; text-align: center;}
    .prev {position: absolute; top: 10px; left: 30px; height: 60px; font-size: 28px;}
    .done {position: absolute; top: 10px; right: 30px; height: 60px; font-size: 28px;}
  }
  .step1 {overflow-y: scroll; height: calc(100vh - 80px);
    .depth1 {float: left; width: 250px; min-height: calc(100vh - 80px); padding: 30px 0 30px 35px;  bottom: 1px solid #e4eaef; background: #f8f8f8;
      label {display: block; position: relative; margin: 40px 0 0;
        &:first-child {margin-top: 0;}
        input {position: absolute; top: 0; left: 0; width: 1px; height: 1px; opacity: 0;
          &:checked + span {font-weight: 700; color: #2699fb;}
        }
        span {font-size: 30px; color: #000000;}
      }
    }
    .depth2 {float: left; width: 500px; overflow: hidden; padding: 30px 0 30px 60px; margin: 0 0 -26px;
      label {display: block; position: relative; float: left; width: 220px; margin: 0 0 26px;
        input {position: absolute; top: 0; left: 0; width: 1px; height: 1px; opacity: 0;
          &:checked + span {font-weight: 700; color: #2699fb;}
        }
        span {font-size: 30px; color: #747474;}
      }
    }
  }
  .step2 {padding: 50px;
    h2 {font-weight: 700; font-size: 28px; margin: 0 0 30px;}
    ul {overflow: hidden; margin: 0 -50px -50px 0;
      li {float: left; width: 300px; margin: 0 50px 50px 0;
        label {position: relative;
          input {position: absolute; top: 0; left: 0; width: 1px; height: 1px; opacity: 0;
            &:checked + span:after {display: block; content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: rgba(0, 0, 0, 0.7);}
          }
          span {display: block; position: relative; width: 100%; height: 218px; padding: 134px 0 34px; border-radius: 10px; border: 2px solid #afbbc6; font-weight: 700; font-size: 30px; line-height: 46px; color: #3f4850; text-align: center;}
        }
        &.c1 label span {background: url(~static/images/common/cate_exercise.png) center 28px no-repeat;}
        &.c2 label span {background: url(~static/images/common/cate_food.png) center 28px no-repeat;}
        &.c3 label span {background: url(~static/images/common/cate_hobby.png) center 28px no-repeat;}
        &.c4 label span {background: url(~static/images/common/cate_study.png) center 28px no-repeat;}
        &.c5 label span {background: url(~static/images/common/cate_etc.png) center 28px no-repeat;}
      }
    }
  }
}
</style>
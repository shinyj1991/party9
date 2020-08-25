<template>
  <article id="partyCreate">
    <header class="header">
      <a @click="$router.go(-1)" class="back" v-if="step === 1">뒤로가기</a>
      <button type="button" class="prev" v-if="step !== 1" @click="stepPrev">이전</button>
      <h1 class="title">파티원모집</h1>
      <button type="button" class="done" v-if="step === 2" @click="stepNext">다음</button>
      <button type="button" class="done" v-if="step === 3">완료</button>
    </header>
    <div class="step1" v-if="step === 1">
      <h2>카테고리 선택</h2>
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
      step: 1
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
      }
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
  .step1 {padding: 50px;
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
<template>
  <article id="partyRange">
    <header class="header">
      <div class="left">
        <nuxt-link to="/party/list" class="back">뒤로가기</nuxt-link>
      </div>
      <h1 class="title">카테고리 선택</h1>
    </header>
    <div class="container">
      <ul>
        <li class="c1">
          <label>
            <input type="checkbox">
            <span>운동</span>
          </label>
        </li>
        <li class="c2">
          <label>
            <input type="checkbox">
            <span>맛집</span>
          </label>
        </li>
        <li class="c3">
          <label>
            <input type="checkbox">
            <span>취미</span>
          </label>
        </li>
        <li class="c4">
          <label>
            <input type="checkbox">
            <span>공부</span>
          </label>
        </li>
        <li class="c5">
          <label>
            <input type="checkbox">
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
      title: ''
    }),
    layout: 'popup',
    methods: {}
  }
</script>

<style lang="scss">
#partyRange {overflow: hidden; position: relative; padding: 100px 0 0;
  .header {display: flex; align-items: center; position: fixed; top: 0; right: 0; left: 0; height: 100px; padding: 0 30px; border-bottom: 2px solid #b7b7b7;
    .back {display: block; width: 60px; height: 60px; background: url(~static/images/ico/back_30x30_black.png) center center no-repeat; text-indent: -9999em;}
    .title {margin: 0 0 0 10px; font-weight: 700; font-size: 32px;}
  }
  .container {padding: 50px;
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
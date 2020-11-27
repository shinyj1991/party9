<template>
  <article id="admin">
    <div class="head">
      <nuxt-link to="/" type="button" class="btn_back">뒤로가기</nuxt-link>
      <h1 class="title">2020-11-27 금</h1>
    </div>
    <div class="body">
      <label>
        <input type="checkbox">
        <span>이날이후 모든 일정에 반영</span>
      </label>
      <ul>
        <li>
          <button type="button" class="delete">삭제</button>
          <input type="text" placeholder="항목을 입력해주세요" class="task">
          <input type="number" placeholder="점수" class="score">
        </li>
      </ul>
      <button type="button" class="btn_add">+ 항목 추가하기</button>
    </div>
  </article>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    data: () => ({
      title: ''
    }),
    mounted() {},
    methods: {}
  }
</script>

<style lang="scss">
  #admin {
    .head {position: relative;
      .btn_back {position: absolute; top: 0; left: 30px; height: 100px; line-height: 100px;}
      .title {font-weight: 700; font-size: 36px; line-height: 100px; text-align: center;}
    }
    .body {padding: 0 30px;
      ul {margin-top: 30px;
        li {overflow: hidden;
          .delete {float: left; width: 80px; height: 80px; background: red; color: #ffffff;}
          .task {float: left; width: 420px; height: 80px; margin-left: 20px;}
          .score {float: left; width: 150px; height: 80px; margin-left: 20px;}
        }
      }
      .btn_add {display: block; width: 100%; height: 100px; margin-top: 30px; color: blue;}
    }
  }
</style>
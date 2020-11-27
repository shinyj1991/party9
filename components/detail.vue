<template>
  <article id="detail">
    <div class="head">
      <div class="title">18. 수</div>
      <div class="score p100">100</div>
    </div>
    <div class="detail">
      <ul>
        <li>
          <label>
            <input type="checkbox" checked>
            <span class="task">아침운동</span>
            <span class="score">30</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked>
            <span class="task">독서하기</span>
            <span class="score">30</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked>
            <span class="task">청소하기</span>
            <span class="score">40</span>
          </label>
        </li>
      </ul>
    </div>
    <button class="task_admin">task admin</button>
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
  #detail {position: relative; height: 50vh; overflow-y: scroll; border-top: 1px solid #000;
    .head {overflow: hidden; padding: 12px 30px;
      .title {float: left; font-weight: 700; font-size: 34px; line-height: 72px;}
      .score {float: right; font-weight: 700; font-size: 40px; line-height: 72px;
        &.p100 {color: #fbba00;}
        &.p90 {color: #34a853;}
        &.p80 {color: #34a853;}
        &.p70 {color: #3c82f4;}
        &.p60 {color: #3c82f4;}
        &.p50 {color: #8f56bf;}
        &.p40 {color: #8f56bf;}
        &.p30 {color: #ea3e2f;}
        &.p20 {color: #ea3e2f;}
        &.p10 {color: #000000;}
      }
    }
    .detail {padding: 0 30px;
      ul {
        li {
          label {display: block; position: relative; padding: 0 50px;
            .task {display: block; font-size: 30px; line-height: 100px;}
            .score {position: absolute; top: 0; right: 10px; font-size: 30px; line-height: 100px;}
            input {position: absolute; top: 35px; left: 0; width: 30px; height: 30px;}
          }
        }
      }
    }
    .task_admin {display: block; position: absolute; right: 30px; bottom: 30px; width: 100px; height: 100px; border-radius: 50%; background: #333333; text-indent: -9999em;
      &:before {display: block; content: ''; position: absolute; top: 48px; left: 20px; width: 60px; height: 4px; background: #ffffff;}
      &:after {display: block; content: ''; position: absolute; top: 20px; left: 48px; width: 4px; height: 60px; background: #ffffff;}
    }
  }
</style>
<template>
  <article id="calendar">
    <div class="head">
      <h1 class="title">2020. 11</h1>
      <div class="average p70">74.23</div>
    </div>
    <div class="calendar">
      <table>
        <colgroup>
          <col style="width: 14.285714%;">
          <col style="width: 14.285714%;">
          <col style="width: 14.285714%;">
          <col style="width: 14.285714%;">
          <col style="width: 14.285714%;">
          <col style="width: 14.285714%;">
          <col style="width: auto;">
        </colgroup>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="datebox p90">
                <div class="date">1</div>
                <div class="score">90</div>
              </div>
            </td>
            <td>
              <div class="datebox p100">
                <div class="date">2</div>
                <div class="score">100</div>
              </div>
            </td>
            <td>
              <div class="datebox p60">
                <div class="date">3</div>
                <div class="score">60</div>
              </div>
            </td>
            <td>
              <div class="datebox p80">
                <div class="date">4</div>
                <div class="score">85</div>
              </div>
            </td>
            <td>
              <div class="datebox p40">
                <div class="date">5</div>
                <div class="score">41</div>
              </div>
            </td>
            <td>
              <div class="datebox p60">
                <div class="date">6</div>
                <div class="score">65</div>
              </div>
            </td>
            <td>
              <div class="datebox p90">
                <div class="date">7</div>
                <div class="score">90</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="datebox p90">
                <div class="date">8</div>
                <div class="score">90</div>
              </div>
            </td>
            <td>
              <div class="datebox p10">
                <div class="date">9</div>
                <div class="score">15</div>
              </div>
            </td>
            <td>
              <div class="datebox p80">
                <div class="date">10</div>
                <div class="score">80</div>
              </div>
            </td>
            <td>
              <div class="datebox p20">
                <div class="date">11</div>
                <div class="score">20</div>
              </div>
            </td>
            <td>
              <div class="datebox p40">
                <div class="date">12</div>
                <div class="score">41</div>
              </div>
            </td>
            <td>
              <div class="datebox p100">
                <div class="date">13</div>
                <div class="score">100</div>
              </div>
            </td>
            <td>
              <div class="datebox p90">
                <div class="date">14</div>
                <div class="score">90</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="datebox p60">
                <div class="date">15</div>
                <div class="score">61</div>
              </div>
            </td>
            <td>
              <div class="datebox p30">
                <div class="date">16</div>
                <div class="score">34</div>
              </div>
            </td>
            <td>
              <div class="datebox p100">
                <div class="date">17</div>
                <div class="score">100</div>
              </div>
            </td>
            <td>
              <div class="datebox p100 today">
                <div class="date">18</div>
                <div class="score">100</div>
              </div>
            </td>
            <td>
              <div class="datebox p40">
                <div class="date">19</div>
              </div>
            </td>
            <td>
              <div class="datebox p60">
                <div class="date">20</div>
              </div>
            </td>
            <td>
              <div class="datebox p90">
                <div class="date">21</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="datebox p90">
                <div class="date">22</div>
              </div>
            </td>
            <td>
              <div class="datebox p100">
                <div class="date">23</div>
              </div>
            </td>
            <td>
              <div class="datebox p90">
                <div class="date">24</div>
              </div>
            </td>
            <td>
              <div class="datebox p80">
                <div class="date">25</div>
              </div>
            </td>
            <td>
              <div class="datebox p40">
                <div class="date">26</div>
              </div>
            </td>
            <td>
              <div class="datebox p60">
                <div class="date">27</div>
              </div>
            </td>
            <td>
              <div class="datebox p90">
                <div class="date">28</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="datebox p90">
                <div class="date">29</div>
              </div>
            </td>
            <td>
              <div class="datebox p100">
                <div class="date">30</div>
              </div>
            </td>
            <td>
              <div class="datebox p90">
                <div class="date">1</div>
              </div>
            </td>
            <td>
              <div class="datebox p80">
                <div class="date">2</div>
              </div>
            </td>
            <td>
              <div class="datebox p40">
                <div class="date">3</div>
              </div>
            </td>
            <td>
              <div class="datebox p60">
                <div class="date">4</div>
              </div>
            </td>
            <td>
              <div class="datebox p90">
                <div class="date">5</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
  #calendar {height: 50vh;
    .head {overflow: hidden; height: 96px; padding: 12px 30px;
      .title {float: left; font-weight: 700; font-size: 40px; line-height: 72px;}
      .average {float: right; font-weight: 700; font-size: 40px; line-height: 72px;
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
    .calendar {padding: 0 10px;
      table thead tr th {height: 40px;}
      table tbody tr td {
        .datebox {position: relative; height: calc((50vh - 136px) / 5);
          .date {width: 36px; height: 36px; border-radius: 50%; position: absolute; top: 0; left: 0; text-align: center;}
          &.today .date {background: #cccccc;}
          .score {font-weight: 700; font-size: 36px; line-height: calc((50vh - 136px) / 5); text-align: center;}
          &.p100 .score {color: #fbba00;}
          &.p90 .score {color: #34a853;}
          &.p80 .score {color: #34a853;}
          &.p70 .score {color: #3c82f4;}
          &.p60 .score {color: #3c82f4;}
          &.p50 .score {color: #8f56bf;}
          &.p40 .score {color: #8f56bf;}
          &.p30 .score {color: #ea3e2f;}
          &.p20 .score {color: #ea3e2f;}
          &.p10 .score {color: #000000;}
        }
      }
    }
  }
</style>
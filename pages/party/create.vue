<template>
  <article id="partyCreate">
    <header class="header">
      <a @click="$router.go(-1)" class="back" v-if="step === 1">뒤로가기</a>
      <button type="button" class="prev" v-if="step !== 1" @click="stepPrev">이전</button>
      <h1 class="title">파티원모집</h1>
      <button type="button" class="done" v-if="step === 3" @click="stepNext">다음</button>
      <button type="button" class="done" v-if="step === 4" @click="createComplete">완료</button>
    </header>
    <div class="step1" :class="{on: step === 1}">
      <div class="depth1">
        <label v-for="location in locationDepth1" :key="location.id" @change="changeLocationDepth1(location)"><input type="radio" :value="location.code" v-model="selectedLocationDepth1"><span>{{ location.name }}</span></label>
      </div>
      <div class="depth2">
        <label v-for="location in locationDepth2" :key="location.id" @change="changeLocationDepth2(location)"><input type="radio" :value="location.code" v-model="selectedLocationDepth2"><span>{{ location.name }}</span></label>
      </div>
    </div>
    <div class="step2" :class="{on: step === 2}">
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
    <div class="step3" :class="{on: step === 3}">
      <div class="photo_title">
        <div class="photo">
          <input type="file">
        </div>
        <div class="title">
          <p class="label">제목</p>
          <input type="text" placeholder="제목을 입력해주세요">
        </div>
      </div>
      <div class="date_time">
        <p class="label">일정</p>
        <dl class="date">
          <dt>날짜</dt>
          <dd>
            <input type="text" value="2020년 8월 30일 (일)">
          </dd>
        </dl>
        <dl class="time">
          <dt>시간</dt>
          <dd>
            <label class="_radio">
              <input type="radio">
              <span>오전</span>
            </label>
            <label class="_radio ml20">
              <input type="radio">
              <span>오후</span>
            </label>
            <select class="ml30">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <span class="txt">시</span>
            <select class="ml20">
              <option value="00">00</option>
              <option value="05">05</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
            </select>
            <span class="txt">분</span>
          </dd>
        </dl>
      </div>
      <div class="location">
        <p class="label">장소</p>
        <dl class="selected">
          <dt>주소</dt>
          <dd>{{ address }}</dd>
        </dl>
        <div id="map" class="map">
          <img src="~static/images/ico/marker_40x49_blue.png" alt="" class="marker">
        </div>
        <!-- <div class="location_search">
          <input type="search" v-model="addressKeyword">
          <button type="button" @click="getAddressList">검색하기</button>
        </div>
        <div>{{ address }}</div> -->
      </div>
    </div>
    <div class="step4" :class="{on: step === 4}">
      <div class="persons">
        <p class="label">모집인원<span>최대 30명 까지 모집할 수 있습니다.</span></p>
        <div class="contents">
          <dl>
            <dt>성별무관</dt>
            <dd>
              <input type="number" placeholder="00">
              <span>명</span>
            </dd>
          </dl>
          <dl>
            <dt>남자</dt>
            <dd>
              <input type="number" placeholder="00">
              <span>명</span>
            </dd>
          </dl>
          <dl>
            <dt>여자</dt>
            <dd>
              <input type="number" placeholder="00">
              <span>명</span>
            </dd>
          </dl>
        </div>
      </div>
      <div class="age">
        <p class="label">모집연령</p>
        <div class="contents">
          <div class="range">
            <input type="number" placeholder="00">
            <span class="txt">세 부터</span>
            <input type="number" class="ml40" placeholder="00">
            <span class="txt">세 까지</span>
          </div>
          <label class="_checkbox">
            <input type="checkbox">
            <span>제한없음</span>
          </label>
        </div>
      </div>
      <div class="desc">
        <p class="label">파티 소개</p>
        <textarea placeholder="우리 파티를 소개해주세요! (생략가능)"></textarea>
      </div>
    </div>
  </article>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import location from '~/static/json/location';

  export default {
    layout: 'popup',
    data: () => ({
      step: 1,

      locationDepth1: location,
      locationDepth2: null,

      selectedLocationDepth1: null,
      selectedLocationDepth2: null,

      selectedLocationDepth1Name: null,
      selectedLocationDepth2Name: null,

      addressKeyword: '',

      coordFlag: false
    }),
    computed: mapState({
      address: state => state.kakao.address.address,
      coord: state => state.kakao.address.coord,
      addressList: state => state.kakao.address.addressList
    }),
    watch: {
      coord() {
        let moveLatLon = new kakao.maps.LatLng(this.coord.y, this.coord.x);
        this.map.setCenter(moveLatLon);
      }
    },
    mounted() {
      this.map = new kakao.maps.Map(document.getElementById('map'), {
        center: new kakao.maps.LatLng('37.5070416849442', '126.721873215516'),
        level: 2
      });

      kakao.maps.event.addListener(this.map, 'idle', () => {
        this.$store.dispatch('kakao/address/coord2address', {
          x: this.map.getCenter().Ga,
          y: this.map.getCenter().Ha
        });
      });
    },
    methods: {
      createComplete() {
        this.$router.push('/party');
      },
      selectCategory() {
        this.step = 3;
      },
      stepPrev() {
        this.step--;
      },
      stepNext() {
        this.step++;
      },
      getAddress() {
        this.$store.dispatch('kakao/address/getAddress', `${this.selectedLocationDepth1Name} ${this.selectedLocationDepth2Name}`);
      },
      /*...mapActions({
        getAddress: 'kakao/address/getAddress'
      }),*/
      changeLocationDepth1(location) {
        this.locationDepth2 = location.gugun;
        this.selectedLocationDepth1Name = location.name;
      },
      changeLocationDepth2(location) {
        this.step = 2;

        this.selectedLocationDepth2Name = location.name;

        this.getAddress();
      }
    }
  }
</script>

<style lang="scss">
#partyCreate {overflow: hidden; position: relative; width: 100%; padding: 80px 0 0;
  .header {position: fixed; top: 0; right: 0; left: 0; z-index: 101; height: $headerHeight; padding: 0 30px; border-bottom: 2px solid #b7b7b7; background: #ffffff;
    .back {display: block; position: absolute; top: 10px; left: 10px; width: 60px; height: 60px; background: url(~static/images/ico/back_30x30_black.png) center center no-repeat; text-indent: -9999em;}
    .title {font-weight: 700; font-size: 32px; line-height: 80px; text-align: center;}
    .prev {position: absolute; top: 10px; left: 30px; height: 60px; font-size: 28px;}
    .done {position: absolute; top: 10px; right: 30px; height: 60px; font-size: 28px;}
  }
  .step1 {position: absolute; left: 9999px; overflow-y: scroll; width: 750px; height: calc(100vh - 80px);
    &.on {position: relative; left: 0;}
    .depth1 {float: left; width: 250px; min-height: calc(100vh - 80px); padding: 30px 0 30px 35px;  bottom: 1px solid #e4eaef; background: #f8f8f8;
      label {display: block; position: relative; margin: 40px 0 0;
        &:first-child {margin-top: 0;}
        input {position: absolute; top: 0; left: 0; width: 1px; height: 1px; opacity: 0;
          &:checked + span {font-weight: 700; color: #2699fb;}
        }
        span {font-size: 28px; color: #000000;}
      }
    }
    .depth2 {float: left; width: 500px; overflow: hidden; padding: 30px 0 30px 60px; margin: 0 0 -26px;
      label {display: block; position: relative; float: left; width: 220px; margin: 0 0 26px;
        input {position: absolute; top: 0; left: 0; width: 1px; height: 1px; opacity: 0;
          &:checked + span {font-weight: 700; color: #2699fb;}
        }
        span {font-size: 28px; color: #747474;}
      }
    }
  }
  .step2 {position: absolute; left: 9999px; padding: 50px;
    &.on {position: relative; left: 0;}
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
  .step3 {position: absolute; left: 9999px; padding: 55px 30px;
    &.on {position: relative; left: 0;}
    .photo_title {display: flex; justify-content: space-between;
      .photo {overflow: hidden; position: relative; width: 100px; height: 126px; background: url(~static/images/common/default_attach.png) 0 0 no-repeat;
        input {position: absolute; top: 0; right: 0; font-size: 100px;}
      }
      .title {width: 560px;
        .label {font-weight: 700; font-size: 26px; line-height: 38px; padding: 0 0 0 42px; background: url(~static/images/ico/text_20x20_blue.png) 0 center no-repeat;}
        input {margin: 13px 0 0; height: 75px; border: solid #f1f4f7; border-width: 0 0 2px;}
      }
    }
    .date_time {margin: 60px 0 0;
      .label {font-weight: 700; font-size: 26px; line-height: 38px; padding: 0 0 0 42px; background: url(~static/images/ico/calendar_20x20_blue.png) 0 center no-repeat;}
      dl {display: flex; align-items: center; margin: 30px 0 0;
        dt {width: 116px; padding: 0 0 0 8px;}
        dd {width: 574px;}
        &.date {
          dd input {border-radius: 10px; border: 1px solid #e4eaef; text-align: center;}
        }
        &.time {
          dd {display: flex; align-items: center; justify-content: space-between;
            ._radio span {white-space: nowrap;}
            select {width: 115px; height: 65px; border-radius: 10px; border: 1px solid #e4eaef;}
          }
        }
      }
    }
    .location {margin: 60px 0 0;
      .label {font-weight: 700; font-size: 26px; line-height: 38px; padding: 0 0 0 42px; background: url(~static/images/ico/locate_20x20_blue.png) 0 center no-repeat;}
      .selected {display: flex; margin: 22px 0 0;
        dt {width: 136px; padding: 0 20px; line-height: 45px;}
        dd {width: 554px; font-size: 30px; line-height: 45px;}
      }
      .map {width: 750px; height: 800px; margin: 20px -30px -55px; background: #cccccc;
        .marker {position: absolute; top: 50%; left: 50%; margin: -45px 0 0 -20px; z-index: 100;}
      }
      .location_search {position: relative; margin: 13px 0 0;
        input {height: 75px; border: solid #f1f4f7; border-width: 0 0 2px;}
        button {position: absolute; top: 8px; right: 20px; width: 60px; height: 60px; background: url(~static/images/ico/search_20x20_black.png) center center no-repeat; text-indent: -9999em;}
      }
    }
  }
  .step4 {position: absolute; left: 9999px; padding: 55px 30px;
    &.on {position: relative; left: 0;}
    .persons {
      .label {font-weight: 700; font-size: 26px; line-height: 38px; padding: 0 0 0 42px; background: url(~static/images/ico/profile_20x20_blue.png) 0 center no-repeat;
        span {margin: 0 0 0 40px; font-weight: 400; color: #afbbc6;}
      }
      .contents {display: flex; justify-content: space-between; margin: 30px 0 0;
        dl {width: 213px;
          dt {margin: 0 0 5px; border-radius: 10px; border: 1px solid #e4eaef; font-size: 30px; line-height: 63px; text-align: center;}
          dd {display: flex; align-items: center; justify-content: center;
            input {display: inline-block; width: 100px; height: 75px; border: solid #f1f4f7; border-width: 0 0 2px; text-align: center;}
            span {font-size: 30px;}
          }
        }
      }
    }
    .age {margin: 60px 0 0;
      .label {font-weight: 700; font-size: 26px; line-height: 38px; padding: 0 0 0 42px; background: url(~static/images/ico/profile_20x20_blue.png) 0 center no-repeat;
        span {margin: 0 0 0 40px; font-weight: 400; color: #afbbc6;}
      }
      .contents {margin: 30px 0 0; display: flex; justify-content: space-between; align-items: center;
        .range {display: flex; align-items: center;
          input {display: inline-block; width: 100px; height: 75px; border: solid #f1f4f7; border-width: 0 0 2px; text-align: center;}
          .txt {margin: 0 0 0 5px; font-size: 30px;}
        }
        ._checkbox {margin: 0 25px 0 0;}
      }
    }
    .desc {margin: 60px 0 0;
      .label {font-weight: 700; font-size: 26px; line-height: 38px; padding: 0 0 0 42px; background: url(~static/images/ico/quote_20x20_blue.png) 0 center no-repeat;}
      textarea {margin: 30px 0 0; border: 1px solid #e4eaef; border-radius: 10px; height: 648px;}
    }
  }
}
</style>
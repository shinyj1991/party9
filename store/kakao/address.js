import axios from 'axios';

export const state = () => ({
  address: null
})

export const mutations = {
  getAddress: (state, res) => {
    // 받아온 view데이터를 state.view에 저장, todo/_id.vue 파일에서 computed로 가져옴
    state.detail = res;
  }
}

export const actions = {
  getAddress({ commit }, query) {
    // rest api로 view 데이터 가져오기
    axios.get('https://dapi.kakao.com/v2/local/search/keyword.json', {
      headers: {
        Authorization: 'KakaoAK 156c5cafe5aa24764f279797c864d451'
      },
      params: {
        query: query
      }
    }).then(res => {
      // mutations.getTodoView 함수 호출
      console.log(res.data);
      commit('getAddress', res);
    }).catch(err => {
      console.log(err);
    });
  }
}
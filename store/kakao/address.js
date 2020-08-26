import axios from 'axios';

export const state = () => ({
  address: null,
  coord: null,
  addressList: null
})

export const mutations = {
  getAddress: (state, res) => {
    console.log(res.data.documents[0]);
    if (res.data.documents[0].road_address) {
      state.address = res.data.documents[0].road_address.address_name;
    } else {
      state.address = res.data.documents[0].address.address_name;
    }
  },
  getAddressList: (state, res) => {
    state.addressList = res.data;
  },
  getCoord: (state, res) => {
    state.coord = res.data.documents[0];
  }
}

export const actions = {
  getAddressList({ commit }, query, page) {
    // rest api로 view 데이터 가져오기
    axios.get('https://dapi.kakao.com/v2/local/search/keyword.json', {
      headers: {
        Authorization: 'KakaoAK 156c5cafe5aa24764f279797c864d451'
      },
      params: {
        query: query,
        page: page
      }
    }).then(res => {
      commit('getAddressList', res);
    }).catch(err => {
      console.log(err);
    });
  },
  coord2address({ commit }, params) {
    axios.get('https://dapi.kakao.com/v2/local/geo/coord2address.json', {
      headers: {
        Authorization: 'KakaoAK 156c5cafe5aa24764f279797c864d451'
      },
      params: params
    }).then(res => {
      console.log(res);
      commit('getAddress', res);
    }).catch(err => {
      console.log(err);
    });
  },
  getAddress({ commit, dispatch }, query) {
    axios.get('https://dapi.kakao.com/v2/local/search/address.json', {
      headers: {
        Authorization: 'KakaoAK 156c5cafe5aa24764f279797c864d451'
      },
      params: {
        query: query
      }
    }).then(res => {
      commit('getCoord', res);
    }).catch(err => {
      console.log(err);
    });
  }
}
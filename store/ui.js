export const state = () => ({
  loaded: true,
  menuFlag: false,
  appLoaded: false
});

export const mutations = {
  resetLoaded: (state) => {
    state.loaded = false;
  },
  completedLoad: (state) => {
    state.loaded = true;
  },
  toggleMenu: (state) => {
    state.menuFlag = !state.menuFlag;
  },
  completedAppLoad: (state) => {
    state.appLoaded = true;
  }
};
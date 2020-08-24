export default function(context) {
  context.app.router.beforeEach(function(to, from, next) {
    console.log(to, from, context);

    if (to.name === 'party') {
      context.store.commit('ui/changeGlobalNaviIndex', 1);
    }
    if (to.name === 'mypage') {
      context.store.commit('ui/changeGlobalNaviIndex', 3);
    }

    next();
  });
}
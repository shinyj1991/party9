export default function(context) {
  context.app.router.push(context.route.path);

  console.log(context.store.state.ui.appLoaded);

  setTimeout(() => {
    context.store.commit('ui/completedAppLoad');
  }, 1000);
}
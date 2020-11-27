<template>
  <article id="index">
    <Calendar></Calendar>
    <Detail></Detail>
  </article>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    data: () => ({
      title: ''
    }),
    mounted() {
      // Kakao.init('b09efe6458aecd4ee00d548ee66266a1');
    },
    methods: {
      kakaoLogin() {
        Kakao.Auth.login({
          success: (auth) => {
            console.log('정상적으로 로그인 되었습니다.', auth);
          },
          fail: (err) => {
            console.log(err);
          }
        })
      }
    }
  }
</script>
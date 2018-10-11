import Vue from 'vue'
import Vue_x from "vuex"
import Cookie from "vue-cookies"

Vue.use(Vue_x);

export default new Vue_x.Store({
  state: {
    username:Cookie.get("username",""),
    usertoken:Cookie.get("usertoken",""),
    shopping_car_count:""
  },
  mutations: {
    // 组件中通过 this.$store.commit(函数名，参数) 调用
    saveToken: function (state, data) {
      state.username = data.user;
      state.usertoken = data.token;
      Cookie.set('username', data.user, '2000min');
      Cookie.set('usertoken', data.token, '2000min')
    },
    clearToken: function (state) {
      state.username = null;
      state.token = null;
      Cookie.remove('username');
      Cookie.remove('token')
    }
  }
});

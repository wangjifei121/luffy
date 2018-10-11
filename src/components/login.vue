<template>
  <div class="login">
    <dl class="admin_login">
      <dt>
        <strong>欢迎登录</strong>
        <em>Welcome!!!</em>
      </dt>
      <p class="error_msg" v-if="error_msg">{{error_msg}}</p>
      <dd class="user_icon">
        <input type="text" @focus="my_focus" placeholder="账号" v-model="username" class="login_txtbx"/>
      </dd>
      <dd class="pwd_icon">
        <input type="password" @focus="my_focus" placeholder="密码" v-model="pwd" class="login_txtbx"/>
      </dd>
      <dd>
        <input type="button" value="立即登陆" @click="doligin" class="submit_btn"/>
      </dd>
    </dl>

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        username: "",
        pwd: "",
        error_msg: ""
      }
    },
    methods: {
      //登陆后跳转首页
      goto_home: function () {
        this.$router.push({name: "home"});
      },
      //向后端发登录post请求
      doligin: function () {
        let that = this;
        this.$axios.request({
          url: "http://127.0.0.1:8000/login/",
          method: "post",
          data: {
            username: this.username,
            pwd: this.pwd
          }
        }).then(function (res) {
          let data = res.data;
          if (data.code === 1000) {
            that.$store.commit("saveToken", data);
            that.goto_home()
          } else {
            that.error_msg = data.error
          }

        }).catch(function (res) {
          console.log(res)
        })
      },
      //单击取消错误提示
      my_focus: function () {
        this.error_msg = ''
      }
    },

  }
</script>

<style scoped>

  .login {
    margin-top: -125px;
    width: 100%;
    height: 700px;
    background-color: green;
    background-image: url("../assets/imgs/5.jpg");
    position: relative;
  }

  .admin_login {
    width: 300px;
    height: auto;
    overflow: hidden;
    z-index: 1000;
    padding: 40px;
    box-shadow: 0 -15px 30px #0d957a;
    border-radius: 5px;
    position: absolute;
    top: 160px;
    left: 420px;
  }

  .admin_login dt {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #45bda6;
    text-shadow: 0 0 1px #0e947a;
    margin-bottom: 15px;
  }

  .admin_login dt strong {
    display: block;
  }

  .admin_login dt em {
    display: block;
    font-size: 12px;
    margin-top: 8px;
  }

  .admin_login dd {
    margin: 5px 0;
    height: 42px;
    overflow: hidden;
    position: relative;
  }

  .admin_login dd .login_txtbx {
    font-size: 14px;
    height: 45px;
    line-height: 26px;
    padding: 8px 5%;
    width: 100%;
    text-indent: 2em;
    border: none;
    background: #5cbdaa;
    color: white;
  }

  .admin_login dd .login_txtbx::-webkit-input-placeholder {
    color: #f4f4f4;
    line-height: inherit;
  }

  .admin_login dd .login_txtbx:-moz-placeholder {
    color: #f4f4f4;
    line-height: inherit;
  }

  .admin_login dd .login_txtbx::-moz-placeholder {
    color: #f4f4f4;
    line-height: inherit;
  }

  .admin_login dd .login_txtbx:focus {
    background: #55b7a4;
  }

  .admin_login dd:before {
    position: absolute;
    top: 0;
    left: 10px;
    height: 42px;
    line-height: 42px;
    font-size: 20px;
    color: #0c9076;
  }

  .admin_login dd.user_icon:before {
    content: "u";
  }

  .admin_login dd.pwd_icon:before {
    content: "p";
  }

  .admin_login dd .submit_btn {
    width: 100%;
    height: 42px;
    border: none;
    font-size: 16px;
    background: #048f74;
    color: #f8f8f8;
  }

  .admin_login dd .submit_btn:hover {
    background: #0c9076;
    color: #f4f4f4;
  }

  .admin_login dd p {
    color: #53c6b0;
    font-size: 12px;
    text-align: center;
    margin: 5px 0;
  }

  .error_msg {
    color: red;
  }
</style>



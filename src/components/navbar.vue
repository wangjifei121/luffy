<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-logo">
        <img src="https://www.luffycity.com/static/img/head-logo.a7cedf3.svg" alt="">
      </div>
      <div class="navbar-choice">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
          <el-menu-item v-for="(link,index) in link_list" :key="index" :index="link.path">{{link.text}}
          </el-menu-item>
        </el-menu>
      </div>
      <div class="navbar-login" v-if="$store.state.username">

        <!-----用户中心-开始------->

        <el-dropdown @command="handleCommand">
          <el-button type="primary" class="user_center">
            {{$store.state.username}}<span class="glyphicon glyphicon-home"></span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="">我的账户</el-dropdown-item>
            <el-dropdown-item>我的订单</el-dropdown-item>
            <el-dropdown-item>我的优惠券</el-dropdown-item>
            <el-dropdown-item>我的消息()</el-dropdown-item>
            <el-dropdown-item command="/shopping_car">我的购物车({{this.$store.state.shopping_car_count}})</el-dropdown-item>
            <el-dropdown-item><a href="javascript:void(0)" @click="dologout">注销<span
              class="glyphicon glyphicon-off logout"></span></a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-----用户中心-结束------->
      </div>
      <div class="navbar-login" v-else>
        <span><router-link to="/login">登录</router-link></span>|<span>注册</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navbar",
    data() {
      return {
        activeIndex: "/",
        link_list: [
          {
            text: "首页",
            path: "/",
          },
          {
            text: "免费课程",
            path: "/course",
          },
          {
            text: "轻课",
            path: "/qingke",
          },
          {
            text: "学位课程",
            path: "/xuewei",
          },
          {
            text: "智能题库",
            path: "/zhineng",
          },
          {
            text: "公开课",
            path: "/gongkaike",
          },
          {
            text: "内部教材",
            path: "/neibujiaocai",
          },
          {
            text: "老男孩教育",
            path: "/oldboy",
          },
        ],
      }
    },
    methods: {
      dologout: function () {
        this.$store.commit("clearToken")
      },
      handleCommand(command) {
        this.$router.push(command);
      }
    }
  }
</script>

<style scoped>

  .navbar-logo {
    float: left;
    line-height: 105px;
  }

  .logout {
    margin-left: 5px;
  }

  .navbar {
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    position: fixed;
    z-index: 999;
    top: 0;
    background-color: #fff;
    border-bottom: lavender 1px solid;
  }

  .navbar .container {
    padding: 0 50px;
  }

  .navbar-login {
    float: right;
  }

  .el-menu {
    border-bottom: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar .container .navbar-choice {
    display: inline-block;
  }

  /*用户中心样式*/
  .user_center {
    border: none;
    color: #000;
    width: 100px;
    height: 50px;
    background-color: #fff;
  }

  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

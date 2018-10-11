<template>
  <div style="text-align: center">
    <div>
      <p>课程详情id：{{coursedetail.id}}</p>
      <hr>
      <p>课程名称：{{coursedetail.course}}</p>
      <hr>
      相关课程：
      <div v-for="course_obj in coursedetail.recommend_courses">
      <span @click="my_click">
        <router-link :to="{name:'detail',params:{id:course_obj.course_id}}">{{course_obj.course_name}}
      </router-link>
      </span>
      </div>
      <hr>
      <p>教学老师：{{coursedetail.teachers}}</p>
      <hr>
      <p>课程课时：{{coursedetail.hours}}</p>
      <hr>
      <p>课程口号：{{coursedetail.course_slogan}}</p>
      <hr>
      <p>课程概况：{{coursedetail.video_brief_link}}</p>
      <hr>
      <p>为什么要学习此课程：{{coursedetail.why_study}}</p>
      <hr>
      <p>我将学到哪些内容：{{coursedetail.what_to_study_brief}}</p>
      <hr>
      <p>此项目如何有助于我的职业生涯：{{coursedetail.career_improvement}}</p>
      <hr>
      <p>课程选修要求：{{coursedetail.prerequisite}}</p>
      <hr>
    </div>
    <div class="course_price_policy">
      <div v-for="(price_policy,index) in coursedetail.price_policy_list"
           :key="index" class="course_price" :class="{active:current_course_policy===price_policy.pk}"
           @click="course_choiced(price_policy.pk)">
        {{price_policy.price}}元<br>有效期：{{price_policy.valid_period_text}}
      </div>
      <div style="clear: both"></div>
      <div class="add_shopping_car_signal">{{add_shopping_car_signal}}</div>
      <button class="btn-lg btn-success shopping_car" @click="add_shopping_car">加入购物车</button>

    </div>
  </div>
</template>

<script>
  export default {
    name: "course_detail",
    data() {
      return {
        //课程详情
        coursedetail: {},
        //当前课程价格策略
        current_course_policy: "",
        //添加购物车状态
        add_shopping_car_signal: ""
      }

    },
    methods: {
      route_init: function () {
        let that = this;
        this.$axios.request({
          url: "http://127.0.0.1:8000" + this.$route.path + "/",
          method: "get"
        }).then(function (data) {
          that.coursedetail = data.data;
        }).catch(function (data) {
        })
      },
      my_click: function () {
        this.route_init()
      },
      course_choiced: function (price_policy_id) {
        this.current_course_policy = price_policy_id

      },
      add_shopping_car: function () {

        // console.log(this.$route.params.id);
        // console.log(this.current_course_policy)
        let token = this.$store.state.usertoken;
        let that = this;
        if (token) {
          this.$axios.request({

            url: "http://127.0.0.1:8000/shoppingcar/" + "?token=" + token,
            method: "post",
            data: {
              course_id: this.$route.params.id,
              price_policy_id: this.current_course_policy
            }
          }).then(function (res) {
            console.log(res);
            that.add_shopping_car_signal = res.data.data;
            setTimeout(function () {
              that.add_shopping_car_signal = ""
            }, 1000)
          }).catch(function () {
            console.log(res)
          })
        } else {
          that.add_shopping_car_signal = "您暂未登录，请您先登录！！！";
          setTimeout(function () {
            that.$router.push("/login")
          }, 1000)
        }
      },


    },
    mounted() {
      this.route_init()
    },
  }
</script>

<style scoped>
  .course_price_policy {
    width: 100%;
    height: 250px;
    display: inline-block;
  }

  .course_price {
    display: inline-block;
    height: 80px;
    width: 200px;
    border: #979797 solid 1px;
    text-align: center;
    line-height: 40px;
    margin: 20px 20px 50px 20px;
    border-radius: 5px;

  }

  .active {
    background-color: #7ed321;
  }


</style>

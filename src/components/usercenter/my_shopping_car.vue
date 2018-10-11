<template>
  <div class="shopping_car_box">
    <div class="title">我的购物车</div>
    <div v-if="shopping_course_list.length !==0">
      <div class="course_detail" v-for="shopping_course in shopping_course_list">
        <input type="checkbox">
        图片地址：{{shopping_course.course_img}} <br>
        课程名称：{{shopping_course.name}}<br>
        选中的价格策略id：{{shopping_course.default_price_policy_id}}<br>
        价格策略详情：
        <span v-for="(price_policy,price_policy_id) in shopping_course.relate_price_policy">
            <span v-if="price_policy_id ===shopping_course.default_price_policy_id">
              价格：{{price_policy.price}} 有效期：{{price_policy.valid_period_text}}
            </span>
    </span><br>

        课程id：{{shopping_course.course_id}}

        <!-- 按钮触发模态框 -->
        <button class="btn btn-danger pull-right" data-toggle="modal" data-target="#myModal">删除</button>
        {{check}}
        <!-- 模态框（Modal） -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true" data-backdrop="static">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title" id="myModalLabel">删除选中的商品</h4>
              </div>
              <div class="modal-body">您确定要删除购物车该商品吗？？？</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button"
                        @click="delete_course(shopping_course.course_id)"
                        class="btn btn-primary"
                        data-dismiss="modal">删除
                </button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div>
      </div>
    </div>
    <div v-else class="course_detail">空空如也！！！</div>
    <div class="foot">
      <input type="checkbox">全选
      <div class="btn btn-success pull-right">结算</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "my_shopping_car",
    data() {
      return {
        shopping_course_list: [],
        current_price_policy: "11",
        checked: [],
        check: false
      }
    },
    methods: {
      //去后端那数据
      get_new_data: function () {
        let token = this.$store.state.usertoken;
        let that = this;
        this.$axios.request({
          url: "http://127.0.0.1:8000/shoppingcar/" + "?token=" + token,
          method: "get",
        }).then(function (res) {
          that.shopping_course_list = res.data;
          //更新购物车商品数量
          that.$store.state.shopping_car_count = that.shopping_course_list.length;
        }).catch(function (res) {
          console.log(res)
        })
      },
      delete_course: function (course_id) {
        let token = this.$store.state.usertoken;
        let that = this;
        this.$axios.request({
          url: "http://127.0.0.1:8000/shoppingcar/" + course_id + "/" + "?token=" + token,
          method: "delete",
        }).then(function (res) {
          console.log(res);
          if (res.data.code === 1000) {
            that.get_new_data()
          }
        }).catch(function (res) {
          console.log(res)

        })
      },
    },
    mounted: function () {
      this.get_new_data()
    },

  }


</script>


<style scoped>
  .shopping_car_box {
    width: 80%;
    margin-left: 10%;
  }

  .title {
    height: 100px;
    padding-left: 50px;
    line-height: 100px;
  }

  .course_detail {
    height: 120px;
    padding: 0 100px;
    border: #84cc39 solid 1px;
    border-radius: 10px;
    background-color: #e8e8e8;

  }

  .foot {
    margin-top: 50px;
    background-color: #f5f7f9;
    height: 70px;
    border-radius: 20px;
    line-height: 70px;
  }
</style>

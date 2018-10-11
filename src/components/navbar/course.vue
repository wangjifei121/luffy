<template>
  <div class="course">
    <div class="top-nav">
      <ul>
        <li v-for="(item, index) in category" @click="on_click(index)" :key="index" :class='{active:current === index}'>
          {{item}}
        </li>
      </ul>
    </div>
    <div style="clear: both"></div>
    <div class="course-list">
      <!--这要循环获得-->
      <el-row :gutter="20">
        <el-col :span="6" v-for="(course,index) in courses" :key="index">
          <div class="course_box" @click="detail_click(course.id)">
            <div class="head">
              <b></b>
              <p class="course_name">{{course.name}}</p>
            </div>
            <div class="box_content">
              <p class="course_brief">{{course.brief}}</p>
              <div class="course_info">
                <span class="el-icon-loading"></span><span>66</span>
                &nbsp;&nbsp;
                <span>{{course.level}}</span>
                <div class="price">
                  <span style="text-decoration:line-through;">原价:￥{{course.price_policy_list[1].price}}</span>
                  &nbsp;&nbsp;
                  <span style="color: red">免费</span>
                </div>
              </div>
            </div>
          </div>
        </el-col>

      </el-row>
    </div>
  </div>


</template>

<script>
  export default {
    name: "course",
    data() {
      return {
        current: 0,
        my_index: "",
        category: ["全部", "Python", "Linux", "前端", "Python进阶", "UI"],
        courses: []
      }
    },
    methods: {
      on_click: function (index) {
        this.current = index;
      },
      detail_click: function (course_id) {
        this.$router.push("/course_detail/" + course_id)
      }
    },
    created() {

    },
    mounted() {
      let that = this;
      this.$axios.request({
        url: "http://127.0.0.1:8000/courselist/",
        method: "get"
      }).then(function (data) {
        that.courses = data.data;
      }).catch(function (data) {
      })
    }

  }
</script>

<style scoped>
  .course {
    position: absolute;
    top: 80px;
    left: 0;
    padding-left: 40px;
    padding-right: 40px;
  }

  .top-nav ul {
    margin-top: 8px;
  }

  .top-nav ul li {
    float: left;
    margin-right: 25px;
    list-style-type: none;
    font-size: 20px;
    color: #7f7f7f;
    cursor: pointer;
  }

  .active {
    color: #84cc39 !important;
  }

  .course_box .head {
    height: 140px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .head img {
    height: 140px;
    width: 288px;
  }

  .head b {
    width: 100%;
    height: 140px;
    left: 0;
    top: 0;
    opacity: .9;
    background: #56CBC4;
    position: absolute;

  }

  .course_box {
    width: 250px;
    height: 270px;
    margin-bottom: 18px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
    transition: all .2s linear;
  }

  .course-list {
    margin-top: 20px;
    margin-left: 18px;
    margin-right: 18px;
  }

  .course_name {
    color: #fff;
    position: absolute;
    font-size: 20px;

  }

  .box_content {
    color: #7f7f7f;
    font-size: 16px;
    padding: 14px;
  }

  .course_brief {
    margin-top: 5px;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .course_info {
    font-size: 14px;
    margin-top: 26px;
  }

  .price {
    float: right;
  }

</style>

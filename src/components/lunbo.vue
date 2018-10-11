<template>
  <div class="block">
    <el-carousel height="500px">
      <el-carousel-item v-for="(url,index) in url_list" :key="index">
        <img :src="url" style="width: 100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "lunbo",
    data() {
      return {
        url_list: [
          require("../assets/imgs/1.png"),
          require("../assets/imgs/2.png"),
          require("../assets/imgs/3.png"),
          require("../assets/imgs/4.png"),
        ]
      }
    }
  }
</script>

<style scoped>
  /*轮播图样式 开始*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /*轮播图样式 结束*/
</style>

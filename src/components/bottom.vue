<template>
  <div class="bottom">
    <div>
      <span>关于我们</span>
      <span>联系我们</span>
      <span>商务合作</span>
      <span>帮助中心</span>
      <span>意见反馈</span>
      <span>新手指南</span>
    </div>
    <div><span>Copyright © luffycity.com版权所有 | 京ICP备17072161号-1</span></div>
  </div>
</template>

<script>
  export default {
    name: "bottom"
  }
</script>

<style scoped>

  .bottom {
    width: 100%;
    height: 100px;
    padding-top: 35px;
    background-color: #000000;
  }

  .bottom > div {
    text-align: center;
    padding-top: 10px;
  }

  .bottom span {
    color: white;
    margin: 0 40px;
  }
</style>

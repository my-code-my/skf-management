<template>
  <div class="container">
    <BreadCrumb></BreadCrumb>

    <div class="content"><span>欢迎登陆SKF电商管理系统！</span></div>
  </div>
</template>

<script>
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
export default {
  name: "Welcome",
  components: {
    BreadCrumb
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    background-color: #f5f5f5;
  }

  .content {
    width: 100%;
    height: 100%;
    padding: 20px
  }
</style>

<template>
  <div class="login_container">

    <div class="login_header">App</div>

    <div class="login_form_wrap">
      <div class="login_title">
        <h1>Log In</h1>
      </div>
      <el-form class="login_form"
               label-position="top"
               :model="loginForm"
               :rules="loginRules"
               label-width="0"
               ref="loginFormRef">
        <!--用户名-->
        <el-form-item prop="username" label="用户名或邮箱">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-geren"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password" label="密码">
          <el-input type="password" v-model="loginForm.password" prefix-icon="iconfont icon-tuceng"></el-input>
        </el-form-item>
        <div class="login_forget">
          <a href="javascript:;">忘记密码</a>
        </div>
        <el-form-item class="login_btn">
          <el-button type="primary" style="width:100%;margin-top:30px;" @click="$router.push('/home')">登陆</el-button>
        </el-form-item>
      </el-form>

      <div class="form_link">
        <div class="link_test">
          <a href="#">AAD国内版</a>
        </div>
        <div class="link_test">
          <a href="#">斯凯孚sso</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .login_container {
    background: url("../../assets/img/keycloak-bg.png") no-repeat center center;
    background-size: cover;
  }
  .login_header {
    height: 116px;
    width: 100%;
    text-align: center;
    padding: 62px 10px 20px;
    font-size: 29px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  .login_form_wrap {
    width: 840px;
    height: 400px;
    background-color: #fff;
    margin: 0 auto;
    padding: 20px 40px 30px
  }
  .login_title {
    height: 56px;
    line-height: 56px;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;


  }
  .login_title h1 {
    font-weight: 300;
    font-size: 24px;
  }
  .login_form {
    float: left;
    width: 380px;
    height: 244px;
    border-right: 1px solid #ccc;
    padding-right: 39px;
  }
  .el-form--label-top .el-form-item__label {
    padding: 0 0 0;
  }
  .login_forget {
    font-size: 12px;
    float: right;
    color: #0088ce;
  }
  .form_link {
    float: right;
    width: 380px;
    height: 244px;
    padding-left: 39px;
  }
  .link_test {
    width: 100%;
    height: 33px;
    text-align: center;
    line-height: 33px;
    margin-bottom: 30px
  }
  .link_test a {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 14px;
    background-color: #f5f5f5;
    color: #72767b;
  }

</style>

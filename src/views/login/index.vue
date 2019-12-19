<template>
  <div class="login">
   <el-card class="login-card">
     <div class="title">
       <img src="../../assets/img/logo_index.png" alt="">
     </div>
  <!-- 登录表单  表单容器  el-form需要绑定model属性 -->
    <el-form style="margin-top:30px" :model="loginForm" :rules="loginRules">
      <!-- 表单域 -->
      <el-form-item prop="mobile">
        <!-- 放置具体的组件 登录手机号组件    双向绑定数据对象-->
        <el-input v-model="loginForm.mobile" placeHolder="请输入手机号"></el-input>
      </el-form-item>
     <!-- 输入框 -->
      <el-form-item prop="code">
        <!-- 表单域 -->
        <el-input v-model="loginForm.code" style="width:65%" placeHolder="请输入验证码"></el-input>
        <el-button style="float:right" plain>发送验证码</el-button>
      </el-form-item>
      <!-- 勾选框 -->
      <el-form-item prop="check">
          <el-checkbox v-model=" loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
   </el-card>
  </div>
</template>

<script>
export default {
// 第一步  在deta中定以表单数据对象
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否勾选
      },
      loginRules: {
        // 验证规则 验证登录表单的

      }
    }
  }
}
</script>

<style lang="less">
.login{
  background-image:url('../../assets/img/login_bg.jpg');
  height: 100vh;
  background-size: cover;
  display: flex;
   justify-content: center;
   align-items: center;
  .login-card{
    width:450px;
    height: 360px;
  .title{
    text-align: center;
   .img{
     height: 40px;
   }
  }
  }

}
</style>

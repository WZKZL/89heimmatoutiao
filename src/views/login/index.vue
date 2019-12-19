<template>
  <div class="login">
   <el-card class="login-card">
     <div class="title">
       <img src="../../assets/img/logo_index.png" alt="">
     </div>
  <!-- 登录表单  表单容器  el-form需要绑定model属性 -->
    <el-form  ref="myForm"  style="margin-top:30px" :model="loginForm" :rules="loginRules">
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
        <el-button @click="submitLogin" style="width:100%" type="primary">登录</el-button>
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
        // 验证规则 验证登录表单的 key(是我要校验的名称)vaule：（他是一个数组）
        mobile: [{ required: true, message: '请输入您的手机号' }, {
          pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确'
        }],
        code: [{ required: true, message: '请输入验证码' }, {
          pattern: /^\d{6}$/,
          message: '验证码格式不正确'
        }],
        // validator是一个自定义函数
        check: [{ validator: function (rule, value, callback) {
          // rule指的是当前的规则 没什么用
          // value 指的就是 我们要校验的字段的值
          if (value) {
            // 认为校验通过放过去
            callback()
          } else {
            // 认为校验失败不能通过
            callback(new Error('对不起有错误，无法通过'))
          }
        } }]

      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate(function (isOk) {
        if (isOk) {
          // 认为前端校验登录表单成功
          console.log('前端校验成功，调用接口发送用户名和我的密码，去后台校验')
        }
      })
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

<template>
  <!-- 头部组件 -->
     <el-row class="layout-header" align="middle" type="flex" justify="space-between">

         <el-col class="left" :span="6">
             <i class="el-icon-s-unfold "></i>
             <span class="title">江苏传智播客教育科技股份有限公司</span>
         </el-col>

         <el-col class="right" :span="4">
           <el-row type="flex" justify="end" align="middle">
               <img :src="userInfo.photo? userInfo.photo:defaultImg" alt="">
               <!-- 下拉菜单 -->
               <el-dropdown @command="handle">
                   <span>{{userInfo.name}}</span>
                   <!-- 下拉菜单  具名插槽 -->
                   <el-dropdown-menu slot="dropdown">
                     <el-dropdown-item command="info">个人信息</el-dropdown-item>
                     <el-dropdown-item command="git">Git地址</el-dropdown-item>
                     <el-dropdown-item command="lgout">退出</el-dropdown-item>
                   </el-dropdown-menu>
               </el-dropdown>
           </el-row>
         </el-col>
     </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {

      },
      defaultImg: require('../../assets/img/ba.jpg') // 把地址换成变量
    }
  },
  created () {
    let token = window.localStorage.getItem('user-token')
    // 查询数据
    this.$axios({
      url: '/user/profile',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      this.userInfo = result.data.data // 获取我用户的个人信息
    })
  },
  methods: {
    handle (commad) {
      // 区分点击的菜单项
      if (commad === 'lgout') {
        // 退出
        window.localStorage.removeItem('user-token') // 删除用户的令牌
        this.$router.push('/login')
      } else if (commad === 'git') {
        window.location.href = 'https://github.com/WZKZL/89heimmatoutiao'
      }
    }
  }
}
</script>

<style lang='less' scoped>
 .layout-header{
     height:60px;
    .left{
        font-size: 20px;
        .title{
            margin-left: 6px;
            color:#2c3e50;
        }
    }
    .right
    {
        img{
            width:40px;
            height: 40px;
            border-radius: 50%;
        }
    }
 }
</style>

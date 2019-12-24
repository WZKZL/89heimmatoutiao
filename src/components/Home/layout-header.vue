<template>
  <!-- 头部组件 -->
     <el-row class="layout-header" align="middle" type="flex" justify="space-between">

         <el-col class="left" :span="6">
             <i class="el-icon-s-unfold "></i>
             <span class="title">江苏传智播客教育科技股份有限公司</span>
         </el-col>

         <el-col class="right" :span="4">
           <el-row type="flex" justify="end" align="middle">
               <img src="../../assets/img/ba.jpg" alt="">
               <!-- 下拉菜单 -->
               <el-dropdown>
                   <span>wzkzl</span>
                   <!-- 下拉菜单  具名插槽 -->
                   <el-dropdown-menu slot="dropdown">
                     <el-dropdown-item>个人信息</el-dropdown-item>
                     <el-dropdown-item>Git地址</el-dropdown-item>
                     <el-dropdown-item>退出</el-dropdown-item>
                   </el-dropdown-menu>
               </el-dropdown>
           </el-row>
         </el-col>
     </el-row>
</template>

<script>
export default {

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

<template>
  <div class="navBar">
    <el-breadcrumb separator="/" >
      <div class="menuImg" @click="showSidebar">
        <i class="el-icon-s-fold" v-if="$store.state.isCollapse"></i>
        <i class="el-icon-s-unfold" v-else></i>
      </div>
      <div class="breadItem">
<!--        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>-->
        <el-breadcrumb-item v-for="item in breadList" :key="item.path">{{item.meta.title}}</el-breadcrumb-item>
      </div>

    </el-breadcrumb>
    <div class="login_out">
      <img class="imgLink" src="../../assets/img/avater.png" alt="">
      <el-dropdown trigger="click" @command="$router.push('/login')">
        <i class="el-icon-caret-bottom"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  // props: {
  //   breadList: {
  //     type: Array,
  //     default() {
  //       return []
  //     },
  //     isCollapse: {
  //       type: Boolean
  //     }
  //   }
  // },
  data() {
    return {
      breadList: [] //路由集合
    }
  },
  watch: {
    $route() {
      this.getBreadCrumb()
    }
  },
  created() {
    this.getBreadCrumb()
  },
  methods: {
    getBreadCrumb() {

      let matched = this.$route.matched.filter(item => item.meta.title)
      if(matched[0].meta.title === '首页' && matched[1].meta.title==='首页') {
        matched = [{path: '/',meta: {title: '首页'}}]
      }

      console.log(matched)
      this.breadList = matched;
    },
    showSidebar() {
      this.$emit('showSidebar')
    }
  }
}
</script>

<style scoped>
.navBar {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
.el-breadcrumb {
  display: flex;
  justify-content: center;
}
.breadItem {
  line-height: 50px;
  font-size: 14px
}
.login_out {
  width: 80px;
  height: 50px;
}
.imgLink {
  width: 50px;
  height: 50px;
}
.el-dropdown {
  position: relative;
}
.el-icon-caret-bottom {
  position: absolute;
  bottom: 10px;
  right: -15px;
}
.menuImg {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-icon-s-fold {
  margin-right: 10px;
}
</style>

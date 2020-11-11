<template>
    <el-container class="home_container">
        <el-aside :width="isCollapse? '65px': '200px'" :class="{active: isShowMenu}">
          <el-menu unique-opened
                   background-color="#304156"
                   text-color="#fff"
                   active-text-color="#409eff"
                   @open="handleOpen"
                   @close="handleClose"
                   @select="handleShowMenu"
                   router
                   :collapse="isCollapse">
            <!-- 一级菜单 -->
            <el-menu-item @click="$router.push('/welcome')">
              <i class="el-icon-menu"></i>
              <span>首页</span>
            </el-menu-item>
            <el-menu-item @click="$router.push('/data')">
              <i class="el-icon-menu"></i>
              <span>数据面板</span>
            </el-menu-item>
            <!-- 一级菜单 -->
            <el-submenu :index="item1.id + ''" v-for="(item1, index) in menuList" :key="index">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{item1.authName}}</span>
              </template>

              <!-- 二级菜单 -->
              <el-menu-item :index="item2.path"
                            v-for="item2 in item1.children"
                            :key="item2.id"
                            @click="saveNavState(item2.path)"
                            background-color="#303133">
                <template>
                  <span>{{item2.authName}}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view />
        </el-main>

    </el-container>
</template>

<script>
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { menuList} from "../../data"

export default {
  name: "Home",
  components: {
    BreadCrumb,
  },
  data() {
    return {
      menuList,
      isShowMenu: false,
      isCollapse: false
    }
  },
  methods: {
    handleOpen() {

    },
    handleClose() {

    },
    handleShowMenu() {
      this.isShowMenu = true
    },
    saveNavState(path) {

    }
  }
}
</script>

<style scoped>
  .home_container {
    height: 100%;
  }
  .el-menu {
    border-right: none
  }
  .el-aside {
    background-color: #304156;
  }
  .el-main {
    padding: 0
  }
  .active {
    display: block;
  }
</style>

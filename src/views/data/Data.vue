<template>
  <div class="data_container">
    <BreadCrumb :breadList="breadList"></BreadCrumb>

    <div class="data_wrap">
      <el-row :gutter="40">
        <el-col :span="12">
          <el-card shadow="never" class="card card_1">
            <div slot="header">
              <span>交易总览</span>
            </div>
            <div class="pay_wrap">
              <div class="pay_item">
                <p class="pay_number">0</p>
                <p class="pay_count">今日销售总额</p>
              </div>
              <div class="pay_item">
                <p class="pay_number">0</p>
                <p class="pay_count">昨日销售总额</p>
              </div>
              <div class="pay_item">
                <p class="pay_number">0</p>
                <p class="pay_count">近7天销售总额</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="never" class="card card_2">
            <div slot="header">
              <span>订单总览</span>
            </div>
            <div class="pay_wrap">
              <div class="pay_item">
                <p class="pay_number">0</p>
                <p class="pay_count">今日支付订单</p>
              </div>
              <div class="pay_item">
                <p class="pay_number">0</p>
                <p class="pay_count">昨日支付订单</p>
              </div>
              <div class="pay_item">
                <p class="pay_number">0</p>
                <p class="pay_count">近7天支付订单</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="40">
        <el-col :span="12">
          <el-card shadow="never" class="card card_3">
            <div slot="header">
              <span>商品总览</span>
            </div>
            <div class="pay_wrap">
              <div class="pay_item">
                <p class="pay_number">35</p>
                <p class="pay_count">今日新增注册</p>
              </div>
              <div class="pay_item">
                <p class="pay_number">35</p>
                <p class="pay_count">昨日新增注册</p>
              </div>
              <div class="pay_item">
                <p class="pay_number">35</p>
                <p class="pay_count">用户总数</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="never" class="card card_4">
            <div slot="header">
              <span>用户总览</span>
            </div>
            <div class="pay_wrap">
              <div class="pay_item">
                <p class="pay_number">344</p>
                <p class="pay_count">下架商品</p>
              </div>
              <div class="pay_item">
                <p class="pay_number">3893</p>
                <p class="pay_count">上架商品</p>
              </div>
              <div class="pay_item">
                <p class="pay_number">4237</p>
                <p class="pay_count">商品总数</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row>
        <el-card>
          <div slot="header">
            <span>快捷入口</span>
          </div>
          <div class="entry_wrap">
            <div class="entry_content">
              <el-badge :value="0" class="entry_item">
                <i class="iconfont icon-fahuo"></i>
                <p>代发货订单</p>
              </el-badge>
            </div>
            <div class="entry_content">
              <el-badge :value="6" class="entry_item">
                <i class="iconfont icon-zhifu"></i>
                <p>代支付订单</p>
              </el-badge>
            </div>
            <div class="entry_content">
              <el-badge class="entry_item">
                <i class="iconfont icon-dingdan"></i>
                <p>订单列表</p>
              </el-badge>
            </div>
            <div class="entry_content">
              <el-badge class="entry_item">
                <i class="iconfont icon-tubiaozhizuomoban-73"></i>
                <p>创建报价单</p>
              </el-badge>
            </div>
          </div>

        </el-card>
      </el-row>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
export default {
  name: "Data",
  components: {
    BreadCrumb
  },
  data() {
    return {
      breadList: [
        {id: 1, name: '数据面板'}
      ]
    }
  }
}
</script>

<style scoped>
  .data_wrap {
    padding: 20px
  }
  .pay_wrap {
    display: flex;
  }
  .pay_item {
    width: 33.33%;
    text-align: center;
  }
  .pay_number {
    font-size: 24px;
    font-weight: 700;
    margin: 0
  }
  .pay_count {
    color: #999;
    font-size: 14px;
    margin-top: 14px;
  }
  .el-row {
    margin-bottom: 40px;
  }
  .el-col {
    position: relative;
  }
  .el-card {
    overflow: hidden;
  }
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 21px;
    width: 4px;
    height: 100%;
    border-radius: 4px 0 0 4px;
  }
  .card_1::before {
    background-color: #409eff;
  }
  .card_2::before {
    background-color: #e6a23c;
  }
  .card_3::before {
    background-color: #909399;
  }
  .card_4::before {
    background-color: #67c23a;
  }
  .entry_wrap {
    display: flex;
  }
  .entry_content {
    width: 25%;
    text-align: center;
  }
  .iconfont {
    font-size: 36px;
    color: #666
  }
  .entry_item p {
    font-size: 14px;
    color: #333;
    margin-top: 6px;
  }
</style>

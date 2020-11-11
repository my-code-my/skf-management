<template>
  <div>
    <div class="all_content">
      <el-page-header @back="$router.push('/OrderManagement')" content="详情页面"></el-page-header>
      <div class="base_info_wrap">
        <div class="base_info_title">基本信息</div>
        <div class="base_info_content">
          <p>订单编号：2020102910061813</p>
          <p>订单状态：已完成</p>
          <p>收货人：周华强</p>
          <p>手机号：12345678</p>
          <p>收货地址：四川省巴中市通江县</p>
        </div>
      </div>
      <div class="base_info_wrap">
        <div class="base_info_title">基本信息</div>
        <el-table border>
          <el-table-column label="商品图片"></el-table-column>
          <el-table-column label="商品名称" prop="SKF6009"></el-table-column>
          <el-table-column label="规格" prop="6009"></el-table-column>
          <el-table-column label="数量" prop="10"></el-table-column>
          <el-table-column label="发货周期" prop="1个工作日"></el-table-column>
          <el-table-column label="原价（元）"></el-table-column>
        </el-table>
      </div>

      <div class="base_info_wrap">
        <div class="base_info_title">订单信息</div>
        <div class="base_info_content">
          <p>提交时间：2020-11-06 14:24:293</p>
          <p>支付时间：2020-11-06 14:24:293</p>
          <p>支付方式：线上</p>
          <p>线下交易号：</p>
          <p>发货时间：</p>
          <p>收货时间：</p>
          <p>发货周期：1-1个工作日</p>
        </div>
      </div>

      <div class="base_info_wrap">
        <div class="base_info_title">操作记录</div>
        <el-table border>
          <el-table-column label="操作人"></el-table-column>
          <el-table-column label="时间"></el-table-column>
          <el-table-column label="操作内容"></el-table-column>
        </el-table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Detail"
}
</script>

<style scoped>
  .all_content {
    background-color: #fff;
  }
  .el-page-header {
    padding-bottom: 20px;
    border-bottom: 1px solid #f5f5f5
  }
  .base_info_wrap {
    padding: 25px;
  }
  .base_info_title {
    position: relative;
    font-size: 16px;
    color: #333;
    margin-left: 14px;
    margin-bottom: 40px;
  }
  .base_info_title::before {
    position: absolute;
    content: '';
    height: 18px;
    width: 4px;
    background: #20a0ff;
    top: 0;
    left: -12px;
  }
  .base_info_content {
    font-size: 14px;
  }

</style>

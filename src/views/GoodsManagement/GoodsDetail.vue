<template>
  <div class="all_content">
    <el-card class="detail_card">
      <div class="detail_item">
        <span class="title">商品名称：</span>
        <span>{{detailList.code}}</span>
      </div>
      <div class="detail_item">
        <span class="title">商品图片：</span>
        <span><el-image class="goodsImg" style="width: 70px;height: 70px" :src="detailList.imgUrl"></el-image></span>
      </div>
      <div class="detail_item">
        <span class="title">商品类目：</span>
        <span>{{detailList.goods}}</span>
      </div>
      <div class="detail_item">
        <span class="title">编码：</span>
        <span>{{detailList.goods_code}}</span>
      </div>
      <div class="detail_item">
        <span class="title">型号：</span>
        <span>{{detailList.goods_code}}</span>
      </div>
      <div class="detail_item">
        <span class="title">商品属性：</span>
          <el-table border style="width: 100%">
            <el-table-column label="属性名称"></el-table-column>
            <el-table-column label="属性值"></el-table-column>
          </el-table>
      </div>
      <div class="detail_item">
        <span class="title">商品价格：</span>
        <span>{{detailList.total_price}}</span>
      </div>
      <div class="detail_item">
        <span class="title">邮费模板：</span>
        <span>{{detailList.code}}</span>
      </div>
      <div class="detail_item">
        <span class="title">发货周期：</span>
        <span>{{detailList.delivery_time}}</span>
      </div>
      <div class="detail_item">
        <span class="title">货物重量：</span>
        <span>{{detailList.weight}}</span>
      </div>
      <div class="detail_item">
        <span class="title">商品详情：</span>
        <span><el-image class="goodsImg" style="width: 750px" :src="detailList.detail_url"></el-image></span>
      </div>
    </el-card>
  </div>
</template>

<script>
import {detailList} from "../../data";

export default {
  name: "GoodsDetail",
  data() {
    return {
      detailList,
    }
  },
  created() {

  }
}
</script>

<style scoped>
.detail_card {
  font-size: 14px;
  color: #333;
}
.el-card__body {
  padding: 0;
}
.detail_item {
  display:flex;
  margin: 20px 0
}
.detail_item .title {
  display: inline-block;
  width: 100px;
  text-align: right;
}
.goodsImg {
  vertical-align: top;
}
.el-table {
  margin-top: 0;
}
</style>

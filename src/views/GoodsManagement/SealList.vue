<template>
  <div class="all_content">

    <el-radio-group v-model="radio3">
      <el-radio-button label="全部（1251）"></el-radio-button>
      <el-radio-button label="已上架（1104）"></el-radio-button>
      <el-radio-button label="未上架（147）"></el-radio-button>
    </el-radio-group>

    <el-card class="card_1">
      <span class="cate_name">类目：</span>
      <el-cascader
        v-model="selectId"
        :options="cascaderList">
      </el-cascader>
      <el-button type="primary">查询</el-button>
      <el-button>重置</el-button>
    </el-card>

    <el-card>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="18">
          <el-button>新增</el-button>
          <el-button>批量上架</el-button>
          <el-button>批量下架</el-button>
          <el-button>批量删除</el-button>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="请输入商品名称/编码" prefix-icon="el-icon-search" v-model="searchForm.code"></el-input>
        </el-col>
      </el-row>

      <!--表格区域-->
      <el-table :data="orderTableData" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="商品信息">
          <template slot-scope="scope">
            <div class="goods_info">
              <el-image style="width: 50px; height: 50px" :src="scope.row.imgUrl"></el-image>
              <div class="goods_item">
                <p>类目：{{scope.row.goods}}</p>
                <p>名称：{{scope.row.code}}</p>
                <p>编码：{{scope.row.goods_code}}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="价格" prop="total_price" width="150"></el-table-column>
        <el-table-column label="发货周期" prop="delivery_time" width="150"></el-table-column>
        <el-table-column label="销量" ></el-table-column>
        <el-table-column label="上架状态" width="130">
          <template slot-scope="scope">
            <p v-if="scope.row.order_status === '1'">已上架</p>
            <p v-else>未上架</p>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <div class="btns_wrap">
              <el-button @click="$router.push('/GoodsDetail')" type="text" size="small">查看</el-button>
              <el-button type="text" size="small" >置顶</el-button>
              <el-button type="text" size="small" @click="$router.push('/AddGoods')">编辑</el-button>
              <el-button type="text" size="small" >上架</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="10">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import {cascaderList,orderTableData} from '@/data/index.js'
export default {
  name: "SealList",
  data() {
    return {
      radio3: '',
      cascaderList,
      searchForm: {
        code: ''
      },
      selectId: [],
      orderTableData,
    }
  }
}
</script>

<style scoped>
  .card_1 {
    margin: 20px 0
  }
</style>

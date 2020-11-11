<template>
  <div class="all_content">
    <el-card class="card_1">
      <span class="cate_name">类目：</span>
      <el-cascader
          v-model="selectId"
          :options="cascaderList"
          @change="handleChange">
      </el-cascader>
      <el-button type="primary">查询</el-button>
      <el-button>重置</el-button>
    </el-card>

    <el-card class="card_2">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="18">
          <el-button type="primary">新增属性</el-button>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="请输入属性名称" prefix-icon="el-icon-search"></el-input>
        </el-col>
      </el-row>

      <el-table :data="orderTableData" border>
        <el-table-column label="交易流水号" prop="code"></el-table-column>
        <el-table-column label="商品类型" prop="goods"></el-table-column>
        <el-table-column label="金额" prop="total_price"></el-table-column>
        <el-table-column label="交易时间" >
          <template slot-scope="scope">
            <p style="margin:0">{{scope.row.commit_time | dateFormat}}</p>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        :page-size="4"
        layout="prev, pager, next, jumper"
        :total="4">
      </el-pagination>
    </el-card>


  </div>
</template>

<script>
import {cascaderList,orderTableData} from '@/data/index.js'
export default {
  name: "Props",
  data() {
    return {
      cascaderList,
      selectId: [],
      orderTableData,
    }
  },
  methods: {
    handleChange() {
      console.log(this.selectId)
    }
  }
}
</script>

<style scoped>
  .cate_name {
    font-size: 14px;
    color: #606266;
  }
  .card_2 {
    margin: 20px 0
  }
</style>

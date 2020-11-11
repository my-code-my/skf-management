<template>
  <div class="pay_container">
    <BreadCrumb :breadList="breadList"></BreadCrumb>
    <div class="all_content">
      <el-card>
        <el-row class="pay_wrap">
          <el-col :span="8" class="pay_item">
            <p>213.89</p>
            <p>昨日净收入（元）</p>
          </el-col>
          <el-col :span="8" class="pay_item">
            <p>1239.47</p>
            <p>本月净收入（元）</p>
          </el-col>
          <el-col :span="8" class="pay_item">
            <p>213.89</p>
            <p>累计净收入（元）</p>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="card_1">
        <el-form :inline="true" :model="searchForm">
          <el-form-item label="开始日期：">
            <el-date-picker
              v-model="searchForm.startDate"
              type="date"
              placeholder="请选择开始日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="结束日期：">
            <el-date-picker
              v-model="searchForm.endDate"
              type="date"
              placeholder="请选择结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="支付方式：">
            <el-select v-model="searchForm.payMethod">
              <el-option label="全部" value="shanghai"></el-option>
              <el-option label="线上" value="beijing"></el-option>
              <el-option label="线下" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品类型：">
            <el-select v-model="searchForm.goodsType">
              <el-option label="全部" value="shanghai"></el-option>
              <el-option label="密封" value="beijing"></el-option>
              <el-option label="润滑" value="beijing"></el-option>
              <el-option label="轴承" value="beijing"></el-option>
              <el-option label="服务" value="beijing"></el-option>
              <el-option label="维护产品" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <el-card>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="18">
            <el-button type="primary">导出数据</el-button>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="请输入交易流水号/订单编号" prefix-icon="el-icon-search" v-model="searchForm.code"></el-input>
          </el-col>
        </el-row>

        <el-alert title="总金额 213.89 元" type="warning" :closable="false" show-icon>
        </el-alert>
      </el-card>

      <el-table :data="orderTableData" border>
        <el-table-column label="交易流水号" prop="code"></el-table-column>
        <el-table-column label="订单编号" prop="code"></el-table-column>
        <el-table-column label="商品类型" prop="goods"></el-table-column>
        <el-table-column label="金额" prop="total_price"></el-table-column>
        <el-table-column label="支付方式" prop="pay_type"></el-table-column>
        <el-table-column label="交易时间" >
          <template slot-scope="scope">
            <p style="margin:0">{{scope.row.commit_time | dateFormat}}</p>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        :page-size="4"
        layout="prev, pager, next, jumper"
        :total="4">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import {orderTableData} from '../../data/index.js'
export default {
  name: "Pay",
  components: {
    BreadCrumb
  },
  data() {
    return {
      breadList: [
        {id: 1, name: '订单管理'},
        {id: 2, name: '收支记录'}
      ],
      searchForm: {
        startDate: '',
        endDate: '',
        payMethod: '',
        goodsType: '',
        code: ''
      },
      orderTableData,
    }
  }
}
</script>

<style scoped>
  .pay_item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pay_item::after {
    content: '';
    position: absolute;
    top: 37px;
    right: 0;
    width: 1px;
    height: 40px;
    background-color: #c8c8c8;
  }
  .pay_item:last-child::after {
    display: none;
  }
  .pay_item p:nth-child(1) {
    font-weight: 700;
    font-size: 24px;
    margin: 20px 0
  }
  .pay_item p:nth-child(2) {
    color: #666;
    font-size: 14px;
  }

  .card_1 {
    margin: 20px 0;
  }
  .el-alert {
    margin: 20px 0;
  }
</style>

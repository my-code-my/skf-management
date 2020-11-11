<template>
  <div class="container">

    <div class="all_content">
      <el-radio-group v-model="selectRadio.status">
        <el-radio-button label="全部订单（13）"></el-radio-button>
        <el-radio-button label="需要后台确认（0）"></el-radio-button>
        <el-radio-button label="需要客户确认（4）"></el-radio-button>
        <el-radio-button label="待支付（6）"></el-radio-button>
        <el-radio-button label="正在审核（1）"></el-radio-button>
        <el-radio-button label="待发货（0）"></el-radio-button>
        <el-radio-button label="待收货（0）"></el-radio-button>
        <el-radio-button label="已完成（2）"></el-radio-button>
        <el-radio-button label="已取消（0）"></el-radio-button>
      </el-radio-group>

      <div class="section" v-if="selectRadio.status==='全部订单（13）'">
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
              <el-button type="primary" @click="onSubmit">查询</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>

        <el-card>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="18">
              <el-button>导出全部订单</el-button>
              <el-button>勾选导出</el-button>
              <el-button>创建报价单</el-button>
            </el-col>
            <el-col :span="6">
              <el-input placeholder="请输入订单编号" prefix-icon="el-icon-search" v-model="searchForm.code"></el-input>
            </el-col>
          </el-row>

          <!--表格区域-->
          <el-table :data="orderTableData" border stripe>
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="商品信息">
              <template slot-scope="scope">
                <div class="goods_info">
                  <el-image style="width: 50px; height: 50px" :src="scope.row.imgUrl"></el-image>
                  <div class="goods_item">
                    <p>商品：{{scope.row.goods}}</p>
                    <p>订单编号：{{scope.row.code}}</p>
                    <p>编码：{{scope.row.goods_code}}</p>
                    <p>数量：{{scope.row.number}}</p>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="订单金额" prop="total_price" width="100px"></el-table-column>
            <el-table-column label="发货信息">
              <template slot-scope="scope">
                <div>
                  <p>收货人：{{scope.row.contact_name}}</p>
                  <p>手机号：{{scope.row.tel}}</p>
                  <p>地址：{{scope.row.address}}</p>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="订单状态" width="100px">
              <template slot-scope="scope">
                <p v-if="scope.row.order_status === '1'">已完成</p>
                <p v-else>待支付</p>
              </template>
            </el-table-column>
            <el-table-column label="订单信息">
              <template slot-scope="scope">
                <div>
                  <p>提交时间：{{scope.row.commit_time | dateFormat}}</p>
                  <p>支付时间：{{scope.row.pay_time | dateFormat}}</p>
                  <p>支付方式：{{scope.row.pay_type}}</p>
                  <p>发货时间：{{scope.row.send_time | dateFormat}}</p>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="120px">
              <template slot-scope="scope">
                <div class="btns_wrap">
                  <el-button @click="$router.push('/OrderDetail')" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small" @click="defineDialogVisible=true">确认订单</el-button>
                  <el-button type="text" size="small" @click="editDialogVisible=true">修改订单</el-button>
                  <el-button type="text" size="small" @click="recordDialogVisible=true">操作记录</el-button>
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
      <div class="section" v-if="selectRadio.status==='需要后台确认（0）'">
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
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>

        <el-card>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="18">
              <el-button>导出全部订单</el-button>
              <el-button>勾选导出</el-button>
              <el-button>创建报价单</el-button>
            </el-col>
            <el-col :span="6">
              <el-input placeholder="请输入订单编号" prefix-icon="el-icon-search" v-model="searchForm.code"></el-input>
            </el-col>
          </el-row>

          <!--表格区域-->
          <el-table :data="orderTableData"
                    border
                    stripe
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="商品信息">
              <template slot-scope="scope">
                <div class="goods_info">
                  <el-image style="width: 50px; height: 50px" :src="scope.row.imgUrl"></el-image>
                  <div class="goods_item">
                    <p>商品：{{scope.row.goods}}</p>
                    <p>订单编号：{{scope.row.code}}</p>
                    <p>编码：{{scope.row.goods_code}}</p>
                    <p>数量：{{scope.row.number}}</p>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="订单金额" prop="total_price" width="100px"></el-table-column>
            <el-table-column label="发货信息">
              <template slot-scope="scope">
                <div>
                  <p>收货人：{{scope.row.contact_name}}</p>
                  <p>手机号：{{scope.row.tel}}</p>
                  <p>地址：{{scope.row.address}}</p>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="订单状态" width="100px">
              <template slot-scope="scope">
                <p v-if="scope.row.order_status === '1'">已完成</p>
                <p v-else>待支付</p>
              </template>
            </el-table-column>
            <el-table-column label="订单信息">
              <template slot-scope="scope">
                <div>
                  <p>提交时间：{{scope.row.commit_time | dateFormat}}</p>
                  <p>支付时间：{{scope.row.pay_time | dateFormat}}</p>
                  <p>支付方式：{{scope.row.pay_type}}</p>
                  <p>发货时间：{{scope.row.send_time | dateFormat}}</p>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="120px">
              <template slot-scope="scope">
                <div class="btns_wrap">
                  <el-button @click="$router.push('/detail')" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small" @click="defineDialogVisible=true">确认订单</el-button>
                  <el-button type="text" size="small" @click="editDialogVisible=true">修改订单</el-button>
                  <el-button type="text" size="small" @click="recordDialogVisible=true">操作记录</el-button>
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

      <!--操作记录对话框-->
      <el-dialog
        title="操作记录"
        :visible.sync="recordDialogVisible"
        width="50%">
        <span>暂无操作记录</span>
        <span slot="footer">
          <el-button @click="recordDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="recordDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

      <!--确认订单对话框-->
      <el-dialog
        title="确认订单"
        :visible.sync="defineDialogVisible"
        width="50%">
        <el-form label-width="100px">
          <el-form-item label="发货周期：">
            <el-input-number v-model="numStart" :min="1" :max="100"></el-input-number>
            -
            <el-input-number v-model="numEnd" :min="1" :max="100"></el-input-number>
            个工作日
            <p>请确认发货周期并与客户沟通</p>
          </el-form-item>
        </el-form>
        <span slot="footer">
          <el-button @click="defineDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="defineDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

      <!--修改订单对话框-->
      <el-dialog
        title="修改订单"
        :visible.sync="editDialogVisible"
        width="50%">
        <el-radio-group v-model="editForm.type">
          <el-radio :label="1">修改邮费</el-radio>
          <el-radio :label="2">修改商品</el-radio>
          <el-radio :label="3">修改发货时间</el-radio>
        </el-radio-group>
        <el-form label-width="100px" >
          <template v-if="editForm.type === 1">
            <el-form-item label="邮费：">
              <el-input type="number" v-model="editForm.freight" placeholder="请输入邮费"></el-input>
            </el-form-item>
            <el-form-item label="修改原因：">
              <el-input type="text" v-model="editForm.reason" placeholder="请输入原因"></el-input>
            </el-form-item>
          </template>
          <template v-else-if="editForm.type === 2" >
              <div class="goods_info" v-for="(item,i) in orderTableData" :key="item.id">
                <el-image style="width: 50px; height: 50px" :src="item.imgUrl"></el-image>
                <div class="goods_item">
                  <p>商品：{{item.goods}}</p>
                  <p>编码：{{item.goods_code}}</p>
                  <p>数量：{{item.number}}</p>
                  <p>单价：<el-input-number v-model="item.total_price" :min="1" :max="10"></el-input-number>不含税价格</p>
                </div>
              </div>
              <el-form-item label="修改原因：">
                <el-input v-model="editForm.reason" placeholder="请输入原因"></el-input>
              </el-form-item>
          </template>
          <template v-else>
            <el-form-item label="发货周期：">
              <el-input-number v-model="numStart" :min="1" :max="100"></el-input-number>
              -
              <el-input-number v-model="numEnd" :min="1" :max="100"></el-input-number>
              个工作日
            </el-form-item>
            <el-form-item label="修改原因：">
              <el-input v-model="editForm.reason" placeholder="请输入原因"></el-input>
            </el-form-item>
          </template>

        </el-form>
        <span slot="footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../../components/breadcrumb/BreadCrumb"
import {orderTableData} from '../../data/index.js'
export default {
  name: "Order",
  components: {
    BreadCrumb,
  },
  data() {
    return {
      breadList: [
        {id: 1, name: '订单管理'},
        {id: 2, name: '订单列表'}
      ],
      selectRadio: {
        status: '全部订单（13）'
      },
      searchForm: {
        startDate: '',
        endDate: '',
        payMethod: '',
        goodsType: '',
        code: ''
      },
      orderTableData,
      //控制操作记录对话框的显示与隐藏
      recordDialogVisible: false,
      //确认订单对话框的显示与隐藏
      defineDialogVisible: false,
      numStart: '',
      numEnd: '',
      //修改订单对话框的显示与隐藏
      editDialogVisible: false,
      editForm: {
        type: 1,
        freight: '',
        reason: ''
      }
    }
  },
  methods: {
    onSubmit() {

    },
    resetForm() {

    }
  }
}
</script>

<style scoped>
  .card_1 {
    margin: 20px 0 20px 0
  }
  .goods_info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btns_wrap {
    display: flex;
    flex-direction: column;
  }
  .el-image {
    display: inline-block;
    margin-right: 5px;

  }
  .goods_item p {
    font-size: 12px;
    color: #666;
    margin: 4px 0
  }
  .el-radio-group {
    margin-bottom: 40px;
  }
</style>

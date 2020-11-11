<template>
  <div class="all_content">
    <el-card class="card_add_goods">
      <div class="base_info_title">基本信息</div>
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="100px">
        <el-form-item label="商品名称：" required prop="name">
          <el-input v-model="addForm.name"  maxlength="50" show-word-limit style="width: 440px"></el-input>
        </el-form-item>
        <el-form-item label="商品图片：" required prop="name">
          <div class="img_wrap">
            <div class="img_box">
              <el-image style="width: 100%; height: 100%" :src="detailList.imgUrl"></el-image>
              <div class="img_mask">
                <i class="el-icon-zoom-in" @click="imgDialogVisible=true"></i>
                <i class="el-icon-delete" @click="handleRemoveImg"></i>
                <div class="img_text">主图</div>
              </div>
            </div>
            <!--上传图片-->
            <el-upload
              class="upload_img"
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
          <div class="upload_info">建议尺寸：800*800像素，最多上传5张，单张图片大小不超过3M，支持格式： jpeg、 png、 bmp。</div>
        </el-form-item>

        <el-form-item label="商品视频：">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card">
            <i class="el-icon-plus"></i>
          </el-upload>
          <div class="upload_info">建议时长9-30秒，建议视频宽高比1:1，最多上传1个视频，视频大小不超过 10 MB，支持格式：mp4。</div>
        </el-form-item>

        <el-form-item label="商品详情：">
          <div class="img_box">
            <el-image style="width: 100%; height: 100%" :src="detailList.imgUrl"></el-image>
            <div class="img_mask">
              <i class="el-icon-zoom-in" @click="imgDialogVisible=true"></i>
              <i class="el-icon-delete" @click="handleRemoveImg"></i>
              <div class="img_text">主图</div>
            </div>
          </div>
          <div class="upload_info">单张图片大小不超过5M，支持格式： jpeg、 png、 gif、jpg。</div>
        </el-form-item>

        <el-form-item label="商品类目：" required prop="goods_cate" >
          <el-cascader
            style="width: 440px"
            expandTrigger="hover"
            v-model="addForm.selectId"
            :options="cascaderList"
            :props="cateProps">
          </el-cascader>
        </el-form-item>

        <el-form-item label="商品型号：" required prop="goods">
          <el-input v-model="addForm.goods"  maxlength="50" show-word-limit style="width: 440px"></el-input>
        </el-form-item>

        <el-form-item label="编码：" required prop="goods_code">
          <el-input v-model="addForm.goods_code"  maxlength="50" show-word-limit style="width: 440px"></el-input>
        </el-form-item>

        <el-form-item label="属性信息：">
          <el-table border>
            <el-table-column label="属性名称"></el-table-column>
            <el-table-column label="属性值"></el-table-column>
          </el-table>
        </el-form-item>

        <el-form-item label="价格：" required prop="price">
          <el-input placeholder="请输入商品价格" maxlength="10" show-word-limit v-model="addForm.price">
            <template slot="prepend">¥</template>
          </el-input>
        </el-form-item>

        <el-form-item label="发货周期：">
          <el-input-number v-model="addForm.deliveryStart" :min="1" :max="10" ></el-input-number>
          <span>至</span>
          <el-input-number v-model="addForm.deliveryEnd" :min="1" :max="10" ></el-input-number>
          <span>个工作日</span>
        </el-form-item>


        <div class="base_info_title">运费信息</div>
        <el-form-item label="运费模板：">
          <el-select v-model="addForm.selectValue" placeholder="请选择">
            <el-option
              v-for="item in selectList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商品重量：" required prop="weight">
          <el-input placeholder="请输入商品重量" maxlength="10" show-word-limit v-model="addForm.weight">
            <template slot="append">KG</template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!--放大图片的对话框-->
    <el-dialog :visible.sync="imgDialogVisible" width="50%">
      <el-image style="width: 100%; height: 100%" :src="detailList.preview_imgUrl"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import {detailList,cascaderList,selectList} from '@/data/index'
export default {
  name: "AddGoods",
  data() {
    return {
      detailList,
      cascaderList,
      selectList,
      addForm: {
        name: '2020102910061813',
        goods_cate: detailList.goods,
        selectId: [],
        goods: '',
        goods_code: '',
        price: '',
        deliveryStart: '',
        deliveryEnd: '',
        selectValue: '',
        weight: ''
      },
      addFormRules: {
        name: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
        goods_cate: [{ required: true, message: '请选择商品类目', trigger: 'blur' }],
        goods: [{ required: true, message: '请输入商品型号', trigger: 'blur' }],
        goods_code: [{ required: true, message: '请输入商品编码', trigger: 'blur' }],
        price: [{ required: true, message: '请输入商品价格', trigger: 'blur' }],
        weight: [{ required: true, message: '请输入商品重量', trigger: 'blur' }],
      },
      //是否显示图片
      imgDialogVisible: false,
      cateProps: {
        value: cascaderList.value,
        label: cascaderList.label,
        children: 'children'
      }

    }
  },
  methods: {
    //点击删除图片
    async handleRemoveImg() {
      const result = await this.$confirm('你确定要删除图片?', '删除图片', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err=> err)
      if(result !== 'confirm') return this.$message.info('已取消了删除')
      //发送删除图片的网络请求
    },
  }
}
</script>

<style scoped>
.card_add_goods {
  padding: 25px;
  margin-bottom: 20px;
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
.img_box {
  position: relative;
  width: 148px;
  height: 148px;
  border-radius: 6px;
  border: 1px dashed #c0ccda;
  cursor: pointer;
}
.img_box:hover .img_mask {
  display: block;
}
.img_mask {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: rgba(0,0,0,.5);
  text-align: center;
  transition: .3s;
}
.img_mask i {
  margin-top: 58px;
  font-size: 20px;
}
.el-icon-zoom-in {
  margin-right: 10px;
}
.img_text {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
.upload_img {
  position: absolute;
  top: 0;
  left: 160px;
}
/*.img_wrap {*/
/*  height: 148px;*/
/*  overflow: hidden;*/
/*  position: relative;*/
/*}*/
/*.img_wrap::after {*/
/*  display: block;*/
/*  content: '';*/
/*  clear: both;*/
/*}*/

.upload_info {
  font-size: 12px;
  color: #999;

}

.el-table {
  margin-top: 0;
}
</style>

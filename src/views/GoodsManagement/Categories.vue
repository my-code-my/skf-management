<template>
  <div>
    <el-card>
      <tree-table :data="categoriesList"
                  :columns="columns"
                  border
                  :selection-type="false"
                  :expand-type="true">

        <template slot="level" slot-scope="scope">
          <el-tag v-if="scope.row.level === 0">一级</el-tag>
          <el-tag v-else-if="scope.row.level === 1">二级</el-tag>
          <el-tag v-else>三级</el-tag>
        </template>
        <template slot="opt" slot-scope="scope">
          <el-button type="text" @click="newLevel(scope.row.id)">新增下级</el-button>
          <el-button type="text" @click="editDialogVisible = true">编辑</el-button>
          <el-button type="text" @click="deleteNextLevel">删除</el-button>
        </template>
      </tree-table>
    </el-card>

    <!--新增等级对话框-->
    <el-dialog
      title="新增下级类目"
      :visible.sync="levelDialogVisible"
      width="40%">
      <el-form ref="levelFormRef" :model="levelForm" label-width="100px">
        <el-form-item label="类目名称：">
          <el-input v-model="levelForm.name" placeholder="请输入类目名称"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="levelDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="levelDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!--编辑对话框-->
    <el-dialog
      title="编辑下级类目"
      :visible.sync="editDialogVisible"
      width="40%">
      <el-form ref="editFormRef" :model="editForm" label-width="100px">
        <el-form-item label="上级类目：">
          <el-select v-model="editForm.cate" placeholder="请选择">
            <el-option label="密封" :value="editForm.cate"></el-option>
            <el-option label="润滑" :value="editForm.cate"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="下级名称：">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {categoriesList} from "../../data"
export default {
  name: "Categories",
  data() {
    return {
      categoriesList,
      columns: [
        {
          label: '类目名称',
          prop: 'name'
        },
        {
          label: '级别',
          type: 'template', //表示将当前 列 定义为模板列
          template: 'level' //表示当前这一列使用的 模板名称
        },
        {
          label: '商品数量',
          prop: 'num'
        },
        {
          label: '操作',
          type: 'template',
          template: 'opt'
        },
      ],
      //新增等级对话框显示与隐藏
      levelDialogVisible: false,
      levelForm: {
        name: ''
      },
      //编辑的对话框
      editDialogVisible: false,
      editForm: {
        name: '',
        cate: ''
      }
    }
  },
  methods: {
    newLevel(id) {
      this.levelDialogVisible = true
    },
    async deleteNextLevel() {
      const result = await this.$confirm('确定是否删除当前下级?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)

      if(result !== 'confirm') this.$message.info('已取消了删除')

      //发送删除操作的请求
    }
  }
}
</script>

<style scoped>
  .el-select {
    width: 100%;
  }
</style>

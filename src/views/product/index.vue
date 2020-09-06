<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="product" type="success">
      <router-view />
    </el-alert>
    <div class="combo">
      <hr class="dashline" />
      <el-button type="primary" @click="addDialogVisible=true">+新增商品</el-button>
      <el-row>
        <el-table :data="commodity">
          <el-table-column prop="commodityImageUrl" label="商品图片" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.commodityImageUrl" width="40" height="40" />
            </template>
          </el-table-column>
          <el-table-column prop="commodityName" label="商品名称" align="center" />
          <el-table-column prop="commodityMoney" label="商品价格" align="center" />
          <el-table-column prop="describe" label="商品描述" align="center" />
          <el-table-column prop="materials" label="商品材料" align="center" />

          <el-table-column label="操作" align="center" width="200">
            <template slot-scope="scope">
              <el-button type="text" size="medium" @click="handleEdit(scope.row.commodityId)">编辑</el-button>
              <el-button type="text" size="medium" @click="handleDelete(scope.row.commodityId)">删除</el-button>
              <el-button type="text" size="medium" @click="detail(scope.row)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="margin-top-10 text-align-center">
          <pagination :total="total" @pageChange="pageChange" />
        </div>
      </el-row>
      <el-dialog :title="'商品详情'" :visible.sync="dialogFormVisible" class="dialog-form">
        <el-form :model="form">
          <el-form-item label="商品图片：" :label-width="formLabelWidth">
            <img :src="form.image" width="40" height="40" />
          </el-form-item>
          <el-form-item label="商品名称：" :label-width="formLabelWidth">
            <el-input v-model="form.name" disabled="true" />
          </el-form-item>
          <el-form-item label="商品价格：" :label-width="formLabelWidth">
            <el-input v-model="form.money" disabled="true" />
          </el-form-item>
          <el-form-item label="商品描述：" :label-width="formLabelWidth">
            <el-input v-model="form.describe" disabled="true" />
          </el-form-item>
          <el-form-item label="商品材料：" :label-width="formLabelWidth">
            <el-input v-model="form.material" disabled="true" />
          </el-form-item>
          <el-form-item label="商品类别：" :label-width="formLabelWidth">
            <el-input v-model="form.sort" disabled="true" />
          </el-form-item>
        </el-form>
      </el-dialog>

      <el-dialog title="新增商品" v-if="addDialogVisible" :visible.sync="addDialogVisible" width="35%">
        <product-info @done="addDoneCallback" @cancel="addCancel"></product-info>
      </el-dialog>

      <el-dialog title="修改商品" v-if="editDialogVisible" :visible.sync="editDialogVisible" width="35%">
        <product-info @done="editDoneCallback" @cancel="editCancel" :commodityId="commodityId"></product-info>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import pagination from './pagination/pagination'
import productInfo from'./productInfo'
import {list,remove} from '@/api/commodity'
export default {
  components: {
    pagination,
    productInfo
  },
  data() {
    return {
      addDialogVisible: false,
      editDialogVisible: false,
      commodityId:'',
      dialogFormVisible: false,
      formLabelWidth: '150px',
      listQuery: {
        currentPage: 1,
        limit: 10,
        offset: 0
      },
      total:0,
      form: {
        image: '',
        name: '',
        money: '',
        describe: '',
        material: '',
        sort:''
      },
      commodity: []
    }
  },
  created(){
    /*this.commodity=[{
      commodityId:1,
      commodityName:'123',
      commodityMoney:'456',
      commodityImageUrl:'kkk.jpg',
      describe:'123',
      materials:'777',
      sortId:'1'
    }]*/
    this.getProduct()
  },
  methods: {
    detail(val) {
      this.form.name = val.commodityName
      this.form.money = val.commodityMoney
      this.form.image = val.commodityImageUrl
      this.form.describe = val.describe
      this.form.material = val.materials
      this.form.sort = val.sortId
      this.dialogFormVisible = true
    },
    //获取商品
    getProduct(){
      let params={
        offset:this.listQuery.offset,
        limit:this.listQuery.limit
      }
      list(params).then((data)=>{
        this.commodity=data.data
        this.commodity.forEach(item =>{
          item.commodityImageUrl=require('./'+item.commodityImageUrl)
        })
        this.total=data.total
      })
    },
    // 页码切换
    pageChange(item) {
      this.listQuery.currentPage = item.page;
      this.listQuery.limit = item.limit;
      this.listQuery.offset = (item.page - 1) * item.limit;
      this.getProduct();
    },
    //增加完成
    addDoneCallback() {
      this.addDialogVisible = false;
      this.refresh();
      //重新刷新
    },
    //关闭增加页面
    addCancel() {
      this.addDialogVisible = false;
    },
    //编辑完成
    editDoneCallback() {
      this.editDialogVisible = false;
      this.refresh();
      //重新刷新
    },
    //关闭编辑页面
    editCancel() {
      this.editDialogVisible = false;
    },
    //打开编辑页面
    handleEdit(id) {
      this.commodityId = id;
      this.editDialogVisible = true;
    },
    //删除商品
    handleDelete(id) {
      this.$confirm('商品删除之后不可恢复， 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
       remove({
          commodityId: id,
        }).then(res => {
          if(res.code === '0') {
            this.$message.success('删除成功');
            this.refresh();
          }
          else{
            this.$message.error('删除失败');
            this.refresh();
          }
        })
      }).catch(() => {});
    },
    refresh() {
      this.commodity=[],
        this.listQuery= {
        currentPage: 1,
          limit: 10,
          offset: 0
      }
      this.getProduct()
    },
  }
}
</script>

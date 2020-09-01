<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="product" type="success">
      <router-view />
    </el-alert>
    <div class="combo">
      <hr class="dashline" />
      <el-button type="primary" @click>+新增商品</el-button>
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
              <el-button type="text" size="medium" @click>编辑</el-button>
              <el-button type="text" size="medium" @click>删除</el-button>
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
          <el-form-item label="商品名称：" :label-width="formLabelWidth">
            <img :src="form.image" width="40" height="40" />
          </el-form-item>
          <el-form-item label="商品名称：" :label-width="formLabelWidth">
            <el-input v-model="form.name" disabled="true" />
          </el-form-item>
          <el-form-item label="商品价格：" :label-width="formLabelWidth">
            <el-input v-model="form.money" disabled="true" />
          </el-form-item>
          <el-form-item label="商品描述：" :label-width="formLabelWidth">
            <el-input v-model="form.details" disabled="true" />
          </el-form-item>
          <el-form-item label="商品材料：" :label-width="formLabelWidth">
            <el-input v-model="form.material" disabled="true" />
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import pagination from './pagination/pagination'
export default {
  components: {
    pagination
  },
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '150px',
      form: {
        image: '',
        name: '',
        money: '',
        details: '',
        material: ''
      },
      commodity: [{
        commodityId: '1',
        commodityName: '鸡蛋',
        commodityMoney: '10',
        commodityImageUrl: require('./kkk.jpg'),
        describe: '比较多',
        materials: '鸡蛋'
      },
      {
        commodityId: '2',
        commodityName: '鸡蛋1',
        commodityMoney: '10',
        commodityImageUrl: require('./kkk.jpg'),
        describe: '比较多1',
        materials: '鸡蛋1'

      },
      {
        commodityId: '3',
        commodityName: '鸡蛋2',
        commodityMoney: '10',
        commodityImageUrl: require('./kkk.jpg'),
        describe: '比较多2',
        materials: '鸡蛋2'

      },
      {
        commodityId: '4',
        commodityName: '鸡蛋4',
        commodityMoney: '10',
        commodityImageUrl: require('./kkk.jpg'),
        describe: '比较多4',
        materials: '鸡蛋4'

      },
      {
        commodityId: '5',
        commodityName: '鸡蛋5',
        commodityMoney: '10',
        commodityImageUrl: require('./kkk.jpg'),
        describe: '比较多5',
        materials: '鸡蛋5'

      }]
    }
  },
  methods: {
    detail(val) {
      this.form.name = val.commodityName
      this.form.money = val.commodityMoney
      this.form.image = val.commodityImageUrl
      this.form.details = val.describe
      this.form.material = val.materials
      this.dialogFormVisible = true
    }
  }
}
</script>

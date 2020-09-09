<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="order" type="success">
      <router-view />
    </el-alert>
    <div class="combo">
      <hr class="dashline" />
      <el-row>
        <el-table :data="orders">
          <el-table-column prop="orderId" label="订单id" align="center" />
          <el-table-column prop="status" label="订单状态" align="center" />
          <el-table-column prop="orderAmount" label="订单金额" align="center" />
          <el-table-column prop="orderNumber" label="订单数量" align="center" />

          <el-table-column label="操作" align="center" width="200">
            <template slot-scope="scope">
              <el-button type="text" size="medium" @click="detail(scope.row)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>

      </el-row>
      <el-dialog :title="'订单详情'" :visible.sync="dialogFormVisible" class="dialog-form">
        <el-form :model="form">

          <el-form-item label="订单id：" :label-width="formLabelWidth">
            <el-input v-model="form.orderId" disabled="true" />
          </el-form-item>
          <el-form-item label="订单状态：" :label-width="formLabelWidth">
            <el-input v-model="form.status" disabled="true" />
          </el-form-item>
          <el-form-item label="订单数量：" :label-width="formLabelWidth">
            <el-input v-model="form.orderAmount" disabled="true" />
          </el-form-item>
          <el-form-item label="订单价格：" :label-width="formLabelWidth">
            <el-input v-model="form.orderNumber" disabled="true" />
          </el-form-item>
          <el-form-item label="商品名字：" :label-width="formLabelWidth">
            <el-input v-model="form.commodityName" disabled="true" />
          </el-form-item>
          <el-form-item label="商品价格：" :label-width="formLabelWidth">
            <el-input v-model="form.commodityName" disabled="true" />
          </el-form-item>
          <el-form-item label="商品数量：" :label-width="formLabelWidth">
            <el-input v-model="form.number" disabled="true" />
          </el-form-item>
        </el-form>
      </el-dialog>

    </div>
  </div>
</template>
<script>
  import {list} from '@/api/order'
  export default {

    data() {
      return {

        dialogFormVisible: false,
        formLabelWidth: '150px',
        form: {
          orderId: '',
          status: '',
          orderAmount: '',
          orderNumber: '',
          commodityName: '',
          commodityMoney:'',
          number:''
        },
        orders: []
      }
    },
    created(){

      this.getOrder()
    },
    methods: {
      detail(val) {
        this.form.orderId = val.orderId
        this.form.status = val.status
        this.form.orderAmount = val.orderAmount
        this.form.orderNumber = val.orderNumber
        this.form.commodityName = val.commodityList.commodityName
        this.form.commodityMoney = val.commodityList.commodityMoney
        this.form.number = val.commodityList.number
        this.dialogFormVisible = true
      },
      //获取商品
      getOrder(){
        list().then((data)=>{
          this.orders=data.data.list
          this.orders.forEach(item =>{
            if(item.status===0){
              item.status='待完成'
            }else if(item.status===1){
              item.status='已完成'
            }else if(item.status===2){
              item.status='待退款'
            }else if(item.status===3){
              item.status='已退款'
            }
          })
        })
      },


      refresh() {
        this.orders=[],

        this.getOrder()
      },
    }
  }
</script>

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
        <el-table :data="form">
          <el-table-column prop="commoditytId" label="商品id" align="center" />
          <el-table-column prop="commoditytName" label="商品名字" align="center" />
          <el-table-column prop="commodityMoney" label="商品金额" align="center" />
          <el-table-column prop="number" label="商品数量" align="center" />
        </el-table>
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
        formLabelWidth: '200px',
        form: [],
        orders: []
      }
    },
    created(){

      this.getOrder()
    },
    methods: {
      detail(val) {
        this.form= val.commodityList
        this.dialogFormVisible=true
      },
      //获取商品
      getOrder(){
        list().then((data)=>{
          this.orders=data.data
          this.orders.forEach(item =>{
            if(item.status==0){
              item.status='待完成'
            }else if(item.status==1){
              item.status='已完成'
            }else if(item.status==2){
              item.status='待退款'
            }else if(item.status==3){
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

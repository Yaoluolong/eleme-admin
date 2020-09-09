<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="data" type="success">
      <router-view />
    </el-alert>
    <div class="combo">
      <hr class="dashline">
      <el-row>
        <el-table :data="statistics">
          <el-table-column prop="commodityId" label="商品编号" align="center" />
          <el-table-column prop="orderNumber" label="订单数量" align="center" />
          <el-table-column prop="orderAmount" label="订单金额" align="center" />
        </el-table>
        <div class="margin-top-10 text-align-center">
          <pagination :total="total" @pageChange="pageChange" />
        </div>
      </el-row>
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
      statistics: [{
        commodityId: '1',
        orderNumber: 10,
        orderAmount: 1000
      },
      {
        commodityId: '2',
        orderNumber: 20,
        orderAmount: 2000
      },
      {
        commodityId: '3',
        orderNumber: 1,
        orderAmount: 10
      },
      {
        commodityId: '4',
        orderNumber: 5,
        orderAmount: 100
      },
      {
        commodityId: '5',
        orderNumber: 7,
        orderAmount: 170
      }

      ]
    }
  }
}
</script>

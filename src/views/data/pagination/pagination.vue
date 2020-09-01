<template>
  <div class="pagination">
    <el-pagination
      small
      class="text-center"
      :current-page="page.page"
      :page-sizes="pageSizes"
      :page-size="page.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 20
    } // 总条数
  },
  data() {
    return {
      pageSizes: [10, 20, 50, 100],
      page: {
        page: 1,
        limit: 10
      }
    }
  },
  methods: {
    // 每页条数变更
    handleSizeChange(val) {
      this.page.limit = val
      this.page.page = 1
      this.$emit('pageChange', this.page)
    }, // 当前页码变更
    handleCurrentChange(val) {
      this.page.page = val
      this.$emit('pageChange', this.page)
    }
  }
}
</script>
<style>
</style>

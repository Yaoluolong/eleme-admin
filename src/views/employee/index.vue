<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="employee" type="success">
      <router-view />
    </el-alert>
    <div class="combo">
      <hr class="dashline">
      <el-button type="primary" @click="addDialogVisible=true">+新增员工</el-button>
      <el-row>
        <el-table :data="staff">
          <el-table-column prop="staffId" label="员工编号" align="center" />
          <el-table-column prop="staffName" label="员工姓名" align="center" />
          <el-table-column prop="permissionId" label="员工权限" align="center" />
          <el-table-column prop="password" label="用户密码" align="center" />

          <el-table-column label="操作" align="center" width="200">
            <template slot-scope="scope">
              <el-button type="text" size="medium" @click="handleEdit(scope.row.staffId)">编辑</el-button>
              <el-button type="text" size="medium" @click="handleDelete(scope.row.staffId)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="margin-top-10 text-align-center">
          <pagination :total="total" @pageChange="pageChange" />
        </div>
      </el-row>
      <el-dialog title="新增员工" v-if="addDialogVisible" :visible.sync="addDialogVisible" width="35%">
        <staff-info @done="addDoneCallback" @cancel="addCancel"></staff-info>
      </el-dialog>

      <el-dialog title="修改员工" v-if="editDialogVisible" :visible.sync="editDialogVisible" width="35%">
        <staff-info @done="editDoneCallback" @cancel="editCancel" :staffId="staffId"></staff-info>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import pagination from './pagination/pagination'
  import staffInfo from'./staffInfo'
  import {list,remove} from '@/api/staff'
  export default {
    components: {
      pagination,
      staffInfo
    },
    data() {
      return {
        addDialogVisible: false,
        editDialogVisible: false,
        staffId:'',
        listQuery: {
          currentPage: 1,
          limit: 10,
          offset: 0
        },
        total:0,
        staff: []
      }
    },
    created(){
      this.getStaff()
    },
    methods: {

      //获取员工
      getStaff(){
        let params={
          offset:this.listQuery.offset,
          limit:this.listQuery.limit
        }
        this.list(params).then((data)=>{
          this.staff=data.list
          this.total=data.total
        })
      },
      // 页码切换
      pageChange(item) {
        this.listQuery.currentPage = item.page;
        this.listQuery.limit = item.limit;
        this.listQuery.offset = (item.page - 1) * item.limit;
        this.getStaff();
      },
      //增加完成
      addDoneCallback() {
       this.addDialogVisible=false
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
        this.staffId = id;
        this.editDialogVisible = true;
      },
      //删除商品
      handleDelete(id) {
        this.$confirm('员工删除之后不可恢复， 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.remove({
            staffId: id,
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
        this.getStaff()
      },
    }
  }
</script>



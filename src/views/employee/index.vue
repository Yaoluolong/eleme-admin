<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="employee" type="success">
      <router-view />
    </el-alert>
    <div class="combo">
      <hr class="dashline">
      <el-button type="primary" @click="">+新增员工</el-button>
      <el-row>
        <el-table :data="staff">
          <el-table-column prop="staffId" label="员工编号" align="center" />
          <el-table-column prop="staffName" label="员工姓名" align="center" />
          <el-table-column prop="permissionId" label="员工权限" align="center" />
          <el-table-column prop="password" label="用户密码" align="center" />

          <el-table-column label="操作" align="center" width="200">
            <template slot-scope="scope">
              <el-button type="text" size="medium" @click="">编辑</el-button>
              <el-button type="text" size="medium" @click="">删除</el-button>
            </template>
          </el-table-column>
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
      staff: [{
        staffId: '1',
        staffName: '管理员A',
        permissionId: '1',
        password: '13245'
      },
      {
        staffId: '2',
        staffName: '管理员2',
        permissionId: '2',
        password: '132sad45'
      },
      {
        staffId: '3',
        staffName: '管理员3',
        permissionId: '1,2',
        password: '132asddsa45'
      },
      {
        staffId: '4',
        staffName: '管理员4',
        permissionId: '1,2,3',
        password: 'aaaa13245'
      },
      {
        staffId: '5',
        staffName: '管理员5',
        permissionId: '3',
        password: '1324asd5'
      }

      ]
    }
  }
}
</script>

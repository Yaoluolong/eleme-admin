<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form" label-width="120px" label-position="left">
      <el-form-item  label="员工姓名" prop="staffName">
        <el-input  :disabled="staffId" v-model="form.staffName" placeholder="请输入员工姓名" size="small"></el-input>
      </el-form-item>
      <el-form-item label="员工权限" prop="permissionId">
        <el-input v-model="form.permissionId" placeholder="请输入员工权限" size="small"></el-input>
      </el-form-item>
      <el-form-item  label="员工密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入员工密码" size="small"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit" size="small">保存</el-button>
        <el-button @click="cancel" size="small">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/javascript">
  import {query,create,update} from '@/api/staff'
  export default {
    props: ['staffId'],
    data() {
      return {
        form: {
          staffId:'',
          staffName:'',
          permissionId:'',
          password:'',
        },
        rules: {
         staffName: [{
            required: true,
            message: '请输入名字',
            trigger: 'blur'
          }],
          permissionId: [{
            required: true,
            message: '请选择权限',
            trigger: 'blur'
          }],
          password: [{
         required: true,
         message: '请输入密码',
         trigger: 'blur'
       }],
        }
      }
    },
    created() {
      if(this.staffId) {
        //存在则载入信息，初始化
        query({staffId: this.staffId}).then(data => {
          this.form.staffName=data.staffName;
          this.form.permissionId=data.permissionId;
          this.form.password=data.password;
        });
      }
    },
    methods: {
      submit() {
        let params = {
          permissionId: this.form.permissionId,
          password:this.form.password,
        };
        this.$refs["form"].validate((valid) => {
          if(valid) {
            if (this.staffId) {
              //update
              params.staffId = this.staffId;
              update(params).then(data => {
                if (data.code === 0) {
                  this.$message.success('更新信息成功！');
                  this.$emit('done');
                } else {
                  this.$message.error('更新信息失败！');
                  this.$emit('done');
                }
              });
            } else {
              //new
              create(params).then(data => {
                if (data.code === 0) {
                  this.$message.success('创建员工成功！');
                  this.$emit('done');
                } else {
                  this.$message.error('创建员工失败！');
                  this.$emit('done');
                }
              });
            }
          }
        });
      },
      cancel() {
        this.$emit('cancel');
      }
    }
  }
</script>

<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form" label-width="120px" label-position="left">
      <el-form-item label="商品图片" prop="commodityImageUrl">
        <el-select v-model="form.commodityImageUrl" placeholder="请选择商品图片">
          <el-option label="图片一" value="./kkk.jpg"></el-option>
          <el-option label="图片二" value="./ccc.jpg"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item  label="商品名称" prop="commodityName">
        <el-input  :disabled="commodityId" v-model="form.commodityName" placeholder="请输入商品名称" size="small"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="commodityMoney">
        <el-input v-model="form.commodityMoney" placeholder="请输入商品价格" size="small"></el-input>
      </el-form-item>
      <el-form-item  label="商品材料" prop="materials">
        <el-input :disabled="commodityId" v-model="form.materials" placeholder="请输入商品材料" size="small"></el-input>
      </el-form-item>
      <el-form-item :disabled="commodityId" label="商品类别" prop="sortId">
        <el-radio v-model="form.sortId" label="1" >甜品</el-radio>
        <el-radio v-model="form.sortId" label="2" >小吃</el-radio>
        <el-radio v-model="form.sortId" label="3" >饮料</el-radio>
        <el-radio v-model="form.sortId" label="4" >套餐</el-radio>
      </el-form-item>
      <el-form-item label="商品描述" prop="describe">
        <el-input type="textarea" v-model="form.describe" size="small" placeholder="请输入商品描述" :rows="3"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit" size="small">保存</el-button>
        <el-button @click="cancel" size="small">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/javascript">
  import {single,create,update} from '@/api/commodity'
  export default {
    props: ['commodityId'],
    data() {
      return {
        form: {
          commodityId:'',
          commodityImageUrl:'',
          commodityName:'',
          commodityMoney:'',
          materials:'',
          sortId:'',
          describe:'',
        },
        rules: {
          commodityImageUrl: [{
            required: true,
            message: '请选择图片',
            trigger: 'blur'
          }],
          commodityName: [{
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          }],
        commodityMoney: [{
         required: true,
         message: '请输入商品价格',
         trigger: 'blur'
       }],
        materials: [{
          required: true,
          message: '请输入商品材料',
          trigger: 'blur'
        }],
        sortId: [{
          required: true,
          message: '请选择商品种类',
          trigger: 'blur'
        }],
          describe: [{
            required: true,
            message: '请输入商品描述',
            trigger: 'blur'
          }]
        }
      }
    },
    created() {
      if(this.commodityId) {
        //存在则载入信息，初始化
        single({commodityId: this.commodityId}).then(data => {
          this.form.commodityImageUrl=data.commodityImageUrl;
          this.form.commodityName=data.commodityName;
          this.form.commodityMoney=data.commodityMoney;
          this.form.materials=data.materials;
          this.form.sortId=data.sortId;
          this.form.describe=data.describe;
        });
      }
    },
    methods: {
      submit() {
        let params = {
          commodityImageUrl: this.form.commodityImageUrl,
          commodityMoney:this.form.commodityMoney,
          sortId:this.form.sortId,
          describe:this.form.describe,
        };
        this.$refs["form"].validate((valid) => {

          if(valid) {

            if (this.commodityId) {
              //update
              params.commodityId = this.commodityId;
              update(params).then(data => {
                if (data.code == 0) {
                  this.$message.success('更新商品成功！');
                  this.$emit('done');
                } else {
                  this.$message.error('更新商品失败！');
                  this.$emit('done');
                }
              });
            } else {
              //new
              params.commodityName = this.form.commodityName
              params.materials = this.form.materials
              create(params).then(data => {
                if (data.code == 0) {
                  this.$message.success('创建商品成功！');
                  this.$emit('done');
                } else {
                  this.$message.error('创建商品失败！');
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

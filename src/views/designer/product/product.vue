<template>
    <div class="app-container">
    <el-row class="warp">
    <el-col :span="24" class="warp-main">
      <!--工具条-->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true">
          <el-form-item>
            <el-button type="primary" @click="jumpDesignerAdd" v-if="productList.length<5">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--列表-->
      <el-table :data="productList" highlight-current-row style="width: 100%;">
        <el-table-column label="产品编号" prop="id"> </el-table-column>
        <el-table-column label="产品名称" prop="name">
        </el-table-column>
        <el-table-column label="产品英文名称" prop="egName">
        </el-table-column>
        <el-table-column label="产品背景图" prop="lordImg">
          <template slot-scope="scope">
            <img :src="scope.row.lordImg" :alt="scope.row.name" width="65">
          </template>
        </el-table-column>
        <el-table-column label="操作" :width="200">
          <template slot-scope="scope">
            <el-button size="mini" @click="jumpEdit(scope.$index,scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="removeproduct(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
  </div>
</template>
<script>
  import {productList,decorateDelete} from '@/api/product'
  export default {
    data () {
      return {
        productList:[],
        formLabelWidth:'120px',
        listQuery:{
          key:'',
          pageIndex:0,
          pageSize:10
        }
      }
    },
    mounted () {
      let that=this
      that.getProductList()
    },
    components: {},
    methods: { 
      // 获取设计师列表
      getProductList(){
        let that=this
        productList(that.listQuery).then(function(res){
          that.productList=res
        })
      },
      // 删除设计师
      removeproduct(id){
        let params={}
        let that=this
        this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {confirmButtonText: '确定',cancelButtonText: '取消', type: 'warning'
        }).then(() => {
         params.id=id
         decorateDelete(params).then(function(res){
          if(res==""){
            that.$message.success({
              showClose: true,
              message: "删除成功",
              duration: 2000
            }); 
            that.getProductList()
          }
        })
        })  
      },
      //编辑
      jumpEdit(index,row){
        let that = this;
        row.idx=index
        that.$router.push({ path: '/product/productEdit',query:row })
      },
      // 新增
      jumpDesignerAdd(){
        let that = this;
        that.$router.push({ path: '/product/productAdd'})
      } 
    }
  }
</script>

<style lang="scss">
 
</style>

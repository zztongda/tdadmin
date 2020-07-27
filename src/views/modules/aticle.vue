<template>
  <div class="about">
    <h1>文章管理</h1>

     <el-input type="text" v-model="input1" ref="getValue" style="width:240px" placeholder="请输入姓名"></el-input>
        <el-button type="primary"  @click="submitSearch()">搜索</el-button>
      <br>   <br> 
        
        <el-table :data="list" border style="width: 100%"  @selection-change="handleSelectionChange" @sort-change='sortChange'>
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
	        <el-table-column prop="time" label="日期" width="180" sortable></el-table-column>
            <el-table-column prop="name" label="姓名" width="180" sortable></el-table-column>
            <el-table-column prop="addr" label="地址"></el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                  <el-button type="primary" size="small" @click="studentEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button type="danger" size="small" @click="studentDelete(scope.row)">删除</el-button>    
                </template>
            </el-table-column>
	    </el-table>
		<el-pagination background 
			layout="prev, pager, next, sizes, total, jumper"
			:page-sizes="pageSizes"
			:page-size="pagesize"
			:total="totalCount"
			@current-change="handleCurrentChange"  
			@size-change="handleSizeChange" 
			>
		</el-pagination>
  </div>
</template>


	<script type="text/javascript">

		export default {

			data() {
				return {  
							list: [],
							pagesize: 5,
							currpage: 1,// 
			                pageSizes:[5, 10, 15, 20],// 
							totalCount:1,
							input1:''
						}
			},
			methods: {
				getlist(field = 'time', order ='desc',) {
                    let para = {
                        pagesize: this.pagesize,
                        currpage: this.currpage,
                    };
                    
                    var url = 'vue.php?c=admin&page='+para.currpage+'&limit='+para.pagesize+"&field="+field+"&order="+order
                    var name = this.$refs.getValue.value
                    if(name){
                        url += "&name="+name;
                    }
					this.http({url:url}).then(data => {

						this.list = data.data;

						this.totalCount=data.count;
					}).catch(err => {
						this.$alert('请求超时，刷新重试！')
					})
				},
				handleCurrentChange(cpage) {
					this.currpage = cpage;
					console.log(cpage);
					this.getlist();
				},
				handleSizeChange(psize) {
					this.pagesize = psize;
					this.currentPage=1
					console.log(psize);
					this.getlist();
                },
                handleSelectionChange(val) {
                    console.log(val)
                },
                sortChange(column) {
                    this.current_page = 1 // return to the first page after sorting
                    console.log(column)
                    var field = column.prop,
                        order;//排序 desc asc
                        if(column.order == 'descending'){
                            order = "desc";
                        }else{
                            order = "asc";
                        }
                    this.getlist(field,order)    
                    
                },
                submitSearch(){
                    this.getlist() 
                }
                
			},
			mounted() {
				this.getlist() 
			}
		}
	</script>
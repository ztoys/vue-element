<template>
	<div>
		<!-- 列表 -->
		<el-table highlight-current-row v-loading="listLoading" v-bind:data="company">
			<el-table-column prop="name" label="公司" sortable></el-table-column>
			<el-table-column prop="person" label="法人" width="100" sortable></el-table-column>
			<el-table-column prop="money" label="注册资本" sortable></el-table-column>
			<el-table-column prop="time" label="成立时间" sortable></el-table-column>
			<el-table-column prop="status" label="状态" sortable></el-table-column>

		</el-table>

	</div>
</template>

<script>
	import axios from 'axios';

	export default{
		data(){
			return {
				company:[
					{name:"珠海市泰润丝印有限公司",person:"杨祖文",money:"50万 人民币",time:"2005-02-02",status:"存续"},
					{name:"珠海市宝思达印刷有限公司",person:"陈文珍",money:"150万元人民币 人民币",time:"2005-01-17",status:"吊销，已注销"},
					{name:"珠海市森诚纸业有限公司",person:"孔贤珠",money:"50万 人民币",time:"1998-03-16",status:"存续"},
				],
				listLoading:false,
			}
		},
		methods:{
			getDate(){

			}
		},
		mounted() {
			axios({
				method:'post',
				url:"http://www.sxbao.com.cn/App/SelectBase",
				data:{select:"珠海"}
			}).then(function(data){
				console.log(data);
			})
		}
	}

</script>

<style>
	
</style>
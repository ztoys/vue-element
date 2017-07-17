<template>
	<div>
		<!-- 列表 --><!-- 固定表头：height="800" -->
		<el-table border  v-loading="listLoading" v-bind:data="company">
			<el-table-column prop="name" label="公司" sortable></el-table-column>
			<el-table-column prop="lawer" label="法人" width="100" sortable></el-table-column>
			<el-table-column prop="registeredcapital" label="注册资本" width="200" sortable></el-table-column>
			<el-table-column prop="licensingprior" label="成立时间" width="150" sortable></el-table-column>
			<el-table-column prop="status" label="状态"  sortable></el-table-column>
		</el-table>
		
		<el-col>
			<el-pagination layout="prev,pager,next" v-bind:total="100" v-on:current-change="currentChange"></el-pagination>
		</el-col>

	</div>
</template>

<script>
	import axios from 'axios';

	export default{
		data(){
			return {
				company:[],//列表数据
				listLoading:false,//加载动画
				total:100,//分页的总条数
				select:"珠海",//接口查询词语
			}
		},
		methods:{
			//获取列表
			getDate(){
				this.listLoading=true;
				var self = this;//暂存this,让内部函数能访问

				// 默认情况下，Axios序列化JavaScript对象的JSON。在application/x-www-form-urlencoded格式发送数据
				var qs=require('qs');
				axios.post(
					'https://bird.ioliu.cn/v1/?url=http://www.sxbao.com.cn/App/SelectBase',
					qs.stringify({'select':this.select})
				).then(function(data){
					self.company=data.data;
					self.listLoading=false;
				})
			},
			//分页page改变时触发
			currentChange(val){
				console.log(val);
				this.select="市";
				this.getDate();
			}
		},
		mounted() {
			this.getDate();
		},
	}

</script>

<style>
.el-pagination{
	padding:0;
	margin-top: 20px;
	text-align: right;
}
	
</style>
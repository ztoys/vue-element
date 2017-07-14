<template>
	<section class="form">
		<h2 class="title">Form表单</h2>

		<el-row>
			<label for="" class="label">姓名</label>
			<el-input v-model="name" placeholder="普通input框" ></el-input>
		</el-row>

		<el-row>
			<label for="" class="label">学历</label>
			<el-autocomplete v-model="education" placeholder="激活即列出输入建议" v-on:change="handleSelect" v-bind:fetch-suggestions="querySearch"></el-autocomplete>			
		</el-row>

		<el-row>
			<label for="" class="label">学年</label>
			<el-input-number v-model="work_num" v-bind:min="0" v-bind:max="10" style="width:auto;"></el-input-number>
		</el-row>

		<el-row>
			<label for="" class="label">性别</label>
			<el-radio class="radio" v-model="sex" label="男">男</el-radio>
			<el-radio class="radio" v-model="sex" label="女">女</el-radio>
			<el-radio disabled class="radio" v-model="sex" label="无">无</el-radio>
		</el-row>

		<el-row>
			<label for="" class="label">开关</label>
			<el-switch v-model="switch_value" on-text="开" off-text="关" on-color="#13ce66" off-color="#ff4949"></el-switch>
		</el-row>

		<el-row>
			<label for="" class="label">爱食</label>
			<el-select v-model="food" placeholder="请选择">
				<el-option v-for="item in options" v-bind:key="item.value" v-bind:label="item.label" v-bind:value="item.value"></el-option>
			</el-select>
		</el-row>

		<el-row>
			<label for="" class="label">地区</label>
			<el-radio-group v-model="radio">
				<el-radio-button label="北京" :disabled="true"></el-radio-button>
				<el-radio-button label="上海"></el-radio-button>
				<el-radio-button label="广州"></el-radio-button>
				<el-radio-button label="深圳"></el-radio-button>
			</el-radio-group>
		</el-row>

		<el-row>
			<label for="" class="label" style="float:left;margin-top:10px;">滑块</label>
			<div style="display:inline-block;width:800px;">
				<el-slider v-model="value1"></el-slider>
			</div>
		</el-row>

		<el-row>
			<label for="" class="label">技能</label>
			<!-- indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果 -->
			<el-checkbox v-bind:indeterminate="isIndeterminate" v-model="checkAll" v-on:change="handleCheckAllChange">全选</el-checkbox>
			<el-checkbox-group class="checkbox-group" v-model="checkedCities" v-on:change="handleCheckedCitiesChange">
				<el-checkbox v-for="city in cities" v-bind:label="city" v-bind:key="city">{{ city }}</el-checkbox>
			</el-checkbox-group>
		</el-row>

		<el-row>
			<label for="" class="label">搜索</label>
			<el-input placeholder="搜索" icon="search" v-model="search" v-bind:on-icon-click="searchClick"></el-input>
		</el-row>

		<el-row>
			<label for="" class="label">介绍</label>
			<el-input type="textarea" v-model="textarea" v-bind:autosize="{minRows:4,maxRows:8}" placeholder="自适应高度文本域"></el-input>
		</el-row>

		<el-row>
			<label for="" class="label">作品</label>
			<el-input v-model="input2" placeholder="请输入内容" style="width:500px;">
				<el-select v-model="input_select" slot="prepend" placeholder="请选择" class="el-select-works">
					<el-option label="PS" value="ps"></el-option>
					<el-option label="AI" value="ai"></el-option>
					<el-option label="Web" value="web"></el-option>
				</el-select>
				<el-button slot="append" icon="search" v-on:click="works"></el-button>
			</el-input>
		</el-row>

	</section>
</template>

<script>
const city=['PS', 'AI', 'Axure', 'AE'];
export default{
	data(){
		return {
			sex:"男",
			radio:"上海",
			isIndeterminate:true,
			checkAll:true,
			checkedCities: ['PS', 'Axure'],
        	cities: city,
        	name:"",
        	search:"",
        	textarea:"",
        	input2:"",
        	input_select:"",
        	education:"",
        	restaurants:[],
        	work_num:0,
        	food:"",
        	options:[
        		{value: '选项1',label: '黄金糕'},
        		{value: '选项2',label: '双皮奶'},
        		{value: '选项3',label: '蚵仔煎'},
        		{value: '选项4',label: '龙须面'},
        		{value: '选项5',label: '北京烤鸭'},
        	],
        	switch_value:true,
        	value1:10,
		};
	},
	methods:{
		handleCheckAllChange(event){
			this.checkedCities = event.target.checked ? city : [];
        	this.isIndeterminate = false;
		},
		handleCheckedCitiesChange(value){
			let checkedCount = value.length;
        	this.checkAll = checkedCount === this.cities.length;
        	this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
		},
		searchClick(event){
			alert(this.search);
			console.log(event);
		},
		works(){
			alert(this.input_select+"："+this.input2)
		},
		querySearch(queryString,cb){
			var restaurants=this.restaurants;
			var results=queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
			// 调用 callback 返回建议列表的数据
			cb(results);
		},
		createFilter(queryString){
			return(restaurant)=>{
				return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
			};
		},
		handleSelect(item){
			alert(item);
		},
		loadAll(){
			return [
				{"value":"高中"},
				{"value":"中专"},
				{"value":"大专"},
				{"value":"本科"},
				{"value":"硕士"},
				{"value":"博士"},
			];
		}
	},
	mounted(){
		this.restaurants=this.loadAll();
	}
}

</script>

<style>
	.title{
		margin-bottom:50px;
	}
	.label{
		margin-right:50px;
		font-size:13px;
	}
	.form .el-row{
		margin-bottom:50px;
	}
	.checkbox-group{
		display: inline-block;
		margin-left:20px;
	}
	.el-input{
		width: 200px;
	}
	.el-textarea{
		width: 500px;
		vertical-align: top;
	}
	.el-select-works .el-input{
		width: 110px;
	}
</style>
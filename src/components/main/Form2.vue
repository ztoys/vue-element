<template>
	<section class="form2">
		<h2 class="title">Form2</h2>

		<el-row>
			<label for="" class="label">日期</label>
			<el-date-picker v-model="value1" type="date" placeholder="选择日期" v-on:change="datepicker">
			</el-date-picker>
		</el-row>

		<el-row class="upload">
			<label for="" class="label">上传</label>
			<el-upload 
			  class="upload-img"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  list-type="picture-card"
			  :on-preview="handlePictureCardPreview"
			  :on-remove="handleRemove">
			  <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog v-model="dialogVisible" size="tiny">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
		</el-row>

		<el-row>
			<label for="" class="label">评分</label>
			<el-rate v-model="value2" v-bind:colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
		</el-row>

		<el-row>
			<label for="" class="label top">颜色</label>
			<el-color-picker v-model="color"></el-color-picker>
		</el-row>

		<el-row>
			<label for="" class="label top">进度</label>
			<el-progress type="circle" v-bind:percentage="100"></el-progress>
		</el-row>
	</section>
</template>

<script>
	
	export default{
		data(){
			return{
				value1:"",
				value2:0,
				dialogImageUrl:"",
				dialogVisible:false,
				color:"#20a0ff",
			}
		},
		methods:{
			handleRemove(file, fileList) {
			    console.log(file, fileList);
		    },
		    handlePictureCardPreview(file) {
		        this.dialogImageUrl = file.url;
		        this.dialogVisible = true;
		    },
		    datepicker(){
		    	//格式化日期
		    	this.value1=this.formatDate(this.value1);

		    	const h=this.$createElement;
		    	this.$notify({
		    		title:'成功',
		    		message:this.value1,
		    		type:'success'
		    	});
		    },
		    //格式日期
		    formatDate(date){
		    	var y = date.getFullYear();  
	    	    var m = date.getMonth() + 1;  
	    	    m = m < 10 ? '0' + m : m;  
	    	    var d = date.getDate();  
	    	    d = d < 10 ? ('0' + d) : d;  
	    	    return y + '-' + m + '-' + d; 
		    }
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
	.form2 .el-row{
		margin-bottom:50px;
	}
	
	.upload-img{
		display: inline-block;
	}
	.upload .label{
		vertical-align: top;
	}

	.el-rate{
		display: inline-block;
	}
	.label.top{
		vertical-align: top;
	}
</style>
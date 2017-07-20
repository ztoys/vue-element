<template>
	<el-row class="container">
		<!-- 顶部条 -->
		<div class="bar">
			<el-col :span="6" class="logo"><a class="logo-text" href="http://localhost:8081/"> ADMIN </a></el-col>
			<el-col :span="3" class="person">
				<el-dropdown>
					<span class="el-dropdown-link userinfo">LLL <img v-bind:src="this.personimg" alt=""></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided>退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</div>
		
		<!-- 内容 -->
		<el-col :span="24" class="main">
			<!-- 菜单 -->
			<div class="main-menu">
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
				    	<el-submenu :index="''+index" ><!-- ''+ 转成字符串 -->
					       <template slot="title"><i :class="item.icon"></i>{{ item.name }}</template>
					         <router-link v-for="children in item.children" :to="children.path"> 
					         	<el-menu-item :index="children.path">{{ children.name }}</el-menu-item>
					         </router-link> 
				    		
				    	</el-submenu>
					</template>
				</el-menu>
			</div>

			<section class="main-content">
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
			</section>

		</el-col>

		
	</el-row>

</template>

<script>

export default{
	data(){
		return {
			personimg:"https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=46eec6568e18367aa98978df1e728b68/4e4a20a4462309f766eda66d7a0e0cf3d6cad6cb.jpg",
		}
	},
	methods:{
		open1(){
			this.$message({
				showClose:true,
				message:"主页"
			});
		},
		open2(){
			this.$message({
				showClose:true,
				message:"这是一条成功消息",
				type:"success"
			});
		},
		open3(){
			this.$message({
				showClose:true,
				message:"这是一条警告消息",
				type:"warning"
			});
		},
		open4(){
			this.$message({
				showClose:true,
				message:"这是一条错误消息",
				type:"error"
			});
		},
		open5(){
			this.$message({
				showClose:true,
				message:"Vue介绍",
			})
		},
		handleOpen(key,keyPath){
			console.log(key,keyPath);
		},
		handleClose(key,keyPath){
			console.log(key,keyPath);
		}
	}
}

</script>

<style scoped>
	a{text-decoration: none;}
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
	.bar{
		background-color: #20A0FF;
		height: 60px;
		line-height: 60px;
		color:#FFF;
	}
	.logo{
		border-right:1px solid #FFF;
		height:70px;
		font-size:24px;
	}
	.logo-text{
		color:#FFF;
	}
	.person{
		float:right;
	}
	.person img{
		border-radius: 20px;
		width: 40px;
		height: 40px;
		vertical-align: middle;
		margin-left: 10px;
	}
	.userinfo{
		cursor: pointer;
		color: #FFF;
	}
	.main{
		display: flex;
		position: absolute;
		top:60px;
		bottom: 0px;
		overflow: hidden;
	}
	.main-menu{
		width: 240px;
		background: #eef1f6;
	}
	.main-content{
		flex:1;
		overflow-y:scroll;
		padding:20px;
		background: rgba(255,255,255,0.7);
		text-align: left;
	}

</style>
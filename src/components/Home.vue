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
				<el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
			    	<el-submenu index="1">
				       <template slot="title"><i class="el-icon-menu"></i>主页</template>
				       <el-menu-item-group title="分组1">
				         <!-- <template slot="title">分组一</template> -->
				         <router-link to="/"> 
				         	<el-menu-item index="1-1">Home</el-menu-item>
				         </router-link> 
				       </el-menu-item-group>
				       <el-menu-item-group title="静态页面">
						<router-link to="/form">
				         	<el-menu-item index="1-3">Form</el-menu-item>
				        </router-link>
				         <el-menu-item index="1-4">选项4</el-menu-item>
				       </el-menu-item-group>
			    	</el-submenu>

			    	<el-submenu index="2">
			    		<template slot="title"><i class="el-icon-document"></i>文档</template>
						<el-menu-item-group>
							<router-link to="/vuedoc"> 
			    				<el-menu-item index="2-1">Vue文档</el-menu-item>	
							</router-link>
							<router-link to="/elementdoc">
								<el-menu-item index="2-2">Element文档</el-menu-item>
							</router-link>
						</el-menu-item-group>
			    	</el-submenu>
			    	

			    	<el-menu-item index="3"><i class="el-icon-information"></i>信息</el-menu-item>

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
		height: 70px;
		line-height: 70px;
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
		top:70px;
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
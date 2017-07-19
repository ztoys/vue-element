<template>
	<section>
		<el-row>
			<el-tabs v-model="activeName" v-on:tab-click="handleClick">
				<el-tab-pane label="趣图" name="first" class="joke">
					<el-row v-bind:gutter="30">
						<el-col v-bind:span="6" v-for="(item,index) in joke.data" :xs="24" :sm="12" :md="8" :lg="6">
							<el-card ><!-- 卡片 -->
								<img :src="item.url" alt="" v-on:click="showDialogImg(item)">
								<div class="img-text" >
									<span>{{ item.content }}</span>
								</div>
							</el-card>
						</el-col>
					</el-row>
				</el-tab-pane>

				<el-tab-pane label="IP地址" name="second">
					<el-row :gutter="40" class="ipinfo">
						<el-col :span="8" >
							<div>
								<p>IP：</p>
								<p>{{ ip }}</p>
							</div>
						</el-col>
						<el-col :span="8" >
							<div>
								<p>地址：</p>
								<p>{{ iparea }}</p>
							</div>
						</el-col>
						<el-col :span="8" >
							<div>
								<p>运营商：</p>
								<p>{{ iplocation }}</p>
							</div>
						</el-col>
					</el-row>
				</el-tab-pane>

				<el-tab-pane label="音乐" name="third">
					<el-row>
						<ul>
							
							<li v-for="item in musiclist" @click="getMusic(item.id)">
								{{ item.name }}
							</li>
							
						</ul>
					</el-row>
				</el-tab-pane>
			</el-tabs>
		</el-row>
		
		<!-- 模态框 -->
		<el-dialog
			title=""
			:visible.sync="dialogVisible"
			
		>	
			<h3>{{ dialogImgText }}</h3>
			<h3 class="dialogTime">{{ dialogImgTime }}</h3>
			<img :src="dialogImgUrl" alt="">
			
		</el-dialog>
	</section>
</template>

<script>
 	import axios from 'axios'

	export default{
		data(){
			return {
				activeName:'first',
				joke:[],
				//趣图模模态框
				dialogVisible:false,
				dialogImgUrl:'',
				dialogImgText:'',
				dialogImgTime:'',
				//IP信息
				iparea:'',
				ip:'',
				iplocation:'',
				//音乐信息
				musiclist_name:'',
				musiclist_desc:'',
				musiclist:[]
			}
		},
		methods:{
			//标签页点击事件
			handleClick(tab,event){
				if(tab.index==2){
					//获取音乐列表
					this.getMusicList();
				}
			},
			getJoke(){
				var self=this;
				let qs=require('qs');
				//获取趣图
				axios.post(
					"https://bird.ioliu.cn/joke/rand",
					qs.stringify({pagesize:20})//发送数据
				).then(function(data){
					if(data.data.status.code==200){//请求成功时
						self.joke=data.data;
					}else{
						self.$notify.error({
							title:'错误',
							message:"获取趣图数据失败"
						})
					}
					
				});
			},
			//点击趣图,模态框载入数据
			showDialogImg(item){
				this.dialogImgUrl=item.url;
				this.dialogImgText=item.content;
				this.dialogImgTime=this.formatDate(item.unixtime);
				this.dialogVisible=true;
			},
			//时间戳格式话
			formatDate(date){
				return new Date(parseInt(date) * 1000).toLocaleString(); 
			},
			//获取音乐列表
			getMusicList(id){
				let self=this;
				let listid = id ? id : 396579713;
				axios.get("https://bird.ioliu.cn/netease/playlist?id="+listid).then(function(data){
					let info=data.data;
					if(info.code==200){//请求成功时
						self.musiclist=info.playlist.tracks;
					}else{
						self.$notify.error({
							title:'错误',
							message:"获取音乐列表数据失败"
						})
					}
				})
			},
			//获取音乐单曲
			getMusic(id){
				let self=this;
				let qs=require('qs');
				axios.get("https://bird.ioliu.cn/netease/song?id="+id).then(function(data){
					if(data.status==200){
						let url=data.data.data.mp3.url;
						window.open(url);
					}else{
						self.$notify.error({
							title:'错误',
							message:"获取音乐数据失败"
						})
					}
				})
			}
		},
		mounted(){
			//获取笑话
			this.getJoke();

			var self=this;
			var qs=require('qs');

			//获取IP地址
			axios.get("https://bird.ioliu.cn/ip").then(function(data){
				let info=data.data;
				if(info.status.code==200){//请求成功时
					self.iplocation=info.data.location;
					self.iparea=info.data.area;
					self.ip=info.data.ip;
				}else{
					self.$notify.error({
						title:'错误',
						message:"获取IP数据失败"
					})
				}
			});

		}
	}
</script>

<style>
	.joke img{
		width:100%;
		height: 240px;
	}
	.joke .img-text{
		margin-top: 5px;
		white-space:nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		color:#666;
		font-size: 12px; 
	}
	.joke .el-card{
		height: 300px;
		margin-bottom: 20px;
		cursor: pointer;
	}
	
	.el-dialog{
		text-align: center;
	}
	.el-dialog h3{
		text-align: center;
	}
	.el-dialog .dialogTime{
		margin:20px;
		font-size:13px;
		color: #999;
	}
	.el-dialog img{
		max-width:100%; 
	}
	
	.ipinfo .el-col div{
		height: 200px;
		border-radius: 10px;
		color:#999;
		border:1px solid #DDD;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
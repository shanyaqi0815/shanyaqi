<template>
	<div class="personal">
		<div class="container">
					<header>
				<div class="top">
					<div class="imgs" style="border:none">
						<img :src="member_avatar" v-if="this.condition">
						<img src="../assets/default.png" alt="" v-if="!(this.condition)">
					</div>
					<div class="user">
						<div class="user_name"  v-if="this.condition">{{ user_name }}</div>
						<div class="user_daima"  v-if="this.condition">
							<p>{{invitor_code}}</p>
							<p class="user_daima-center">邀请码</p>
						</div>
						<div v-if="!(this.condition)"  class="user_age">
							<p> <span @click="login"> 登录</span>/ <span @click="register">注册</span></p>
						</div>
					</div>
					<div class="icot">
						<i @click="information">
							<span class="icot_xiaoxi" v-if="xiaoxishow">{{xiaoxi}}</span>
							<img src="../assets/xinxi.png" alt="">
						</i>
						<span v-if="this.condition">
							<i class="" @click="Account" ><img src="../assets/center1.png"></i>
						</span>
						<span v-if="!(this.condition)">
							<i class="" @click="Account" ><img src="../assets/center1.png"></i>
						</span>
						
					</div>
				</div>
				<div class="bot">
					<div class="bot_kuai" @click="shoucang(0)">
						<p class="shuliang"  v-if="this.condition">{{favorites}}</p>
						<p  v-if="!(this.condition)">--</p>
						<p class="name">收藏夹</p>
					</div>
					
					<div class="bot_kuai" @click="shoucang(1)">
						<p class="shuliang"  v-if="this.condition">{{history}}</p>
						<p  v-if="!(this.condition)">--</p>
						<p class="name">足迹</p>
					</div>
					<div class="bot_kuai" @click="shoucang(2)">
						<p class="shuliang"  v-if="this.condition">{{red}}</p>
						<p  v-if="!(this.condition)">--</p>
						<p class="name">卡包</p>
					</div>
				</div>
			</header>
			<div class="center1"  v-if="this.condition" @click="myPurse()">
				<div class="wallet">
					<i><img
							src="../assets/center3.png"
							alt=""
						></i>
					<span>账户余额</span>
				</div>
				<div class="wallet_btn">
					<p>{{balance}}</p>
					<i><img
							src="../assets/center2.png"
							alt=""
						></i>
				</div>
			</div>
			<div class="center1"  v-if="!this.condition" @click="myPurse()">
				<div class="wallet">
					<i><img
							src="../assets/center3.png"
							alt=""
						></i>
					<span>账户余额</span>
				</div>
				<div class="wallet_btn">
					<p>--</p>
					<i><img
							src="../assets/center2.png"
							alt=""
						></i>
				</div>
			</div>
			<div class="order_form">
				<div class="order_top">
					<p>我的订单</p>
					<p @click="dingdan"  v-if="this.condition">查看全部订单</p>
					<p @click="dingdan1"  v-if="!(this.condition)">查看全部订单</p>

					<img
						src="../assets/center4.png"
						alt=""
					>
				</div>
				<div class="order_btn">
					<div
						class="order_kuai"
						@click="tab(i.id)"
						:key="i.id"
						v-for="i in arr"
					>
						<img
							:src="i.img"
							alt=""
						>
						<p>{{i.name}}</p>
					</div>
				</div>
			</div>
			<div class="classify">
				<div class="classify_cen">
					<div
						class="list"
						@click="kaidian"
					>
						<img
							src="../assets/center10.png"
							alt=""
						>
						<p>商家入驻</p>
						<img
							class="jiantou"
							src="../assets/jiantou.png"
							alt=""
						>
					</div>
					<div
						class="list"
						@click="shouyi"
					>
						<img
							src="../assets/center11.png"
							alt=""
						>
						<p>我的收益</p>
						<img
							class="jiantou"
							src="../assets/jiantou.png"
							alt=""
						>
					</div>
					<div class="list">
						<img
							src="../assets/center12.png"
							alt=""
						>
						<p @click="clickService()">我的服务</p>
						<img class="jiantou"	src="../assets/jiantou.png"	alt="">
					</div>
					<div class="list" @click="MyIntegral">
						<img
							src="../assets/center13.png"
							alt=""
						>
						<p>我的积分</p>
						<img
							class="jiantou"
							src="../assets/jiantou.png"
							alt=""
						>
					</div>
					<div class="list" @click="MyCustomer ">
						<img
							src="../assets/center13.png"
							alt=""
						>
						<p>客服与反馈</p>
						<img
							class="jiantou"
							src="../assets/jiantou.png"
							alt=""
						>
					</div>
					<!-- <div class="list" >
						<img
							src="../assets/center13.png"
							alt=""
						>
						<p @click="MyInvoice">我的发票</p>
						<img
							class="jiantou"
							src="../assets/jiantou.png"
							alt=""
						>
					</div> -->
				</div>				
			</div>
			<foot>
				<span slot="four">
					<img src="../assets/foot/zu71.png" />
					<p style="color:#EE753C">我的</p>
				</span>
			</foot>
			<mt-datetime-picker
				ref="box"
				v-model="pickerVisible"
				type="date"
				year-format="{value} 年"
				month-format="{value} 月"
				date-format="{value} 日">
			</mt-datetime-picker>
		</div>
		<!-- <div class="perGuide"></div> -->
	</div>
</template>
<script>
import { MessageBox ,DatetimePicker} from 'mint-ui';
import foot from "../components/foot"
import request from "../common/request"
import img1 from "../assets/center5.png"
import img2 from "../assets/center6.png"
import img3 from "../assets/center7.png"
import img4 from "../assets/center8.png"
import img5 from "../assets/center9.png"
import img6 from "../assets/default.png"


export default {
	name: "personal",
	created () {
		// this.init()
		this.check()
	
	},
	components:{
		DatetimePicker ,
	},
	data () {
		return {
			pickerVisible:"",
			user_name: "",
			invitor_code:"",//邀请码 邀请码invitor_code
			favorites: 0,
			history: 0,
			red: 0,
			balance: 1.00,
			member_id: '',
			arr: [
				{ id: 1, name: "待付款", img: img1 },
				{ id: 2, name: "待开展", img: img2 },
				{ id: 3, name: "待完结", img: img3 },
				{ id: 4, name: "评价", img: img4 },
				{ id: 5, name: "退款/售后", img: img5 },
			],
			condition: false,
			isHasInfo: false,
			xiaoxishow:false,
			xiaoxi:"",
			member_avatar: ''
			

		}
	},
	methods: {
		box(){
			this.$refs.box.open()
		},
		init () {							
			if(this.$store.state.messageCount.data.data.count){
				this.xiaoxi = this.$store.state.messageCount.data.data.count
				this.xiaoxishow = true
			}
			let params = {
				member_id: this.$store.state.index.data.data.member_info.member_id
			}
			let This = this
			this.member_id = params.member_id
			request.AJAX(this.$AjaxUrl.userIndex, params, "userIndex", This).then(() => {
				This.user_name = This.$store.state.userIndex.data.data.member_info.member_name
				This.favorites = This.$store.state.userIndex.data.data.member_info.favorites_count
				This.history = This.$store.state.userIndex.data.data.member_info.history_count
				This.red = This.$store.state.userIndex.data.data.member_info.red_count
				This.balance = This.$store.state.userIndex.data.data.member_info.available_predeposit;
				This.invitor_code = This.$store.state.userIndex.data.data.member_info.inviter_code
				This.member_avatar= This.$store.state.userIndex.data.data.member_info.member_avatar

				if (this.member_avatar == '') {
					this.member_avatar = img6
				}
			})
		},
		information(){
			this.$router.push('/informations')
		},
		kaidian () {
			this.$router.push('/freeOpenShop')
		},
		myPurse(){
			if (this.$store.state.index == undefined) {
			MessageBox.confirm("您好，您还未登录账号，请登录账号", "提示").then(action => {
			if (action == "confirm") {
				this.$router.push("/Password_register")
			}
			}).catch(err => {
				if (err == 'cancel') {
					this.$router.push("/personal")
				}
			})		
			} else {
				this.$router.push({name:"myPurse"})
			}			
		},
		dingdan () {
			this.$router.push({ name: 'management', params: { member_id:this.member_id} })

		},
		dingdan1 () {
			if (this.$store.state.index == undefined) {
				MessageBox.confirm("您好，您还未登录账号，请登录账号", "提示").then(action => {
				if (action == "confirm") {
					this.$router.push("/Password_register")
				}
				}).catch(err => {
					if (err == 'cancel') {
						this.$router.push("/personal")
					}
				})		
			}

		}, 
		shouyi () {		
			if (this.$store.state.index == undefined) {
				MessageBox.confirm("您好，您还未登录账号，请登录账号", "提示").then(action => {
			if (action == "confirm") {
				this.$router.push("/Password_register")
			}
			}).catch(err => {
				if (err == 'cancel') {
					this.$router.push("/personal")
				}
			})		
			} else {
			this.$router.push('/MyBenefits')

			}			
		},
		tab (i) {
			if (this.$store.state.index == undefined) {
				MessageBox.confirm("您好，您还未登录账号，请登录账号", "提示").then(action => {
					if (action == "confirm") {
						this.$router.push("/Password_register")
					}
					}).catch(err => {
						if (err == 'cancel') {
							this.$router.push("/personal")
						}
					})
			}
			else{
				if(i<= 3){
					this.$router.push({ name: 'management', params: { paicheNo: i + 1 ,member_id:this.member_id} })
				}
				if (i == 4) {
					this.$router.push('/myEvaluation')
				}
				if (i == 5) {
					this.$router.push({ name: 'AfterSaleReturns', params: { member_id:this.member_id} })
				}
			}
		},
		Account () {
			if(this.$store.state.index == undefined){
				MessageBox.confirm("您好，您还未登录账号，请登录账号","提示").then(action =>{
					if(action == "confirm"){
						this.$router.push("/Password_register")
					}
				}).catch(err => {
					if(err =='cancel'){
						this.$router.push("/")
					}
				})
				return
			}
			this.$router.push('/personalSetting')
		},
		check () {
			console.log(this.condition)
			if (this.$store.state.index != undefined ) {
				this.isHasInfo =   this.$store.state.index.data.data.member_info
				if (this.isHasInfo) {
					this.condition = true
					this.init()
				}
			}
			

		},
		login () {	
			this.$router.push("/Password_register")
				
		},
		register () {
			this.$router.replace('/Mobile_register')
		},
		shoucang(a){
			var index = false; //判断用户是否登录
			if(this.$store.state.index != undefined){
				index = true
			}else{
				this.dingdan1()
			}
			if(a == 0 && index){  //收藏夹
				this.$router.push("/myCollection")
			}else if(a == 1 && index){   //足迹
				
			}else if(a == 2 && index){   //卡包			
				this.$router.push({path:"/goodscoupon",query:{manbum:"3"}})
			}
			
		},
		MyIntegral() { // 我的积分
			if (this.$store.state.index == undefined) {
				MessageBox.confirm("您好，您还未登录账号，请登录账号", "提示").then(action => {
				if (action == "confirm") {
					this.$router.push("/Password_register")
				}
				}).catch(err => {
					if (err == 'cancel') {
						this.$router.push("/personal")
					}
				})		
			} else {
				this.$router.push({name:"MyIntegral"})
			}			
		},
		MyCustomer(){//我的客服
			var a =  "https://horizou.udesk.cn/im_client/"	
			window.location.href=a
		},
		cope(){
			console.log(1)

		},
		MyInvoice () {
			// if (this.$store.state.index == undefined) {
			// 	MessageBox.confirm("您好，您还未登录账号，请登录账号", "提示").then(action => {
			// 		if (action == "confirm") {
			// 			this.$router.push("/Password_register")
			// 		}
			// 		}).catch(err => {
			// 			if (err == 'cancel') {
			// 				this.$router.push("/personal")
			// 			}
			// 		})		
			// } else {
				// this.$router.push({name:"MyInvoice"})
			// }
			console.log(this.$store.state.index.data.data.code)	
		},
		clickService(){
			this.$router.push("/complaint");
		}
	},
	components: {
		foot
	}
}
</script>
<style scoped lang="less">
.personal {
	width: 100%;
	height: auto;
	font-family: Source Han Sans CN;
	background-color: #f5f5f5;
	margin-bottom: 60px;
	header {
		width: 100%;
		height: 374/2px;
		background-color: #fff;
		margin-bottom: 9px;
		.top {
			width: 100%;
			height: 374/4px;
			overflow: hidden;
			.imgs {
				width: 60px;
				height: 60px;
				border: 1px dashed #000;
				margin: 28px 0 0px 15px;
				float: left;
				img {
					width: 60px;
					border-radius: 30px;
					height: 60px;
				}
			}
			.user {
				width: 140px;
				height: 60px;
				float: left;
				margin:0.706667rem 0 0px 15px;
				.user_name {
					font-size: 36/2px;
					line-height: 30px;
					font-weight: 400;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.user_age{
					font-size: 18px;
					line-height: 30px;
					font-weight: 400;
					margin-top: 16px;
				}
				.user_daima {
					line-height: 30px;
					font-size: 12px;
					p:nth-child(1) {
						color: rgba(136, 136, 136, 1);
						float: left;
						margin-right: 12px;
						width: 40px;
					}
					p:nth-child(2) {
						width: 130/2px;
						margin-top: 3px;
						height: 36/2px;
						line-height: 36/2px;
						background: rgba(238, 117, 60, 1);
						opacity: 1;
						float: left;
						border-radius: 18/2px;
						color: #fff;
						padding: 3px 9px;
						-webkit-transform: scale(0.8);
					}
				}
			}
			.icot {
				width: 100px;
				height: 50px;
				float: right;
				margin-top: 36px;
				text-align: right;
				i {
					font-size: 18px;
					margin-right: 16px;
					width: 42/2px;
					height: 42/2px;
					display: inline-block;
					position: relative;
					
				.icot_xiaoxi{
					position: absolute;
					top: -0.08rem;
					left: 0.346667rem;
					font-size: 0.266667rem;
					border-radius: 0.8rem;
					background-color: red;
					text-align: center;
					transform: scale(0.8);
					width: 0.4rem;
					height: 0.4rem;
					padding: 0.04rem;
					color: #fff;
				}
					img {
						width: 100%;
					}
				}
			}
		}
		.bot {
			width: 100%;
			height: 374/4px;
			.bot_kuai {
				width: 30.8%;
				height: 374/4px;
				text-align: center;
				overflow: hidden;
				display: inline-block;
				font-weight: 400;
				.shuliang {
					font-size: 15px;
					margin: 28px 0px 8px 0px;
					background: rgba(255, 255, 255, 1);
				}
				.name {
					font-size: 12px;
					color: rgba(28, 28, 28, 1);
				}
			}
		}
	}
	.center1 {
		width: 100%;
		height: 75px;
		background-color: #fff;
		margin-bottom: 9px;
		.wallet {
			width: 100%;
			height: 38px;
			line-height: 38px;
			i {
				width: 32/2px;
				height: 32/2px;
				display: inline-block;
				margin: 11px 10px 0 16px;
				img {
					width: 100%;
					vertical-align: top;
				}
			}
			span {
				font-size: 14px;
				vertical-align: top;
			}
		}
		.wallet_btn {
			width: 100%;
			height: 37px;
			line-height: 37px;
			p {
				margin: 0 0 0 16px;
				line-height: 37px;
				font-size: 18px;
				font-weight: 500;
				float: left;
			}
			i {
				width: 36/2px;
				height: 32/2px;
				display: inline-block;
				margin: 11px 10px 0 16px;
				float: right;
				img {
					width: 100%;
					vertical-align: top;
				}
			}
		}
	}
	.order_form {
		width: 100%;
		height: 120px;
		background-color: #fff;
		margin-bottom: 9px;
		.order_top {
			height: 96/2px;
			width: 688/2px;
			margin: 0 auto;
			position: relative;
			border-bottom: 1px solid #f5f5f5;
			p {
				font-size: 16px;
				line-height: 96/2px;
			}
			p:nth-child(1) {
				font-weight: bold;
				float: left;
			}
			p:nth-child(2) {
				font-size: 12px;
				color: rgba(136, 136, 136, 1);
				float: right;
				margin-right: 12px;
			}
			img {
				width: 5px;
				height: 9px;
				display: inline-block;
				position: absolute;
				top: 20px;
				right: 0px;
			}
		}
		.order_btn {
			width: 688/2px;
			height: 142/2px;
			margin: 0 auto;
			.order_kuai {
				width: 20%;
				text-align: center;
				float: left;
				// margin-top: 5px;
				img {
					width: 39/2px;
					height: 36/2px;
					display: inline-block;
				}
				p {
					font-size: 13px;
					margin-top: 5px;
				}
			}
		}
	}
	.classify {
		width: 100%;
		margin: 0 auto;
		background-color: #fff;
		height: auto;
		margin-bottom: 9px;
		.classify_cen {
			width: 688/2px;
			margin: 0 auto;
			.list {
				width: 100%;
				height: 44px;
				line-height: 44px;
				img:nth-child(1) {
					width: 36/2px;
					height: 33/2px;
					display: inline-block;
					float: left;
					margin: 14px 21px 0 0;
				}
				p {
					font-size: 14px;
					float: left;
					font-weight: bold;
				}
				.jiantou {
					width: 12/2px;
					height: 22/2px;
					display: inline-block;
					float: right;
					margin: 16px 21px 0 0;
				}
			}
		}
	}
	.perGuide {
		width: 100%;
		height: 103%;
		position: absolute;
		top: -20px;
		background-color: rgba(0,0,0,.6);
	}
}
.user_daima-center{
	text-align: center;
}
</style>

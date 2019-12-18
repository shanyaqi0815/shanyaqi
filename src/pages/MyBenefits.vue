<template>
	<div class="beij">
		<div class="box">
			<div class="layout">
				<div class="layout-txt">
					<p class="layou-wz">账户余额（元）</p>
					<p class="layou-wenz">{{ available_yj }}</p>
				</div>
				<div class="layou-tix">
					<div class="layou-wen">
						<p>提现</p>
					</div>
					<p class="layou-wenz1">累计收益 + {{ total_income }}</p>
				</div>
			</div>
		</div>
		<div class="box-one">
			<div class="layout-one">
				<div class="one-tp">
					<img
						src="../assets/scoped/MyBenefits02.png"
						alt=""
					>
					<p>我的团队</p>
				</div>
				<div class="one-ren">
					<p>{{ count }} 人</p>
					<img
						src="../assets/scoped/sert4.png"
						alt=""
					>
				</div>
			</div>
		</div>
		<div class="box-two">
			<div class="layout-two">
				<div class="two">
					<p class="tow-i"></p>
					<p class="two-txt">账单明细</p>
				</div>
				<p class="two-wz" @click="goRuleDes">规则说明</p>
			</div>
		</div>
		<div class="box-three">
			<div
				class="layout-three"
				v-for="list in lists"
				:key="list.lg_id"
			>
				<div class="three">
					<p class="three-txt">201909月佣金</p>
					<p class="three-txt1">收益已到账</p>
				</div>
				<div class="three-web">
					<p class="three-shuz"> +{{ list.amount  }}</p>
					<p class="three-data">{{ list.add_time }}</p>
				</div>
			</div>
		</div>

		<div class="chun">

		</div>
		<div class="box-fond">
			<div class="box-button">邀请好友得收益</div>
		</div>
	</div>
</template>

<script>
import request from "../common/request"
export default {
	name: "beij",
	created () {
		this.getBenefitsData()
	},
	data () {
		return {
			total_income: "",
			available_yj:'',
			count: '',
			lists: ''


		}
	},
	methods: {
		getBenefitsData () {
			let This = this
			let params = {
				member_id: this.$store.state.index.data.data.member_info.member_id
			}
			request.AJAX(this.$AjaxUrl.myBenefits, params, "myBenefits", This).then(() => {
				this.count = This.$store.state.myBenefits.data.data.count
				this.lists = This.$store.state.myBenefits.data.data.list
				this.total_income = This.$store.state.myBenefits.data.data.total_income
				this.available_yj = This.$store.state.myBenefits.data.data.available_yj

				// This.available_predeposit = This.$store.state.myBenefits.data.data.available_predeposit
				// This.count = This.$store.state.myBenefits.data.data.count
				// This.total_income = This.$store.state.myBenefits.data.data.total_income
				// This.lists = This.$store.state.myBenefits.data.data.list

			})
		},
		goRuleDes () {
	        this.$router.push('/benefitRuleDes');
		}

	}
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.beij {
	background-color: #f5f5f5;
	height: 100vh;
	font-size: 14px;
	padding-top: 10px;
}
.box {
	width: 343px;
	height: 127px;
	margin: 0 auto;
	background: url('../assets/scoped/MyBenefits01.png') no-repeat center center;
	background-size: 343px 127px;
	margin-bottom: 16px;
}
.layout {
	display: flex;
	justify-content: space-between;
	padding-top: 30px;
	padding-left: 21px;
}
.layou-wz {
	color: #fff;
	margin-bottom: 16px;
}
.layou-wenz {
	color: #fff;
	font-size: 30px;
}
.layou-tix {
	/* 文本对齐方式 */
	text-align: right;
	margin-right: 10px;
}
.layou-wen {
	width: 99px;
	display: flex;
	justify-content: flex-end;
	padding-top: 7px;
}
.layou-wen p {
	color: #ee753c;
	width: 60px;
	height: 24px;
	text-align: center;
	line-height: 24px;
	background-color: #fff;
	margin-bottom: 16px;
	border-radius: 24px;
	font-size: 12px;
}
.layou-wenz1 {
	font-size: 12px;
	color: #fff;
}
.box-one {
	width: 343px;
	height: 44px;
	margin: 0 auto;
	background-color: #fff;
	margin-bottom: 30px;
}
.layout-one {
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.one-tp {
	display: flex;
	align-items: center;
	margin-left: 16px;
}
.one-tp img {
	width: 21px;
	height: 18px;
	margin-right: 10px;
}
.one-ren {
	display: flex;
	align-items: center;
}
.one-ren img {
	width: 6px;
	height: 11px;
	margin-right: 10px;
	margin-left: 10px;
}
.box-two {
	width: 343px;
	margin: 0 auto;
	margin-bottom: 16px;
}
.layout-two {
	display: flex;
	justify-content: space-between;
}
.tow-i {
	width: 2px;
	height: 14px;
	background-color: #ee753c;
	margin-right: 6px;
}
.two {
	display: flex;
	align-items: center;
}
.two-wz {
	color: #8d8d8d;
}
.box-three {
	width: 343px;
	height: auto;
	margin: 0 auto;
	background-color: #fff;
	margin-bottom: 10px;
}
.layout-three {
	padding-top: 16px;
	padding-left: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.three-txt1 {
	margin-top: 8px;
	font-size: 12px;
	color: #8d8d8d;
}
.three-shuz {
	text-align: right;
	margin-bottom: 8px;
	font-size: 16px;
	color: #ee753c;
}
.three-data {
	color: #8d8d8d;
}
.three-web {
	margin-right: 16px;
}
.box-button {
	width: 343px;
	height: 44px;
	margin: 0 auto;
	background-color: #ee753c;
	color: #fff;
	text-align: center;
	line-height: 44px;
	border-radius: 44px;
	font-size: 16px;
	/* margin-top: 100px; */
}
.box-fond {
	width: 100vw;
	height: 75px;
	background-color: #fff;
	position: fixed;
	bottom: 0;
	left: 0;
	padding-top: 17px;
}
.three-shuz1 {
	color: black;
}
.chun {
	height: 74px;
}
</style>
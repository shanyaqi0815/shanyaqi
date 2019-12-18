<template>
	<div class="management">
		<div class="box">
			<header>
				<img
					@click="fanhui"
					src="../assets/management/management2.png"
					alt=""
				>
				<h2>订单跟踪</h2>
				<img
					src="../assets/management/management1.png"
					alt=""
				>
			</header>
			<div class="tab">
				<mt-navbar v-model="selected">
					<mt-tab-item id="0"  @click.native="getOrderLists()">全部</mt-tab-item>					
					<!-- <mt-tab-item id="1"  @click.native="getOrderLists('0')">已取消</mt-tab-item> -->
					<mt-tab-item id="2"  @click.native="getOrderLists('10')">待付款</mt-tab-item>
					<mt-tab-item id="3"  @click.native="getOrderLists('20')">待服务</mt-tab-item>
					<mt-tab-item id="4"  @click.native="getOrderLists('30')">待完结</mt-tab-item>
					<mt-tab-item id="5"  @click.native="getOrderLists('40')">待评价</mt-tab-item>
				</mt-navbar>

				<!-- tab-container -->
				<mt-tab-container v-model="selected">
					<mt-tab-container-item id="0">
						<manage :lists = "lists"	:zhuangtai="true">

						</manage>
					</mt-tab-container-item>
					<mt-tab-container-item id="1">
						<manage :lists = "lists"	:zhuangtai="true">
						
						</manage>
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
						<manage :lists = "lists"	:zhuangtai="true">
												
						</manage>
					</mt-tab-container-item>
					
					<mt-tab-container-item id="3">
						<manage
							:lists = "lists"							
							:zhuangtai="true"
						>
							
						
						</manage>
					</mt-tab-container-item>
					<mt-tab-container-item id="4">
						<manage
							:lists = "lists"							
							:zhuangtai="true"
						>
							
						</manage>
					</mt-tab-container-item>
					<mt-tab-container-item id="5">
						<manage
							:lists = "lists"						
							:zhuangtai="false"
						>
							
						</manage>
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
		</div>
	</div>
</template>

<script>
import manage from "../components/management"
import { Navbar, TabItem } from 'mint-ui';
import request from "../common/request"
export default {
	name: "management",
	data () {
		return {
			selected: "1",
			memberId: '',
			lists: []
		}
	},
	components: {
		manage
	},
	methods: {
		fanhui () {
			this.$router.go(-1)
		},
		getOrderLists (s) {
			
			let This = this
			this.memberId = this.$store.state.index.data.data.member_info.member_id
			let params = {
				member_id: this.memberId,
				state:s

			};
			request.AJAX(this.$AjaxUrl.orderLists, params, "orderLists", This).then(() => {
				this.lists = This.$store.state.orderLists.data.data.list

			})

		},
		
	},
	created () {
		this.getOrderLists()
		// if (this.$route.params.paicheNo) {
		// 	this.selected = String(this.$route.params.paicheNo)
		// }

	}
}
</script>

<style scoped lang="less">
.management {
	width: 100%;
	min-height: 100vh;
	background-color: #f5f5f5;
	.box {
		width: 100%;
		background-color: #fff;
		line-height: 44px;
		header {
			width: 718/2px;
			height: 44px;
			margin: 0 auto;
			position: relative;
			border-bottom: 1px solid #f5f5f5;
			img {
				width: 36/2px;
				display: inline-block;
				height: 32/2px;
				float: left;
				margin-top: 12px;
			}
			h2 {
				width: 100px;
				font-size: 36/2px;
				margin: 0 auto;
				font-weight: 400;
				text-align: center;
				color: rgba(12, 12, 12, 1);
			}
			img:nth-child(3) {
				width: 36/2px;
				position: absolute;
				height: 36/2px;
				right: 16px;
				top: 0px;
			}
		}
		.tab /deep/ .mint-tab-item {
			margin-bottom: 0;
			font-size: 14px;
			color: #000;
		}
		.tab /deep/.is-selected {
			border-bottom: 1px solid rgba(238, 117, 60, 1);
			color: rgba(238, 117, 60, 1);
		}
	}
}
</style>

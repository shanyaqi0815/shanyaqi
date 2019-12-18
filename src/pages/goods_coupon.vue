<template>
	<div class="goods_coupon">
		<div class="tabswitch">
			<mt-navbar v-model="selected">
				<mt-tab-item id="1" ><span @click="test1">平台优惠券</span></mt-tab-item>
				<mt-tab-item id="2"><span  @click="test">商家优惠券</span></mt-tab-item>
				<mt-tab-item id="3"><span>卡包</span></mt-tab-item>
			</mt-navbar>
		</div>

		<div class="contain">
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="notice_fication">
						<unused_coupon
							:key="list.id"
							v-for="list in lists"
							:list="list"
							:vid="vid"
						></unused_coupon>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="notice_fication">
						<unused_coupon
							:key="list.id"
							v-for="list in lists"
							:list="list"
							:vid="vid"
						></unused_coupon>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<div class="notice_fication">
						<div class="layout-one">
							<div class="info">
								<img
									src="../assets/ptimg1.png"
									alt=""
								>
								<div class="info1">
									<p>爱奇艺30天会员5折卡</p>
								</div>

							</div>

						</div>
						<div class="layout-one">
							<div class="info">
								<img
									src="../assets/ptimg2.png"
									alt=""
								>
								<div class="info1">
									<p>腾讯30天会员5折卡</p>
								</div>

							</div>

						</div>
						<div class="layout-one">
							<div class="info">
								<img
									src="../assets/ptimg3.png"
									alt=""
								>
								<div class="info1">
									<p>优酷30天会员5折卡</p>
								</div>

							</div>

						</div>
						<div class="layout-one">
							<div class="info">
								<img
									src="../assets/ptimg4.png"
									alt=""
								>
								<div class="info1">
									<p>星巴克30天会员5折卡</p>
								</div>

							</div>

						</div>
						<div class="layout-one" @click="clickImg()">
							<div class="info">
								<img
									src="../assets/ptimg5.png"
									alt=""
								>
								<div class="info1">
									<p>肯德基30天会员5折卡</p>
								</div>

							</div>

						</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>

	</div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
import unused_coupon from '../components/unused_coupon'
import request from "../common/request"

export default {
	name: 'goods_coupon',
	created () {
		if(this.$route.query.manbum != undefined){
			this.selected = String(this.$route.query.manbum)
		}
		
		this.getGoodsCoupon(0);

	},
	data () {
		return {
			selected: '1',
			isPlatFam: true,  // 优惠券是否是平台
			isOther: false,   // 优惠券是否是商家
			isExpired: false, // 是否是过期优惠券
			lists: [],
			vid: ''
		}
	},
	methods: {
		checkPlatfarm () {
		},
		getGoodsCoupon (vid) {
			this.vid = vid
			let This = this
			let params = {
				vid: vid,
			}
			request.AJAX(this.$AjaxUrl.redListByVid, params, "redListByVid", This).then(() => {	
				if(vid == 0){
					this.lists = []
					This.lists = This.$store.state.redListByVid.data.data.list;
					console.log(this.lists)
				}else{
					this.lists = []
					This.lists = This.$store.state.redListByVid.data.data.list;
				}
				
			})
		},
		test() {
			this.getGoodsCoupon(1)

		},
		test1(){
			this.getGoodsCoupon(0)
		},
		clickImg(){
			this.$router.push('/Complaint')
		}
	},
	components: {
		unused_coupon
	}

}
</script>

<style lang="less" scoped>
.goods_coupon {
	background: #f5f5f5;
	width: 100%;
	.tabswitch {
		width: 100%;
		height: 50px;
		background: #ffff;
	}
}
.goods_coupon /deep/ .mint-navbar .mint-tab-item.is-selected {
	border-bottom: 2px solid orange;
	font-size: 16px;
	color: orange;
}
.goods_coupon /deep/ .mint-navbar .is-selected span {
	color: orange;
}
.contain {
	.notice_fication {
		margin-top: 10px;
		background: #f5f5f5;
		width: 100%;
		.layout-one {
			height: 94px;
			display: flex;
			align-items: center;
			background-color: #fff;
			margin-bottom: 20px;
			justify-content: space-between;
			.info {
				display: flex;
				align-items: center;
				margin-left: 16px;
				img {
					margin-right: 10px;
				}
				.info1 {
					p {
						font-size: 16px;
					}
				}
			}
		}
	}
	.goods_coupon /deep/ .mint-tab-item.is-selected {
		border-bottom-color: orange;
	}
	.goods_coupon /deep/ .mint-navbar .is-selected span {
		color: orange;
	}
}
</style>

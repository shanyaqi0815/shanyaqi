<template>
	<div :class="{unused_coupon: true, localPlatfarm: platFam.isPlatFam, otherPlatfarm: platFam.isOther, hasExpired: platFam.isExpired}">
		<!-- 优惠券金额 -->
		<coupon_price :list="list"></coupon_price>
		<div class="right_des">
			<div class="top">
				<span :class="{localPlatfarm: platFam.isPlatFam, otherPlatfarm: platFam.isOther, hasExpired: platFam.isExpired}">{{ list.red_title }}</span>
				<span>海云舟全平台优惠劵</span>
				<span v-if=" !list.redinfo_together ">不可与其他优惠一起使用</span>
				<span v-if="list.redinfo_together ">允许使用多张 </span>
				<div class="bottom">
					<p>使用期限</p>
					<p>{{ list.redinfo_start }} - {{ list.redinfo_end }}</p>
					<p	:class="{ localPlatFont: platFam.isPlatFam, otherPlatfarmFont: platFam.isOther}"
						:style="isShow"
					>立即使用</p>
					<img
						:class="{expired:platFam.isExpired}"
						:style="isExpiredImg"
						src="../assets/evaluate/expired.png"
					>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
import coupon_price from '../components/coupon_price.vue'
import request from "../common/request"
export default {
	name: 'unused_coupon',
	props: ['vid', 'list'],
	components: { coupon_price },
	created() {
		this.checkPlatfarm()
	},
	data () {
		return {
			platFam :{
				isPlatfam: true,
				isOther: false,
				isExpired: false,
			},			
			isShow: { display: 'display' },
			isExpiredImg: { display: 'none' },
			info:''
		}
	},
	methods: {
		checkPlatfarm () {
			if (this.vid == 0) {
				this.platFam.isPlatFam = true // 平台
			} 
			if (this.vid == 1) {
				this.platFam.isOther = true  // 店铺
			}
			var timestamp = Date.parse(new Date());
			var coupontime = Date.parse(this.list.redinfo_end);
			if ( coupontime < timestamp ) {
				this.platFam.isExpired = true // 过期

			}
		}
	}
}
</script>

<style lang="less" scoped>
.unused_coupon {
	width: 686px/2px;
	height: 105px;
	margin: 0 auto;
	background: #ffeb3b4f;
	margin-bottom: 10px;
}
.localPlatfarm {
	background: linear-gradient(
		90deg,
		rgba(238, 117, 60, 1) 0%,
		rgba(255, 146, 94, 1) 100%
	);
	color: #fff;
	font-size: 12px;
}
.otherPlatfarm {
	background: linear-gradient(
		90deg,
		rgba(233, 51, 64, 1) 0%,
		rgba(234, 73, 64, 1) 100%
	);
}
.localPlatFont {
	color: #ee753c;
	border: 1px solid #ee753c;
}
.otherPlatfarmFont {
	color: red;
	border: 1px solid red;
}
.hasExpired {
	background: #c5c5c5;
}
.right_des {
	float: right;
	width: 223px;
	height: 105px;
	background: #fff;
	opacity: 1;
	margin-top: -105px;
	.top {
		height: 48px;
		width: 216px;
		margin: 6px 0 0 6px;
		span:nth-child(1) {
			width: 69px;
			height: 16.5px;
			border-radius: 17px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			line-height: 16px;
			color: rgba(255, 255, 255, 1);
			opacity: 1;
			// 利用缩放显示小于12px的字体
			-webkit-transform:scale(0.8);
			font-size: 10px;
			display: block;
			text-align: center;
		}
		span:nth-child(2) {
			width: 126px;
			height: 14px;
			font-size: 14px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			opacity: 1;
			float: left;
			display: block;
			margin-left: 79px;
			margin-top: -14px;
			line-height: 17px;
		}
		span:nth-child(3) {
			height: 14px;
			font-size: 14px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			line-height: 13px;
			color: rgba(51, 51, 51, 1);
			opacity: 1;
			text-align: left;
		}
	}
	.bottom {
		height: 40px;
		margin-top: 6px;
		p:nth-child(1) {
			font-size: 12px;
			color: grey;
			float: left;
		}
		p:nth-child(2) {
			font-size: 12px;
			float: left;
			color: grey;
			margin-top: 24px;
			margin-left: -48px;
		}
		p:nth-child(3) {
			font-size: 14px;
			height: 27.5px;
			float: right;
			width: 74px;
			text-align: center;
			border-radius: 17px;
			margin: 6px 0 0 0;
			line-height: 27.5px;
		}
		img {
			width: 49px;
			height: 49px;
			float: right;
			margin-top: -10px;
			margin-right: 10px;
		}
	}
}
</style>

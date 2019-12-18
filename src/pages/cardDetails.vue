

<style  scoped>
.card-details{
	background:#EE753C;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
}

.card-center{
	flex:1;
	margin:11% 8% 8%;
	/* background:#fff; */
	border-radius: 5%;
	display: flex;
	flex-direction: column;
}
.card-center-top{
	flex :1;
}
.card-title{
	border:4px solid #D24300;
	height: 4px;
	width:84%;
	background:#B16400;
	border-radius: 8px;
	position:fixed;
	top: 4%;
	left:7%;
}
.card-title-bai{
	height: 10px;
	width:84%;
	background:#fff;
	border-radius: 8px;
	border-bottom:1px dashed #EE753C;
	position:fixed;
	top: 5%;
	left:8%
}
.card-content-center{
	border-radius: 8px;
	border-bottom:1px dashed #EE753C;
	height:50%;
	width: 100%;
	background:#fff;
	text-align: center;
}
.card-content-center>img{
	margin-top:20%;

}
.card-content-center>div{
	font-size: 14px;

}
.card-content-bottom{
	height:50%;
	width: 100%;
	background:#fff;
	border-radius: 8px 8px 0 0;
}
.card-center-bottom{
	border-top:1px dashed #EE753C;
	display: flex;
	background:#fff;
	justify-content: center;
	border-radius: 0 0 8px 8px;
	padding: 10px;
}
.details-bottom{
	width:100%;
	display: flex;
}
.card-btn{
	width:80%;
	background: #EE753C;
	border:transparent;
	height: 30px;
	border-radius: 20px;
	color:#fff;
	outline:none;
}
.card-content-shiyong{
	font-size:14px;
	padding: 10px 0 0 10px;
}
.card-content-riqi{
	font-size:14px;
	color: #8D8D8D;
	padding: 10px 0 0 10px;
}
.img-left{
	width:30%;
}
.img-right{
	width:70%;
}
</style>
<template>
	<div class="card-details">
		<div class="card-title"></div>		
		<div class="card-title-bai"></div>
		<div class="card-center">
			<div class="card-center-top">
				<div class="card-content-center">
					<img src="../assets/ptimg5.png" alt="">
					<div>肯德基9.5折会员券</div>
				</div>
				<div class="card-content-bottom">	
					<div class="card-content-shiyong">使用说明:</div>
					<div class="card-content-riqi">全场9.5折</div>
					<div class="card-content-shiyong">有效期至：</div>
					<div class="card-content-riqi">2019年10月18日</div>
				</div>
			</div>
			<div class="card-center-bottom">
				<button class="card-btn" >立即领取</button>
			</div>
			
		</div>
		
	<div class="details-bottom">
		<img src="@/assets/xiangqingleft.png" class="img-left" />
		<img src="@/assets/xiangqing.png" class="img-right"/>
	</div>
	
	</div>
	
</template>

<script>
import request from "../common/request"

export default {
	created () {
	
	},
	data () {
		return {
		}
	},
	methods: {
	},
	components: {
	}

}
</script>

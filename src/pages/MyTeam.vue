<template>
	<div class="container">
		<div class="myTeam">
			<div class="header">
				<ul>
					<li
						:class="[' fs',{'show':quanbu}]"
						@click="box"
					>全部</li>
					<li
						:class="[' fs',{'show':zhishu}]"
						@click="box1"
					>直属粉丝</li>
					<li
						:class="[' fs',{'show':tuijian}]"
						@click="box2"
					>推荐粉丝</li>
				</ul>
			</div>
			<div class="mT-box">
				<div class="layout-one">
					<div class="info">
						<img
							src="../assets/myTeamMember1.png"
							alt=""
						>
						<div class="info1">
							<p>130****2665</p>
							<p class="time">2019-03-21 17:52:06</p>
						</div>

					</div>
					<div class="recom">
						<p>已推0人</p>
						<img
							src="../assets/scoped/sert4.png"
							alt=""
						>
					</div>
				</div>
				<div class="layout-one">
					<div class="info">
						<img
							src="../assets/myTeamMember1.png"
							alt=""
						>
						<div class="info1">
							<p>130****2665</p>
							<p class="time">2019-03-21 17:52:06</p>
						</div>

					</div>
					<div class="recom">
						<p>已推0人</p>
						<img
							src="../assets/scoped/sert4.png"
							alt=""
						>
					</div>
				</div>
				<div class="layout-one">
					<div class="info">
						<img
							src="../assets/myTeamMember2.png"
							alt=""
						>
						<div class="info1">
							<p>130****2665</p>
							<p class="time">2019-03-21 17:52:06</p>
						</div>

					</div>
					<div class="recom">
						<p>已推0人</p>
						<img
							src="../assets/scoped/sert4.png"
							alt=""
						>
					</div>
				</div>
				<div class="layout-one">
					<div class="info">
						<img
							src="../assets/myTeamMember3.png"
							alt=""
						>
						<div class="info1">
							<p>130****2665</p>
							<p class="time">2019-03-21 17:52:06</p>
						</div>

					</div>
					<div class="recom">
						<p>已推0人</p>
						<img
							src="../assets/scoped/sert4.png"
							alt=""
						>
					</div>
				</div>
				<div class="layout-one">
					<div class="info">
						<img
							src="../assets/myTeamMember1.png"
							alt=""
						>
						<div class="info1">
							<p>130****2665</p>
							<p class="time">2019-03-21 17:52:06</p>
						</div>

					</div>
					<div class="recom">
						<p>已推0人</p>
						<img
							src="../assets/scoped/sert4.png"
							alt=""
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {

	data () {
		return {
			quanbu: true,
			zhishu: false,
			tuijian: false
		};
	},
	methods: {
		box () {
			this.quanbu = true;
			this.zhishu = false;
			this.tuijian = false;

		},
		box1 () {
			this.quanbu = false;
			this.zhishu = true;
			this.tuijian = false;

		},
		box2 () {
			this.quanbu = false;
			this.zhishu = false;
			this.tuijian = true;

		}
	}

}

</script>
<style lang='' scoped>
.container {
	background-color: #f5f5f5;
	height: 100vh;
	font-size: 14px;
}
.header {
	width: 100%;
	background-color: #fff;
	height: 56px;
	padding-top: 15px;
	margin-bottom: 20px;
	text-align: center;
}
.header li {
	width: 30%;
	height: 56px;
	line-height: 56px;
	color: #000;
	font-size: 18px;
}
.mT-box {
	width: 343px;
	height: 44px;
	margin: 0 auto;
	background-color: #f5f5f5;
	margin-bottom: 30px;
}
.layout-one {
	height: 74px;
	display: flex;
	align-items: center;
	background-color: #fff;
	margin-bottom: 20px;
	justify-content: space-between;
}
.info {
	display: flex;
	align-items: center;
	margin-left: 16px;
}
.info img {
	width: 45px;
	height: 45px;
	border-radius: 50%;
	margin-right: 10px;
}
.time {
	margin-top: 8px;
	font-size: 12px;
	color: rgb(141, 141, 141);
}
.recom {
	display: flex;
	align-items: center;
}
.recom img {
	width: 6px;
	height: 11px;
	margin-right: 10px;
	margin-left: 10px;
}
li.show {
	color: #ee753c;
	border-bottom: 1px solid #ee753c;
}
</style>
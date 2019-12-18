<template>
	<div class="container">
		<div class="change">
			<div class="change-box" v-for="a in Array_a" :key="a">
				<div class="con-left">
					<p class="name">{{a.lg_desc}}</p>
					<p class="time"> {{a.lg_add_time}}</p>
				</div>
				<div class="con-right">
					<p class="num">{{a.lg_av_amount}}</p>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import request from "../common/request"
export default {
	name:"container",
	data () {
		return {
			Array_a:[]
		};
	},
	created(){
			let params = {
				member_id: this.$store.state.index.data.data.member_info.member_id
			}
			let This = this
			this.member_id = params.member_id
			request.AJAX(this.$AjaxUrl.Details, params, "Details", This).then(() => {
				console.log(this.$store.state.Details.data.data.list)
				this.Array_a = this.$store.state.Details.data.data.list
			})
	}

}

</script>
<style lang='' scoped>
.container {
	background-color: #f5f5f5;
	height: 100vh;
	font-size: 14px;
}
.change {
	width: 100%;
	height: auto;
	background-color: #fff;
	margin-bottom: 10px;border-bottom: 1px solid rgba(141, 141, 141, 0.3);
}
.change-box {
	margin: 0 16px;height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;

}
.time {
	margin-top: 8px;
	font-size: 12px;
	color: rgba(141, 141, 141, 0.4);
}
.num {
	text-align: right;
	margin-bottom: 8px;
	font-size: 16px;
	color: #ee753c;
}
.num1 {
	text-align: right;
	margin-bottom: 8px;
	font-size: 16px;
	color: #000;
}
</style>
<template>
  <div class="beij">
      <div class="box-two" :key="list.index" v-for="list in points_list">
          <div class="layout-two">
              <div class="two">
                  <p class="two-txt">{{ list.pl_desc }}</p>
                  <div class="two-txt1"> <span>{{ list.pl_addtime }}</span></div>
              </div>
              <p class="two-wz">+{{ list.pl_points }}</p>
          </div>
      </div>
  </div>
</template>

<script>
import request from "../common/request"
export default {
    name: '',
    data() {
        return {
            points_type: 0,
            points: '',
            points_list: ''
        }   
    },
    created() {
        this.MyIntegral_list() // 获取全部用户积分
    },
    methods: {
        MyIntegral_list() { // 获取我的积分数据
            var This = this
            var member_id = this.$store.state.index.data.data.member_info.member_id
            // 接口参数
            let params = {
                member_id: member_id,
                points_type: this.points_type // 默认查看全部
            }
        
            request.AJAX(this.$AjaxUrl.memberPoints,params,'memberPoints',This).then(()=>{
                this.points = this.$store.state.memberPoints.data.data.points // 当前积分
                this.points_list = this.$store.state.memberPoints.data.data.points_list // 积分列表
            })
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
  /* padding-top:10px; */
}
.box-two{
    width:375px;
    /* margin:0 auto; */
    height:68px;
    background-color:#fff;
    /* border-radius: 20px; */
    margin-bottom:1px;
}
.layout-two{
    width:343px;
    margin: 0 auto;
    padding-top:16px;
    display:flex;
    justify-content: space-between;
}
.two-txt{
    font-weight: bold;
    margin-bottom:5px;
}
.two-txt1 span{
    font-size:12px;
    color:#8D8D8D;
    margin-right:3px;
}
.two-wz{
    color:#EE753C;
    font-weight: bold;
}

</style>

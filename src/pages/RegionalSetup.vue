<template>
  <div class="region">
    <div class="box-one fixed">
      <div class="layout-one">
        <p class="one">当前选择的国家/地区：</p>
        <p class="one-txt">{{ this.regValue }}</p>
      </div>
    </div>
    <div class="regions1"></div>
    <div class="regions" v-for="reg in regions" :key="reg.area_id" @click="test(reg)">
      <div class="box-one box-two">
        <div class="layout-one layout-two">
          <p class="one-txt">{{ reg.area_name }}</p>
          <img v-if="reg.show" src="../assets/scoped/RegionalSetup.png" alt="" >
        </div>
      </div> 
    </div>
    <div class="regions2"></div>
    <input class="box-four" @click="fn" type="submit">
  </div>
</template>

<script>
import request from "../common/request"
import { Loadmore } from 'mint-ui';
export default {
  name:'region',
  props:[''],
  data () {
    return {
      regions: [],
      regValue: '中华人民共和国',
      selected: '',
      show:false,
      area_id: ''
    }
  },
  created () {
    this.render();
    
  },
  methods: {
    render () {
      let params = {}
      let This = this
      request.AJAX(this.$AjaxUrl.regionalSetup, params, "regionalSetup", This).then(() => {
        this.regions = this.$store.state.regionalSetup.data.data;
        this.test(0)
      })
      
    },
    fn(){
      let params = {
        member_id: this.$store.state.index.data.data.member_info.member_id,
        area_id: this.area_id
      }
      let This = this
      request.AJAX(this.$AjaxUrl.updateInfo, params, "updateInfo", This).then(() => {
      this.$router.push('/editData')

      })

    },
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      this.allLoaded = true;// 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    },
    test(a){
      if(a  == 0){
         this.regions[0].show = true
      }else{
        for(var i = 0 ; i< this.regions.length ; i++){
          this.regions[i].show = false
        }
        a.show = true;
        this.regValue = a.name;
        this.$forceUpdate()
      }
      this.area_id = a.area_id
      console.log(this.area_id)
    }
  }


};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.beij {
  background-color: #f5f5f5;
  height: 667px;
}
.box-one {
  width: 375px;
  height: 44px;
  font-size: 14px;
  background-color: #fff;
  margin-bottom: 9px;
}
.regions1{
  margin-top: 44px
}
.regions2{
  height: 80px;
}
.fixed{
  position:fixed;top:0;
}
.layout-one {
  display: flex;
  padding: 13px;
}
.layout-two{
    justify-content: space-between;
}
.layout-two img{
    width:16px;
    height:13px;  
    margin-top:3px;
}
.box-two{
    margin-bottom:1px;
}
.box-four{
    width:343px;
    height:40px;
    background-color:#EE753C;
    color:#fff;
    font-size:16px;
    text-align:center;
    line-height: 40px;
    border-radius: 40px;
    margin-top:18px;
    position: fixed;
    left: 17px;
    bottom: 17px;
}
</style>

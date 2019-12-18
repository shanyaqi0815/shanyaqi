<template>
  <div class="beij">
    <div class="box">
      <div class="layout">
        <div class="beiji-box">
           <p class="two" :class="{active:index==isShow}" v-for="(item,index) in titleData" :key="index" @click="box(index)">
            {{item}}
            </p>
          <!-- <p :class="[' two',{'one':quanbu}]" @click="box">全部</p>
          <p :class="[' two',{'one':zuixi}]" @click="box1">最新</p>
          <p :class="[' three',{'three1':youtu}]" @click="box2">有图(36)</p>
          <p :class="[' two',{'one':zhong}]" @click="box3">中评</p>
          <p :class="[' two',{'one':haoping}]" @click="box4">好评</p> -->
        </div>
        <img src="../assets/scoped/sert4.png" alt />
      </div>
    </div>
    <UserEvaluation :pingjiaGid = "pingjiaGid" :isShow = "isShow"/>
  </div>
</template>

<script>
import UserEvaluation from "../components/UserEvaluation";
export default {
  data() {
    return {      
      titleData:[ "全部","最新","有图","好评","中评"],
      isShow:0,
      pingjiaGid:this.$route.params.gid,
      quanbu: true,
      zuixi: false,
      youtu: false,
      zhong: false,
      haoping: false
    };
  },
  methods: {
    box(index,item) {  
      this.isShow = index;
    },
    // box() {
    //   this.quanbu = true;
    //   this.zuixi = false;
    //   this.youtu = false;
    //   this.zhong = false;
    //   this.haoping = false;
    // },
    // box1() {
    //   this.quanbu = false;
    //   this.zuixi = true;
    //   this.youtu = false;
    //   this.zhong = false;
    //   this.haoping = false;
    // },
    // box2() {
    //   this.quanbu = false;
    //   this.zuixi = false;
    //   this.youtu = true;
    //   this.zhong = false;
    //   this.haoping = false;
    // },
    // box3() {
    //   this.quanbu = false;
    //   this.zuixi = false;
    //   this.youtu = false;
    //   this.zhong = true;
    //   this.haoping = false;
    // },
    // box4() {
    //   this.quanbu = false;
    //   this.zuixi = false;
    //   this.youtu = false;
    //   this.zhong = false;
    //   this.haoping = true;
    // }
  },
  components: {
    UserEvaluation
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
  height: 100vh;
  font-size: 14px;
}
.box {
  width: 375px;
  height: 67px;
  background-color: #fff;
  margin-bottom: 10px;
}
.layout {
  width: 343px;
  margin: 0 auto;
  padding-top: 16px;
}
.beiji-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.layout img {
  display: block;
  width: 6px;
  height: 11px;
  transform: rotate(90deg);
  margin: 0 auto;
}

.two {
  width: 55px;
  height: 21px;
  background-color: rgba(245, 245, 245, 1);
  text-align: center;
  line-height: 21px;
  border-radius: 21px;
  border: 1px solid #fff;
}
.three {
  width: 70px;
  height: 21px;
  background-color: rgba(245, 245, 245, 1);
  text-align: center;
  line-height: 21px;
  border-radius: 21px;
  border: 1px solid #fff;
}
.one {
  width: 55px;
  border: 1px solid #ee753c;
}
.three1 {
  width: 70px;
  border: 1px solid #ee753c;
}
.active{
  width: 55px;
  border: 1px solid #ee753c;
}
</style>
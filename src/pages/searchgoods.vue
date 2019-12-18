//商品搜索
<template>
  <div class="placard">
    <search ref="historysearch1" @searshow="searshow" :isShow= "isShow" :vid = "vid" ></search>
    <!-- <div class="cancel">
      <span ref = "cancel">{{ cancel }}</span>
    </div> -->
    <div class="searchdata"  ref="historysearch">
      <div class="search">
        <div class="searchtitle">热门搜索</div>
        <ul>
          <li :key="searchdata.index" v-for="searchdata in searchdatas">{{ searchdata }}</li>
        </ul>
      </div>
      <div class="search">
        <div class="searchtitle">历史搜索</div>
        <ul>
          <li :key="searchdata.index" v-for="searchdata in searchdatas">{{ searchdata }}</li>
        </ul>
      </div>
      <div class="reciclecar" ref="reciclecar">
        <img src="@/assets/recyclingcar.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search";
export default {
  name: "placard",
  data() {
    return {
      cancel: "取消",
      searchdatas: [],
      isShow: false,
      vid: ''
    };
  },
  created() {
    this.vid =  this.$route.query.vid
  },
  components: {
    search
  },
  methods: {
    searshow(data) {
      // if (this.$refs.historysearch != undefined && this.$refs.reciclecar != undefined && this.$refs.cancel != undefined ) {
        this.$refs.historysearch.style = "display:none";
        this.$refs.reciclecar.style = "display:none";
        this.$refs.cancel.style = "color:grey";

      // }
     
    },
  }
};
</script>

<style lang="less" scoped>
.placard {
  width: 686px/2px;
  position: relative;
}
.cancel {
  position: absolute;
  right: -5px;
  top: 19px;
  height: 30px;
  width: 32px;
  span {
    position: absolute;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
  }
}
ul {
  width: 267px;
  position: relative;
  top: 14px;
  height: 40px;
  overflow: hidden;
}
.searchdata {
  position: relative;
  top: 46px;
  .search {
    position: relative;
    height: 108px/2px;
    width: 267px;
    left: 20px;
    .searchtitle {
      width: auto;
      height: 28px/2px;
      font-size: 28px/2px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      line-height: 48px/2px;
      color: rgba(51, 51, 51, 1);
    }
    ul li {
      float: left;
      display: block;
      width: 59px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      margin-right: 16px;
      margin-top: 4px;
      font-family: Source Han Sans CN;
      font-weight: 400/2;
      color: rgba(97, 97, 97, 1);
      background: rgba(245, 245, 245, 1);
      border-radius: 40px/2px;
      font-size: 24px/2px;
    }
  }
  div:nth-child(2) {
    margin-top: 38px;
  }
}
.reciclecar {
  position: absolute;
  top: 90px;
  right: 0px;
  width: 36px/2px;
  height: 38px/2px;
  img {
    position: absolute;
    width: 36px/2px;
    height: 38px/2px;
  }
}
</style>

<template>
  <div>
    <div class="imgs_cont">
      <div :key="index" v-for="(a,index) in imglist">
        <img :src="a" alt />
        <span @click="imgs_hide(index)">X</span>
      </div>
    </div>
    <div class="one-txt">
      <img src="../assets/scoped/refund1.png" alt />
      <input id="box" type="file" accept="image/*" class="shangchuan" @change="selectImgs()" />
      <p>支持JPG/JPEG/GIF/PNG图片格式，文件小于2M，图片分辨率小于500*320</p>
    </div>      
  </div>
</template>

<script>
import request from "../common/request";
export default {
  data() {
    return {
      imglist:[],
    };
  },
  created() {
  },
  watch: {
    imglist:{
      handler:function(val,oldval){
        this.imglist = val;        
        this.$emit('selectImgs',this.imglist)
      },
      deep:true
    }
  },
  methods: {
    imgs_hide(index) {
      this.imglist.splice(index,1)
      // if (a == "box") {
      //   this.imglist = [];
      // } else if (a == "id_use") {
      //   this.fuck_one = [img1];
      //   this.hyz = !this.hyz;
      // } else if (a == "id_use1") {
      //   this.fuck_one = [img2];
      //   this.hyz1 = !this.hyz1;
      // }
    },
    selectImgs() {
      var b, arrImg, file;
      b = document.getElementById("box");
      arrImg = this.imglist;
      fn_1();
      function fn_1() {
        file = b.files[0];
        if (window.FileReader) {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          //监听文件读取结束后事件
          var f;
          reader.onloadend = function(e) {
            f = e.target.result;
            arrImg.unshift(f);
            //e.target.result就是最后的路径地址
          };
        }
      }
    },
  }
};
</script>

<style scoped lang="less">
.imgs_cont {
  width: auto;
  height: auto;
  div {
    position: relative;
    width: 60px;
    height: 60px;
    display: inline-block;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      font-size: 12px;
      width: 0.533333rem;
      height: 0.533333rem;
      display: inline-block;
      border-radius: 0.266667rem;
      background: #000;
      line-height: 20px;
      color: #fff;
      text-align: center;
      position: absolute;
      top: -7px;
      right: -7px;
    }
  }
}
.hyz {
  width: 0.533333rem;
  height: 0.533333rem;
  display: inline-block;
  border-radius: 0.266667rem;
  background: #000;
  line-height: 20px;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 4px;
  right: 19px;
}
.op {
  width: 166px;
  height: 30px;
  position: absolute;
  opacity: 0;
  bottom: 0;
}
.shangchuan {
  width: 66px;
  height: 66px;
  position: absolute;
  opacity: 0;
}
.beij {
  background-color: #f5f5f5;
  height: 100vh;
  font-size: 14px;
}
.box {
  width: 375px;
  height: 44px;
  border-bottom: 1px solid #f5f5f5;
  background-color: #fff;
}
.layout {
  width: 343px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.layout p {
  margin-right: 10px;
}
.layout span {
  color: #e93340;
  font-size: 16px;
  margin-right: 3px;
}
input {
  width: 266px;
  height: 15px;
  border: none;
  outline: none;
  background-color: #f5f5f5;
  color: #c5c5c5;
  font-size: 14px;
  display: block;
}
input::-webkit-input-placeholder {
  color: #c5c5c5;
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c5c5c5;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #c5c5c5;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #c5c5c5;
}
.box-one {
  width: 375px;
  border-bottom: 1px solid #f5f5f5;
  background-color: #fff;
}
.layout-one {
  padding-top: 16px;
  width: 343px;
  margin: 0 auto;
  margin-bottom: 15px;
}
.one-txt img {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
.one-txt {
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 12px;
}
.one-txt p {
  color: #c5c5c5;
}
.box-two {
  width: 375px;
  height: 129px;
  border-bottom: 1px solid #f5f5f5;
  background-color: #fff;
}
.layout-two {
  width: 343px;
  margin: 0 auto;
  padding-top: 15px;
}
.layout-two p {
  margin-bottom: 13px;
}
.layou-two textarea {
  background-color: #fff;
}

.layou-two textarea::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c5c5c5;
}
textarea::-webkit-input-placeholder {
  color: #c5c5c5;
}

textarea::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c5c5c5;
}
textarea:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #c5c5c5;
}
textarea:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #c5c5c5;
}
</style>
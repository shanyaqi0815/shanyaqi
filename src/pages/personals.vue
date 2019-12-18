<template>
  <div class="personals">
    <div class="personals-logo">
      <div class="tp">
        <input
          type="file"
          accept="image/*"
          id="id_use"
          class="op"
          capture="camera"
          @change="l('id_use')"
        />
        <img v-if="hyz" :src="member_avatar" alt />
        <img v-if="!hyz" :src="fuck_one[0]" alt />
        <span class="hyz" v-if="!hyz" @click="imgs_hide('id_use')">x</span>
        <p>更换头像</p>
      </div>
    </div>
    <div class="personals-txt">
      <div class="txt-one">
        <p class="one">用户名</p>
        <p class="one-name" >{{ this.member_name}}</p>
      </div>
      <div class="txt-two">
        <p class="two">生日日期</p>
        <p class="two-data"  >{{ this.member_birthday }}</p>

      </div>
      <div class="txt-three">
        <!-- <mt-radio title="性别" v-model="value" :options="['男', '女']"> </mt-radio> -->
        <p class="three">性别</p>
        <p class="two-data"  >{{ this.member_sex }}</p>

      </div>
      <div class="txt-four">
        <p class="four">选择地区</p>
        <p class="four-dq">{{ this.member_areainfo }}</p>
      </div>
    </div>
    <div class="box-button1" @click="sendTx">确定</div >
  </div>
</template>

<script>
import { Actionsheet, Radio, Toast  } from 'mint-ui'
import request from "../common/request"
import img1 from "../assets/verified/positive.png";
import img2 from "../assets/verified/opposite.png";
import img6 from "../assets/default.png"

export default {
  name: 'personals',
  created() {
    this.render()
  },
   data () {
      return {
        // action sheet 选项内容
        actions: [{
          name: '拍照',
          method : this.getCamera	// 调用methods中的函数
        }, {
          name: '从相册中选择',
          method : this.getLibrary	// 调用methods中的函数
        }],
        // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
        sheetVisible: false,
        member_name: '',
        member_sex: '',
        member_birthday: '',
        member_areainfo: '',
        member_avatar: '',
        options: [
            {
              label: '选项A',
              value: '男'
            },
            {
              label: '选项B',
              value: '女'
            }
        ],
        value: '男',
        fuck_one: [img1], 
        img3: img1,
        img4: img2,
        hyz: true,
        hyz1: true,
      }
    },
    methods: {
      changePho() {
        this.sheetVisible = true
      },
      getCamera: function(){
        console.log("打开照相机")
      },
      getLibrary: function(){
        console.log("打开相册")
      },
      render () {
         if ( this.$store.state.index  != undefined ) { 
            let params = {
              member_id: this.$store.state.index.data.data.member_info.member_id
            }
            let This = this
            request.AJAX(this.$AjaxUrl.memInfo, params, "memInfo", This).then(() => {
              This.member_name = This.$store.state.memInfo.data.data.member_info.member_name
              This.member_sex = This.$store.state.memInfo.data.data.member_info.member_sex
              This.member_birthday = This.$store.state.memInfo.data.data.member_info.member_birthday
              This.member_areainfo = This.$store.state.memInfo.data.data.member_info.area_name
              This.member_avatar = This.$store.state.memInfo.data.data.member_info.member_avatar
              
				if (this.member_avatar == '') {
					this.member_avatar = img6
				}
              if ( this.member_sex == 2) {
                this.member_sex = "女"
              }
              else if( this.member_sex == 1 ) {
                this.member_sex = "男"
              }
              else {
                this.member_sex = "保密"

              }
            })

         }
        
      },
      l(a) {
        var b, aar, file;
        if  (a == "id_use") {
          b = document.getElementById("id_use");
          aar = this.fuck_one;
          fn_1();
          this.fuck_one = aar;
          this.hyz = !this.hyz;
        }
        function fn_1() {
          file = b.files[0];
          if (window.FileReader) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            //监听文件读取结束后事件
            var f;
            reader.onloadend = function(e) {
              f = e.target.result;
              aar.unshift(f);
              //e.target.result就是最后的路径地址
            };
          }
        }
      },
      imgs_hide(a) {
        if (a == "id_use") {
          this.fuck = [];
          this.fuck_one = [img1];
          this.hyz = !this.hyz;
        } 
      },
      sendTx () {
        let params = {
          member_id: this.$store.state.index.data.data.member_info.member_id,
          member_avatar: this.fuck_one[0]
        }
        let This = this
        request.AJAX(this.$AjaxUrl.updateInfo, params, "updateInfo", This).then(() => {
          if (this.$store.state.updateInfo.data.data.code == 200) {
            Toast('修改头像成功！')
          }
          // console.log(this.$store.state.updateInfo.data.data.code )
        });
      }
    }
  }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.mint-radiolist /deep/ .mint-cell {
  display: inline-block !important;
  border: none !important;
}
.mint-radiolist /deep/ .mint-cell .mint-cell-wrapper  {
  background-image: none !important;
 }
.mint-radiolist /deep/  .mint-radiolist-title {
  margin: 0;
  font-size: 0.373333rem;
  margin-bottom: 0.213333rem;
  color: #8d8d8d;
}
.mint-radiolist /deep/ .mint-cell .mint-radio-input:checked + .mint-radio-core {
    background-color: #EE753C;
    border-color: #EE753C;
}
.personals-logo img {
  width: 90px;
  height: 90px;
  margin-top: 80px;
  margin-left: 142px;
  margin-bottom: 85px;
  display: block;
}
.personals-txt {
  width: 343px;
  margin: 0 auto;
  font-size: 14px;
}
.personals-txt .txt-one {
  margin-bottom: 24px;
}
.txt-one .one {
  margin-bottom: 8px;
  color: #8d8d8d;
}
.txt-two .two {
  margin-bottom: 8px;
  color: #8d8d8d;
}
.txt-two {
  margin-bottom: 25px;
}
.txt-three {
  margin-bottom: 22px;
}
.txt-three .three {
  color: #8d8d8d;
  margin-bottom: 11px;
}
.three-gender,
.gender-male,
.gender-female {
  display: flex;
}
.gender-male img {
  width: 10px;
  height: 10px;
  margin-right: 8px;
  margin-top: 4px;
}
.gender-male {
  margin-right: 14px;
}
.gender-female div {
  width: 10px;
  height: 10px;
  background: url(../assets/scoped/personal02.png) no-repeat center center;
  background-size: 10px;
  margin-right: 8px;
  margin-top: 4px;
  position: relative;
}
.gender-female img {
  width: 6px;
  height: 6px;
  position: absolute;
  top: 2px;
  left: 1.5px;
}
.four {
  margin-bottom: 8px;
  color: #8d8d8d;
}
.yin {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.mask {
  width: 360px;
  height: 116px;
  position: absolute;
  bottom: 72px;
  left: 8px;
  z-index: 2;
  background-color: #fff;
  border-radius: 10px;
  font-size: 18px;
  /* margin-bottom:6px; */
}
.mask-one {
  height: 58px;
  text-align: center;
  line-height: 58px;
  color: #e93340;
  border-bottom: 1px solid rgb(238, 237, 237);
}
.mask-two {
  height: 58px;
  text-align: center;
  line-height: 58px;
  color: #007aff;
  /* border-bottom:1px solid rgb(238, 237, 237); */
}
.mask-three {
  width: 360px;
  position: absolute;
  bottom: 10px;
  left: 8px;
  z-index: 2;
  border-radius: 10px;
  font-size: 18px;
  background-color: #fff;
  height: 58px;
  text-align: center;
  line-height: 58px;
  color: #007aff;
  /* border-bottom:1px solid rgb(238, 237, 237); */
}
.personals-logo {
  position: relative;
  /* margin-bottom: 25px; */
  padding-bottom: 45px;
}
.tx {
  position: absolute;
  left: 158px;
  bottom: -25px;
  font-size: 14px;
}
.txt-three /deep/ .mint-cell:last-child  {
  background-image: none;
}
.tp {
  width: 166px;
  height: 125px;
  padding-top: 16px;
  /* background-color: green; */
  position: relative;
  margin: 0 auto;
}
.tp img {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}
.tp p {
  width: 166px;
  height: 30px;
  /* background-color: #ee753c; */
  color: #000;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
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
  bottom: -25px;
}
.box-button1 {
  width: 343px;
  height: 44px;
  margin: 0 auto;
  background-color: #ee753c;
  color: #fff;
  text-align: center;
  line-height: 44px;
  border-radius: 44px;
  font-size: 16px;
  margin-top: 50px;
}
</style>
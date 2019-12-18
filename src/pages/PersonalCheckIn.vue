<template>
  <div class="PersonalChenkin">
    <div class="beij">
      <div class="box">
        <div class="layout">
          <p>
            <span>*</span>店铺名称
          </p>
          <input type="text" v-model="use" placeholder="长度2-15个字符，不能含有特殊符号、空格" maxlength="15" class="layout-input" />
        </div>
      </div>
      <div class="box-one">
        <div class="layout-one">
          <p>上传LOGO</p>
        </div>
        <div class="imgs_cont">
          <div :key="index" v-for="(a,index) in fuck">
            <img :src="a" alt />
            <span @click="imgs_hide('box')">X</span>
          </div>
        </div>
        <div class="one-txt">
          <img src="../assets/scoped/refund1.png" alt />
          <input id="box" type="file" accept="image/*" class="shangchuan" @change="l('box')" />
          <p>支持JPG/JPEG/GIF/PNG图片格式，文件小于2M，图片分辨率小于500*320</p>
        </div>
      </div>
      <div class="box-two">
        <div class="layout-two">
          <p>店铺简介</p>
          <textarea
            class="pers-textarea1"
            v-model="textarea_text"
            maxlength="100"
            placeholder="可填写海云舟的定位、作者简介、作者身份或影响力等信息，简介将显示在海云舟的主页、账号推荐页面，请勿发布手机号、邮箱、广告营销等消息，请勿超过100字"
          ></textarea>
        </div>
        <div class="two">
          <div class="two-txt">{{cont}}/100</div>
        </div>
      </div>
      <!-- <div class="box-three" @click="categoryList">
      <div class="layout-three">
        <div class="three">
          <p class="three">
            <span>*</span>经营类目
          </p>
          <div class="three-txt">最多可选五项</div>
        </div>
        <img src="../assets/scoped/sert4.png" alt />
      </div>
      </div>-->
      <!-- <div class="show" v-if="show">
      <div :key="index" v-for="(a,index) in classifyList" @click="gc_name(a,index)">
        {{a.gc_name}}
        <img v-if="a.show"  src="../assets/scoped/RegionalSetup.png" alt="">
        </div>
      </div>-->
      <div class="box-four">
        <div class="layout-four">
          <div class="four" @click="dizhi">
            <div>
              <span>*</span>所在地
            </div>
            <div style="display:flex; align-items: center">
              <p style="margin-right:20px;">{{company_address}}</p>
              <img src="../assets/scoped/sert4.png" alt />
            </div>
          </div>
          <textarea class="pers-textarea" placeholder="请输入详细地址" v-model="site"></textarea>
        </div>
      </div>
      <mt-popup v-model="popupVisible" position="bottom">
        <div class="popup">
          <div class="popup-box">
            <div class="popup-chen" @click="gitsheng">
              {{sheng}}
              <div class="popup-chen-box" :style="{display:nones}">
                <p
                  v-for="(she,index) in shengDi"
                  :key="index"
                  @click.stop="addindex(she.area_id,index,$event)"
                >{{she.area_name}}</p>
              </div>
            </div>
            <div class="popup-chen-shi" @click="gitshi">
              {{shi}}
              <div class="popup-chen-shi-box" :style="{display:shinone}">
                <p
                  v-for="(shi,index) in shiDi"
                  :key="index"
                  @click.stop="addshi(shi.area_id,index,$event)"
                >{{shi.area_name}}</p>
              </div>
            </div>
            <div class="popup-chen-qu" @click="gitqu()">
              {{qu}}
              <div class="popup-chen-qu-box" :style="{display:qunone}">
                <p
                  v-for="(qu,index) in quDi"
                  :key="index"
                  @click.stop="addqu(index,$event)"
                >{{qu.area_name}}</p>
              </div>
            </div>
          </div>
          <div class="pear-nalch">
            <p class="pear-ana" @click="quxiao">取消</p>
            <p class="pear-nal" @click="quer">确认</p>
          </div>
        </div>
      </mt-popup>
      <div class="box-three">
        <div class="layout-three">
          <div class="three">
            <p class="three">
              <span>*</span>真实姓名
            </p>
            <input
              class="three-txt three-txt1"
              v-model="name"
              placeholder="注册成功后身份不可修改"
              type="text"
            />
          </div>
          <img src="../assets/scoped/sert4.png" alt />
        </div>
      </div>
      <div class="box-three">
        <div class="layout-three">
          <div class="three">
            <p class="three">
              <span>*</span>身份证号码
            </p>
            <input class="three-txt three-txt1" v-model="id" placeholder="注册成功后身份不可修改" type="text" />
          </div>
          <img src="../assets/scoped/sert4.png" alt />
        </div>
      </div>
      <div class="box-five">
        <div class="layout-five">
          <p class="five">上传身份证正反面</p>
          <div class="five-tp">
            <div class="tp">
              <input
                type="file"
                accept="image/*"
                class="op"
                @change="l('id_use')"
                id="id_use"
                capture="camera"
              />
              <img v-if="hyz" src="../assets/verified/positive.png" alt />
              <img v-if="!hyz" :src="fuck_one[0]" alt />
              <span class="hyz" v-if="!hyz" @click="imgs_hide('id_use')">x</span>
              <p>拍摄正面</p>
            </div>
            <div class="tp">
              <input
                type="file"
                accept="image/*"
                class="op"
                @change="l('id_use1')"
                id="id_use1"
                capture="camera"
              />
              <img v-if="hyz1" src="../assets/verified/opposite.png" alt />
              <img v-if="!hyz1" :src="fuck_one1[0]" alt />
              <span class="hyz" v-if="!hyz1" @click="imgs_hide('id_use1')">x</span>
              <p>拍摄反面</p>
            </div>
          </div>
          <p class="five-wz">
            上传本人身份证正反照，要求身份证边框完整，图像清
            晰，照片大小不超过5M
          </p>
        </div>
      </div>
      <div class="box-sex">
        <div class="layout-sex">
          <p>
            <span>*</span>联系手机
          </p>
          <input v-model="mobile" type="text" placeholder="请填写常用手机号，以便及时收到平台通知" class="sex-input layout-input" />
        </div>
      </div>
      <div class="box-seven">
        <div class="layout-seven">
          <div class="seven">
            <p>
              <span>*</span>验证码
            </p>
            <input type="text" class="seven-txt layout-input" v-model="verification" maxlength="4"  />
          </div>
          <p @click="yanzheng" :class="['seven-wz',{'span-box': mor}]">{{miao}}</p>
          <p :class="['cheng', {'cheng-box': mor}]"></p>
        </div>
      </div>
      <div class="box-eight">
        <div class="layout-eight">
          <p>
            <span>*</span>联系邮箱
          </p>
          <input v-model="mailbox" type="text" class="eight layout-input" />
        </div>
      </div>
      <!-- <div class="box-eight">
      <div class="layout-eight">
        <p>
          <span>*</span>邀请码
        </p>
        <input type="text" class="eight" />
      </div>
      </div>-->
      <div class="box-nine">
        <div class="layout-nine">
          <div class="box-da">
            <input
              id="test"
              :class="['input-duo', {'input-duo1': xuanz}]"
              type="checkbox"
              name="item"
              @click="box"
              v-model="checkbox"
            />
            <label></label>
            <div class="bottom">
              我已阅读并同意以下协议：
              <span @click="mianzhe(3)">《海云舟商家入驻合作协议》、</span>
              <span @click="fuwu(4)">《海云舟市场管理与违规处理规范》、</span>
            </div>
          </div>
        </div>
        <div class="box-button1" @click="fn">提交</div>
      </div>
    </div>
    <mt-popup v-model="popupVisible1" position="bottom">
      <div class="rules">
        <HaiyunzhouRules :mianzhe="assf"></HaiyunzhouRules>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import HaiyunzhouRules from "../components/rule/HaiyunzhouRules";
import { Popup, MessageBox, Toast } from "mint-ui";
import img1 from "../assets/verified/positive.png";
import img2 from "../assets/verified/opposite.png";
import request from "../common/request";
export default {
  name: "PersonalChenkin",
  components: {
    HaiyunzhouRules
  },
  data() {
    return {
      xuanz: false,
      use: "", //存储店铺名称
      textarea_text: "", //店铺简介
      cont: 0, //初始化默认值
      name: "", //身份证姓名
      id: "", //身份证号
      mobile: "", //手机号
      mailbox: "", //邮箱
      verification: "", //验证码
      Invitation: "", //邀请码
      site: "", //详细地址
      fuck: [], //logo地址
      fuck_one: [img1], //身份证正面
      fuck_one1: [img2], //身份证反面
      company_address: "北京-北京市-朝阳区", //省市区
      checkbox: "",
      img3: img1,
      img4: img2,
      hyz: true,
      hyz1: true,
      show: false,
      classifyList: [],
      params_arr: [],
      popupVisible: false,
      sheng: "北京", //省
      shi: "北京市", //市
      qu: "朝阳区", //区
      shengDi: [], //省级地址
      shiDi: [], //市级地址
      quDi: [], //区级地址
      nones: "none",
      shinone: "none",
      qunone: "none",
      none: "block",
      noness: "none",
      current: 0,
      current1: 0,
      current2: 0,
      miao: "获取验证码",
      mor: false,
      miao1: "重新获取",
      assf: "",
      popupVisible1: false
    };
  },
  created() {
    if (this.$store.state.index == undefined) {
      MessageBox.confirm("您好，您还未登录账号，请登录账号", "提示")
        .then(action => {
          if (action == "confirm") {
            this.$router.push("/Password_register");
          }
        })
        .catch(err => {
          if (err == "cancel") {
            this.$router.push("/");
          }
        });
    }
  },
  watch: {
    textarea_text: function(newval, oldval) {
      this.cont = newval.length;
    }
  },
  methods: {
    mianzhe(a) {
      this.assf = a;
      this.popupVisible1 = !this.popupVisible1;
    },
    fuwu(b) {
      this.assf = b;
      this.popupVisible1 = !this.popupVisible1;
    },
    yins(c) {
      this.assf = c;
      this.popupVisible1 = !this.popupVisible1;
    },

    quxiao() {
      this.popupVisible = false;
    },
    quer() {
      this.popupVisible = false;
      this.company_address = this.sheng + "-" + this.shi + "-" + this.qu;
    },
    chux() {
      this.popupVisible = true;
    },
    // 点击所在地
    dizhi(a) {
      this.popupVisible = !this.popupVisible;
      // 默认获取省地址
    },
    //选择地址  点击获取省
    gitsheng() {
      let This = this;
      let params = {
        area_id: 99999999
      };
      var name = "area";
      // name 是当前接口名称存在store中的key
      request.AJAX(this.$AjaxUrl.area, params, name, This).then(() => {
        this.shengDi = this.$store.state.area.data.data.next_list;
        // console.log(this.shengDi)
      });
      this.nones = this.none;
    },
    //点击省获取省级下标
    addindex(b, index, $event) {
      //  console.log(a)
      this.current = index;
      //获取点击对象
      var el = event.currentTarget;
      // console.log(el.innerHTML);
      //吧获取的值给div
      this.sheng = el.innerHTML;
      //控制下拉列表消失
      this.nones = this.noness;
      // this.shinone = this.none
      // console.log(this.nones)
      let This = this;
      let params = {
        area_id: b
      };
      var name = "area";
      // name 是当前接口名称存在store中的key
      request.AJAX(this.$AjaxUrl.area, params, name, This).then(() => {
        this.shiDi = this.$store.state.area.data.data.next_list;
        this.shi = this.$store.state.area.data.data.next_list[0].area_name;
        console.log(this.shi);
      });
    },
    // 点击市获取市级下标
    addshi(c, index, event) {
      //  console.log(a)
      this.current1 = index;
      //获取点击对象
      var el = event.currentTarget;
      // console.log(el.innerHTML);
      //吧获取的值给div
      this.shi = el.innerHTML;
      //控制下拉列表消失
      this.shinone = this.noness;
      let This = this;
      let params = {
        area_id: c
      };
      var name = "area";
      // name 是当前接口名称存在store中的key
      request.AJAX(this.$AjaxUrl.area, params, name, This).then(() => {
        this.quDi = this.$store.state.area.data.data.next_list;
        this.qu = this.$store.state.area.data.data.next_list[0].area_name;
        console.log(this.shi);
      });
    },
    addqu(index, event) {
      this.current2 = index;
      //获取点击对象
      var el = event.currentTarget;
      // console.log(el.innerHTML);
      //吧获取的值给div
      this.qu = el.innerHTML;
      //控制下拉列表消失
      this.qunone = this.noness;
    },
    gitqu() {
      this.qunone = this.none;
    },
    gitshi() {
      this.shinone = this.none;
    },
    //点击获取验证码
    yanzheng() {
      let This = this;
      let params = {
        type: 4,
        mobile: this.mobile
      };
      console.log(params);
      var name = "getSmsMessage";
      request
        .AJAX(this.$AjaxUrl.getSmsMessage, params, name, This)
        .then(() => {});
      // 倒数60秒
      if (this.mobile == "") {
        MessageBox.alert("请输入手机号").then(action => {
          // this.$router.push("/personal");
        });
      } else {
        var dingshi = 60;
        var romTime = setInterval(function() {
          dingshi--;
          if (dingshi <= 0) {
            This.miao = This.miao1;
            clearInterval(romTime);
            This.mor = false;
          } else {
            This.miao = This.miao1 + "(" + dingshi + "秒" + ")";
            This.mor = true;
          }
        }, 1000);
      }
    },
    guanbi() {
      this.popupVisible = false;
    },
    box() {
      this.xuanz = !this.xuanz;
    },
    // categoryList(){
    //   this.show = !this.show
    //     //保存当前页面的this
    //     let This=this
    //     //存入参数
    //     let params = {
    //         parent_id : 0
    //     };
    //     var name = "categoryList"
    //     // name 是当前接口名称存在store中的key
    //     request.AJAX(this.$AjaxUrl.categoryList,params,name,This).then(()=>{
    //        this.classifyList = this.$store.state.categoryList.data.data.list;
    //        for(var i = 0;i<this.classifyList.length;i++){
    //          this.classifyList[i].show = false
    //        }
    //       // this.fn(this.classifyList[0])
    //     })
    // },
    // gc_name(b,a){
    //   if(this.params_arr.length < 5){
    //       this.params_arr.push(this.classifyList[a].gc_name)
    //        this.params_arr = [...new Set( this.params_arr)]
    //   }else{
    //       Toast("最多可选五项")
    //   }
    //   console.log(this.params_arr)
    //   this.classifyList[a].show = true;
    //   this.$forceUpdate()
    // },
    l(a) {
      var b, aar, file;
      if (a == "box") {
        b = document.getElementById("box");
        aar = this.fuck;
        fn_1();
        this.fuck = aar;
      } else if (a == "id_use") {
        b = document.getElementById("id_use");
        aar = this.fuck_one;
        fn_1();
        this.fuck_one = aar;
        this.hyz = !this.hyz;
      } else if (a == "id_use1") {
        b = document.getElementById("id_use1");
        aar = this.fuck_one1;
        fn_1();
        this.fuck_one1 = aar;
        this.hyz1 = !this.hyz1;
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
      if (a == "box") {
        this.fuck = [];
      } else if (a == "id_use") {
        this.fuck_one = [img1];
        this.hyz = !this.hyz;
      } else if (a == "id_use1") {
        this.fuck_one = [img2];
        this.hyz1 = !this.hyz1;
      }
    },
    vn111(fn,b){
            let Image_1 = new Image() //新建一个img标签（还没嵌入DOM节点)
            Image_1.src = fn
            let canvas = document.createElement('canvas'), 
            context = canvas.getContext('2d'),
            imageWidth = Image_1.width / 10,    //压缩后图片的大小
            imageHeight = Image_1.height / 10,
            data = ''

            canvas.width = imageWidth
            canvas.height = imageHeight

            context.drawImage(Image_1, 0, 0, imageWidth, imageHeight)
            data = canvas.toDataURL('image/jpeg')

            //压缩完成 
            if(b==1){
                this.fuck[0] = data
            }else if(b==2){
                this.fuck_one[0]= data
            }else if(b==3){
                this.fuck_one1[0]= data
            }
    },
    fn() {
      console.log(this.checkbox);
     // 基本检验用户输入的数据是否为空,
      if (this.use == "") {
        Toast("请输入店铺名称");
      } else if (this.fuck == "") {
        Toast("请添加店铺LOGO");
      } else if (this.textarea_text == "") {
        Toast("请输入店铺简要");
      } else if (this.site == "") {
        Toast("请输入店铺所在地");
      } else if (this.name == "") {
        Toast("请输入身份证姓名");
      } else if (this.id == "") {
        Toast("请输入身份证号");
      } else if (this.fuck_one == "" || this.fuck_one[0] == this.img3) {
        Toast("请添加身份证正面");
      } else if (this.fuck_one1 == "" || this.fuck_one[0] == this.img4) {
        Toast("请添加身份证反面");
      } else if (this.mobile == "") {
        Toast("请输入手机号");
      } else if (this.mailbox == "") {
        Toast("请输入邮箱");
      } else if (this.checkbox == false) {
        Toast("请查看并且勾选协议");
      } else { 
        //保存当前页面的this
        let This = this;
        //存入参数
        this.vn111(this.fuck[0],1)
        this.vn111(this.fuck_one[0],2)
        this.vn111(this.fuck_one1[0],3)
        console.log(this.fuck[0],1000000000000000000)
        let params = {
          member_id: this.$store.state.index.data.data.member_info.member_id, //用户ID
          // member_name: this.$store.state.index.data.data.member_info
          //   .member_name, 用户姓名
          description: this.textarea_text, //店铺简介
          company_address: this.company_address, //省市区
          company_address_detail: this.site, //详细地址
          contacts_name: this.name, //身份证姓名
          legal_licence_number: this.id, //身份证号
          contacts_phone: this.mobile, //手机号
          contacts_email: this.mailbox, //email
          code: this.verification, //短信严验证码
          // inviteCode:this.Invitation,//邀请码
          store_name: this.use, //店铺名称
          store_label: this.fuck[0], //店铺logo
          legal_licence_zheng_electronic: this.fuck_one[0], //身份证正面
          legal_licence_fan_electronic: this.fuck_one1[0] //身份证反面
        };
        // name 是当前接口名称存在store中的key
        request.AJAX(this.$AjaxUrl.capplyApply, params, "capplyApply", This).then(() => {
               this.fn1() 
                                    
          })
          .catch(error => {
            alert(error);
          }); 

      }
    },
    fn1() {
      if(this.$store.state.capplyApply != undefined){
        if (this.$store.state.capplyApply.data.data.code == 200) {
          let This = this;
          let params = {
            phone: this.mobile
          };
          console.log(params);
          request.AJAX(this.$AjaxUrl.returnHome, params, "returnHome",This);
          MessageBox.alert("入住成功，请查看短信").then(action => {
            this.$router.push("/personal");
          });
        } else {
          MessageBox.alert(this.$store.state.capplyApply.data.data.msg).then(
            action => {
              this.$router.push("/personal");
            }
          );
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.imgs_cont {
  width: auto;
  height: auto;
  padding: 0 16px;
  div {
    position: relative;
    width: 111px;
    height: 111px;
    display: inline-block;
    img {
      width: 100%;
      height: 100%;
    }
    span {
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
  width: 343px;
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
.two {
  width: 343px;
  margin: 0 auto;
}
.two-txt {
  float: right;
  color: #c5c5c5;
}
.box-three {
  width: 375px;
  height: 44px;
  background-color: #fff;
  margin-bottom: 1px;
}
.show {
  width: 9.146667rem;
  margin: 0 auto;
  div {
    height: 40px;
    line-height: 40px;
    display: block;
    text-align: center;
    img {
      float: right;
      width: 20px;
      margin-top: 10px;
    }
  }
}
.layout-three {
  width: 343px;
  margin: 0 auto;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
}
.three {
  display: flex;
  align-items: center;
}
.three span {
  color: #e93340;
  margin-right: 3px;
}
.three-txt {
  margin-left: 10px;
  color: #c5c5c5;
}
.layout-three img {
  width: 6px;
  height: 11px;
  transform: rotate(90deg);
}
.box-four {
  width: 375px;
  height: 88px;
  background-color: #fff;
  margin-bottom: 10px;
}
.layout-four {
  width: 343px;
  margin: 0 auto;
  padding-top: 15px;
}
.four {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.four span {
  color: #e93340;
  margin-right: 3px;
}
.four img {
  width: 6px;
  height: 11px;
}
.three-txt1 {
  width: 160px;
  height: 19px;
  background-color: #fff;
}
.box-five {
  width: 375px;
  height: 241px;
  background-color: #fff;
}
.layout-five {
  width: 343px;
  padding-top: 16px;
  margin: 0 auto;
}
.five {
  margin-bottom: 10px;
}
.five-tp {
  width: 343px;
  height: 141px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tp {
  width: 166px;
  height: 125px;
  padding-top: 16px;
  background-color: rgb(253, 237, 230);
  position: relative;
}
.tp img {
  width: 112px;
  height: 75px;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}
.tp p {
  width: 166px;
  height: 30px;
  background-color: #ee753c;
  color: #fff;
  text-align: center;
  line-height: 30px;
}
.five-wz {
  color: #c5c5c5;
}
.box-sex {
  width: 375px;
  background-color: #fff;
  height: 44px;
  border-bottom: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;
}
.layout-sex {
  width: 343px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.sex-input {
  background-color: #fff;
}
.layout-sex span {
  margin-right: 3px;
  color: #e93340;
}
.layout-sex p {
  margin-right: 10px;
}
.box-seven {
  width: 375px;
  height: 44px;
  border-bottom: 1px solid #f5f5f5;
}
.layout-seven {
  width: 343px;
  padding-top: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.layout-seven span {
  color: #e93340;
  margin-right: 3px;
}
.seven {
  display: flex;
  align-items: center;
}
.seven-txt {
  background-color: #fff;
  width: 150px;
  margin-left: 10px;
}
.box-eight {
  width: 375px;
  height: 44px;
  border-bottom: 1px solid #f5f5f5;
}
.layout-eight {
  width: 343px;
  margin: 0 auto;
  padding-top: 15px;
  display: flex;
  align-items: center;
}
.layout-eight span {
  color: #e93340;
  margin-right: 3px;
}
.eight {
  background-color: #fff;
  margin-left: 10px;
}
.box-da {
  display: flex;
}
.bottom {
  width: 312px;
  margin: 0 auto;
  line-height: 20px;
  font-size: 12px;
  margin-left: 30px;
}
.bottom span {
  color: #ee753c;
}
/* // 修改多选框样式 */
.input-duo[type="checkbox"] {
  cursor: pointer;
  position: relative;
  width: 16px;
  height: 16px;
  font-size: 14px;
  border-radius: 16px;
}

.input-duo[type="checkbox"]::after {
  position: absolute;
  top: -2px;
  left: -2px;
  background-color: #fff;
  color: #fff;
  width: 15px;
  height: 15px;
  display: inline-block;
  visibility: visible;
  padding: 2px;
  text-align: center;
  line-height: 16px;
  content: " ";
  border-radius: 16px;
  border: 1px solid #c5c5c5;
}
.input-duo {
  position: absolute;
  left: 20px;
}
.input-duo1[type="checkbox"]::after {
  background-color: #ee753c;
  color: #fff;
  border: 1px solid #ee753c;
}

.input-duo[type="checkbox"]:checked::after {
  content: "✓";
  font-size: 14px;
  font-weight: bold;
  border-radius: 16px;
}
.bottom span {
  color: #ee753c;
}
.box-nine {
  width: 375px;
  padding-top: 16px;
  background-color: #f5f5f5;
  padding-bottom: 25px;
}
.layout-nine {
  width: 343px;
  margin: 0 auto;
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
.box-four-txt {
  width: 343px;
  padding: 20px;
  margin: 0 auto;
  height: 200px;
}
.box-four-txt p {
  margin-bottom: 30px;
  display: flex;
  // 右对齐
  flex-direction: row-reverse;
}
.box-four-txt select {
  width: 80px;
  height: 30px;
  text-indent: 10px;
  font-size: 14px;
}
.box-four-txt select option {
  height: 200px;
}
//选着地址
.popup {
  width: 375px;
  height: 150px;
  padding-top: 50px;
  // padding-left: 16px;
}
.popup-chen {
  width: 100px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  // padding-left: 10px;
  line-height: 30px;
  text-align: center;
}
.popup-chen-box {
  width: 100%;
  height: 100px;
  border: 1px solid black;
  position: absolute;
  top: 30px;
  right: -1px;
  overflow: auto;
  display: none;
  background-color: #fff;
}
.popup-chen-box p {
  padding-left: 10px;
}
.popup-chen-shi {
  width: 100px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  // padding-left: 10px;
  line-height: 30px;
  margin-left: 120px;
  margin-top: -32px;
  text-align: center;
}
.popup-chen-shi-box {
  width: 100%;
  height: 100px;
  border: 1px solid black;
  position: absolute;
  top: 30px;
  right: -1px;
  overflow: auto;
  display: none;
  background-color: #fff;
}
.popup-chen-shi-box p {
  padding-left: 10px;
}
.popup-chen-qu {
  width: 100px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  // padding-left: 10px;
  line-height: 30px;
  margin-left: 241px;
  margin-top: -32px;
  text-align: center;
}
.popup-chen-qu-box {
  width: 100%;
  height: 100px;
  border: 1px solid black;
  position: absolute;
  top: 30px;
  right: -1px;
  overflow: auto;
  display: none;
  background-color: #fff;
}
.popup-chen-qu-box p {
  padding-left: 10px;
}
.popup-box {
  width: 355px;
  margin: 0 auto;
}
.cheng {
  width: 80px;
  height: 30px;
  background-color: rgba(122, 51, 151, 1);
  position: absolute;
  top: 8px;
  right: 0px;
  display: none;
}
.seven-wz {
  width: 100px;
  text-align: center;
  color: #ee753c;
}
.span-box {
  color: #c5c5c5 !important;
}
.pear-nalch {
  width: 200px;
  font-size: 16px;
  margin: 0 auto;
  margin-top: 50px;
}
.pear-ana {
  float: left;
  margin-right: 80px;
  background-color: rgb(164, 150, 162);
  width: 40px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.pear-nal {
  float: left;
  background-color: rgb(164, 150, 162);
  width: 40px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.pers-textarea {
  width: 343px !important;
  height: 49px;
  font-size: 14px;
  color: #c5c5c5;
  outline: none;
  border: none;
  background-color: #fff;
  resize: none;
}
.pers-textarea1 {
  width: 343px;
  height: 49px;
  font-size: 12px;
  color: #c5c5c5;
  outline: none;
  border: none;
  background-color: #fff;
  resize: none;
}
.rules {
  width: 375px;
  height: 500px;
  overflow: auto;
}
.layout-input{
  background-color:#fff;
  height:19px;
}
</style>
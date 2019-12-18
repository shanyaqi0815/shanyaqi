<template>
  <div class="AddAddress">
    <div class="box-one">
      <div class="layout-one">
        <!-- <p class="one">收货人</p> -->
        <p class="one-txt">
          <input type="text" v-model="true_name" placeholder="收货人">
        </p>
      </div>
    </div>
    <div class="box-one">
      <div class="layout-one">
        <!-- <p class="one">手机号码</p> -->
        <input type="text" v-model="mob_phone" placeholder="手机号码">
      </div>
    </div>
    <div class="box-one">
      <div class="layout-one">
        <!-- <p class="one">所在地址</p> -->
        <p class="one-txt">
          <input type="text" v-model="area_info" placeholder="所在地址">
        </p>
        <img src="../assets/scoped/sert4.png" alt />
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one">
        <!-- <p class="one">详细地址</p> -->
        <p class="one-txt">
          <input type="text" v-model="address" placeholder="详细地址">
        </p>
      </div>
    </div>
    <div class="box-three">
      <div class="layout-two">
        <p class="two">地址标签</p>
        <div class="two-txt">
          <p class="two-txt-one" @click="changeTag(0)">家</p>
          <p class="two-txt-one" @click="changeTag(1)">公司</p>
          <p class="two-txt-one" @click="changeTag(2)">学校</p>
          <div class="two-txt-two">
            <p>更多</p>
            <img src="../assets/scoped/sert4.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="box-one ">
      <div class="layout-one layout-three">
        <p class="one">设置默认地址</p>
        <!-- <p class="one-txt">12</p> -->
       <mt-switch v-model="is_default"></mt-switch>
      </div>
    </div>
    <div class="box-five" v-show="address_id" @click="del_address(address_id)">
        <div class="layout-five">
        删除收货地址
        </div>
    </div>
    <div class="box-sex" @click="add_address">
            保存 
    </div>
  </div>
</template>

<script>
import request from "../common/request"
import { MessageBox,Toast } from 'mint-ui';
export default {
  name:'AddAddress',
  data(){
    return{
      true_name: '',  // 真实姓名
      mob_phone: '',  // 手机号码
      area_info: '',  // 所在地址
      address: '',    // 详细地址
      address_id: '',  // 地址id(编辑时)
      is_default: false, // 默认地址
      tag: '公司',           // 默认表示 公司  
      editList: '',    // 获取编辑数据
      tag_list: ''     // 地址标签 
    }
  },
  methods:{
    site(){
       this.$router.push('/AddAddress')  //添加
    },
    add_address() {  // 添加收货地址
      var This = this
      var member_id = this.$store.state.index.data.data.member_info.member_id
      let params = {
        member_id: member_id,
        address_id: this.address_id, // 地址id
        true_name: this.true_name, // 收货名
        mob_phone: this.mob_phone, // 收货手机号码
        area_info: this.area_info, // 收货区域
        address: this.address, // 收货详细地址
        is_default: this.is_default ? 1 : 0, // 是否是收货地址
        tag: this.tag // 收货标识
      }

      request.AJAX(this.$AjaxUrl.updateAddress, params, 'updateAddress', This).then(()=>{
          var result = this.$store.state.updateAddress.data.data
          var message = result.message
          if (result.error_code == 200) {
              MessageBox.confirm(message).then(action => {
                if (action == 'confirm') {
                  this.$router.push('ManagementAddress')
                }
              }).catch(err => {
                // 停留在当前页面
              })
          }else {
            Toast(message)
          }
          // 接口报错缺少参数
      })
    }, 
    del_address(address_id) {  // 删除当前收货地址
        // 收货地址
        var This = this
        var member_id = this.$store.state.index.data.data.member_info.member_id
        let params = {
          member_id: member_id,
          address_id: address_id
        }
        MessageBox.confirm("确认删除").then(action => {
          if (action == 'confirm') {
            request.AJAX(this.$AjaxUrl.delAddress, params, "delAddress", This).then(()=>{
              var result = this.$store.state.delAddress.data.data
              var message = result.message
              Toast(message)
              if (result.error_code == 200) {
                this.$router.push('ManagementAddress')
              }
            })
          }
        }).catch(err=> {
          // 取消保留当前页面
        }) 
    },
    address_list(address_id) { // 编辑收货地址
        var This = this
        var member_id = this.$store.state.index.data.data.member_info.member_id
        let params = {
          member_id: member_id,
          address_id: address_id
        }
        request.AJAX(this.$AjaxUrl.editaddress, params, 'editaddress', This).then(()=>{
          this.editList = this.$store.state.editaddress.data.data.data
          // 编辑数据双向绑定
          this.true_name = this.editList.true_name
          this.mob_phone = this.editList.mob_phone
          this.area_info = this.editList.area_info
          this.address_id = this.editList.address_id
          this.address = this.editList.address
          if (this.editList.is_default == '1' || this.editList.is_default == true) {
            this.is_default = true
          } else {
            this.isx_default = false
          }
          this.tag = this.editList.tag
          
          // 数据返回的tag，更改页面样式
          for (var i = 0 ; i < this.tag_list.length; i++) {
            if (this.tag_list[i].innerHTML == this.tag) {
                this.tag_list[i].style="background: #FFF5F1;border-color: #EE753C;color: #EE753C;"
            }
          }
        })
    },
    changeTag(index) {  // 更改收货地址，触发事件
      for (var i = 0 ; i < this.tag_list.length; i++) {
        if (i == index) {
            this.tag_list[i].style="background: #FFF5F1;border-color: #EE753C;color: #EE753C;"
            this.tag = this.tag_list[i].innerHTML
        } else {
            this.tag_list[i].style="background: #fff;border-color: #C5C5C5;color: #8D8D8D;"
        }
      }
    }
  },
  created() {
    var This = this
    // 获取地址id
    if (This.$route.params != undefined) {
      if (This.$route.params.address_id != undefined) {
        this.address_id = This.$route.params.address_id
        this.address_list(this.address_id) // 当有address_id存在时,获取address_list
      }
    }
    // 地址标签
    var tag_list = document.getElementsByClassName('two-txt-one')
    this.tag_list = tag_list
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.AddAddress {
  background: #F5F5F5;
  height: 100vh;
}
.beij {
  background-color: #f5f5f5;
  height: 100vh;
}
.layout-one /deep/ .mint-switch-core {
  background-color: #4dd865;
  border: 1px solid #e5e5e5;
//   margin-top: -6px;
}
.box-one {
  width: 375px;
  height: 44px;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 1px;
}

.layout-one {
  width: 343px;
  margin: 0 auto;
  padding-top: 12px;
  display: flex;
  /* 居中对齐 */
  align-items: center;
  justify-content: space-between;
  input {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    font-size: 14px;
    margin-top: -3.5px;
  }
}
.layout-one p {
  color: #8d8d8d;
}
.layout-one img {
  width: 6px;
  height: 11px;
}
.box-two {
  margin-bottom: 10px;
}
.box-three {
  width: 375px;
  height: 44px;
  font-size: 14px;
  background-color: #fff;
  margin-bottom:1px;
}
.layout-two {
  width: 343px;
  padding-top: 12px;
  margin:0 auto;
  display: flex;
  /* align-items: flex-end; */
  justify-content: space-between;
}
.two-txt{
    display:flex;
}
.two-txt-one{
    width:50px;
    height:27px;
    border:1px solid #C5C5C5;
    border-radius:27px;
    text-align:center;
    line-height:27px;
    margin-right:10px;
    margin-top:-4px;
    color:#8D8D8D;
}
.two-txt-two{
    display:flex;
}
.two-txt-two img{
    width:6px;
    height:11px;
    margin-left:10px;
    margin-top:4px;
}
.two-txt-two p{
    color:#8D8D8D;
}
.layout-three{
    align-items : center;
    padding-top:6px
}
.layout-three .one{
    color:#333333;
}
.box-five{
    width:375px;
    height:44px;
    background-color:#fff;
    text-align: center;
    line-height:44px;
    font-size:14px;
    margin-top:30px;
}
.layout-five{
    color: #EE753C;
}
.box-sex{
    width:343px;
    height:44px;
    margin:0 auto;
    background-color:#EE753C;
    text-align:center;
    line-height:44px;
    font-size:16px;
    color:#fff;
    border-radius:44px;
    margin-top: 216px;
}
</style>

<template>
  <div class="beij">
    <div class="box-three" :key="list.index" v-for="list in addressLits">
       <div class="box-one">
        <div class="layout-one">
          <div class="one">
            <p class="one-name">{{ list.true_name }}</p>
            <p class="one-phone">{{ list.mob_phone | setPhone}}</p>
          </div>
          <p class="one-dress">{{ list.address }}</p>
        </div>
      </div>
      <div class="box-two">
        <div class="layout-two">
          <div class="two" @click="set_default_address(list.address_id)">
            <img v-show="list.is_default==1" src="../assets/scoped/refunds4.png" alt="">
            <img v-show="list.is_default==0" src="../assets/scoped/refunds5.png" alt="">
            <p>设为默认</p>
          </div>
          <div class="two-txt">
            <div class="txt-tp">
              <!-- <img src="" alt=""> -->
              <p @click="edit_address(list.address_id)">编辑</p>
            </div>
            <div class="txt-tp1">
              <img src="../assets/recyclingcar.png" alt />
              <p @click="del_address(list.address_id)" >删除</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-four" @click="dizhi">添加地址</div>
  </div>
</template>

<script>
import { Checklist, MessageBox, Toast } from "mint-ui";
import request from "../common/request"
export default {
 name:'',
 data(){
   return {
      addressLits: [
        {name: '海云舟', tel: '136****5463', address: '上海市长宁区金钟路968号凌空SOHO2号楼508室'},
        {name: '海云舟', tel: '136****5463', address: '上海市长宁区金钟路968号凌空SOHO2号楼508室'}
      ]
   }
 },
 filters: {
   setPhone(mob_phone) {
      if (mob_phone == undefined ) return

       return mob_phone.replace(/^(\d{3})\d{4}(\d+)/,"$1****$2")  // 手机号码星星替换
   }
 },
 methods:{
   dizhi(){
     this.$router.push('/AddAddress')
   },
   set_default_address(address_id) { // 页面按钮更改默认收货地址
   var This = this
    // 获取用户id
    var member_id = this.$store.state.index.data.data.member_info.member_id
    let params = {
      member_id: member_id,
      address_id: address_id
    }
     request.AJAX(this.$AjaxUrl.updatedefaultaddress, params, "updatedefaultaddress", This).then(()=>{
        var result  = this.$store.state.updatedefaultaddress.data.data
        var message = result.message
        Toast(message)
        if (result.error_code == 200) {
          this.get_address_list()
        }
      })
   },
   get_address_list () {
     // 获取用户id
      var member_id = this.$store.state.index.data.data.member_info.member_id
      var This = this
      let params = {
        member_id: member_id
      }
      request.AJAX(this.$AjaxUrl.myAddressList, params, "myAddressList", This).then(()=>{
        this.addressLits = this.$store.state.myAddressList.data.data.data
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
                this.get_address_list()
              }
            })
          }
        }).catch(err=> {
          // 取消保留当前页面
        }) 
    },
   edit_address(address_id = '') { // 编辑
     this.$router.push({name: 'AddAddress', params: {address_id: address_id}})
   }
 },
 created() {
   if (this.$store.state.index == undefined) {
			MessageBox.confirm("您好，您还未登录账号，请登录账号", "提示").then(action => {
				if (action == "confirm") {
					this.$router.push("/Password_register")
				}
			}).catch(err => {
				if (err == 'cancel') {
					this.$router.push("/")
				}
			})
		} else {
      this.get_address_list()
    }
 }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.beij {
  background-color: #f5f5f5;
  height: auto;
}
//  .two /deep/ .mint-cell-wrapper{
//       border-top:none;
//      margin:0;
//      padding:0;
//     width:95px;
//     height:40px;
//     font-size:14px;
// }
//  .two /deep/ .mint-checkbox-core{

//     width:16px;
//     height:16px;
// }
//  .two /deep/ .mint-checkbox-core::after{

//      top:2px;
// }
//  .two /deep/ .mint-checklist-label{

//     display:flex;
// }
//  .two /deep/ .mint-checkbox-label{

//     width:56px;
// }
//  .two /deep/ .mint-cell{

//     height:40px;
// }
.box-one {
  width: 375px;
  height: 90px;
  font-size: 16px;
  background-color: #fff;
}
.layout-one {
  width: 343px;
  margin: 0 auto;
  padding-top: 16px;
}
.one {
  width: 169px;
  justify-content: space-between;
  display: flex;
  /* 底部对齐 */
  align-items: flex-end;
  margin-bottom: 16px;
}
.one-dress {
  font-size: 14px;
}
.box-two {
  width: 375px;
  height: 50px;
  background-color: #fff;
  margin-top: 1px;
}
.layout-two {
  display: flex;
  width: 343px;
  margin: 0 auto;
  padding-top: 15px;
  font-size: 14px;
  justify-content: space-between;
}
// .two {
//   height: 40px;
// }
.two,
.two-txt,
.txt-tp,
.txt-tp1 {
  display: flex;
  align-items: flex-end; /* 底部对齐 */
}
.two img {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.txt-tp1 img {
  width: 20px;
  height: 21px;
  margin-left: 16px;
  margin-right: 6px;
}
.box-three{
    margin-bottom:10px;
}
.box-four{
    width:343px;
    height:40px;
    text-align:center;
    line-height:40px;
    background-color:#EE753C;
    color:#fff;
    border-radius:40px;
    margin:0 auto;
    margin-top:71px;
    font-size:16px;
}
/* .txt-tp1 */
</style>

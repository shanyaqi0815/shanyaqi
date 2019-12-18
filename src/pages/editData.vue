<template>
  <div class="editData">
    <mt-cell title="头像"  @click.native="changePhoto">
      <span> <img slot="icon" :src="member_avatar" width="45" height="45" style="border-radius: 50%;"></span>
      <i ><img src="../assets/scoped/sert4.png" alt style="width:8px; height:8px; margin-left:10px;" /></i>
    </mt-cell>
    <mt-cell title="用户名">
      <div class="comm" @click="editName"> 
        <span class="gray">{{ this.member_name}}</span>
        <img src="../assets/scoped/sert4.png" alt />
      </div>
    </mt-cell>
    <mt-cell title="生日日期"   >
      <div class="comm" @click="editBirthday"> 
        <span class="gray">{{ this.member_birthday }}</span>
        <img src="../assets/scoped/sert4.png" alt />
      </div>
    </mt-cell>
    <mt-datetime-picker v-model="pickerVisible" ref="box" type="date" @confirm="handleConfirm"  :endDate="new Date()" > 
        <button type="default" @click= "cancel" class="cancel">取消</button>
        <button type="default" @click= "definite"  class="definite">确定</button> 
    </mt-datetime-picker>
    <mt-cell title="性别" >
      <div class="comm" @click="editSex" > 
        <span class="gray">{{ this.member_sexValue}}</span>
        <img src="../assets/scoped/sert4.png" alt />
      </div>
    </mt-cell>
    <mt-popup v-model="isEditSex" position="bottom">
        <button type="default" @click= "cancel" class="cancel">取消</button>
        <button type="default" @click= "definite"  class="definite">确定</button>
        <mt-picker :slots="slots" @change="onValuesChange"> </mt-picker>
    </mt-popup>
    <mt-cell title="选择地区">
        <div class="comm"  @click = "regionalSetup"  > 
        <span class="gray">{{ this.areaName }}</span>
        <img src="../assets/scoped/sert4.png" alt />
      </div>
    </mt-cell>
     <input class="btn" @click="postUserData" type="submit">
  </div>
</template>

<script>
  import { Cell, Picker, Popup, DatetimePicker} from 'mint-ui';
  import request from "../common/request"
  import img6 from "../assets/default.png"

  export default {
    name:'editData',
    props:[''],
    data () {
      return {
        member_id: '',
        member_name: '',
        member_sex: '',
        member_sexValue: '',
        member_birthday: '',
        isEditSex: false,
        areaId: '',
        areaName:'',
        regName: '',
        member_avatar: '../assets/default.png',
        slots: [
            {
              flex: 1,
              values: ['女','男', '保密'],
              className: 'slot',
              textAlign: 'center'
            }
        ],
        pickerVisible: '',
        startDate: '1919-01-01',
        endDate: new Date(),
        isClicked: false

      };
    },
    created () {
        this.renderData()      
    },

    methods: {
      changePhoto () {
			  this.$router.push('personals')
      },
      renderData () {
        if ( this.$store.state.index  != undefined ) {
            let params = {
              member_id: this.$store.state.index.data.data.member_info.member_id
            }
            let This = this
            request.AJAX(this.$AjaxUrl.memInfo, params, "memInfo", This).then(() => {
            this.member_sex = This.$store.state.memInfo.data.data.member_info.member_sex
            this.member_name = This.$store.state.memInfo.data.data.member_info.member_name
            this.member_birthday = This.$store.state.memInfo.data.data.member_info.member_birthday
            this.areaName = This.$store.state.memInfo.data.data.member_info.area_name
            this.areaId = This.$store.state.memInfo.data.data.member_info.area_id
            this.member_avatar = This.$store.state.memInfo.data.data.member_info.member_avatar
            
				if (this.member_avatar == '') {
					this.member_avatar = img6
				}
            if ( this.member_sex == 1) {
                this.member_sexValue = "男"
            }
            else if ( this.member_sex == 2){
              this.member_sexValue = "女"
            }
            else {
              this.member_sexValue = "保密"
              
            }
            })       
        }
        console.log(this.member_birthday)
      },
      editName () {
        this.$router.push('/editName');
      },
      editBirthday () {
        this.$refs.box.open()  
      },
      regionalSetup () {
        this.$router.push('/RegionalSetup');
      },
      editSex () {
        this.isEditSex = true
        // this.member_sex = values[0]
      },
      onValuesChange(picker, values) {
        this.member_sexValue =  values[0]
      },
      cancel () {
        this.isEditSex = false
      },
      definite () {
        this.isEditSex = false          
      },
     formatDateTime (date){
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d+' ';
      },
     timestampToTime (timestamp) {
        var date = new Date(timestamp);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + ' ';
        return Y + M + D ;
      },
      handleConfirm(value){
          this.year = value.getFullYear();
          this.month = value.getMonth() + 1;
          this.date = value.getDate();
          this.isClicked = true;
          this.member_birthday = this.formatDateTime (this.pickerVisible)
      },
      postUserData () {
          if ( this.member_sexValue == "男") {
              this.member_sex = 1
            }
            else if ( this.member_sexValue == "女" ){
             this.member_sex = 2
            }
            else {
              this.member_sex = 3
            }
        this.member_id = this.$store.state.index.data.data.member_info.member_id 
        let params = {
            member_id: this.member_id,
            member_name: this.member_name,
            member_sex: this.member_sex,
            member_birthday: this.member_birthday,
            area_id: this.areaId
          }
          console.log(params)
        let This = this
        request.AJAX(this.$AjaxUrl.updateInfo, params, "updateInfo", This).then(() => {
            this.$router.push('/personalSetting'); 
        })
      }
    }
  }
</script>
<style lang='' scoped>
  .cancel {
    color: #000;
  }
  .definite {
    color: #ee753c;
  }
  .comm > img {
    padding-left: 10px;
    width: 8px;
    height: 8px;
  }
  .gray {
    color: #8D8D8D;
  }
  .disShow {
    display: none;
  }
  .editData  /deep/   .mint-popup-bottom {
    width: 100%;
  }
 
  .editData  /deep/  .picker-item {
    font-size: 14px;
  }
  .cancel, .definite {
    margin-top: 5px;
    font-size: 0.426667rem;
    background-color: #fff;
    border: 1px solid transparent; 
    outline: none;  
    font-weight: normal;
  }
  .cancel {
    width: 48%;
    text-align: left;
  }
  .definite {
    width: 48%;
    text-align: right;
  }
  .btn {
  width: 90%;
  height: 40px;
  border-radius: 15px;
  border: none;
  background-color: #EE753C;
  margin: 100px auto;
  margin-left: 5%;
  color: #fff;
  font-size: 14px;
}
</style>

<template>
  <div class="editName">
    <input v-model="userName" type="text" class="inp"  maxlength="15" placeholder="请输入用户名"  pattern="[A-Za-z]{3}">  
    <p>4-16个字符，可由中文、英文、数字、"-"、"—" 组成</p>
    <p style="font-size:26px" class="prompt" v-if="show">您输入的姓名格式不正确，请重新输入</p>
    <input class="btn" @click="cli" type="submit">
  </div>
</template>

<script>
  import request from "../common/request"
  export default {
    name:'editName',
    props:[''],
    data () {
      return {
          userName: '',
          show: false
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      cli () {
        console.log(this.userName)
        if ( this.userName != '') {
          if ( /^[\da-zA-Z_\u4e00-\u9f5a]{4,16}$/.test(this.userName) ) {
            this.show = false
            let params = {
              member_name: this.userName,
              member_id: this.$store.state.index.data.data.member_info.member_id
            }
            let This = this
            request.AJAX(this.$AjaxUrl.updateInfo, params, "updateInfo", This).then(() => {
            this.$router.push('/editData');
            })
          } else {
            this.show = true
            this.userName = ""
          }
        }
      
      }
    },

    watch: {}

  }

</script>
<style lang='' scoped>
.editName {
    background-color: #f5f5f5;
    padding-bottom: 35px;
}
.editName p {
    font-size: 12px !important;
    padding-top: 15px;
    padding-left: 10px;
    color: #8D8D8D;
}
.inp {
    width: 100%;
    height: 45px;
    padding-left: 10px;
    border: none;
    margin-top: 20px;
    background-color: #fff;
    color: #000;
    font-size: 16px;
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
.prompt {
  color: #EE753C !important;
  font-weight: bold;
}
</style>
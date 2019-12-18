<template>
  <div class="beij">
    <div class="box">
      <p class="box-txt">{{rue.article_title}}</p>
      <div class="box-wenz" v-html="ass">
       {{ass}}
      </div>
    </div>
  </div>
</template>

<script>
import request from "../common/request";
export default {
    data(){
        return{
            rules:[],
            ass:'',
            rue:[]
        }
    },
    created(){
       const This =this
       const params= ""
         request.AJAX(this.$AjaxUrl.getAgreements,params,"getAgreements",This).then(()=>{
                            console.log(this.$store.state.getAgreements.data.data.titles[0])
                            this.rules = this.$store.state.getAgreements.data.data
                            // if(this.$store.state.getSmsMessage.data.data.error_code == 10011){
                            //     Toast(this.$store.state.getSmsMessage.data.data.message)
                            // }
                            this.ass = this.rules.agreement1
                            this.rue = this.$store.state.getAgreements.data.data.titles[0]
                    })
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
.box{
    width:350px;
    margin:0 auto;
}
.box-txt{
    width:96px;
    height:24px;
    margin: 0 auto;
    font-size:24px;
    font-weight: bold;
    padding-top:32px;
    padding-bottom:16px;
}
.box-wenz{
    text-indent: 20px;
    color:#616161;
}
</style>
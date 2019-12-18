// 登录页面
<template>
    <div ref="register" class="find_password" >
       <div class="register_text">
           <div class="register_text_top">
               <div>
                   <select>
                       <option>+86</option>
                       <option>+86</option>
                       <option>+86</option>
                       <option>+86</option>
                   </select>
                   <input type="text" placeholder="请输入手机号码" maxlength="11" v-model="mobile"/>
               </div>
           </div>
           <Block></Block>
           <div class="register_text_btn">
              <div>
                   <input type="text" placeholder="请输入手机号码" maxlength="11"/>
                   <span @click="show()">获取验证码</span>
               </div>
           </div>
            <div class="register_text_footr">
              <div>
                   <input type="password" placeholder="输入新的密码" maxlength="11"/>
               </div>
           </div>
            <div class="register_text_footr">
              <div>
                   <input type="password" placeholder="确认新的密码" maxlength="11"/>
               </div>
           </div>
           
          <button type="button" class="btn" @click="btn">登录</button>
       </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import Block from '../components/Block'
import request from "../common/request";
export default {
    
    name:'find_password',
    data(){
        return{
           height:0,
           mobile:"",
        }
    },
    components:{Block},
    methods:{
        show(){
            var dingshi = 0
            let Time = this.$store.state.huadong.data.data.expired_time; // 后台返回的时间
            let this_Time = (new Date().getTime()/1000);                   //获取本地时间毫秒
            if(this_Time > Time ){
                this.xianshi = false
                Toast("对不起您已经超过60秒了,请重新滑动验证")
            }else{
                let This=this   
                let params = {
                    type:2,
                    mobile:this.mobile,
                    Cache:this.$store.state.huadong.data.data.Cache-name,
                    basestr:this.$store.state.huadong.data.data.basestr,
                    str:this.$store.state.huadong.data.data.str
                };
                if(this.mobile.length != 11){
                Toast("请输入11位的电话号码！")
                }else if(this.mobile.substr(0,1) != 1){
                Toast("请输入正确的电话号码！")
                }else{
                    request.AJAX(this.$AjaxUrl.getSmsMessage,params,"getSmsMessage",This).then(()=>{
                            var romTime=setInterval(function(){
                                dingshi++;
                                if( dingshi >= 60){
                                    This.miao = "获取验证码"
                                    clearInterval(romTime)
                                    This.xianshi = false
                                }else{
                                    This.miao = dingshi+"秒"
                                }
                            },1000); 
                    })
                }
            }
        },
        btn(){
            Toast('努力登录中.....');
        }
    }
}
</script>
<style scoped lang="less">
.find_password{
    width: 100%;height:100vh;
    background: url("../assets/pass.png") no-repeat center center;
    background-size: cover;overflow: hidden;
    .register_text{
        width: 686/2px;height: 100px;
        margin: 0 auto;margin-top: 5.65rem;
        .register_text_top{
            width: 80%;height: 50%;border-bottom: 1px solid rgba(197,197,197,1);
            margin: 0  auto;
           div{
               height: 100%;
               select,input{
                    border: 0;height: 30px;margin-top: 20px;
               }
               input{
                   width: 5.4rem; outline:none;color:rgba(197,197,197,1);
               }
           } 
        }
        .register_text_btn{
            width: 80%;height: 50%;border-bottom: 1px solid rgba(197,197,197,1);
            margin: 0  auto;
           div{
               height: 100%;
               input{
                   width: 5rem; outline:none;color:rgba(197,197,197,1);
                   border: 0;height: 30px;margin-top: 20px;
               }
               span{
                   height: 30px;margin-top: 20px;font-size: 14px;color:rgba(238,117,60,1);
               }
           } 
        }
        .register_text_footr{
            width: 80%;height: 50%;border-bottom: 1px solid rgba(197,197,197,1);
            margin: 0  auto;
            div{
               height: 100%;
               input{
                   width: 5rem; outline:none;color:rgba(197,197,197,1);
                   border: 0;height: 30px;margin-top: 20px;
               }
           } 
        }
        .btn{
           width: 80%;height: 30px;border-radius:30px;
           margin: 20px auto 0;border:1px solid rgba(238,117,60,1);
           display: block;background-color: rgba(238,117,60,1);color: #fff;
        }
    }
}
</style>
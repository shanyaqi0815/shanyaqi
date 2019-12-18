<template>
    <div class="evaluate">
        <header>
            <div class="header">
                <img :src= this.initData.goods_image alt="">
                <p>{{this.initData.goods_name}}</p>
                <!-- <span>初级</span> -->
                <div class="qingchu"></div>
            </div>
            <div class="pingjia-start">
                <span>描述相符</span>
                <div>       
                    <favorable  @evaluate="fn1" ref="favorable"></favorable>
                </div>  
            </div>
        </header>
        <div class="appraise">
            <textarea :placeholder="text" rows="3" v-model="geval_content"></textarea>
            <!-- <input type="file" @change="fn4()"> -->
            <selectImg @selectImgs = "getImg"></selectImg>

            <div class="checkbox-select">
                <div>
                    <input type="checkbox" id="inputDuo"  @click="box()" :class="['input-duo', {'input-duo1': xuanz}]"/>
                    <span>匿名</span>
                </div>
               <span>你写的评价会以匿名的形式展现</span>
            </div>
        </div>
        <div class="pingjia-bottom">
            <diV>店铺评价</diV>
            <div class="pingjia-start">
                <span>服务态度</span>
                <div>       
                    <favorable  @evaluate="fn2"></favorable>
                </div> 
                
            </div>            
            <div class="pingjia-start">
                <span>服务质量</span>
                <div>       
                    <favorable  @evaluate="fn3"></favorable>
                </div>  
            </div>
        </div>
    <div class="box-button" @click="submit()">提交评价</div>
    </div>
</template>

<script>
import favorable from "../components/favorable"
import selectImg from "../pages/selectImg"
import request from "../common/request"
import { Toast } from 'mint-ui'

export default {
    name:"evaluate",
    data(){
        return{
            xuanz: false,
            text:"说说哪里好,鼓励一下我吧!",
            geval_content:'',
            initData:'',
            selectImgs:'',
        }
    },
    components:{
        favorable,
        selectImg
    },
    props:[''],
    created(){
        this.init()
    },
    watch:{
    },
    methods:{
        init(){
            this.initData = this.$route.params.evaluateList
        },
        fn1(val){
            this.geval_scores = val
        },
        fn2(val){
            this.seval_servicecredit = val
        },
        fn3(val){
            this.seval_desccredit = val
        },
        // fn4(){
        //     var That=this;
        //     let file=this.$refs.upload.$refs['upload-inner'].$refs.input; //获取文件数据
        //     let fileList=file.files;   
        // },        
        box(){
            this.xuanz = !this.xuanz;
        },
        getImg(val){
            this.selectImgs = val
        },
        submit(){
            var This = this;
            if(this.xuanz == false){
                this.xuanz = 1
            }else{
                this.xuanz = 0
            }
            let params = {
                member_id: this.$store.state.index.data.data.member_info.member_id,
                order_id : this.initData.order_id,//订单ID
                gid :  this.initData.gid,//商品id
                geval_scores : this.geval_scores,//课程评分
                geval_content : this.geval_content,//课程评价内容
                seval_servicecredit : this.seval_servicecredit,//店铺服务分
                seval_desccredit : this.seval_desccredit,//描述相符分
                geval_isanonymous:  this.xuanz ,//是否匿名                
                geval_image :  this.selectImgs,//评价图片
            }
            if(params.geval_scores !='' && params.seval_servicecredit !='' &&  this.geval_content !='' && params.seval_desccredit !=''){
                request.AJAX(this.$AjaxUrl.courseCommentAdd, params, "courseCommentAdd", This).then(() => {  
                    var response = This.$store.state.courseCommentAdd.data.data;
                    if(response.code == 200){                            
                        this.$router.push('/myEvaluation')
                    }
                })
            }else{
                Toast({
                    message: '请填写详细评价内容',
                    position: 'top',
                    duration: 5000
                })
            }
            

        },
    }
}
</script>

<style scoped lang="less">

.evaluate{
    width: 100%;
    height: auto;
    background-color: #fff;
    header{
        width: 718/2px;
        margin: 0  auto;
        border-bottom: 1px solid #f5f5f5;
    }
    .header{
        img{
            width: 58/2px;
            // height: 58/2px;
            float: left;
            margin:21px 10px 0 0;
        }
        p{
            display: inline-block;
            width: 620/2px;
            font-size: 14px;
            vertical-align: top;
            float: left;
            margin:17px 0px 0 0;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        span{
            font-size: 12px; 
            display: inline-block;
            float: left;
        }
    }
    .appraise{
         width: 718/2px;
         margin: 0  auto;
        //  height: 432/2px;
         textarea{
            width: 100%;
            border:none; 
            resize: none;
            cursor: pointer;
            line-height: 20px;
            font-size: 14px;
            margin-top: 16px;
        }
        img{
            height: 50px;
            width: 50px;
        }
    }
}
.checkbox-select{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        font-size: 12px;
        margin-left: 5px;
        display: inline-block;
    }
}
.input-duo[type='checkbox'] {
	cursor: pointer;
	position: relative;
	width: 14px;
	height: 14px;
	font-size: 14px;
	border-radius: 14px;
}

.input-duo[type='checkbox']::after {
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
	line-height: 14px;
	content: '';
	border-radius: 14px;
	border: 1px solid #c5c5c5;
}
.input-duo {
	position: absolute;
}
.input-duo1[type='checkbox']::after {
	border: 1px solid #c5c5c5;
    color: #c5c5c5;
    background: #fff;
}

.input-duo[type='checkbox']:checked::after {
	content: '\2713';
	font-size: 14px;
    border-radius: 14px;
	background-color: #ee753c;
	color: #fff;
}
.pingjia-bottom{
    font-size: 14px;
    width: 718/2px;
    margin: 20px  auto 0;
}
.pingjia-start{
    display: flex;
    align-items: center;
    span{
        display: inline-block;
        margin-right: 5px;
        font-size: 14px;
    }
    div{
        display: inline-block;
    }
}
.box-button {
  width: 343px;
  height: 44px;
  margin: 0 auto;
  background-color: #EE753C;
  color:#fff;
  text-align: center;
  line-height: 44px;
  border-radius: 44px;
  font-size: 16px;
  margin-top: 21px;
}
</style>
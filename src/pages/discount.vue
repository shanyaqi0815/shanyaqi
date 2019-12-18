<template>
  <div class="discount">
    <div class="content">
        <div class="time">刚刚</div>
        <div class="mainCon">
            <div class="img"><img src="../assets/discount1.png" alt="" ></div>
            <div class="detail">
                <h3 class="title">促销一级标题</h3>
                <p  class="ad">哈哈哈哈哈哈哈哈哈</p>
            </div>
        </div>
    </div>

     <div class="content">
        <div class="time">10:20</div>
        <div class="mainCon">
            <div class="img"><img src="../assets/discount2.png" alt="" ></div>
            <div class="detail">
                <h3 class="title">促销一级标题</h3>
                <p  class="ad">哈哈哈哈哈哈哈哈哈</p>
            </div>
        </div>
    </div>

     <div class="content">
        <div class="time">9:00</div>
        <div class="mainCon">
            <div class="img"><img src="../assets/discount1.png" alt="" ></div>
            <div class="detail">
                <h3 class="title">促销一级标题</h3>
                <p  class="ad">哈哈哈哈哈哈哈哈哈</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import request from "../common/request"
    export default {
    name:'discount',
    props:[''],
    data () {
        return {
            message_type: '',
            member_id: ''
        };
    },
    created () {
        this.renderDis()
    },
    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        renderDis () {
            this.member_id = this.$store.state.index.data.data.member_info.member_id 
            let This = this;
            this.message_type = This.$route.params.msgType
            let params = { 
                member_id: this.member_id ,
                message_type: this.message_type
            }
            console.log(params)
            request.AJAX(this.$AjaxUrl.messageTypeList,params,'messageTypeList',This).then(()=>{

            })
        }
    },

    watch: {}

    }

</script>
<style lang='' scoped>
* {
    margin: 0;
    padding: 0;
}
.discount {
    width: 411px;
    font-size: 16px;
    padding: 20px 0;
    margin: 0 auto;
    background-color: #f5f5f5;

}
.content {
    width: 343px;
    margin: 15px;
}
.img img  {
    margin: 0 auto;
    height: 140px;
}
.time {
    width: 60px;
    height: 24px;
    line-height: 24px;
    margin: 0 auto;
    background-color: #EDEDED;
    color: #C5C5C5;
    text-align: center;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 15px;
}
.mainCon {
    height: 224px;
    background-color: #fff;
    border-radius: 20px;
}
.detail {
    padding: 10px 15px;

}
.txtle {
    font-size: 16px;
}
.ad {
    font-size: 14px;
    color: #616161;
    padding-top: 10px;
}
</style>
<template>
    <div class="classify_detail">
        <div class="search_detail">
            <!-- 商品搜索框 -->
            <search :isShow='false' :parentSearch="parentSearch"  @searshow="searshow" ></search>
        </div>
        <div class="course_list">
            <!-- 手机滑动条，课程选择 -->
            <select_course :items="items" :gc_id="gc_id" @getGcId="getGcId($event)"></select_course>
        </div>
        <!-- 综合 销量 价格 刷选 -->
        <select_search ref="select_search" @getGcId="getGcId($event)" @shuaxuan="shuaxuan"></select_search> 

        <!-- 刷选右边栏 -->
        <mt-popup v-model="shuaxuna_show" position="right">
               <div class="shuaxuan">
                   <div class="shuaxuan_scroll">
                       <div class="shuaxuan_list">
                        <p>类别</p>
                            <ul>
                                <li :class="{selected: isSelect == list }" :key="index" v-for="(list,index) in goods_class" @click="selectGoods(list)">{{ list.gc_name }}</li>
                            </ul>
                        </div>
                        <div class="shuaxuan_list">
                            <p>分类</p>
                                <ul>
                                    <li  :class="{selected: isSelect2 == list }" :key="index" v-for="(list,index) in course_type"  @click="selectCourse(list)">{{ list.name }}</li>
                                </ul>
                        </div>
                        <div class="shuaxuan_list">
                            <p>方式</p>
                                <ul>
                                    <li   :class="{selected: isSelect3 == lesson_type.content }" @click="selectType(lesson_type.content)">{{ lesson_type.content}}</li>
                                    <li   :class="{selected: isSelect3 == lesson_type.live }" @click="selectType(lesson_type.live)">{{ lesson_type.live}}</li>
                                    <li   :class="{selected: isSelect3 == lesson_type.online }" @click="selectType(lesson_type.online)">{{ lesson_type.online}}</li>
                                    <li   :class="{selected: isSelect3 == lesson_type.upderline }" @click="selectType(lesson_type.upderline)">{{ lesson_type.upderline}}</li>
                                </ul>
                        </div>
                        <div class="shuaxuan_list">
                            <p>价格区间</p>
                                <ul>
                                    <!-- <li class="price"> -->
                                        <input  v-model="max" type="number" maxlength="3" placeholder="最低价">
                                    <!-- </li> -->
                                    <span class="line"></span>
                                    <!-- <li class="price"> -->
                                        <input  v-model="mix" type="number" maxlength="8"   placeholder="最高价">
                                    <!-- </li> -->
                                </ul>
                        </div>
                    
                        <div class="foot_button">
                            <button class="reset_data" type="reset" @click="reset">重置</button>
                            <button class="sure_oprate" @click="qued">确定</button>
                        </div>
                   </div>
                </div> 
                
        </mt-popup>

        <!-- 分类详细列表 -->
        <div class="list">
            <classfy_list :classifyLists="classifyLists"></classfy_list>          
        </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import request from "../common/request"
import search from "../components/search"
import detail_list from "../components/advancement_list";
import classfy_list from "../components/classify/detailList"; // 显示用着这个组件使用
import listimg from '@/assets/shizhan.png'
import select_course from '../components/classify/selectCourse'
import select_search from "../components/classify/select_search"
import img1 from "../assets/shipin.png";
import img2 from "../assets/shizhan.png";
export default {
    name: 'classif_detail',
    data() {
        return {
            parent_id:"",
            gc_id: '',
            key: 0, // 默认综合 1 销量 3 价格
            sort: '',
            keyword: '',
            img1: img1,
            img2: img2,
            goodsList: [],
            is_select: true,
            shuaxuna_show: false,
            classifyLists: [
                {listimg:listimg, course_name: '测试培训之后系统是如何研发出来的巴拉巴拉巴拉', arrs: ['新品', '满减', '初级', '视频'], price: 1688, study_persons: 1456, evaluate_count: 14568, shop_name: 'UCG管理咨询咨询'},
                {listimg:listimg, course_name: '测试培训之后系统是如何研发出来的巴拉巴拉巴拉', arrs: ['新品', '满减', '初级', '视频'], price: 1688, study_persons: 1456, evaluate_count: 14568, shop_name: 'UCG管理咨询咨询'},
                {listimg:listimg, course_name: '测试培训之后系统是如何研发出来的巴拉巴拉巴拉', arrs: ['新品', '满减', '初级', '视频'], price: 1688, study_persons: 1456, evaluate_count: 14568, shop_name: 'UCG管理咨询咨询'}
            ],
            labels:[],
            items: [
                {label: '首页'},
                {label: '推荐'},
                {label: 'Android'},
                {label: '前端'},
                {label: '后端'},
                {label: 'iOS'},
                {label: '产品'},
                {label: '人工智能'},
                {label: '设计'}
            ],
            goods_class: {}, // 筛选 类别
            course_type: {}, //  筛选 方式
            lesson_type: {}, // 筛选 类别
            min_price: {}, // 筛选 最低价
            max_price: {}, // 筛选 最高价
            isSelect: '',
            isSelect2: '',
            isSelect3: '',
            isSelectId: '',
            isSelect2Id: '',
            isSelect3Id: '',
            max:'',//最低价
            mix:'',//最高价
            goods_price_limit:"",
            indexId:"",
        }
    },
    components: {
        search,  
        detail_list,
        select_course,
        select_search,
        classfy_list
    },
    created() {
        this.getGcId()
    },
    watch: {
        '$store.state.selectCourse'(newVal, oldVal) {
            this.$refs.select_search.setKey(0)
        },
    },
    methods: {
        parentSearch() {
            if (this.$store.state.search_word != '') {
                var search_word = this.$store.state.search_word
                this.getGcId(search_word)
            }
        },
        getGcId(event) {
            let This = this;
            this.gc_id = this.$route.params.gc_id;
            this.items = this.$route.params.goodsList;
            this.parent_id =this.$route.params.parent_id

            // 分类传过来的gc_id
            if (event != undefined && event.gc_id != undefined) {
                this.gc_id = event.gc_id
            }

            // 页面列表 综合 销量 价格 刷选 参数
            if (event != undefined && event.key != undefined && event.sort != undefined) {  // key 代表是销量和价格 sort 排序
                while (event.key == 2) {event.key = event.key+1} // 页面2表示价格，接口3表示接口
                this.key = event.key
                this.sort = event.sort
            }

            // 执行二级选项时 
            if (event != undefined && event.gc_id == undefined) {
                this.gc_id = this.$store.state.get_gc_id
            }
            // console.log(this.gc_id)
            // 存入参数
            let params = {
                goods_class : this.gc_id,
                key: this.key,
                sort: this.sort,
                keyword: this.keyword
            };
            // console.log(params)
            var name = "goodsSort"
            // name 是当前接口名称存在store中的key
            request.AJAX(this.$AjaxUrl.goodsSort,params,name,This).then(()=>{
                this.classifyLists = this.$store.state.goodsSort.data.data.data.goods_info
                // console.log(this.classifyLists)
            })
        },
        fn() {
            this.show = !this.show
            this.hide = !this.hide
            var a=this.$refs.M_list.length
            for(let i=0 ;i<a;i++){
                this.$refs.M_list[i].remodel()
            }
            this.show=false;
            this.hide=true;
            this.$refs.center.style="width: 100%;background-color:#fff;";
            this.$refs.cneter_nai.style="margin: 0px auto;width: 9.13rem;;";
           
        },
        fn1() {
            this.show = !this.show
            this.hide = !this.hide
             var a=this.$refs.M_list.length
            for(let i=0 ;i<a;i++){
                this.$refs.M_list[i].remodel_one()
            }
            this.show=true;
            this.hide=false;
            this.$refs.center.style="width: 9.13rem;;background-color:#f5f5f5;";
            this.$refs.cneter_nai.style="width:100%;";
        },
        shuaxuan() {  // 刷选右侧是否显示
            var This = this
            this.shuaxuna_show = true
            
            // 点击筛选按钮 调用筛选接口
            let params = {
                parent_id:this.parent_id
            }
            request.AJAX(this.$AjaxUrl.Goodssearch,params,'Goodssearch',This).then(()=>{
                this.goods_class = this.$store.state.Goodssearch.data.data.data.goods_class
                this.course_type = this.$store.state.Goodssearch.data.data.data.course_type
                this.lesson_type = this.$store.state.Goodssearch.data.data.data.lesson_type
                var goods_price_limit = this.$store.state.Goodssearch.data.data.data.goods_price_limit
                this.min_price = goods_price_limit[0]
                this.max_price = goods_price_limit[1]

            })
        },
        selectGoods (par) {
            this.isSelect = par
            this.isSelectId = par.gc_id
            console.log(par.gc_id)
        },
        selectCourse (par1) {
            this.isSelect2 = par1
            this.isSelect2Id = par1.id
        },
        selectType (par2) {
            this.isSelect3 = par2;
            this.isSelect3Id = par2.gc_id
            // console.log(par2)
        },
        reset () {
            this.isSelect = '';
            this.isSelect2 = '';
            this.isSelect3 = '';

        },
        qued(){
            // if(this.isSelectId ==""){
            //     Toast({message:"请选择类别",
            //            className:"position"});
            // }else if(this.isSelect2Id ==""){
            //     Toast("请选择分类");
            // }else if(this.goods_price_limit =="|"){
            //     Toast("请选择区间");
            // }else{
                
            // }
            if(this.isSelectId ==""){
                this.indexId = this.gc_id
            }else{
               this.indexId = this.isSelectId
            }
            this.goods_price_limit = this.max+"|"+this.mix
            // console.log(this.goods_price_limit)
            var This = this
            // 点击筛选按钮 调用筛选接口
            let params = {
              goods_class:this.indexId,
              course_type:this.isSelect2Id,
              goods_price_limit:this.goods_price_limit
            }

            console.log(params)
            request.AJAX(this.$AjaxUrl.goodsSort,params,'goodsSort',This).then(()=>{
              this.classifyLists = this.$store.state.goodsSort.data.data.data.goods_info
              if( this.$store.state.goodsSort.data.data.code==200){
                  this.shuaxuna_show = false
              }else{
                  Toast(this.$store.state.goodsSort.data.data.msg);
              }
            })
           
            
        },
            searshow () {
      this.$router.push("/searchgoods");

    }
    }
}
</script>

<style lang="less" scoped>

.selected {
    background-color: #EE753C !important;
    color: #fff !important;
}
.course_list /deep/ .ly-tab-active-bar,div {
    background-color: none !important;
}
.classify_detail {
    width: 100%;
    height: auto;
    background: #F5F5F5;
    overflow: hidden;
}
.course_list {
    width: 100%;
    height: 44px;
    background: rgba(255,255,255,1);
    overflow: hidden;
    opacity: 1;
    border-bottom: 1px solid #f5f5f5;
}
.search_detail {
    width: 750px;
    height: 60px;
    background: rgba(255,255,255,1);
    opacity: 1;
    border-bottom: 1px solid #f5f5f5;
}
.list {
    width: 100%;
    background: #fff;
    margin-top: 10px;
}
// 右侧刷选
.shuaxuan {
    width: 306px;
    height: 100vh;
    background: rgba(255,255,255,1);
    opacity: 1;
}
.shuaxuan_scroll {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
.shuaxuan_list {
    margin-left: 12px;
    font-family: Source Han Sans CN;
    overflow: hidden;
    padding-bottom: 10px;
    margin-top: 16px;
    p {
        font-size: 10px;
        color: #8D8D8D;
    }
    ul {
        width: 314px;
        li {
            font-size: 0.32rem;
            border-radius: 0.426667rem;
            height: 0.853333rem;
            line-height: 0.853333rem;
            float: left;
            margin-top: 0.426667rem;
            margin-right: 7px;
            background: #F5F5F5;
            color: #616161;
            width: 86px;
            text-align: center;
            padding:0px 2px;
            overflow: hidden;
        }
        input {
            display: block;
            float: left;
            width: 110.5px;
            border-radius: 16px;
            height: 32px;
            text-align: center;
            background: #F5F5F5;
            margin-top: 17px;
            border: none;
            outline: none;
        }
        .price {
            text-align: center;
        }
        .line {
            float: left;
            display: inline-block;
            height: 30px;
            width: 27px;
            border: 2px solid;
            border-color: transparent transparent #C5C5C5 transparent;
            margin: 0px 6px 0px 6px
        }
    }
}
.foot_button {
    width: 300px;
    height: 32px;
    margin-top: 126px;
    margin-bottom: 32px;
    margin-left: 38px;
    button {
        width: 110.5px;
        height: 32px;
        border: 1px solid rgba(238,117,60,1);
        opacity: 1;
        border-radius: 32px;
        align-items: center;
        line-height: 32px;
        padding-top: -2px;
        float: left;
        margin-right: 16px;
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
    }
    .reset_data {
        background: #fff;
        color: #EE753C;
    }
    .sure_oprate {
        background: #EE753C;
        color: #fff;
    }
}
</style>

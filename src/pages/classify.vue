<template>
  <div ref="box" class="classify">
    <search :index="false" :isShow = true @searshow="searshow" ></search>
    <div class="center1">
        <div class="left">
          <ul >
            <li>推荐分类</li>
            <li @click="fn(a)" :class="{color:(a).hide}" :key="a.gc_id" v-for="a in classifyList">{{a.gc_name}}</li>
          </ul>
        </div>
        <div class="right">
          <div class="banner">
            <mt-swipe :auto="4000">
              <mt-swipe-item><img src="../assets/banner.png"></mt-swipe-item>
              <mt-swipe-item><img src="../assets/banner2.png"></mt-swipe-item>
              <mt-swipe-item><img src="../assets/banner3.png" alt=""></mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="language" :key="lan.index" v-for="lan in language">
              <div class="language_hed">
                {{ lan.name }}
              </div>
              <div class="language_bot">
                <!-- <div class="language_bots" :key="b.id" v-for="b in language"> -->
                <div class="language_bots">
                    <p @click="showDetail(b.gc_id)" :key="b.gc_id" v-for="b in lan.list">{{b.label}}</p>
                    <div class="qingchu"></div>
                </div>
              </div>
          </div>
          <!-- <div class="language">
              <div class="language_hed">
                技术语言
              </div>
              <div class="language_bot">
                <div class="language_bots" :key="b.id" v-for="b in language">
                    <p :key="b.id" v-for="b in language[0].name1">{{b.name}}</p>
                </div>
              </div>
          </div> -->
        </div>
        <div class="qingchu"></div>
    </div>
    <foot>
      <span slot="two">
        <img src="../assets/foot/zu68.png" />
        <p style="color:#EE753C">分类</p>
        </span>
    </foot>
  </div>
</template>

<script>
import request from "../common/request"
import search from "../components/search"
import foot from '../components/foot'
import img5 from "../assets/foot/zu67.png"
import img6 from "../assets/foot/zu68.png"
import img7 from "../assets/foot/zu70.png"
import img8 from "../assets/foot/zu71.png"
export default {
  name: 'classify',
  created(){
    this.categoryList()
  },
  data () {
    return {
        hide: false,
        imgs:img6,
        add:false,
        goodsList: [],
        classifyList:[
          {id:1,name:"编程/技术/开发",hide:false},
          {id:2,name:"编程/技术/开发",hide:false},
          {id:3,name:"编程/技术/开发",hide:true},
          {id:4,name:"编程/技术/开发",hide:false},
          {id:5,name:"编程/技术/开发",hide:false},
          {id:6,name:"编程/技术/开发",hide:false},
          {id:7,name:"编程/技术/开发",hide:false},
          {id:8,name:"编程/技术/开发",hide:false},
          {id:9,name:"编程/技术/开发",hide:false},
          {id:10,name:"编程/技术/开发",hide:false},
          {id:11,name:"编程/技术/开发",hide:false},
          {id:12,name:"编程/技术/开发",hide:false},
          {id:13,name:"编程/技术/开发",hide:false},
        ],
        language:[
          {name1:[{name:"PHP",id:1},{name:"PHP",id:2},{name:"PHP",id:3},]},
          {name1:[{name:"PHP",id:1},{name:"PHP",id:2},{name:"PHP",id:3},]},
          {name1:[{name:"PHP",id:1},{name:"PHP",id:2},{name:"PHP",id:3},]},
          {name1:[{name:"PHP",id:1},{name:"PHP",id:2},{name:"PHP",id:3},]},
          ],
          id:""
    }
  },
  components:{
      foot,search
  },
  methods:{
    fn(a){
      for(var y=0;y< this.classifyList.length;y++){
          (this.classifyList[y]).hide=false;
     }
     (a).hide = true
    //  this.$refs.list[i-1].className
    this.id = a.gc_id
    let This = this;
    let params = { parent_id:a.gc_id}
    var name = "categoryListByCid"
    This.goodsList = []; // 清空数组
    // name 是当前接口名称存在store中的key
    request.AJAX(this.$AjaxUrl.categoryListByCid,params,name,This).then(()=>{
      this.language = this.$store.state.categoryListByCid.data.data.list
      for (var i in this.language) {
        for (var j in  this.language[i].list) {
          This.goodsList.push(this.language[i].list[j])
        }
      }
    })
    },
    categoryList(){
      //保存当前页面的this
      let This=this 
      //存入参数
      let params = {
          parent_id : 0
      };  
      var name = "categoryList"
      // name 是当前接口名称存在store中的key
      request.AJAX(this.$AjaxUrl.categoryList,params,name,This).then(()=>{
        this.classifyList = this.$store.state.categoryList.data.data.list;
        this.fn(this.classifyList[0])
      })
    },
    showDetail(gc_id) {
      this.$router.push({path: '/indexclassifyDetail', name: 'classifyDetail', params: {gc_id:gc_id, goodsList: this.goodsList,parent_id:this.id }});
    },
     searshow () {
      this.$router.push("/searchgoods");

    }
  }
}
</script>

<style scoped lang="less">
.classify{
 
}
.classify /deep/ .heder{
  top:0;
  margin: 14px auto;
}
.classify /deep/ .heder_text{
    width: 270px!important;
}
.color{
  background-color:#fff;
  color:rgba(238,117,60,1) !important;
  border-left: 2px solid rgba(238,117,60,1);
}

.center1{
  width: 100%;height: auto; margin-bottom: 60px;
  .left{
    width: 180/2px;min-height: 100vh;background-color: #f5f5f5;float: left;
    ul{
      width: 100%;height: 100%;
      li{
        width: 100%;height:88/2px;line-height: 44px;text-align: center ;
        font-size:24/2px;
        font-weight:400;color:rgba(97,97,97,1);
      }
    }
  }
  .right{
    width: 570/2px;height: auto;background:#fff ;float: left;
    .banner{
      width: 535/2px;height: 100px;margin: 10px;
    }
    .banner /deep/ img{
      width: 100%;
      height: 100%;
    }
    .language{
      width: 535/2px;height: auto;;margin: 0 auto;
      .language_hed{
        font-size: 14px;font-weight: 900;width: 100%;height: 30px;line-height: 30px;
      }
      .language_bot{
        width: 100%;height: auto;
        .language_bots{
            width: 100%;
          p{
          width:156/2px;text-align: center;
          height:64/2px;line-height: 64/2px;
          border:1px solid rgba(141,141,141,1);
          opacity:1;font-size:12px;color:rgba(97,97,97,1);
          border-radius:32px;float: left;margin-bottom: 10px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          }
          p:nth-of-type(3n+2){
              margin: 0 11.5px
          }      
        }  
      }
    }
  }
}


.classify /deep/ .mint-searchbar-inner  {
    border-radius: 20px;border:1px solid #f5f5f5; background-color: #f5f5f5;
    
}
.classify /deep/ .mint-search{
  height: auto !important;
}
.classify /deep/ .mint-searchbar{
    margin:6px 0px 6px 6px;border-bottom: 2px solid #f5f5f5
}
.classify /deep/ .mintui-search{
  margin: 9px;
}
.classify /deep/ .mint-searchbar-cancel{
    display: block !important;font-size: 14px;color: #000;margin:0  16px;
}
.classify /deep/ input{
    background-color: #f5f5f5;
}
.classify /deep/ .mint-searchbar{
    background-color: #fff;
}


</style>

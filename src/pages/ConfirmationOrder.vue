//首页
<template>
  <div class="ConfirmationOrder">
      <management :message="box"></management>
  </div>
</template>

<script>
import { MessageBox ,Indicator} from 'mint-ui';
import request from "../common/request"
import management from "../components/management"
export default {
  name: 'ConfirmationOrder',
  components:{management},
  created(){},
  data () {
    return {
            box:[
                {
                   message:[
                       {text:"一大堆废话就是为了显示",dengji:"高级",pic:"￥1234.00",del:"￥998",},
                       {text:"一大堆废话就是为了显示",dengji:"高级",pic:"￥1234",del:"￥998",},
                    ],
                    store:{name:"职业路径化系统"}
                },
                {
                   message:[
                       {text:"一大堆废话就是为了显示我很牛的样子哈哈",dengji:"高级",pic:"￥1234",del:"￥998",},
                    ],
                    store:{name:"职业路径化系统"}
                }
            ],
    }
  },
  methods:{

  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

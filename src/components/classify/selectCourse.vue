<template>
    <div class="select_course">
        <ly-tab v-model="selectedId" :items="items" ref = "lists" :options="options" @change="selectChange(selectedId)"></ly-tab>
    </div>
</template>

<script>
import Vue from 'vue'
import LyTab from 'ly-tab'
import { type } from 'os'
Vue.use(LyTab)
export default {
    name: 'select_course',
    props: {
        items:{
            type:Array,
            required: true,
            default: [
                {label: '首页'},
                {label: '推荐'},
                {label: 'Android'},
                {label: '前端'},
                {label: '后端'},
                {label: 'iOS'},
                {label: '产品'},
                {label: '人工智能'},          
                {label: '产品'},
                {label: '人工智能'},
                {label: '设计'}
            ],
        },
        gc_id: {
            type:Number,
            required: true,
            default: 0
        },
        // 新手福利  分类公用组件  新手福利传递此参数
        is_newUser: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    data() {
        return {
            selectedId: 0,
            select_color: '',
            options: {  // 选中时下边框为红色，页面取消显示，则为白色
                activeColor: "#fff"
            },
            getNodes: [] // 获取span父节点，然后修改span字体样式，与ui图保持一致样式
        }
    },
    methods: {
        selectChange(selectedId) {
            for (var i = 0; i< this.getNodes.length; i++) {
                if (i == selectedId) {
                    this.getNodes[i].firstElementChild.style="color:#EE753C"
                    if (this.is_newUser) {this.getNodes[i].firstElementChild.style="color:#F47152;font-size: 14px;font-weight: 600"}
                    var id = this.items[i].gc_id // 获取此时的gc_id 传到父组件，重新调用接口
                    this.$emit('getGcId', {gc_id: id})
                    this.$store.state.selectCourse = i // 父组件动态监听，发生变化，父组件调用select_search组件方法
                    this.$store.state.get_gc_id = id // 父组件调用select_search组件方法 无法获取正确的gc_id,解决方法： 动态获取
                }
                if (i != selectedId) {
                    this.getNodes[i].firstElementChild.style="color:#000"
                    if (this.is_newUser) {this.getNodes[i].firstElementChild.style="color:#F58369"}
                }
            }
        },
        watch_items() {
            
        }
    },
    mounted() {
        this.getNodes = document.getElementsByClassName('ly-tab-item-label')
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].gc_id == this.gc_id) {
                this.selectedId = i  // 默认选择第几个元素
                this.getNodes[i].firstElementChild.style="color:#EE753C" // 默认选中状态颜色
                if (this.is_newUser) {this.getNodes[i].firstElementChild.style="color:#F47152;font-size: 16px;font-weight: 600"}
                console.log(this.getNodes[i].firstElementChild.style)
                this.$store.state.get_gc_id = this.items[i].gc_id // 父组件调用select_search组件方法 无法获取正确的gc_id,解决方法： 动态获取
            } else {
                if (this.is_newUser) {this.getNodes[i].firstElementChild.style="color:#F58369"}
            }
        }
    }
}
</script>

<style lang="less" scoped>
// .select_course /deep/ .ly-tab-active-bar {
//     background-color: #fff !important;
// }

</style>

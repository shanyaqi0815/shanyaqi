<template>
  <div class="ruleDes">
    <p>1. 下单支付后会预估收入里查看（会有不定期的延时）</p>
    <p>2.订单在确认收货（结算）后才会呈现在结算预估入里。</p>
    <p>3.当申请后（维权）成功后会从预估收入及结算预估收入中剔除。</p> 
    <p>4.取消订单、退款退货、申请售后维权都会产生预估收入和结算 收入的数据变动。</p>
  </div>
</template>

<script>
export default {
  name: "ruleDes",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='less' scoped>
  .ruleDes {
    font-size: 12px;
    height: 25px;
    line-height: 25px;
    padding: 5px 15px;
    p {
    color: #8D8D8D;
    }
  } 
</style>
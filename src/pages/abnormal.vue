<template>
  <div class="beij">
    <!-- 加载失败 -->
       <FailedLoads/>
       <!-- 收藏为空 -->
       <!-- <CollectionEmpty/> -->
       <!-- 订单为空 --> 
       <!-- <OrderEmpty/> -->
       <!-- 报错 -->
       <!-- <ReportErrors/> -->
  </div>
</template>

<script>
import FailedLoads from "../components/FailedLoads"
// import CollectionEmpty from "../components/CollectionEmpty"
// import OrderEmpty from "../components/OrderEmpty"
// import ReportErrors from "../components/ReportErrors"
export default {
  components: {
    FailedLoads,
    // CollectionEmpty,
    // OrderEmpty,
    // ReportErrors
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
</style>
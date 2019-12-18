<template>
  <div class="beij">
    <SearchEmp />
      <div class="box1">
        <router-link class="one" to="SearchEmpty">换个姿势搜一搜</router-link>
      </div>
  </div>
</template>

<script>
import SearchEmp from "../components/SearchEmp";
export default {
  components: {
    SearchEmp
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
a {
  text-align: center;
  padding-bottom:3px;
  text-decoration: none;
  color: #EE753C;
  border-bottom: 1px solid #EE753C;
}
.box1{
  width:120px;
  margin:0 auto;
  margin-top:16px;
}

</style>
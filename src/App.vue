<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
img{
  font-size:0;line-height:0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0px;
  list-style:none;
}
a {
  color: #42b983;
}
*{
  margin: 0;padding: 0;color: #000;
}
.qingchu{
  clear: both;
}
select{
  outline: none;
  -webkit-appearance: none;
}
input:focus{
  outline: none;
}
</style>

<template>
  <div class="home">
    {{msg}}
  <box></box>
  <box1></box1>
  </div>
</template>

<script>
import box from './a'
import box1 from '../pages/box'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    box,box1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

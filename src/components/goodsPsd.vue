<template>
      <div class="box-one">
        <label for="password" class="password_label">
          <ul class="pass_word">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <input type="password" v-model="pass_word" id="password" @input="check_pass">
          </ul>
        </label>
      </div>
</template>

<script>
export default {
  name:"box-one",
  data() {
    return {
      pass_word: ''
    }
  },
  methods: {
    check_pass() {
      var pass_number = 6
      var li_array = document.getElementsByClassName('pass_word')[0].children
      for (var i = 0; i < pass_number; i++) {
        if (this.pass_word[i]) {
          li_array[i].innerHTML = "●"
        } else {
          li_array[i].innerHTML = ""
        }
      }
      if (this.pass_word.length == pass_number) (
        this.$emit('success_pass', {pass_word: this.pass_word})
      )
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* .beij {
  background-color: #f5f5f5;
  height: 100vh;
  font-size: 14px;
  padding-top: 50px;
} */
.password_label {
  height: 50px;
	clear: both;
}
.box-one {
  width: 100%;
  height: 50px;
  margin: 0 auto;
}
.box-one ul li {
  float: left;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: #fff;
  margin-left: 6px;
  text-align: center;
  font-size: 14px;
}
.box-one ul li:first-child {
  margin-left: 0px;
}
input {
  border: none;
  opacity: 0;
}
li::-webkit-input-placeholder {
  color: #c5c5c5;
}

li::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c5c5c5;
}
li:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #c5c5c5;
}
li:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #c5c5c5;
}

</style>

<template>
  <div class="HaiyunzhouRules">
    <div class="beij">
      <div class="box">
        <div class="box-wenz" v-html="ass">{{ass}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../common/request";
export default {
  name: "HaiyunzhouRules",
  data() {
    return {
      rules: [],
      ass: "",
      rue: [],
      c: "",
      box: this.mianzhe
    };
  },
  props: ["mianzhe"],
  watch: {
    mianzhe: function(newval, oldval) {
      this.fn();
    }
  },
  methods: {
    fn() {
      console.log(this.mianzhe);
      console.log(typeof this.mianzhe);
      this.c = this.mianzhe;
      const This = this;
      const params = "";
      request
        .AJAX(this.$AjaxUrl.getAgreements, params, "getAgreements", This)
        .then(() => {
          this.rules = this.$store.state.getAgreements.data.data.article[this.c];
          console.log(this.rules)
          this.ass = this.rules.article_content
        });
    }
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
.box {
  width: 350px;
  margin: 0 auto;
}
.box-txt {
  width: 150px;
  height: 24px;
  margin: 0 auto;
  font-size: 24px;
  font-weight: bold;
  padding-top: 32px;
  padding-bottom: 16px;
}
.box-wenz {
  text-indent: 20px;
  color: #616161;
}
</style>
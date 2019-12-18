<template>
  <div class="discount">
    <div class="content" v-for="msg in messages" :key="msg.message_id">
      <div class="time">{{ msg.message_time }}</div>
      <div class="mainCon">
        <h3>{{ msg.system_type1}}</h3>
        <div class="detail">
          <div class="pic">
            <img src="../assets/notice.png" alt />
          </div>
          <p class="ad">{{ msg.message_body }}</p>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../common/request"

export default {
  name: "discount",
  props: [""],
  data() {
    return {
      member_id: "",
      message_type: "",
      messages: []
    };
  },
  created() {
    this.renderData();
  },
  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    renderData() {
      this.member_id = this.$store.state.index.data.data.member_info.member_id;
      let This = this;
      let params = {
        member_id: this.member_id,
        message_type: 1
      };
      request
        .AJAX(this.$AjaxUrl.messageTypeList, params, "messageTypeList", This)
        .then(() => {
          this.messages = This.$store.state.messageTypeList.data.data.data;
        });
        console.log(params)
    }
  },

  watch: {}
};
</script>
<style lang='' scoped>
* {
  margin: 0;
  padding: 0;
}
.discount {
  width: 411px;
  font-size: 16px;
  padding: 20px 0;
  margin: 0 auto;
  background-color: #f5f5f5;
}
.content {
  width: 343px;
  margin: 15px;
}
.pic {
  float: left;
  margin-right: 10px;
}
.clear {
  clear: both;
}
.pic img {
  height: 80px;
}
.time {
  width: 60px;
  height: 24px;
  line-height: 24px;
  margin: 0 auto;
  background-color: #ededed;
  color: #c5c5c5;
  text-align: center;
  border-radius: 20px;
  font-size: 12px;
  margin-bottom: 15px;
}
.mainCon {
  height: 138px;
  background-color: #fff;
  border-radius: 20px;
  padding: 15px;
}
.mainCon h3 {
  text-align: center;
}
.detail {
  margin-top: 10px;
}
.txtle {
  font-size: 16px;
}
.ad {
  font-size: 14px;
  color: #616161;
  padding-top: 10px;
  height: 40px;
  margin-bottom: 10px;
}
.link {
  display: block;
  font-size: 12px;
  color: #616161;
}
</style>
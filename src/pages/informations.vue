<template>
  <div class="notice">
    <div class="infro" v-for="list in virtualData" :key="list.msgid">
      <div class="img">
        <img :src="list.msgimg" alt />
        <!-- <img src="../assets/notice2.png" alt /> -->
      </div>
      <div class="content">
        <div class="title">
          <span class="sub">{{ list.msgTitle}}</span>
          <span class="time">{{ list.msgTime }}</span>
        </div>
        <div class="detail">{{ list.msgContent}}</div>
      </div>
    </div>
    <div
      class="infro"
      @click="detailMsg(msg.message_type)"
      v-for="msg in messages"
      :key="msg.message_type"
    >
      <div class="img">
        <img :src="msg.from_member_avatar" alt />
      </div>
      <div class="content">
        <div class="title">
          <span class="sub">{{ msg.message_type1}}</span>
          <span class="time">{{ msg.message_time}}</span>
        </div>
        <div class="detail">{{ msg.message_body}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem, Indicator } from "mint-ui";
import request from "../common/request";
import { MessageBox } from "mint-ui";
import img1 from "../assets/notice.png"
import img2 from "../assets/notice2.png"
import img3 from "../assets/notice3.png"
export default {
  name: "notice",
  data() {
    return {
      member_id: "",
      messages: [],
      message_type: "",
      message_type1: "",
      message_time: "",
      message_body: "",
      virtualData: [
        {
          msgid: 11,
          msgTitle: "通知信息",
          msgTime: "一周前",
          msgContent: "您的妙法莲华经正在派送……",
          msgimg: img1
        },
        {
          msgid: 22,
          msgTitle: "物流信息",
          msgTime: "一天前",
          msgContent: "您的妙法莲华经正在派送……",
          msgimg: img2
        },
        {
          msgid: 33,
          msgTitle: "客服信息",
          msgTime: "一周前",
          msgContent: "您的妙法莲华经正在派送……",
          msgimg:img3
        }
      ]
    };
  },
  components: {},
  created() {
    // this.renderMsg()
    if (this.$store.state.index == undefined) {
      MessageBox.confirm("您好，您还未登录账号，请登录账号", "提示")
        .then(action => {
          if (action == "confirm") {
            this.$router.push("/Password_register");
          }
        })
        .catch(err => {
          if (err == "cancel") {
            this.$router.push("/");
          }
        });
    } else {
      this.renderMsg();
    }
  },
  methods: {
    detailMsg(typeNum) {
      if (typeNum == 1) {
        this.$router.push({ name: "noticeMsg", params: { msgType: 1 } });
      }
    },
    renderMsg() {
      // Indicator.open("加载中....")
      this.member_id = this.$store.state.index.data.data.member_info.member_id;
      let This = this;
      let params = { member_id: this.member_id };
      request
        .AJAX(this.$AjaxUrl.noticeMsg, params, "noticeMsg", This)
        .then(() => {
          this.messages = This.$store.state.noticeMsg.data.data.data;
        });
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.notice {
  // width: 411px;
  font-size: 16px;
  padding: 20px 0;
  margin: 0 auto;
  background-color: #f5f5f5;
}
.infro {
  height: 45px;
  // width: 100%;
  background-color: #fff;
  padding: 20px 15px;
  margin-bottom: 15px;
}
.img {
  display: inline-block;
  float: left;
  margin-right: 10px;
}
.sub {
  font-size: 16px;
  font-weight: normal;
  width: 100%;
  margin-right: 150px;
}
img {
  height: 45px;
}
.title {
  margin-bottom: 5px;
}
.time,
.detail {
  font-size: 12px;
  color: #8d8d8d;
}
.detail {
  height: 45px;
  width: 70%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
</style>

<template>
  <div class="points_list">
    <div class="box-two" :key="list.index" v-for="list in points_list">
      <div class="layout-two">
        <div class="two">
          <p class="two-txt">{{ list.pl_desc }}</p>
          <div class="two-txt1">
            <span>{{ list.pl_addtime }}</span>
            <!-- <span>15:15:15</span> -->
          </div>
        </div>
        <p class="two-wz">+{{ list.pl_points }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'points_list',
  props: ['points_list']
};
</script>

<style scoped>
.points_list {
  padding-bottom: 10px;
}
.box-two {
  width: 343px;
  margin: 0 auto;
  height: 68px;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 10px;
}
.layout-two {
  width: 311px;
  margin: 0 auto;
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
}
.two-txt {
  font-weight: bold;
  margin-bottom: 5px;
}
.two-txt1 span {
  font-size: 12px;
  color: #8d8d8d;
  margin-right: 3px;
}
.two-wz {
  color: #ee753c;
  font-weight: bold;
}
a {
  text-decoration: none;
  color: black;
}
.one-jf {
  color: #8d8d8d;
}
.one-wen {
  position: absolute;
  padding-top: 16px;
  padding-left: 26px;
  top: 20px;
  left: -50px;
  width: 74px;
  height: 87px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 3px #b8b5b5;
}
.one-wenz1,
.one-wenz2 {
  margin-bottom: 15px;
}
</style>

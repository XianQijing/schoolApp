<template>
  <div class="index">
    <div class="main">
      <router-view/>
    </div>
    <div class="sideBar">
      <img src="../assets/favourite.png" alt="">
      <img @click="$router.push({name: 'Pay'})" src="../assets/sao.png" alt="">
      <img @click="$router.push({name: 'PersonInfo'})" src="../assets/person.png" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.index {
  height: 100%;
  overflow: hidden;
  .sideBar {
    position: relative;
    bottom: 0.63rem;
    width: 100%;
    background-color: rgba(68, 66, 97, 0.7);
    height: 1.26rem;
    border-radius: 46%;
    display: flex;
    justify-content: space-around;
    img:nth-child(1) {
      width: 0.3rem;
      height: 0.29rem;
      position: relative;
      top: 0.3rem;
    }
    img:nth-child(2){
      width: 0.44rem;
      height: 0.44rem;
    }
    img:nth-child(3) {
      width: 0.3rem;
      height: 0.29rem;
      position: relative;
      top: 0.3rem;
    }
  }
  .main {
    height: 100%;
    overflow: auto;
  }
}
</style>

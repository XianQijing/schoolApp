<template>
  <div class="bindCard">
    <div class="form">
      <van-field v-model="value" placeholder="请输入用户名" clearable/>
      <van-field v-model="value" placeholder="请输入用户名" clearable/>
      <van-field v-model="value" placeholder="请输入用户名" clearable/>
      <van-field v-model="value" placeholder="请输入用户名" clearable/>
      <van-field v-model="value" placeholder="请输入用户名" clearable/>
      <button>立即绑定</button>
    </div>
  </div>
</template>
<script>
import { Field } from 'vant'
export default {
  name: 'bindCard',
  data () {
    return {
      value:''
    }
  },
  components: {
    [Field.name]: Field,
  }
}
</script>
<style lang="less" scoped>
.bindCard {
  height: 100%;
  background-image: url('.././assets/bindBack.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 16px;
  .form {
    padding: 0.94rem 0.46rem 0.25rem 0.46rem;
    button{
      border: none;
      border-radius: 0.25rem;
      width: 2.76rem;
      height: 0.44rem;
      margin-top: 0.4rem;
      background:rgba(218,203,255,0.5);
      color: white;
      font-size:0.17rem;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .van-cell {
      padding: 0;
      // background: none;
      overflow: hidden;
      width: 2.76rem;
      border-radius:0.25rem;
      height: 0.5rem;
      border: none;
      padding: 0 0.3rem;
      font-size: 0.15rem;
      font-weight:600;
      font-family: 'PingFangSC-Semibold';
      margin-bottom: 0.18rem;
    }
  }
}
</style>

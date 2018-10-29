<template>
  <div class="bindCard">
    <div class="form">
      <!-- <van-field v-model="value" placeholder="请输入用户名" @click="ss" disabled/> -->
      <div @click="select($event)" class="school">{{school}}<p class="arrow"></p></div>
      <van-field v-model="value" placeholder="请输入用户名" clearable/>
      <van-field v-model="value" placeholder="请输入用户名" clearable/>
      <van-field v-model="value" placeholder="请输入用户名" clearable/>
      <van-field v-model="value" placeholder="请输入用户名" clearable/>
      <button>立即绑定</button>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker :columns="columns" @change="onChange" />
    </van-popup>
  </div>
</template>

<script>
import { Field, Popup, Picker } from 'vant'
export default {
  name: 'bindCard',
  data () {
    return {
      value: '',
      show: false,
      school: '请选择你的学校',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  components: {
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Picker.name]: Picker
  },
  methods: {
    onChange (picker, value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`)
      this.school = value
    },
    select (e) {
      this.show = true
      e.target.getElementsByClassName('arrow')[0].style.transform = 'rotate(135deg)'
    }
  },
  watch: {
    show (val) {
      if (val === true) {
        document.getElementsByClassName('arrow')[0].style.transform = 'rotate(135deg)'
      } else {
        document.getElementsByClassName('arrow')[0].style.transform = 'rotate(45deg)'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bindCard {
  height: 100%;
  background-image: url('../assets/bindBack.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 16px;
  .form {
    padding: 0.94rem 0 0.25rem 0;
    width: 2.78rem;
    margin: 0 auto;
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
      padding: 0 0.2rem 0 0.4rem;
      font-size: 0.15rem;
      font-weight:600;
      font-family: 'PingFangSC-Semibold';
      margin-bottom: 0.18rem;
      background-repeat: no-repeat;
      background-size: 0.19rem;
      background-position: 0.1rem center;
      input {
        border-radius: none;
      }
    }
    .school {
      padding: 0;
      line-height: 0.5rem;
      overflow: hidden;
      width: 2.16rem;
      border-radius:0.25rem;
      height: 0.5rem;
      border: none;
      padding: 0 0.2rem 0 0.4rem;
      font-size: 0.15rem;
      font-weight:600;
      font-family: 'PingFangSC-Semibold';
      margin-bottom: 0.18rem;
      background-repeat: no-repeat;
      background-size: 0.19rem;
      background-position: 0.1rem center;
      background-color: white;
      background-image: url(.././assets/school.png);
    }
    .van-cell:nth-child(2) {
      background-image: url(.././assets/name.png);
    }
    .van-cell:nth-child(3) {
      background-image: url(.././assets/number.png);
    }
    .van-cell:nth-child(5) {
      background-image: url(.././assets/password.png);
    }
    .van-cell::-webkit-input-placeholder{
      color: #CECFCE;
      font-size: 0.15rem;
      font-weight: 500;
    }
  }
}
</style>

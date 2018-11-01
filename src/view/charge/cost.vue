<template>
  <div class="cost">
    <div class="Menu">
      <div class="main">
        <p>
          {{chargeType | title}}
        </p>
        <div v-if="chargeType === '1' || chargeType === '0'" class="type">
          <label>
            <input type="radio" name="feiyong" v-model="radio" value="水费">
            <div class="box">
              <div v-if="radio === '水费'"></div>
            </div>水费
          </label>
          <label>
            <input type="radio" name="feiyong" v-model="radio" value="电费">
            <div class="box">
              <div v-if="radio === '电费'"></div>
            </div>电费
          </label>
        </div>

        <div v-if="chargeType === '2' || chargeType === '3'" class="type">
          <label>
            <input type="radio" name="feiyong" v-model="radio" value="话费">
            <div class="box">
              <div v-if="radio === '话费'"></div>
            </div>水费
          </label>
          <label>
            <input type="radio" name="feiyong" v-model="radio" value="网费">
            <div class="box">
              <div v-if="radio === '网费'"></div>
            </div>电费
          </label>
        </div>

        <div>
          <div class="message">
            <span>楼号</span>
            <input type="text">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cost',
  data () {
    return {
      radio: '水费',
      chargeType: '1',
      title: ''
    }
  },
  mounted () {
    this.chargeType = this.$route.query.type
  },
  filters: {
    title: function (value) {
      if (value === '1' || value === '0') return '生活缴费'
      if (value === '2' || value === '3') return '其他缴费'
    }
  }
}
</script>

<style lang="less" scoped>
.cost {
  height: 100%;
  background-image: url('../../assets/bindBack.png');
  font-size: 0.16rem;
  .main {
    width: 3.15rem;
    height: 3.25rem;
    background:rgba(218,203,255,0.41);
    margin: auto;
    border-radius: 0.1rem;
    p {
      padding-left: 0.11rem;
      padding-top: 0.11rem;
      font-size: 0.18rem;
    }
    input[type=radio]{
      width: 0.16rem;
      position: relative;
      left: 0.25rem;
      height: 0.2rem;
      width: 0.2rem;
      opacity: 0;
    }
    .box {
      display: inline-block;
      width: 0.2rem;
      height: 0.2rem;
      border: 0.01rem solid #ffffff;
      border-radius: 0.5rem;
      vertical-align: text-top;
      margin-right: 0.09rem;
      div {
        margin-top: 0.02rem;
        margin-left: 0.02rem;
        background-color: #D39DFF;
        height: 0.16rem;
        width: 0.16rem;
        border-radius: 0.5rem;
      }
    }
    .type {
      margin-top: 0.3rem;
      font-size: 0.17rem;
      label:nth-child(2){
        margin-left: 1.1rem;
      }
    }
    .message {
      margin: 0 0.19rem;
      border-bottom: 1px solid #d6d5d5;
      font-size: 0.18rem;
      height: 0.8rem;
      input {
        width: 2rem;
        padding: 0;
        border: none;
        border-radius: 0;
        background: none;
        text-align: center;
      }
    }
  }
}
</style>

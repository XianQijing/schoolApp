<template>
  <div class="pay_fee">
    <header-bar />
    <div class="choose">
      <p>充值金额</p>
      <li v-for="(o, i) in list1" :key="i" :class="{active: num === i}" @click="tab(i)">{{ o }}</li>
      <div class="auto_input">
        <span>输入金额：</span>
        <input type="number" v-model="money">
      </div>
      <van-checkbox-group v-model="result">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in list"
            clickable
            :key="item"
            :title="`复选框 ${item}`"
            @click="toggle(index)"
          >
            <!-- <van-checkbox :name="item" ref="checkboxes" /> -->
            <van-checkbox :name="item" ref="checkboxes" >
              <img
                slot="icon"
                slot-scope="props"
                :src="props.checked ? icon.active : icon.normal"
              >
            </van-checkbox>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </div>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, CellGroup, Cell } from 'vant'
import HeaderBar from '@/components/headerBar'
import img1 from '../assets/img/checked.png'
import img2 from '../assets/img/check.png'
export default {
  name: 'PayFee',
  data () {
    return {
      list1: ['充200元', '充500元', '充300元', '充100元'],
      num: 0,
      money: '',
      list: ['a', 'b', 'c'],
      result: ['a', 'b'],
      icon: {
        normal: img2,
        active: img1
      }
    }
  },
  methods: {
    tab (i) {
      this.num = i
    },
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    }
  },
  components: {
    HeaderBar,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  }
}
</script>

<style lang="less" scoped>
.van-checkbox img {
  width: 0.17rem;
}
.van-checkbox__icon--checked .van-icon {
  border-color: #DACBFF;
  background-color: #DACBFF;
}
.van-cell:not(:last-child)::after {
  border: 0;
}
.van-hairline--top-bottom::after {
  border: 0;
}
.van-cell-group, .van-cell {
  background: rgba(0, 0, 0, 0);
  color: #fff;
  border: 0;
}
.pay_fee {
  overflow: auto;
  background-color:rgba(72,72,111,0.3);
  background-image: url('../assets/bindBack.png');
  height: 100%;
  font-size: 0.16rem;
  .choose {
    color: #fff;
    padding-top: 0.64rem;
    width:3.15rem;
    margin: 0 auto;
    p {
      // text-indent: 0.26rem;
      font-size: 0.17rem;
      padding-bottom: 0.22rem;
    }
    li {
      margin-right: 0.12rem;
      &:nth-of-type(2n) {
        margin-right: 0;
      }
      list-style: none;
      float: left;
      width: 1.51rem;
      height: 0.64rem;
      line-height: 0.64rem;
      text-align: center;
      border-radius:20px;
      // border:1px solid rgba(0,0,0,0.21);
      margin-bottom: 0.16rem;
      color: #898989;
      background: rgba(156, 142, 236, 0.125);
      &.active {
        background:#9e8eed;
        color: #fff;
        // border-color:rgba(63,71,90,1);
      }
    }
    .auto_input {
      clear: both;
      // width:3.15rem;
      height:0.48rem;
      line-height:0.48rem;
      // border:1px solid rgba(0,0,0,1);
      border-radius: 1.53vw;
      margin: 0 auto;
      padding-left: 2vw;
      overflow: hidden;
      color: #898989;
      background: rgba(156, 142, 236, 0.125);
      input {
        border: 0;
        line-height:12vw;
        font-size: 3.5vw;
        outline: none;
        width: 2.2rem;
        // float: right;
        border-radius: 0;
        padding: 0;
        background: rgba(156, 142, 236, 0)
      }
    }
  }
}
</style>

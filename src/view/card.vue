<template>
  <div class="card">
    <header-bar/>
    <div class="Menu">
      <div class="studentCard">
        <p>{{school}}一卡通</p>
        <p>ID&nbsp;{{id}}</p>
        <p>余额￥{{money}}</p>
        <p>充值</p>
      </div>
      <div class="bill">
        <div class="zhangdan">
          <span>账单</span>
          <div class="arrow"></div>
        </div>
        <div class="detail" v-for="(item, index) in billList" :key="index">
          <img :src="item.img" alt="">
          <div>
            <p>{{item.title}}</p>
            <p>[餐饮消费]</p>
            <p>今天&nbsp;{{item.time}}</p>
          </div>
          <span>{{item.money}}</span>
        </div>
      </div>
      <div class="chart" >
        <div class="zhangdan">
          <span>账单</span>
        </div>
        <div id="main" style="width:3.45rem; height:2.5rem;margin: 0 auto"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerBar'
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/grid')
require('echarts/lib/component/dataZoom')
export default {
  name: 'card',
  components: {
    HeaderBar
  },
  data () {
    return {
      school: '晋城大学',
      id: '2475725020',
      money: '232.4',
      billList: [
        {
          title: '好吃呀-扫码转入',
          img: require('../assets/lost.png'),
          money: '8.00',
          time: '07:30'
        }
      ]
    }
  },
  mounted () {
    this.charts()
  },
  methods: {
    charts () {
      var myChart = echarts.init(document.getElementById('main'))
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          axisLine: {
            show: false
          },
          splitLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255,255,255,0.9)',
            interval: 0
          },
          splitArea: {
            interval: 5
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        grid: {
          backgroundColor: 'rgba(255,255,255,0.1)',
          show: true,
          borderWidth: '0',
          top: 0,
          left: 0,
          right: 0
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}月消费总额：{c}',
          triggerOn: 'click'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320, 1354, 1315, 1545, 1877],
          type: 'line',
          smooth: true,
          symbolSize: 10,
          symbol: 'circle',
          // showSymbol: false,
          hoverAnimation: true,
          lineStyle: {
            color: {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0,
              y2: 0,
              colorStops: [{
                offset: 0, color: '#FF91F0' // 0% 处的颜色
              }, {
                offset: 1, color: '#2FA3F4' // 100% 处的颜色
              }]
            },
            width: 4
          },
          itemStyle: {
            color: '#AA86FF',
            borderWidth: 2,
            borderColor: 'white'
          }
        }],
        dataZoom: [
          {
            type: 'inside'
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  font-size: 0.16rem;
  color: white;
  height: 100%;
  background-color: #48486F;
  overflow: auto;
  .headerBar {
    box-shadow:0px 1px 4px 0px rgba(53,52,83,0.3);
    background-color: #48486F;
  }
  .studentCard {
    height: 1.42rem;
    width: 3.29rem;
    margin: 0 auto;
    background-image: url('../assets/studentCard.png');
    margin-top: 0.1rem;
    padding: 0.09rem 0.08rem;
    p {
      width: 100%;
      color:rgba(255,255,255,0.8);
    }
    p:nth-child(2){
      font-size: 0.24rem;
      text-align: center;
      margin-top: 0.35rem;
      font-weight: 400;
    }
    p:nth-child(3){
      font-size: 0.18rem;
      text-align: center;
      font-weight: 400;
    }
    p:nth-child(4){
      font-size: 0.16rem;
      text-align: right;
      font-weight: 400;
      margin-top: 0.15rem;
    }
  }
  .bill {
    padding: 0.09rem 0.08rem;
    .detail {
      margin: 0 auto;
      background:rgba(218,203,255,0.61);
      border-radius:0.1rem;
      width: 3.45rem;
      padding:0.1rem 0 0.1rem 0;
      margin-top: 0.09rem;
      img {
        width: 0.38rem;
        height: 0.38rem;
        padding:  0 0.17rem 0 0.07rem;
      }
      div {
        display: inline-block;
        width: 70%;
        vertical-align: top;
        p:nth-child(2){
          font-size: 0.12rem;
          line-height: 0.2rem;
          font-weight: 400;
        }
        p:nth-child(3){
          font-size: 0.12rem;
          font-weight: 400;
        }
      }
      span {
        vertical-align: top;
        line-height: 0.12rem;
      }
    }
  }
  .chart {
    padding: 0.09rem 0.08rem;
  }
}
.zhangdan {
  padding: 0.1rem 0 0.08rem 0;
  span {
    font-size: 0.16rem;
  }
  .arrow {
    margin-top: 0.05rem;
    border-top: #F59EF1 3px solid;
    border-right: #F59EF1 3px solid;
  }
}
</style>

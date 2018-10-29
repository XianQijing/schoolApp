<template>
  <div class="login">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated flipInY">
        <div class="toLogin" v-if="show === true">
          <p>登录</p>
          <div>
            <div class="pwd">
              <p>账号</p>
              <input type="text" placeholder="请输入账号">
              <p>密码</p>
              <input type="password" placeholder="请输入密码">
              <button @click="$router.push('/bindCard')">登录</button>
              <p class="forget">忘记密码？</p>
              <p class="toregister">还没有账号？<span @click="ss">马上注册</span></p>
            </div>
          </div>
        </div>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated flipInY">
        <div class="toLogin" v-if="show === false">
          <p>注册</p>
          <div>
            <div class="pwd">
              <p>账号</p>
              <input type="text" placeholder="请输入账号">
              <p>密码</p>
              <input type="password" placeholder="请输入密码">
              <p>确认密码</p>
              <input type="password" placeholder="请输入密码">
              <button style="margin-top:0.05rem;">注册</button>
              <p class="toregister" style="margin-top:0.3rem"><span @click="ss">立即登录</span></p>
            </div>
          </div>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      show: true
    }
  },
  methods: {
    ss () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url(../assets/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  margin: 0;
  overflow: auto;
  position: relative;
}
.toLogin{
  height: 4.74rem;
  background: white;
  border-radius:13px 13px 13px 13px;
  width: 3.43rem;
  position: absolute;
  top:0.44rem;
  left: 0.16rem;
  margin-bottom: 1rem;
  p {
    font-size: 0.34rem;
    font-weight:bold;
    padding-top: 0.25rem;
    padding-left: 0.34rem;
  }
  div {
    height: 4.50rem;
    background:rgba(255,255,255,0.9);
    border-radius:13px 13px 13px 13px;
    width: 3.23rem;
    margin: auto;
  }
  .pwd {
    width: 2.76rem;
    margin: 0 auto;
    margin-top: 0.2rem;
    height: 2.60rem;
    font-size:16px;
    p {
      color: #9B9B9B;
      font-size:0.15rem;
      font-weight: 400;
      padding: 0;
    }
    input {
      background: #F5F5F5;
      margin: 0.12rem 0 0.23rem 0;
    }
    button {
      border-radius: 0.25rem;
      width: 100%;
      background: #212121;
      height: 0.5rem;
      border: none;
      color: white;
      font-size: 0.15rem;
      margin-top: 0.29rem;
    }
  }
  .forget {
    font-size: 0.15rem;
    text-align: center;
    padding: 0;
    margin-top: 0.42rem;
    font-weight:400;
    color:rgba(38,38,40,1);
  }
  .toregister {
    margin-top: 0.6rem;
    text-align: center;
    span {
      color: #212121;
      font-weight: 600;
    }
  }
}

</style>

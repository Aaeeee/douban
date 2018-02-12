<template>
  <div class="register-content">
      <h2>欢迎加入豆瓣</h2>
      <div class="form-content">
        <el-form :model="registerForm" :rules="rules">
            <el-form-item prop="email">
                <el-input v-model="registerForm.email" type="email" placeholder="电子邮件"></el-input>
            </el-form-item>
            <el-form-item prop="password" class="pwd">
                <el-input v-model="registerForm.password" :type="passType" placeholder="密码">
                </el-input>
                <span class="show-pwd" :class="{show: isShow}" @click="showPwd()"></span>
            </el-form-item>
            <el-form-item prop="name">
                <el-input v-model="registerForm.name" type="text" placeholder="用户名"></el-input>
            </el-form-item>
            <el-button class="form-content__submitBtn" native-type="submit" type="primary" @click="submitForm()" :disabled="!valid">立即注册</el-button>
        </el-form>
      </div>
      <div class="footer">
          <p class="agreement">点击[注册]代表你已阅读并同意用户使用协议</p>
          <a class="footer__download_app" href="#">
              下载豆瓣App
          </a>
      </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
export default{
  data () {
    return {
      registerForm: {
        email: '',
        name: '',
        password: ''
      },
      isShow: 0,
      passType: 'password',
      rules: {
        email: [
          {required: true, message: 'please enter the email', trigger: 'blur'},
          {type: 'email', message: 'please enter truely email address', trigger: 'blur,change'},
          {min: 6, max: 25, messages: 'length must be in 6 to 25 charaters.', trigger: 'change'}
        ],
        password: [
          {required: true, message: 'please enter the password', trigger: 'blur'},
          {min: 6, max: 25, messages: 'length must be in 6 to 25 charaters.', trigger: 'change'}
        ],
        name: [
          {required: true, message: 'please enter the name', trigger: 'blur'},
          {min: 2, max: 25, messages: 'length must be in 2 to 25 charaters.', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    showPwd () {
      this.isShow = this.isShow ? 0 : 1
      this.isShow ? this.passType = 'text' : this.passType = 'password'
    },
    submitForm () {
      this.$router.push({name: 'Home'})
    }
  },
  computed: {
    valid () {
      let validator = new AsyncValidator(this.rules)
      let res = false
      validator.validate(this.registerForm, err => {
        if (!err) {
          res = true
        }
      })
      return res
    }
  }
}
</script>
<style lang="scss" scoped>
.register-content {
    text-align: center;
    h2 {
      font-size: 4rem;
      font-weight: 300;
      color: #42bd56;
      text-align: center;
      margin: 10% 0 9%;
    }
    .form-content {
        padding: 2rem 1.5rem;
        .pwd {
            position: relative;
            .show-pwd {
                position: absolute;
                right: 0.2rem;
                top: 0;
                display: block;
                height: 100%;
                width: 3.2rem;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABHBJREFUWAntmEloFEEUhpOZzJBoFCeT/WCMnvRg3IgSPLjhyRWiKAp6EImQRHMQRFFBXFExLrij6CGIcYsePehBg0tAhKi4I5hJQlzDKDFhEr/XpIbOTPd0d4wbdEHxqt7733t/v66uqpmkJLe5FXAr4FbArcDfrEDyryTv6enxNjc3FyFLkpOTS4g1knEQGWSejvxC/9jbn6Cr93q99dnZ2S/R9av1i3Bra2tRd3f3KvoysgacZob4W/pZv99/NhgMvnfi74gw1ZxGBXfTJztJYoaFdARbXUpKyga7VbdFmIqOikQieyG60Cz5r+gh3oX/kbS0tG2BQECWkWmzJNzU1LSUgKcgO9g0ygAZyPOOUKX5+fkNZiE9ZgYI+lgCh7DX/AmywoM8BfQ7oVBotRkvwwrjlALZS8j5Zo4m+kdU6TJ+jR6PR15tNmNZ76XIAhMfQzVxNlPp7bHGOMIE9vKENQAXx4ITzENsV2W5ubk3jDDElLe1BrkHe6oRxkjHQ6/Py8vbp7fFEYbsMQKX6UGJxlTimc/nm5mVldWcCCc2SBcT+yZ9qBVW2SG9EtLn1LwPYQKWsrfWKqOVhGw7lZ2Qk5PzWmF7Sc2GVCH2Rux12N8oe0tLy1x2nOtqbiWJ8Y2CTKQgzwUbJUxlh5PkMbphVkGUnWCbWGc7ZY6vBzLVyHJ6NC6Y75jXgTul/Nh5ZOnMUXMb8hH+U4jVqd8lDuLohGwkPT39hEoG2SreToWerNiYD0IcpyBTFZbER9TYphyPf5VgtUqQbDKv6Z5NZw1G0vvy1DKBlNwpviDl/mDYwN8CP0OM4Pzgw0ifIdhY+ZmDpVCrMGR3GGPMtSR7p6ychGMSke3FTQKj5ZNXy7hF+duUgY6OjvX6JWHTzxDWY6iNV9rFxXv2ajTCbB0bTREmBqoUPQjYBZ4xD5tAlboBjEaY6voZ5yqDTfkpNTV1r0aYfe4BAa7ZdFSwSe3t7XL3TcJXbl1blSFWYu9Gt0XpWb/TIe1k/YrrnoyMjK/6JbEWpRynthoJveFwOHrA8NDVvKnDkOvz2pnLtlbGB3dHBca3XI1tStnWqgUb3S9lwpMP2MFBuBF0uVPUcWS/Zaw1dqR5fOR1am4leWA5OCZwcLwQbB/ComC/O0oF1sjYTiOgHM2zCBiywsv2yV4tR/MQK6yy88AreHvno3M1UBJjBeOLam4lST66s7PzIWTmmmHB+ChEJZW97ZCsXH6iZCV+XIVFSVC5XtYiF8jcQZPr5RXwjUj5HuR6WYxchBzuII58yPaulyooCXxUbb8ct0r3h+QPyFbykZ00ymdYYT0Q0ksgfZoH+Ld/IinSfOEXuCIW8dRXlW6gJbG76Ae4K4yjsg2J4ltWWO/Mup5GtXeh0y49elt/xpD8PT/zY8lw2RkLcfkjZTm2QKzdag5R2ZfPyB8pmZmZTVZ4vd1RhfWOMmZde9va2sayXZUwlr+qRiGN/qr6gO0pROWvqrv8afJK/N3mVsCtgFsBtwL/XwV+As2W8ubaOJDiAAAAAElFTkSuQmCC);
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 2.2rem;
                z-index: 3;
            }
        }
        &__submitBtn {
            width: 100%;
            font-size: 18px;
            background-color: #42bd56;
            border: 2px solid #17aa52;
        }
    }
    .footer {
        .agreement {
            font-size: 16px;
            text-align: center;
            color: #aaa;
        }
        &__download_app {
            color:#42bd56;
            font-size: 18px;
        }
    }
}
</style>

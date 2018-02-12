<template>
  <div class="talion-content">
    <div class="header-bar">
      <a class="close-talion" href="javascript:history.go(-1);">关闭</a>
      <div class="search">
        <input type="search" v-model.trim.lazy="queryStr" @keyup.enter="goSearch" />
      </div>
    </div>
    <ul class="talion-lists">
      <li>
        <div>
          <a href="/movie" style="color:skyblue">
            电影
            <span>影院热映</span>
          </a>
          <a href="#" style="color:pink">
            同城
            <span>周末活动</span>
          </a>
          <a href="/book" style="color:brown">
            阅读
            <span>电子书</span>
          </a>
          <a href="#" style="color:orange">
            东西
            <span>心爱之物</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href="/movie" style="color:red">
            电视
            <span>正在热播</span>
          </a>
          <a href="/group" style="color: turquoise">
            小组
            <span>志趣相投</span>
          </a>
          <a href="#" style="color: cornflowerblue">
            游戏
            <span>虚拟世界</span>
          </a>
          <a href="#" style="color: turquoise">
            FM
            <span>红心歌单</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href="/book" style="color: brown">
            图书
            <span>畅销排行</span>
          </a>
          <a href="#" style="color: orange">
            音乐
            <span>新碟榜</span>
          </a>
          <a href="#" style="color: purple">
            应用
            <span>玩手机</span>
          </a>
          <a href="#" style="color: green">
            市集
            <span>购买原创</span>
          </a>
        </div>
      </li>
    </ul>
    <div class="quickNav">
      <ul class="quick-nav">
        <li>
          <router-link to="register">注册帐号</router-link>
        </li>
        <li>
          <router-link to="login">登录豆瓣</router-link>
        </li>
        <li>
          <router-link to="/home">使用桌面版</router-link>
        </li>
        <li>
          <router-link to="/home">使用豆瓣App</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      queryStr: ''
    }
  },
  methods: {
    closeTalion () {
      this.$emit('closeTalion')
    },
    goSearch () {
      console.log('goSearch')
      this.$router.push({
        name: 'Search',
        params: {
          q: this.queryStr
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.talion-content {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 999;
  .header-bar {
    .close-talion {
      color: #42bd56;
      font-size: 1.6rem;
    }
  }
  .talion-lists {
    padding-left: 0;
    margin-top: 4.8rem;
    padding-top: 2rem;
    display: flex;
    justify-content: space-around;
    li {
      margin: 0;
      padding: 0;
      width: 33.33%;
      list-style: none;
      position: relative;
      float: left;
      top: 0;
      a {
        position: relative;
        top: 0;
        text-align: center;
        font-size: 24px;
        margin-bottom: 2.5rem;
        display: block;
        span {
          display: block;
          color: #999;
          height: 1.7rem;
          font-size: 1.2rem;
          letter-spacing: 0.1rem;
        }
      }
    }
  }
  .quickNav {
    ul {
      overflow: hidden;
      margin: 1rem 0 0 0;
      padding-top: 0.6rem;
      padding-left: 0;
      li {
        float: left;
        width: 50%;
        padding: 0.3rem;
        box-sizing: border-box;
        font-size: 1.5rem;
        list-style-type: none;
        border-bottom: 0.1rem solid #f3f3f3;
        &:nth-child(1), &:nth-child(2) {
          border-top: 0.1rem solid #f3f3f3;
        }
      }
      a {
      display: block;
      max-width: 100%;
      padding: 1.2rem 0;
      line-height: 2rem;
      text-align: center;
      background-color: #fff;
      color: #42bd56;
      border-right: 0.1rem solid #f3f3f3;
      border-radius: 0.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      }
    }
  }
}
</style>
<style lang="scss">
.search {
  flex: 1;
  padding-left: 1rem;
  input[type=search] {
    box-sizing: border-box;
    border: 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;
    background-size: 1.73rem;
    border-radius: 0.3rem;
    width: 100%;
    height: 3.2rem;
    font-size: 1.4rem;
    &:focus {
      background: #f3f3f3;
    }
  }
}
</style>

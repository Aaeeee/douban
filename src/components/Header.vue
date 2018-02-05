<template>
  <header class="m-header is-bg is-fixed">
    <div class="m-header-button is-left">
      <a href="javascript:;">
        <img class="m-icon-img" src="../../images/ic_bar_back_white.png" alt="">
        返回
      </a>
      <h1 class="m-header-title">豆瓣app</h1>
      <div class="m-header-button is-right">
        <a href="javascript:;">分享</a>
      </div>
    </div>
  </header>
</template>
<script>
</script>
<style lang="scss" scoped>
@import url('../assets/less/var.less');
.m-header {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 10px;
    background: #fff;
    color: @headerDefaultColor;
    border-bottom: 1px solid #eee;
    a {
        color: @headerDefaultColor;
    }
    &-button {
        width: 70px;
        align-items: stretch;
        &.is-left {
            text-align: left;
        }
    }
}
.head {
  width: 100%;
  height: 2rem;
}
.header {
    width: 100%;
    height: 2rem;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    border-bottom: 2px solid #ff8000;
}
.header h4 {
  width: 100%;
  text-align: center;
  line-height: 2rem;
  font-size: 1.4rem;
}
</style>

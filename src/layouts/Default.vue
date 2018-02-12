<template>
  <div class="default-content">
    <header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
export default {
  components: {
    HeaderBar
  }
}
</script>
<style lang="scss" scoped>
.default-content {
  margin-top: 4.8rem;
  .header-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    height: 4.8rem;
    padding: 0 1.8rem;
    background: #fff;
    border-bottom: .1rem solid #f3f3f3;
  }
}

</style>

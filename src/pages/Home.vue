<template>
<div class="index-content">
  <header-bar @showTalion="open"></header-bar>
  <sub-nav></sub-nav>
  <list mold="thumbnail" :items="events"></list>
  <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
  </infinite-loading>
</div>
</template>
<script>
import HeaderBar from '../components/HeaderBar'
import SubNav from '../components/SubNav'
import InfiniteLoading from 'vue-infinite-loading'
import { mapState, mapActions } from 'vuex'
import List from '../components/List'
import Loading from '../components/Loading'

export default {
  name: 'index',
  components: {
    HeaderBar,
    InfiniteLoading,
    SubNav,
    List,
    Loading
  },
  data () {
    return {
      talion: ''
    }
  },
  computed: {
    ...mapState({
      events: state => state.activities.events
    })
  },
  methods: {
    open () {
      this.talion = 'open'
    },
    close () {
      this.talion = ''
    },
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    ...mapActions([
      'loadMore'
    ])
  }
}
</script>
<style lang="scss" scoped>
.index-content {
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

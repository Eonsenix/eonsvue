<template>
  <div id="app" class="home">
    <div class="header">
      <div class="left" @click="close"/>
      <span>{{ $route.meta.title }}</span>
      <span v-if="$route.meta.rightButton" class="rightButton">{{ $route.meta.rightButton }}</span>
    </div>
    <div class="content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive && isLoaded"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive && isLoaded"/>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  components: {},
  data () {
    return {
      isLoaded: false
    }
  },
  computed: {
   
  },
  watch: {

  },
  methods: {
    close () {
      this.$callNative('exit', {}, () => {})
    }
  },
  mounted () {
    this.isLoaded = true
  }
}
</script>
<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: scroll;
  background-color: #f7f7f7;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  .header {
    position: relative;
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    color: #2e2e2e;
    font-size: 19px;
    line-height: 44px;
    text-align: center;

    .left {
      position: absolute;

      &::after {
        position: absolute;
        top: 14px;
        left: 14px;
        width: 12px;
        height: 12px;
        border: 1px solid #000;
        border-width: 2px 0 0 2px;
        content: "";
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg);
      }
    }
    .rightButton {
      color: #ff9800;
      font-size: 15px;
      position: absolute;
      right: 16px;
      // top: 14px;
    }
  }
  .content {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    //@diff: 76px;
    height: calc(100% - 44px);
  }
}
</style>

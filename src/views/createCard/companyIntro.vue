<template>
  <div class="myStory">
    <div class="myStory-content">
      <van-cell-group>
        <div class="group-title"></div>
        <van-field
          class="textarea-caret"
          v-model="message"
          type="textarea"
          :placeholder="placeholder"
          rows="4"
          autosize
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      radio: '1',
      value: '',
      active: 0,
      headUrl: require('@/assets/images/bitch.jpg'),
      list: ['名片', '项目', '动态'],
      placeholder: '请输入'
    }
  }
}
</script>

<style lang="scss">
.myStory {
  width: 100%;
  height: 100%;
  background: #fff;
  .myStory-content {
    width: 100%;
    height: 100%;
    position: relative;
    .textarea-caret {
      textarea {
        caret-color: #ff9800;
        color: #cccccc;
        font-size: 15px;
      }
    }
  }
}
</style>

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
      	
<van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
  <van-icon name="photograph" />
</van-uploader>
      <van-cell value="预览" class="myStory-upload">
        <template slot="title">
          <img :src="headUrl">
          <span class="custom-text">相册或视频</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      message: '',
      radio: '1',
      value: '',
      active: 0,
      headUrl: require('@/assets/images/bitch.jpg'),
      list: ['名片', '项目', '动态'],
      placeholder: ' 我叫赵小妍，创业3年，从事XXX行业，年营业收入XXX钱。您可以写自己的创业经历，生活故事，吸引更多的小伙伴关注你'
    }
  },
  methods: {
    onRead(file) {
      console.log(file)
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
    .myStory-upload {
      position: absolute;
      bottom: 0;
      color: #8c8c8c;
      border-top: 1px solid #dcdcdc;
      height: 52px;
      padding-top: 14px;
      font-size: 15px;
      img {
        width: 18px;
        height: 16px;
        margin-left: 22px;
        margin-right: 12px;
      }
      .van-cell__value {
        color: #8c8c8c;
      }
    }
  }
}
</style>
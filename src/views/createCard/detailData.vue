<template>
  <div class="detailData">
    <van-cell-group>
      <div class="group-title">详细通讯资料</div>
      <van-cell title="荣誉奖项">
        <img :src="headUrl" class="addIcon">
      </van-cell>
      <van-field v-model="value" placeholder="荣誉名称" :clearable="true" class="createCard-mobile"/>
      <van-field label="个人邮箱" v-model="value" placeholder="请输入" :clearable="true"/>
      <van-field label="个人网址" v-model="value" placeholder="请输入" :clearable="true"/>
      <van-field label="公司邮箱" v-model="value" placeholder="请输入" :clearable="true"/>
      <van-field label="公司网址" v-model="value" placeholder="请输入" :clearable="true"/>
      <van-field label="传真" v-model="value" placeholder="请输入" :clearable="true"/>
      <van-field label="座机电话" v-model="value" placeholder="请输入" :clearable="true"/>
    </van-cell-group>
    <van-cell-group>
      <div class="group-title">社交账号</div>
      <van-field label="QQ" v-model="value" placeholder="请输入" :clearable="true"/>
      <van-field label="微信" v-model="value" placeholder="请输入" :clearable="true"/>
      <van-field label="公众号" v-model="value" placeholder="请输入" :clearable="true"/>
      <van-field label="抖音号" v-model="value" placeholder="请输入" :clearable="true"/>
      <van-field label="头条号" v-model="value" placeholder="请输入" :clearable="true"/>
    </van-cell-group>
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
      list: ['名片', '项目', '动态']
    }
  }
}
</script>

<style lang="scss">
.detailData {
  width: 100%;
  .van-cell-group {
    &:last-child {
      margin-bottom: 20px;
    }
  }
  .uploadDiv {
    div {
      float: left;
    }
    .upload {
      width: 114px;
      height: 114px;
      border: 1px solid #000;
      margin-left: 48px;
      border-radius: 4px;
    }
    .upload-title {
      // font-size: 14px;
    }
  }
  .addIcon {
    width: 14px;
    height: 14px;
  }
}
</style>

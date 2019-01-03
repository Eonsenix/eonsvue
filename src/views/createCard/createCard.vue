<template>
  <div class="createCard">
    <van-cell-group>
      <div class="group-title"></div>
      <van-cell title="图像">
        <template slot="title">
          <div class="uploadDiv">
            <div class="upload-title">上传</div>
            <div class="upload"></div>
          </div>
        </template>
      </van-cell>
      <van-field label="姓名" v-model="value" placeholder="请输入"/>
      <van-field label="公司" v-model="value" placeholder="请输入"/>
      <van-cell title="职位" value="请选择 可多选" is-link/>
      <van-cell title="手机">
        <img :src="headUrl" class="addIcon">
      </van-cell>
      <van-field v-model="value" placeholder="请输入手机号" :clearable="true" class="createCard-mobile"/>
      <van-cell>
        <van-radio-group v-model="radio">
          <van-radio name="1" checked-color="#ff9800">隐私保护，仅相互交换了名片的用户可见。</van-radio>
          <van-radio name="2" checked-color="#ff9800">完全公开，手机号码对所有人可见。</van-radio>
        </van-radio-group>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <div class="group-title"></div>
      <van-cell title="行业" value="请选择" is-link/>
      <van-cell title="公司地址" value="请选择" is-link/>
      <van-cell title="个人地址">
        <img :src="headUrl" class="addIcon">
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <div class="group-title">高级选项(非必填)</div>
      <van-cell title="详细资料" is-link/>
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
.createCard {
  width: 100%;
  .createCard-mobile {
    input::-webkit-input-placeholder {
      padding-left: 30px;
    }
    input {
      // font-size: 22px;
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

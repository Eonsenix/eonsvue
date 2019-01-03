<template>
  <div class="card">
    <div class="photo">
      <img :src="headUrl">
    </div>
    <div class="info">
      <div class="info-name">
        <div class="info-name-detail">啊啊啊</div>
        <div class="info-name-tag">互联网</div>
        <div class="info-name-tag">人工智障</div>
        <div class="info-name-tag">小数据</div>
      </div>
      <div class="info-company">深圳盒子科技有限公司</div>
      <div class="info-job">前端下班工程师</div>
      <div class="info-view">
        <div class="info-view-img">
          <img :src="headUrl">
          <span>100</span>
        </div>
        <div class="info-view-care">关注</div>
      </div>
      <div class="info-chat">
        <img :src="headUrl">
      </div>
    </div>
    <div class="data">
      <div class="data-add">加入盒伙人</div>
      <div class="data-detail">
        <div class="data-detail-title">认证</div>
        <div class="data-detail-auth margin12">
          <div>
            <img :src="headUrl">
            <span>慧店销售代表</span>
          </div>
          <div>
            <img :src="headUrl">
            <span>慧店销售代表</span>
          </div>
        </div>
        <div class="data-detail-title"></div>
        <div class="data-detail-auth">
          <div>
            <img :src="headUrl">
            <span>慧店销售代表</span>
          </div>
          <div>
            <img :src="headUrl">
            <span>慧店销售代表</span>
          </div>
        </div>
      </div>
      <div class="data-detail">
        <div class="data-detail-title">行业</div>
        <div class="data-detail-desc">高级翘班工程师</div>
      </div>
      <div class="data-detail">
        <div class="data-detail-title">手机</div>
        <div class="data-detail-desc">不可见</div>
      </div>
      <div class="data-detail">
        <div class="data-detail-title">邮箱</div>
        <div class="data-detail-desc">sb@163.com</div>
      </div>
      <div class="data-detail">
        <div class="data-detail-title">网址</div>
        <div class="data-detail-desc">www.baidu.com</div>
      </div>
      <div class="data-detail">
        <div class="data-detail-title">位置</div>
        <div class="data-detail-desc">深圳市南山区海天一路</div>
      </div>
      <div class="data-soft">
        <div class="data-soft-detail">
          <img :src="headUrl">
          <span>1234567</span>
        </div>
        <div class="data-soft-detail">
          <img :src="headUrl">
          <span>wx123456</span>
        </div>
      </div>
      <van-tabbar v-model="active" class="data-contact">
        <van-tabbar-item icon="shop">
          <span>转发名片</span>
          <img slot="icon" slot-scope="props" :src="headUrl">
        </van-tabbar-item>
        <van-tabbar-item icon="shop">
          <span>发短信</span>
          <img slot="icon" slot-scope="props" :src="headUrl">
        </van-tabbar-item>
        <van-tabbar-item icon="shop">
          <span>打电话</span>
          <img slot="icon" slot-scope="props" :src="headUrl">
        </van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="item">
      <div class="item-title">
        <div class="item-title-name">名片</div>
        <div class="item-title-name">项目</div>
        <div class="item-title-name">动态</div>
      </div>
      <section class="item-section">
        <div class="item-section-title">我的荣誉</div>
        <div class="item-section-honor" v-for="(item, index) in 3" :key="index">
          <span>●</span>
          <span>咖啡1</span>
          <span>2018年</span>
        </div>
      </section>
      <section class="item-section">
        <div class="item-section-title">我的故事</div>
        <div class="item-section-info infoShadow">
          <img :src="headUrl">
          <div class="item-section-info-intro">2016年创业至今，生意主要为运动类服装 …</div>
          <div class="item-section-info-date">2018-09-09</div>
        </div>
      </section>
      <section class="item-section">
        <div class="item-section-title">公司介绍</div>
        <div class="item-section-info infoShadow">
          <img :src="headUrl">
          <div class="item-section-info-intro">深圳盒子信息科技有限公司，成立于….</div>
          <div class="item-section-info-date">2018-09-09</div>
        </div>
      </section>
      <section class="item-section">
        <div class="item-section-title">我的产品</div>
        <div class="item-section-info">
          <img :src="headUrl">
          <div class="item-section-info-intro">深圳盒子信息科技有限公司，成立于….</div>
        </div>
      </section>
      <section class="item-section" style="margin-bottom: 40px;">
        <div class="item-section-title">我的动态</div>
        <div class="item-section-zan">
          <img :src="headUrl">
          <span>动态获得0次赞</span>
        </div>
        <div class="item-section-active">
          <span>啊啊啊</span>
          <span>推荐了文章</span>
          <span>1天前</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      active: 0,
      headUrl: require('@assets/images/bitch.jpg'),
      list: ['名片', '项目', '动态']
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  position: relative;
  .photo {
    height: 370px;
    width: 100%;
    position: relative;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .item {
    width: 100%;
    background: #fff;
    margin: 0 auto;
    margin-top: 20px;
    .item-section {
      padding: 0 16px 16px 16px;
      .item-section-active {
        line-height: 0px;
        height: 30px;
        span:nth-child(1) {
          font-size: 15px;
          color: #282828;
        }
        span:nth-child(2) {
          font-size: 14px;
          color: #343339;
          padding-left: 28px;
          opacity: 0.5;
        }
        span:nth-child(3) {
          opacity: 0.24;
          font-size: 12px;
          color: #343339;
          float: right;
          margin-top: 10px;
        }
      }
      .item-section-zan {
        padding: 16px 0 16px 0;
        font-size: 14px;
        color: #343339;
        opacity: 0.5;
        img {
          width: 14px;
          height: 16px;
        }
        span {
          padding-left: 12px;
        }
      }
      .infoShadow {
        box-shadow: 0 22px 59px 0 rgba(0, 0, 0, 0.09);
      }
      .item-section-info {
        width: 344px;
        text-align: center;
        img {
          width: 314px;
          height: 186px;
          border-radius: 6px;
        }
        .item-section-info-intro {
          width: 314px;
          margin: 0 auto;
          text-align: left;
          font-size: 14px;
          color: #343339;
          opacity: 0.5;
        }
        .item-section-info-date {
          width: 314px;
          margin: 0 auto;
          text-align: left;
          font-size: 13px;
          color: #cccccc;
          height: 36px;
          line-height: 32px;
        }
      }
      .item-section-title {
        font-size: 15px;
        color: #282828;
        height: 80px;
        line-height: 100px;
      }
      .item-section-honor {
        font-size: 13px;
        color: #343339;
        margin-bottom: 14px;
        span:nth-child(1) {
          font-size: 12px;
        }
        span:nth-child(2) {
          padding-left: 10px;
        }
        span:nth-child(3) {
          float: right;
          color: #dddddd;
        }
      }
    }
    .item-title {
      height: 74px;
      height: 100px;
      position: relative;
      border-bottom: 1px solid #ddd;
      .item-title-name {
        margin-left: 0%;
        width: 30px;
        height: 99px;
        margin-top: -1px;
        text-align: center;
        line-height: 100px;
        font-size: 13px;
        color: #343339;
        border-bottom: 2px solid #ff9800;
        position: absolute;
        top: 0;
        &.item-title-name:nth-child(1) {
          left: 76px;
        }
        &.item-title-name:nth-child(2) {
          left: 168px;
        }
        &.item-title-name:nth-child(3) {
          left: 258px;
        }
      }
    }
  }
  .data {
    width: 328px;
    background: #fff;
    box-shadow: 0 0 21px 0 rgba(119, 128, 129, 0.18);
    margin: 0 auto;
    margin-top: 20px;
    padding: 0px 0px 0 16px;
    border-radius: 6px;
    position: relative;
    .data-contact {
      height: 100px;
    }
    .van-tabbar--fixed {
      position: relative;
    }
    .van-tabbar-item--active,
    .van-tabbar-item {
      color: #2a2a2a;
    }
    .data-add {
      position: absolute;
      top: 0;
      right: -16px;
      width: 100px;
      height: 26px;
      text-align: center;
      font-size: 13px;
      color: #ffffff;
      background: #ff9800;
      opacity: 0.68;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      line-height: 26px;
    }
    .data-soft {
      width: 100%;
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      .data-soft-detail {
        width: 50%;
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        align-items: center;
        height: 78px;
        img {
          width: 24px;
          height: 24px;
          // margin-left: 20px;
        }
        span {
          font-size: 12px;
          color: #8c8c8c;
          padding-left: 20px;
        }
      }
    }
    .data-detail {
      width: 100%;
      font-size: 0px;
      padding-top: 10px;
      .data-detail-title {
        width: 30px;
        font-size: 13px;
        color: #2a2a2a;
        display: inline-block;
      }
      .data-detail-desc {
        font-size: 13px;
        margin-left: 12px;
        color: #8c8c8c;
        display: inline-block;
      }
      .margin12 {
        margin-top: 12px;
      }
      .data-detail-auth {
        width: 270px;
        display: inline-block;
        margin-left: 20px;
        height: 36px;
        div {
          display: inline-block;
          width: 130px;
          img {
            width: 26px;
            height: 16px;
          }
          span {
            font-size: 11px;
            color: #8c8c8c;
          }
        }
      }
    }
  }
  .info {
    width: 328px;
    height: 166px;
    background: #fff;
    box-shadow: 0 0 21px 0 rgba(119, 128, 129, 0.18);
    border-radius: 6px;
    margin: 0 auto;
    margin-top: -80px;
    position: relative;
    z-index: 2;
    padding: 0px 0px 0px 16px;
    box-shadow: 0 0 21px 0 rgba(119, 128, 129, 0.18);
    .info-name {
      height: 64px;
      .info-name-detail {
        float: left;
        margin-top: 24px;
        font-size: 22px;
        color: #282828;
        padding-right: 10px;
      }
      .info-name-tag {
        margin-top: 28px;
        border-radius: 3px;
        vertical-align: baseline;
        float: left;
        font-size: 12px;
        height: 20px;
        margin-left: 4px;
        padding: 2px 6px 0px 6px;
        text-align: center;
        color: #fff;
        background: #ff5600;
        font-weight: 300;
      }
    }
    .info-company {
      font-size: 13px;
      color: #8c8c8c;
    }
    .info-job {
      font-size: 13px;
      color: #2a2a2a;
      font-weight: 600;
      margin-top: 10px;
    }
    .info-view {
      margin-top: -10px;
      .info-view-img {
        display: inline-block;
        font-size: 12px;
        color: #cccccc;
        img {
          width: 18px;
          height: 12px;
        }
        span {
          padding-left: 6px;
        }
      }
      .info-view-care {
        display: inline-block;
        font-size: 11px;
        color: #fbb54d;
        border: 1px solid #fbb54d;
        border-radius: 9px;
        padding: 0px 14px;
        margin-left: 14px;
      }
    }
    .info-chat {
      position: absolute;
      top: 68px;
      right: 24px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #fbb54d;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>

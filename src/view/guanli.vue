<template>
  <div>
    <div class="wrap">
      <div class="wrap-center">
        <div class="side">
          <div class="side_one">
            <div class="m-sideItem">
              <div class="hd sideText">帐号管理</div>
              <div class="bd sideText1">
                <ul>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText active">
                      <router-link to="/">个人中心</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/two">消息通知</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/three">账号信息</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/four">地址管理</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/five">账号安全</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/six">我的积分</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/seven">我的收藏</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/eight">我的足迹</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/nine">我的甄选家</router-link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="bigbox">
          <div v-show="listid==0" class="geren">
            <div class="m-userInfo levelMem">
              <div class="info f-left">
                <div class="infoWrp">
                  <a href="javascript:;" class="avatar f-left">
                    <img
                      src="http://thirdqq.qlogo.cn/g?b=oidb&amp;k=qOm1qbSx8iaHTibeDH8Thobg&amp;s=100&amp;t=1557093349"
                      alt="头像"
                      width="66"
                      height="66"
                    />
                  </a>
                  <div class="name">
                    <div class="nickname">
                      <a href="javascript:;">俗人一个✘</a>
                    </div>
                  </div>
                </div>
                <div class="growWrap">
                  <div class="growNum">
                    <span class="f-left">
                      <a href="javascript:;" target="_blank">成长值 &gt;&gt;</a>
                    </span>
                    <span class="f-right">
                      <span>0</span>
                      <span>
                        <span>/</span>
                        <span>1</span>
                      </span>
                    </span>
                  </div>
                  <div class="process">
                    <div class="num" style="width:0px;"></div>
                  </div>
                </div>
              </div>
              <div class="asset f-left">
                <div class="inner">
                  <div class="item">
                    <div class="label">我的红包</div>
                    <div class="content">
                      <a href="javascript:;">
                        <span>¥</span>
                        <span>0.00</span>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="label">津贴</div>
                    <div class="content">
                      <a href="javascript:;">
                        <span>¥</span>
                        <span>0.00</span>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="label">回馈金</div>
                    <div class="content">
                      <a href="javascript:;">
                        <span>¥</span>
                        <span>0.00</span>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="label">可兑返利</div>
                    <div class="content">
                      <a href="javascript:;">
                        <span>¥</span>
                        <span>0.00</span>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="label">优惠券</div>
                    <div class="content">
                      <a href="javascript:;">
                        <span>0</span>
                        <span>张</span>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="label">我的积分</div>
                    <div class="content">
                      <a href="javascript:;">
                        <span>0</span>
                        <span></span>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="label">礼品卡</div>
                    <div class="content">
                      <a href="javascript:;">
                        <span>¥</span>
                        <span>0.00</span>
                      </a>
                      <i class="w-icon-common icon-common-open-eye-black"></i>
                    </div>
                  </div>
                  <div class="item">
                    <div class="label">待领礼包</div>
                    <div class="content">
                      <a href="javascript:;">
                        <span>0</span>
                        <span>个</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-superMemberLeadTip f-pr">
              <a href="javascript:;">
                <div class="m-leadTip">
                  <div class="statusText">
                    <div class="line1">网易严选超级会员&nbsp;&nbsp;尊享9大专属特权</div>
                    <div class="line2">
                      <span>限时30天免费试用￥0</span>
                      <span>&nbsp;</span>
                      <span class="originPrice">
                        <span>￥</span>
                        <span>149</span>
                        <span>/年</span>
                      </span>
                    </div>
                    <div class="line3">开通超级会员平均一年可省￥2627</div>
                  </div>
                </div>
              </a>
              <a href="javascript:;" class="openBtn">立即试用</a>
            </div>
            <!-- 未完成订单 -->
            <div class="m-undoneOrderList undoneOrderListNull">
              <div class="w-orderListHd">
                <h3>
                  <span>未完成订单</span>
                  <a href="javascript:;" class="seeAllOrder">查看全部订单</a>
                </h3>
              </div>
              <div class="listNullWraper">
                <div class="m-emptyStatus">
                  <div class="w-icon-empty icon-empty-order"></div>
                  <div class="emptyText">你已经很久没有下单了哦！</div>
                  <a class="w-button w-button-ghost" href="/" target="_blank">去逛逛</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 轮播 -->
        <div id="rcmdContainer">
          <div style="clear:both;padding-top:40px;">
            <div class="m-slickWarp" style="margin-top:0px;margin-bottom:80px;">
              <div class="slickHead">
                <h3 class="title">猜你喜欢</h3>
              </div>
              <div class="m-slick">
                <div class="banner_box">
                  <div class="caini_banner">
                    <swiper class="banner_list" :options="swiperOption" v-if="loop.length>1">
                      <swiper-slide class="banner_item" v-for="(item,index) in loop" :key="index">
                        <div class="img_box">
                          <img :src="item.imgs" alt />
                        </div>
                        <h4 class="innerContent">{{item.tit}}</h4>
                        <p class="caini_price">
                          <span>￥{{item.price}}</span>
                          <i class="car_icon"></i>
                        </p>
                      </swiper-slide>
                    </swiper>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      arr: [
        "个人中心",
        "消息通知",
        "账号信息",
        "地址管理",
        "账号安全",
        "我的积分",
        "我的收藏",
        "我的足迹",
        "我的甄选家"
      ],
      listid: 0,
      loop: [
        {
          tit: "12只装 安全系列避孕套",
          imgs:
            "https://yanxuan-item.nosdn.127.net/21c2902230dd7230566cac04a67cd2b2.png?imageView&quality=95&thumbnail=210x210",
          price: "9.9"
        },
        {
          tit: "日式和风声波式电动牙刷（可单买刷头）",
          imgs:
            "https://yanxuan-item.nosdn.127.net/8bd581edb9f867a6a6005e47a5f1beda.png?imageView&quality=95&thumbnail=210x210",
          price: "189.9"
        },
        {
          tit: "女式平角内裤",
          imgs:
            "https://yanxuan-item.nosdn.127.net/b3cd5c0580cce2ac3dd728d04055e92c.png?imageView&quality=95&thumbnail=210x210",
          price: "99.9"
        },
        {
          tit: "6包/提 谷风一木3层软抽面巾纸",
          imgs:
            "https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&quality=95&thumbnail=210x210",
          price: "77.9"
        },
        {
          tit: "运动健身吸汗速干巾",
          imgs:
            "https://yanxuan.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?imageView&quality=95&thumbnail=210x210",
          price: "6.9",
          price: "59.9"
        },
        {
          tit: "日式和风简约无盖垃圾桶 11L",
          imgs:
            "https://yanxuan-item.nosdn.127.net/6a3b99bf1df1332916b3699df67f9955.png?imageView&quality=95&thumbnail=210x210",
          price: "116"
        },
        {
          tit: "超轻口袋遮阳伞",
          imgs:
            "http://yanxuan.nosdn.127.net/59e56e637298797464c0a434560879c4.png?imageView&quality=95&thumbnail=210x210",
          price: "78.9"
        },
        {
          tit: "男士基础平角内裤",
          imgs:
            "https://yanxuan-item.nosdn.127.net/56b33a41a3ce8caf3ac86b7ec6c05faa.png?imageView&quality=95&thumbnail=210x210",
          price: "45.9"
        }
      ],
      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        pagination: {
          el: ".swiper-pagination"
        },
        // direction: "vertical",
        paginationClickable: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        scrollbar: ".swiper-scrollbar",
        mousewheelControl: true,
        observeParents: true,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30, //左右间隔

        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    listidindex(index) {
      this.listid = index;
    }
  }
};
</script>

<style scope>
@import url("../../static/yucss/guanli.css");
</style>



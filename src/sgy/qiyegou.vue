<template>
  <div>
    <div class="g-bd p-index">
      <div class="g-row">
        <div class="m-userPanel">
          <div class="info">
            <router-link class="w-button w-button-l w-button-gold" :to="{path:'/denglu'}">立即登录</router-link>
          </div>
          <div class="advantage">
            <div class="item">
              <i class="icon w-icon-normal icon-normal-ad1"></i>
              <div class="text">
                <p>独享低价</p>
                <p>企业专享, 最高8.5折</p>
              </div>
            </div>
            <div class="item">
              <i class="icon w-icon-normal icon-normal-ad2"></i>
              <div class="text">
                <p>一件代发</p>
                <p>多地下单，统一管理</p>
              </div>
            </div>
            <div class="item">
              <i class="icon w-icon-normal icon-normal-ad3"></i>
              <div class="text">
                <p>增票保障</p>
                <p>货票分离, 采购无忧</p>
              </div>
            </div>
            <div class="item">
              <i class="icon w-icon-normal icon-normal-ad4"></i>
              <div class="text">
                <p>支付灵活</p>
                <p>月结账单, 分批支付</p>
              </div>
            </div>
          </div>
          <div class="feedback">在线留言</div>
        </div>
      </div>
      <div class="m-focus">
        <swiper :options="swiperOption1" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in arr" :key="item.id">
            <img :src="item.img" />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="m-hotList">
        <div class="m-blockHd g-row">
          <div class="title">精选热卖</div>
          <small class="desc">企业采购TOP榜单，他们需要的也是你想要的</small>
          <router-link class="link" :to="{path:'/gengduo'}">查看更多></router-link>
        </div>
        <swiper class="banner_list" :options="swiperOption">
          <swiper-slide class="banner_item" v-for="item in qygarr" :key="item.id">
            <div class="wrap">
              <div class="m-product j-product">
                <div class="hd">
                  <div>
                    <img :src="item.img1" alt class="img beforeHover" />
                    <img :src="item.img2" alt class="img imgHover" />
                  </div>
                </div>
                <div class="bd">
                  <div class="tag"></div>
                  <div class="name">
                    <a type="javascript:;">{{item.title}}</a>
                  </div>
                  <div class="detail">
                    <div class="price">￥{{item.money}}</div>
                    <div class="manufacturerTag" v-if="item.Manufacturer!=''">{{item.Manufacturer}}</div>
                  </div>
                  <div class="simpleDesc">{{item.Land}}</div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
      <div class="g-row m-sceneList">
        <div class="sceneItem" v-for="(item,index) in arr1" :key="item.id">
          <div class="m-blockHd g-row">
            <h3 class="title">{{item.title}}</h3>
            <small class="desc">{{item.desc}}</small>
            <router-link class="link" :to="{path:'/gengduo'}">{{item.link}}</router-link>
          </div>
          <div class="banner">
            <img :src="item.img" alt />
          </div>
          <ul class="m-itemList list-index">
            <li class="item" v-for="ite in arr1[index].sarr" :key="ite.id">
              <div class="m-product j-product product-index">
                <div class="hd">
                  <div>
                    <img class="m-img-lazyload img img-lazyloaded" :src="ite.img1" alt />
                  </div>
                </div>
                <div class="bd">
                  <div class="name">
                    <a type="javascript:;">{{ite.txt}}</a>
                  </div>
                  <div class="detail">
                    <div class="price">￥{{ite.money}}</div>
                    <div class="manufacturerTag" v-if="ite.manufacturer!=''">{{ite.manufacturer}}</div>
                  </div>
                  <div class="simpleDesc">{{ite.more}}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-corpList">
        <div class="g-row">
          <h3 class="title">合作企业</h3>
          <div class="list">
            <div class="item" v-for="item in imga" :key="item.id">
              <img :src="item.img" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="m-fixedTool">
      <div class="g-row">
        <div class="w-back" @click="fhdbu"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue"
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "subanner",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      imga: [
        {
          id: 0,
          img:
            "http://yanxuan.nosdn.127.net/6d0378357282bba18cf78e7c7c403577.png"
        },
        {
          id: 1,
          img:
            "http://yanxuan.nosdn.127.net/08133bcce9d1be6b074ddc75c8cc4e3f.png"
        },
        {
          id: 2,
          img:
            "http://yanxuan.nosdn.127.net/55fdb5c93ea1c809200ef9df1b24d583.png"
        },
        {
          id: 3,
          img:
            "http://yanxuan.nosdn.127.net/6aa7c4e77ec9a90013a225ad1a071215.png"
        }
      ],

      arr1: [],

      arr: [
        {
          id: 1,
          img:
            "http://yanxuan.nosdn.127.net/84dfd4bde4e5c8da1d516a7f026db3c2.png"
        },
        {
          id: 2,
          img:
            "http://yanxuan.nosdn.127.net/42a8a7430151bac56754f62221621118.jpg"
        },
        {
          id: 3,
          img:
            "http://yanxuan.nosdn.127.net/61cc9715f965aecc72d33512490eaa09.jpg"
        }
      ],

      swiperOption1: {
        notNextTick: true,
        loop: true,
        initialSlide: 0,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },

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

        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },

      qygarr: [],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    fhdbu(){
      document.getElementsByClassName("m-fixedTool")[0].style.display="none"
      document.documentElement.scrollTop=0
    }
  },
  mounted() {
    window.addEventListener("scroll", function() {
      var top =
        document.documentElement.scrollTop ||
        window.pageYOffset||
        document.body.scrollTop
      if (top > 400) {
        document.getElementsByClassName("m-fixedTool")[0].style.display="block"
      } else {
        document.getElementsByClassName("m-fixedTool")[0].style.display="none"
      }
    });
    this.$http({
      url: "https://www.easy-mock.com/mock/5d439f4665519b0a71c91a4b/wy/qiyegou",
      method: "post"
    }).then(res => {
      this.qygarr = res.data.data;
    });

    this.$http.get("../../static/js/sqiyegou.json").then(res => {
      this.arr1 = res.data.data;
    });
  }
};
</script>
<style>
.m-fixedTool .w-back{
  cursor: pointer;
  background: url(//yanxuan-static.nosdn.127.net/hxm/tob-web-fed/style/img/icon-arrow-44b9c3a7-44b9c3a786d27ceda73538cfe5a5ad9d.svg) no-repeat;
  background-position: 0 13.34841628959276%;
}
.m-fixedTool .w-back, .m-fixedTool .w-back:hover{
  vertical-align: top;
  display: inline-block;
  overflow: hidden;
  width: 60px;
  height: 48px;
}
.w-back{
  position: fixed;
  right: 0;
  bottom: 100px;
}
.m-fixedTool{
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 148px;
  z-index: 99;
  height: 0;
}
.m-corpList .item {
  float: left;
  height: 160px;
  width: 265px;
  margin-top: 28px;
  padding-top: 58px;
  background: #f4f4f4;
  text-align: center;
}
.g-row {
  width: 1090px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}
.m-corpList {
  margin: 90px 0 136px;
}
.m-hotList {
  position: relative;
}
.m-itemList:after,
.m-itemList:before {
  content: " ";
  display: table;
}
.m-itemList:after {
  clear: both;
}
.m-product:hover .hd .img {
  transform: scale(1.05);
}
.m-sceneList .list-index .item {
  margin-bottom: 0;
}
.m-itemList .item {
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
.m-itemList {
  margin-right: -10px;
}
.m-sceneList .sceneItem .banner img {
  display: block;
  width: 100%;
  height: 100%;
}
.m-sceneList .sceneItem .banner {
  display: block;
  margin-top: 29px;
  margin-bottom: 10px;
  width: 1090px;
  height: 310px;
  overflow: hidden;
}
.m-product:hover .hd .img {
  transform: scale(1.05);
}
.m-hotList .m-product:hover .hd .beforeHover {
  display: none !important;
}
.m-sceneList .sceneItem {
  padding-top: 50px;
}
.m-sceneList .sceneItem:first-child {
  padding-top: 22px;
}
.m-product .bd .price {
  display: inline-block;
  color: #ae2a40;
  font-size: 18px;
  vertical-align: bottom;
}
.m-hotList:hover .m-product .bd .simpleDesc {
  border: 1px solid transparent;
}
.m-hotList .m-product:hover {
  box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.15);
  background-color: #f4f4f4;
}
.m-product .bd .simpleDesc {
  margin: 8px 39px 0;
  padding-top: 10px;
  min-height: 24px;
  border-top: 1px solid #f4f4f4;
  font-size: 13px;
  color: #999;
  cursor: pointer;
}
.m-product .bd .manufacturerTag {
  display: inline-block;
  height: 14px;
  margin-left: 20px;
  font-size: 14px;
  max-width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #999;
}
.m-product .bd .detail {
  margin-top: 8px;
  padding: 0 10px;
  color: #333;
}
.m-product .bd .name a {
  color: #333;
}
.m-product .bd .detail,
.m-product .bd .name,
.m-product .bd .simpleDesc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.m-product .bd .name {
  font-size: 14px;
  padding: 10px 10px 0;
}
.m-product .bd .tag {
  height: 20px;
}
* {
  box-sizing: border-box;
}
.m-product .bd {
  padding-top: 10px;
  padding-bottom: 40px;
  text-align: center;
  line-height: 1;
}
.m-hotList .m-product .bd {
  padding-bottom: 30px;
}
.m-hotList .m-product:hover .hd .imgHover {
  display: block !important;
}
.m-product .hd .imgHover {
  display: none !important;
}
.m-product .hd .img {
  width: 265px;
  height: 265px;
  transition: transform 1s, -webkit-transform 1s;
  color: #f4f4f4;
  display: block;
  margin: 0 auto;
}
.m-hotList .m-product .hd .img {
  width: 264px;
  height: 264px;
  border: none;
  background-color: #fff;
}
.m-product .hd {
  position: relative;
  overflow: hidden;
  background-color: #f4f4f4;
}
.m-hotList .m-product .hd {
  background-color: #fff;
  height: 264px;
  overflow: hidden;
}
.m-hotList .m-product {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;
  margin-left: -132px;
  width: 264px;
  transition: box-shadow, 0.2s, -webkit-box-shadow;
}
.m-product {
  line-height: 1;
  text-align: center;
  font-size: 13px;
  width: 265px;
  position: relative;
}
.wrap {
  position: relative;
  height: 410px;
}
.banner_list .swiper-slide {
  height: 410px;
}
.banner_list .swiper-wrapper {
  padding: 10px 0;
}
.banner_list {
  width: 1104px;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #b0882f;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -325px;
  display: block;
  padding: 0;
  list-style: none;
  text-align: center;
  width: 134px;
}
.swiper-pagination-bullet {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 4px;
  padding: 0;
  cursor: pointer;
  border-radius: 0;
  background: transparent;
  opacity: 1;
  border: 1px solid #b0882f;
}
.swiper-slide img {
  display: block;
  margin: auto;
}
.swiper-slide {
  height: 420px;
}
.m-blockHd > .link {
  position: absolute;
  z-index: 1;
  right: -10px;
  bottom: -10px;
  font-size: 14px;
  padding: 10px;
}
.m-blockHd > .desc {
  float: left;
  margin-top: 16px;
  margin-left: 18px;
  font-size: 14px;
}
.m-blockHd > .title {
  float: left;
  font-size: 30px;
}
.p-index .title {
  font-size: 30px;
  color: #333;
  line-height: 1;
  font-weight: 400;
  text-align: center;
}
.m-blockHd:after,
.m-blockHd:before {
  content: " ";
  display: table;
}
.m-blockHd:after {
  clear: both;
}
.m-hotList .m-blockHd {
  margin-bottom: 0;
}
.m-blockHd {
  position: relative;
  font-size: 0;
  color: #333;
  line-height: 1;
}
.m-hotList {
  margin-top: 38px;
}
.m-focus {
  height: 420px;
  font-size: 0;
}
.m-userPanel .feedback {
  line-height: 50px;
  font-size: 14px;
  color: #333;
  text-align: center;
  cursor: pointer;
}
.icon-normal-ad4 {
  background: url(//yanxuan-static.nosdn.127.net/hxm/tob-web-fed/style/img/icon-normal-0f4b95e1-0f4b95e1a88b9a80f1adf7dabd5dc834.svg)
    no-repeat;
  background-position: 0 12.396694214876034%;
  width: 30px;
  height: 30px;
}
.icon-normal-ad4,
.icon-normal-addAddr {
  vertical-align: top;
  display: inline-block;
  overflow: hidden;
}
.icon-normal-ad3 {
  background: url(//yanxuan-static.nosdn.127.net/hxm/tob-web-fed/style/img/icon-normal-0f4b95e1-0f4b95e1a88b9a80f1adf7dabd5dc834.svg)
    no-repeat;
  background-position: 0 8.264462809917354%;
}
.icon-normal-ad2 {
  background: url(//yanxuan-static.nosdn.127.net/hxm/tob-web-fed/style/img/icon-normal-0f4b95e1-0f4b95e1a88b9a80f1adf7dabd5dc834.svg)
    no-repeat;
  background-position: 0 4.132231404958677%;
}
.icon-normal-ad2,
.icon-normal-ad3 {
  vertical-align: top;
  display: inline-block;
  overflow: hidden;
  width: 30px;
  height: 30px;
}
.m-userPanel .advantage .item + .item {
  margin-top: 27px;
}
.m-userPanel .advantage .item .text {
  margin-left: 40px;
  font-size: 13px;
  color: #333;
  line-height: 1;
  height: 30px;
}
.icon-logo-logo-with-txt,
.icon-normal-ad1 {
  vertical-align: top;
  display: inline-block;
  overflow: hidden;
}
.icon-normal-ad1 {
  background: url(//yanxuan-static.nosdn.127.net/hxm/tob-web-fed/style/img/icon-normal-0f4b95e1-0f4b95e1a88b9a80f1adf7dabd5dc834.svg)
    no-repeat;
  background-position: 0 0;
  width: 30px;
  height: 30px;
}
.m-userPanel .advantage .item .icon {
  float: left;
}
.m-userPanel .advantage .item:after,
.m-userPanel .advantage .item:before {
  content: " ";
  display: table;
}
.m-userPanel .advantage .item:after {
  clear: both;
}
.m-userPanel .advantage .item {
  margin-left: 26px;
}
.g-bd,
.g-bd-list {
  position: relative;
  z-index: 1;
}
.g-row {
  width: 1090px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}
.g-row:after,
.g-row:before {
  content: " ";
  display: table;
}
.g-row:after {
  clear: both;
}
.m-userPanel {
  z-index: 8;
  width: 200px;
  height: 370px;
  background: #fff;
  position: absolute;
  right: 0;
  top: 20px;
  -webkit-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.05);
}
.m-userPanel .info {
  height: 80px;
  padding-top: 20px;
  text-align: center;
}
.m-userPanel .info .w-button {
  width: 180px;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
}
.m-userPanel .info .w-button {
  width: 180px;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
}
.w-button-gold {
  color: #fff;
  border: 1px solid #b0882f;
  background-color: #b0882f;
}
.w-button {
  cursor: pointer;
  width: 198px;
  height: 40px;
  padding: 0;
  vertical-align: middle;
  letter-spacing: normal;
  line-height: 38px;
  font-size: 16px;
  text-align: center;
  border-radius: 0;
}
.w-button {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  font-size: 12px;
  word-spacing: normal;
  font-size: 0;
}
.m-userPanel .advantage {
  padding: 19px 0;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
}
</style>
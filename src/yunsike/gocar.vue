<template>
  <div>
    <div class="g_bg">
      <div class="g_main">
        <div class="youhui_box">
          <div class="juan">
            <i class="juan_img icon"></i>
            <span class="juan_zi">购物车可领优惠卷</span>
          </div>
          <div class="linjuan">
            <span>领卷</span>
          </div>
        </div>
        <div class="car_main">
          <div class="car_box">
            <!-- 空购物车 -->
            <div class="emptycar_box" style="display:block;">
              <div class="car_img"></div>
              <div class="emptycar_zi">购物车还是空的</div>
              <p class="btnLine">
                <a class="jixu_btn" href="javascript:;">继续逛</a>
              </p>
            </div>
            <!-- 加入之后 -->
            <div class="car_body" style="display:none;">
              <div class="xx">
                <div class="tt">
                  <div class="w wx w1">
                    <input
                      type="checkbox"
                      @click="check_all"
                      :checked="check_goods.length == cart_list.length"
                    /> 全选
                  </div>

                  <div class="w wx w2">商品信息</div>
                  <div class="w wx w3">单价</div>
                  <div class="w wx w4">数量</div>
                  <div class="w w5">小计</div>
                  <div class="w w6">操作</div>
                </div>
              </div>
              <!-- 一个 -->
              <div class="car_item" v-for="(cart,index) in cart_list" :key="index">
                <div class="item w7 inp">
                  <input type="checkbox" :value="cart" v-model="check_goods" />
                </div>
                <div class="item w8">
                  <div class="shangping_pic">
                    <img :src="cart.shangping_img" alt />
                  </div>
                  <div class="shangping_tit">
                    <a href="javascript:;">{{cart.goods_name}}</a>
                  </div>
                </div>
                <div class="shangping_danjia">{{cart.goods_price}}</div>

                <div class="shangping_shuliang item">
                  <span class="btn btn-default" v-on:click="reduce(cart)">-</span>
                  <input class="btn-group" type="number" v-model="cart.num" />
                  <span class="btn btn-default" v-on:click="add_num(cart)">+</span>
                </div>
                <div class="shangping_xiaoji item shangping_danjia">{{cart.goods_price}}</div>
                <div class="shangping_caozuo item">
                  <button class="btn btn-danger" v-on:click="delete_num(index)">删除</button>
                </div>
              </div>
              <div class="xx jiesuan_box">
                <div class="tt">
                  <div class="w wx w1">
                    <input
                      type="checkbox"
                      @click="check_all"
                      :checked="check_goods.length == cart_list.length"
                    /> 全选
                  </div>

                  <div class="w wx w2">总计：共 {{cart_list.length }}件商品</div>
                  <div class="w wx w3">已选择 {{total_num}} 件</div>
                  <div class="w wx w4">合计：{{total_price}}元</div>
                  <div class="w w5 xiadan">
                    <a href class="btn btn-success" :disabled="check_goods.length <= 0">下单</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class="guessLike">
          <div class="guessLike_tit">
            <h3>猜你喜欢</h3>
          </div>
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
</template>
<script>
// import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      //定义一个变量,接收后台传过来的图片
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
          tit: "6包/提  谷风一木3层软抽面巾纸",
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
      cart_list: [
        {
          goods_name: "日式和风声波式电动牙刷（可单买刷头）",
          goods_price: "169.9",
          num: "2",
          shangping_img:"https://yanxuan-item.nosdn.127.net/9e3ef5c57fdffd8500aeb9f7c1c73710.png?quality=95&thumbnail=200x200&imageView"
        },
        {
          goods_name: "12只装 安全系列避孕套",
          goods_price: "9.9",
          num: "1",
          shangping_img:"https://yanxuan-item.nosdn.127.net/71c013b363aa9cf7b439e07deacb4a31.png?quality=95&thumbnail=200x200&imageView"
        },
        {
          goods_name: "男/女轻弹云朵家居拖鞋",
          goods_price: "28.99",
          num: "1",
         shangping_img:"https://yanxuan-item.nosdn.127.net/0ecbcfc752f3c680750f3ea13dfdd68c.png?quality=95&thumbnail=200x200&imageView"
        }
      ],
      check_goods: [],

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
  computed: {
    //              总价
    total_price() {
      let price = 0;
      this.check_goods.forEach(item => {
        //                      总价 = 价格 * 数量
        price += Number(item.goods_price) * Number(item.num);
      });
      return price;
    },
    //              数量
    total_num() {
      let t_num = 0;
      this.check_goods.forEach(item => {
        t_num += Number(item.num);
      });
      return t_num;
    }
  },
  methods: {
    //              商品类减减
    reduce(cart) {
      if (cart.num <= 0) {
        cart.num = 0;
      } else {
        cart.num--;
      }
    },
    //              商品累加
    add_num(cart) {
      cart.num++;
    },
    //              删除商品
    delete_num(index) {
      this.check_goods.splice(index, 1);
      this.cart_list.splice(index, 1);
    },
    //              全选
    check_all() {
      if (this.check_goods.length > 0) {
        this.check_goods = [];
      } else {
        this.cart_list.forEach(item => {
          this.check_goods.push(item);
        });
      }
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.g_bg {
  position: relative;
  width: 100%;
  min-height: 1800px;
}
.g_main {
  width: 1090px;
  min-height: 1824px;
  margin: 0 auto;
  /* background: wheat; */
}
.g_main::before {
  content: "";
  display: table;
}
.youhui_box {
  width: 1090px;
  height: 40px;
  /* background: lawngreen; */
  margin-top: 10px;
  border: 1px solid #eaeaea;
  line-height: 38px;
}
.juan {
  font-size: 14px;
  width: 169px;
  height: 38px;
  float: left;
  /* background: aqua; */
}
.juan_img {
  display: block;
  margin: 9px 17px 0 12px;
  background-position: 0 -105px;
  height: 20px;
  width: 28px;
  float: left;
}
.icon {
  background-image: -webkit-image-set(url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-web/p/20150730/style/img/x1/coupon-s823df166ea-166f661804.png) 1x,url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-web/p/20150730/style/img/x2/coupon-s9b1cf67aba-e05b23eff9.png) 2x);
  background-repeat: no-repeat;
}
.juan_zi {
  float: left;
}
.linjuan {
  padding: 0 26px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  color: #fff;
  background-color: #e36844;
  cursor: pointer;
  float: right;
}
.car_main {
  position: relative;
}
.car_box {
  border: 1px solid #ddd;
  padding-bottom: 40px;
  margin-top: 10px;
  width: 1090px;
  height: 696px;
}
.emptycar_box {
  margin-top: 200px;
  margin: 150px auto 0;
  height: 264px;
  width: 1088px;
  /* background: cadetblue; */
}
.car_img {
  height: 180px;
  width: 180px;
  background-image: -webkit-image-set(url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-web/p/20150730/style/img/x1/icon-empty-s545adfbb0c-16fa2eeb53.png) 1x,url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-web/p/20150730/style/img/x2/icon-empty-s223d65534a-d12ecf748d.png) 2x);
  background-repeat: no-repeat;
  background-position: 0 -570px;
  margin: 0 auto;
}
.emptycar_zi {
  font-size: 16px;
  color: #999;
  text-align: center;
}
.btnLine {
  margin-top: 20px;
}
.jixu_btn {
  display: block;
  margin: 0 auto;
  height: 40px;
  width: 100px;
  font-size: 16px;
  line-height: 38px;
  color: #b4a078;
  border: 1px solid #b4a078;
  background-color: #f5f3ef;
  text-align: center;
}
.jixu_btn:hover {
  background-color: white;
}
/* 加入之后 */

.guessLike {
  width: 1090px;
  height: 365px;
  display: inline-block;
  border: 1px solid #e8e8e8;
  margin-bottom: 80px;
  margin-top: 50px;
}
.guessLike_tit {
  background-color: #f5f5f5;
  overflow: hidden;
}
.guessLike_tit > h3 {
  padding-left: 22px;
  line-height: 44px;
  font-size: 17px;
  height: 44px;
}
.banner_box {
  margin-top: 12px;
  width: 1088px;
  height: 307px;
  /* background: seagreen; */
}
.caini_banner {
  /* width: 1025px; */
  width: 930px;
  height: 307px;
  margin: 0 auto;
}
/* 轮播图 */
.swiper-button-prev {
  left: 153px;
  position: absolute;
  top: 50%;
  margin-top: -16px;
  margin-right: -20px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  /* background: lawngreen; */
  background: url("../yunsike/1.png");
  background-repeat: no-repeat;
  background-position: 0 -2460px;
  overflow: hidden;
  vertical-align: top;
  font-size: 12px;
  word-spacing: normal;
  letter-spacing: normal;
  margin-top: 48px;
}
.swiper-button-prev:hover {
  background-position: 0 -2420px;
}
.swiper-button-next {
  float: right;
  z-index: 999;
  right: 150px;
  background: url("../yunsike/1.png");
  background-repeat: no-repeat;
  background-position: 0 -4501px;
  height: 30px;
  width: 30px;
  margin-top: 48px;
}
.swiper-button-next:hover {
  background-position: 0 -4541px;
}
.swiper-container {
  width: 100%;
  height: 307px;
}
.img_box:hover img {
  transform: scale(1.05);
  transition: all 1s ease;
}
.innerContent {
  line-height: 20px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  margin-top: 10px;
}
.innerContent:hover {
  color: #b4a078;
}
.caini_price {
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  color: #d4282d;
  cursor: pointer;
}
.img_box {
  width: 210px;
  height: 210px;
  overflow: hidden;
}
.car_icon {
  position: absolute;
  right: 40px;
  background-image: -webkit-image-set(url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-web/p/20150730/style/img/x1/cart-sb9c1d935ed-136a897db8.png) 1x,url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-web/p/20150730/style/img/x2/cart-s69c3d14a1a-b6b0eb144e.png) 2x);
  background-repeat: no-repeat;
  background-position: 0 -199px;
  height: 24px;
  width: 24px;
  cursor: pointer;
}
.car_body {
}
.tt {
  height: 47px;
  margin-bottom: 20px;
  padding: 12px 0;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
}
.tt::before {
  content: " ";
  display: table;
}
.w {
  float: left;
  font-size: 13px;
  text-align: center;
}
.w1 {
  width: 159px;
}

.wx {
  text-align: left;
}
.w2 {
  width: 300px;
}
.w3 {
  width: 180px;
}
.w4 {
  width: 170px;
}
.w5 {
  text-align: right;
  padding-right: 30px;
}
.w6 {
  text-align: left;
  padding-left: 31px;
  width: 129px;
}
/* 一个 */
.car_item {
  height: 140px;
  padding: 20px 0;
  position: relative;
  border-bottom: none !important;
}
.item {
  float: left;
  text-align: center;
  position: relative;
}
.w7 {
}
.inp {
  padding-top: 50px;
}
.w8 {
  width: 400px;
  height: 100px;
}
.shangping_tit {
  color: black;
  padding-top: 10px;
  text-align: left;
  width: 400px;
  min-height: 100px;
  padding-left: 150px;
  float: left;
  line-height: 1;
}
.shangping_tit > a {
  font-size: 14px;
  display: block;
  max-width: 248px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.shangping_pic {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  float: left;
  height: 100px;
  width: 100px;
  border: 1px solid #eaeaea;
  margin-left: 30px;
}
.shangping_pic > img {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}
.shangping_danjia {
  padding-top: 10px;
  float: left;
  text-align: center;
  position: relative;
  /* color: #999; */
  width: 180px;
  margin-left: -20px;
}
.shangping_shuliang {
  text-align: left;
  padding-left: 31px;
}
.shangping_xiaoji {
  padding-top: 10px;
}
.shangping_caozuo {
  text-align: left;
}
.jiesuan_box {
  margin-top: 20px;
}
.xiadan {
  float: right;
  margin-right: 100px;
}
</style>

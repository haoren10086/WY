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
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/">个人中心</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText active">
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
          <div v-show="listid==0">
            <ul class="two">
              <li
                :class="{shom:num==index}"
                v-for="(item,index) in arr1"
                @click="listid_index(index)"
                :key="index"
              >{{item.name}}</li>
            </ul>
            <div class="lis" v-show="num==0">
              <div class="vbig">
                <div class="activityItem" v-for="mim in bigbox[yui].yan" :key="mim.id">
                  <div class="m-itemHd hd undefined">
                    <span class="title">{{mim.chin}}</span>
                    <span class="date">{{mim.time}}</span>
                  </div>
                  <div class="hd_item">
                    <div class="hd_left">
                      <img :src="mim.pic" alt />
                      <div class="yinying" v-if="mim.hongdong!=''">{{mim.hongdong}}</div>
                    </div>
                    <div class="hd_right">
                      <div>{{mim.tit}}</div>
                      <a>查看详情 ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="m-pager-con">
                <div class="m-pager m-hrz">
                  <div class="m-wrap">
                    <a href="javascript:;" class="w-linkicon pagel" @click="prev()">
                      <span class="w-icon-arrow arrow-pagel"></span>
                      <span class="txt">上一页</span>
                    </a>
                  </div>
                  <div class="m-wrap" @click="add(itm)" v-for="(yu,itm) in bigbox" :key="yu.itm">
                    <a href="javascript:;" class="w-linkicon">
                      <span class="txt">{{yu.ye}}</span>
                    </a>
                  </div>
                  <div class="m-wrap">
                    <a href="javascript:;" class="w-linkicon pager f-disabled" @click="next">
                      <span class="txt">下一页</span>
                      <span class="w-icon-arrow arrow-pager arrow-pager_disabled"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="lis" v-show="num==1">
              <div class="m-displayContainer">
                <div class="m-emptyStatus">
                  <div class="w-icon-empty icon-empty-msg"></div>
                  <div class="emptyText">当前无此类消息</div>
                </div>
              </div>
            </div>
            <div class="lis" v-show="num==2">
              <div class="m-displayContainer">
                <div class="m-notification">
                  <div class="notificationItem">
                    <div class="m-itemHd hd addBorder">
                      <span class="title">【有奖调研】严选618，您参加了吗？</span>
                      <span class="date">2019-06-23 09:00:25</span>
                    </div>
                    <div class="bd">
                      <div class="info">
                        <div class="desc">聊聊近期的浏览、购物体验~完整提交问卷，就有机会抽取￥50元！（6月26日截止）</div>
                        <a style="color: #69c;">查看详情 ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lis" v-show="num==3">
              <div class="m-displayContainer">
                <div class="m-emptyStatus">
                  <div class="w-icon-empty icon-empty-msg"></div>
                  <div class="emptyText">当前无此类消息</div>
                </div>
              </div>
            </div>
            <div class="lis" v-show="num==4">
              <div class="m-displayContainer">
                <div class="m-emptyStatus">
                  <div class="w-icon-empty icon-empty-msg"></div>
                  <div class="emptyText">当前无此类消息</div>
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
export default {
  data() {
    return {
      yui: 0,
      bigbox: [
        {
          ye: 1,
          yan: [
            {
              id: 1,
              name: "",
              hongdong: "",
              chin: "【福利】浪漫七夕约惠啦！",
              pic:
                "http://yanxuan.nosdn.127.net/d41b95890a43845afd73255a58c74c08.png?imageView&quality=95&thumbnail=504y192",
              time: "2019-08-01 15:00:25",
              tit:
                "勇敢表白瓜分百万津贴，口红、香水等经典礼任意2件7.7折，更多恋爱好礼5折起>>"
            },
            {
              id: 2,
              name: "",
              hongdong: "-活动结束-",
              chin: "【上新】8月恋爱季穿搭指南",
              pic:
                "http://yanxuan.nosdn.127.net/6db47976ea92cc0e0652572dc7544b01.jpg?imageView&quality=95&thumbnail=504y192",
              time: "2019-07-29 12:00:25",
              tit:
                "每满100减15，沙滩凉鞋、仿珍珠发夹等人气单品上新！蚕丝连衣裙、POLO衫…靓丽穿搭大盘点>>"
            },
            {
              id: 3,
              name: "",
              hongdong: "-活动结束-",
              chin: "【推荐】新晋职场人的标配好物",
              pic:
                "http://yanxuan.nosdn.127.net/0642f7066ea21ce7a1d86731dfcc13ca.jpg?imageView&quality=95&thumbnail=504y192",
              time: "2019-07-25 12:00:25",
              tit:
                "每满99减15！上班穿搭、同事社交、加班神器等人气爆款为你的职场保驾护航>>"
            },
            {
              id: 4,
              name: "",
              hongdong: "-活动结束-",
              chin: "【首发】9.9超值专区上线！",
              pic:
                "http://yanxuan.nosdn.127.net/cde8803be737aa6e88e5eeca1165ce9d.jpg?imageView&quality=95&thumbnail=504y192",
              time: "2019-07-22 18:00:25",
              tit:
                "为你严选的极致性价比！轻弹家居拖、简约垃圾桶、标签收纳篮生活必备好物统统9.9元>>"
            },
            {
              id: 5,
              name: "",
              hongdong: "-活动结束-",
              chin: "【7月会员日】仲夏约惠送好礼！",
              pic:
                "http://yanxuan.nosdn.127.net/deac0c76e2aa5b32bdd5163b29898b31.jpg?imageView&quality=95&thumbnail=504y192",
              time: "2019-07-18 10:30:25",
              tit:
                "77元清凉补贴限时领！酷爽穿搭、消暑零食、出行伴侣低至5折，全场满129再送免邮券>>"
            },
            {
              id: 6,
              name: "",
              hongdong: "-活动结束-",
              chin: "【扫货周】夏季换装低至60%OFF",
              pic:
                "http://yanxuan.nosdn.127.net/f591a9732d588e650d4af90cb45b44ab.png?imageView&quality=95&thumbnail=504y192",
              time: "2019-07-16 09:00:25",
              tit:
                "每日5折限时秒！囤货专区买1送1，时尚夏装、品质鞋包千款好货低至4折>>"
            },
            {
              id: 7,
              name: "",
              hongdong: "-活动结束-",
              chin: "【种草】匠心好物打造无汗厨房",
              pic:
                "http://yanxuan.nosdn.127.net/071077a78971ea2417347fde231fb6b5.jpg?imageView&quality=95&thumbnail=504y192",
              time: "2019-07-13 09:00:25",
              tit:
                "每满99减20！神奇厨电、厨房清洁、保鲜收纳一应俱全，口碑爆款全面特惠！"
            },
            {
              id: 8,
              name: "",
              hongdong: "-活动结束-",
              chin: "【火爆】严选清凉节开抢！",
              pic:
                "http://yanxuan.nosdn.127.net/4b202df99b57f67d47c78df726046e8e.jpg?imageView&quality=95&thumbnail=504y192",
              time: "2019-07-08 12:30:25",
              tit:
                "冰点价低至70%OFF！天天秒1元好物，牛皮席狂降520，啤酒小龙虾第2件半价！"
            },
            {
              id: 9,
              name: "",
              hongdong: "-活动结束-",
              chin: "【推荐】美好生活全能解忧方案",
              pic:
                "http://yanxuan.nosdn.127.net/c45dcbb39546f38ab81e0ed4a1c22d63.jpg?imageView&quality=95&thumbnail=504y192",
              time: "2019-07-04 20:00:25",
              tit: "低至5折！甄选幸福感爆棚好物，吃穿住行一应俱全！"
            },
            {
              id: 10,
              name: "",
              hongdong: "-活动结束-",
              chin: "【通知】积分清零倒计时！",
              pic:
                "http://yanxuan.nosdn.127.net/8600a07ded7aa002792274ab735f7a1d.jpg?imageView&quality=95&thumbnail=504y192",
              time: "2019-06-26 12:10:25",
              tit:
                "体重秤等好物低至6积分抢兑！更有1积分兑470元体检套餐，速戳>！"
            }
          ]
        },
        {
          ye: 2,
          yan: [
            {
              id: 11,
              name: "",
              hongdong: "-活动结束-",
              chin: "【上新】7月夏季穿搭精选",
              pic:
                "http://yanxuan.nosdn.127.net/789521aed6fcb7f101fb4647ff352dac.jpg?imageView&quality=95&thumbnail=504y192",
              time: "2019-06-24 09:00:25",
              tit: "法式茶歇裙、真丝居家服、舒适内塔...夏季清凉焕新低至19.9元！"
            },
            {
              id: 12,
              name: "",
              hongdong: "-活动结束-",
              chin: "【福利】618不花钱的狂欢！",
              pic:
                "http://yanxuan.nosdn.127.net/fd75b7872beca10d6b0c494087d2700f.jpg?imageView&quality=95&thumbnail=504y192",
              time: "2019-06-16 20:00:25",
              tit: "海量爆品0元积分兑，先到先得！"
            },
            {
              id: 13,
              name: "",
              hongdong: "-活动结束-",
              chin: "【惊喜】瓜分3亿回馈金！",
              pic:
                "http://yanxuan.nosdn.127.net/df8cefab47c4653c3cdb92b4767645e4.jpg?imageView&quality=95&thumbnail=504y192",
              time: "2019-06-12 11:00:25",
              tit:
                "618狂欢趴！8折神券大派送，百万津贴抢先领，瓜分回馈金最高全额返你的历史消费！"
            }
          ]
        }
      ],
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
      arr1: [
        { name: "严选活动" },
        { name: "我的资产" },
        { name: "通知消息" },
        { name: "物流助手" },
        { name: "互动消息" }
      ],
     num: 0,
    };
  },
  mounted() {
  window.addEventListener("scroll", function() {
      var top =
        document.documentElement.scrollTop ||
        window.pageYOffset||
        document.body.scrollTop
    });

  },
  methods: {
    listidindex(index) {
      this.listid = index;
    },
    listid_index(index) {
      this.num = index;
    },
    add(itm) {
      document.documentElement.scrollTop=0
      this.yui = itm;
    },
    prev() {
      document.documentElement.scrollTop=0
      this.yui--;
      if (this.yui < 0) {
        this.yui = 0;
      }
    },
    next() {
      document.documentElement.scrollTop=0
      this.yui++;
      if (this.yui > this.bigbox.length - 1) {
        this.yui = this.bigbox.length - 1;
      }
    },
  }
};
</script>

<style scope>
@import url(../../static/yucss/two.css);
</style>


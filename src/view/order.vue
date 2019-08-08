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
                    <a href class="w-menu-item sideText">
                      <router-link to="/">个人中心</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/">消息通知</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/">账号信息</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/">地址管理</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/">账号安全</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/">我的积分</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/">我的收藏</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/">我的足迹</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/">我的甄选家</router-link>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="hd sideText">交易管理</div>
              <div class="bd sideText1">
                <ul>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText active">
                      <router-link to="/order">订单管理</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/allowance">津贴</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/giving">回馈金</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/envelope">我的红包</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/coupons">优惠券（0）</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/card">礼品卡</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/purchase">优先购</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="javescript;" class="w-menu-item sideText">
                      <router-link to="/raise">我的众筹</router-link>
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
            <div class="j-searchFilter m-searchFilter">
              <input
                type="text"
                class="w-orderFilterInput j-orderSearchInput"
                placeholder="输入商品名称或订单号搜索"
              />
              <input
                type="submit"
                class="w-button w-orderFilterSubmitBtn j-orderFilterSubmitBtn"
                value="搜索"
              />
            </div>
            <div class="lis" v-show="num==0">
              <div class="m-displayContainer">
                <div class="m-emptyStatus">
                  <div class="w-icon-empty icon-empty-msg"></div>
                  <div class="emptyText">还没有任何订单呢</div>
                  <div class="tiaoxuan">去挑选好物>></div>
                </div>
              </div>
            </div>
            <div class="lis" v-show="num==1">
              <div class="m-displayContainer">
                <div class="m-emptyStatus">
                  <div class="w-icon-empty icon-empty-msg"></div>
                  <div class="emptyText">当前无待付款订单</div>
                  <!-- <div class="tiaoxuan">去挑选好物>></div> -->
                </div>
              </div>
            </div>
            <div class="lis" v-show="num==2">
              <div class="m-displayContainer">
                <div class="m-emptyStatus">
                  <div class="w-icon-empty icon-empty-msg"></div>
                  <div class="emptyText">当前待发货订单</div>
                  <!-- <div class="tiaoxuan">去挑选好物>></div> -->
                </div>
              </div>
            </div>
            <div class="lis" v-show="num==3">
              <div class="m-displayContainer">
                <div class="m-emptyStatus">
                  <div class="w-icon-empty icon-empty-msg"></div>
                  <div class="emptyText">当前待收货订单</div>
                  <!-- <div class="tiaoxuan">去挑选好物>></div> -->
                </div>
              </div>
            </div>
            <div class="lis" v-show="num==4">
              <div class="m-displayContainer">
                <div class="m-emptyStatus">
                  <div class="w-icon-empty icon-empty-msg"></div>
                  <div class="emptyText">当前待评价订单</div>
                  <!-- <div class="tiaoxuan">去挑选好物>></div> -->
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
      bigbox: [],
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
        { name: "全部订单" },
        { name: "待付款" },
        { name: "待发货" },
        { name: "待收货" },
        { name: "待评价" }
      ],
      num: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", function() {
      var top =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
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
      document.documentElement.scrollTop = 0;
      this.yui = itm;
    },
    prev() {
      document.documentElement.scrollTop = 0;
      this.yui--;
      if (this.yui < 0) {
        this.yui = 0;
      }
    },
    next() {
      document.documentElement.scrollTop = 0;
      this.yui++;
      if (this.yui > this.bigbox.length - 1) {
        this.yui = this.bigbox.length - 1;
      }
    }
  }
};
</script>

<style scope>
@import url(../../static/liucss/order.css);
</style>


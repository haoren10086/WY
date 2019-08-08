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
                       <a href="javescript;" class="w-menu-item  sideText active">
                           <router-link to="/">个人中心</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                           <router-link to='/'>消息通知</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/'>账号信息</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/'>地址管理</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/'>账号安全</router-link>
                       </a>
                    </li>
                    <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/'>我的积分</router-link>
                       </a>
                    </li>
                    <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/'>我的收藏</router-link>
                       </a>
                    </li>
                    <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/'>我的足迹</router-link>
                       </a>
                    </li>
                    <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/'>我的甄选家</router-link>
                       </a>
                    </li>
                </ul>
              </div>
              <div class="hd sideText">交易管理</div>
              <div class="bd sideText1">
                <ul>
                    <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                           <router-link to="/order">订单管理</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                           <router-link to='/allowance'>津贴</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/giving'>回馈金</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/envelope'>我的红包</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/coupons'>优惠券（0）</router-link>
                       </a>
                    </li>
                    <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/card'>礼品卡</router-link>
                       </a>
                    </li>
                    <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/purchase'>优先购</router-link>
                       </a>
                    </li>
                    <li>
                       <a href="javescript;" class="w-menu-item  sideText">
                         <router-link to='/raise'>我的众筹</router-link>
                       </a>
                    </li>
                </ul>
              </div>
            </div>
          </div> 
        </div>
        <div class="bigbox">
            <div >默认
              <!-- <router-link to="/first">111</router-link> -->
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
        
    };
  },
  methods: {
    listidindex(index){
                this.listid=index;

    }
  },
};
</script>

<style scope>
.wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.wrap-center {
  width: 1090px;
  min-height: 3201px;
  height: 1000px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  background: white;
}
.side {
  position: absolute;
  left: 0;
  top: 0;
  width: 180px;
  height: 896px;
  background: white;
  border: 1px solid #eaeaea;
}
.side_one {
  width: 180px;
  padding-top: 24px;
}
.bigbox {
  position: absolute;
  right: 0;
  width: 890px;
  height: 1053px;
background: white;
}
.bigbox>div{
    /* display: none; */
    width: auto;
}
.m-sideItem {
  text-align: left;
  color: #333;
  margin-bottom: 40px;
}
.hd {
  padding-left: 43px;
  font-size: 16px;
  color: #333;
  font-weight: 700;
}
.sideText {
  line-height: 18px;
  margin: 16px 0;
}
.bd {
  text-align: left;
}
.sideText1 {
  line-height: 18px;
  margin: 16px 0;
}
.bd .w-menu-item {
  font-size: 14px;
  display: block;
  padding-left: 41px;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  color: #666;
}
.bd .w-menu-item.active {
  color: #b4a078;
  border-left-color: #bea988;
}
.bd .w-menu-item:hover {
  color: #b4a078;
}
</style>

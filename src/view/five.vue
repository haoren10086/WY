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
                       <a href="JavaScript;" class="w-menu-item  sideText">   
                           <router-link to="/">个人中心</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="JavaScript;" class="w-menu-item  sideText">
                        <router-link to="/two">消息通知</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="JavaScript;" class="w-menu-item  sideText">
                       <router-link to="/three">账号信息</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="JavaScript;" class="w-menu-item  sideText">
                          <router-link to="/four">地址管理</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="JavaScript;" class="w-menu-item  sideText active">
                          <router-link to="/five">账号安全</router-link>
                       </a>
                    </li>
                    <li>
                       <a href="JavaScript;" class="w-menu-item  sideText">
                           <router-link to="/six">我的积分</router-link>
                       </a>
                    </li>
                     <li>
                       <a href="JavaScript;" class="w-menu-item  sideText">
                           <router-link to="/seven">我的收藏</router-link>  
                       </a>
                    </li>
                     <li>
                       <a href="JavaScript;" class="w-menu-item  sideText">
                          <router-link to="/eight">我的足迹</router-link> 
                       </a>
                    </li>
                     <li>
                       <a href="JavaScript;" class="w-menu-item  sideText">
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
              <div class="g-main securityCenterPageContainer">
                <div class="m-securityCenter">
                  <div class="row curAccount">
                    <label class="col-1 f-left">您当前的帐号</label>
                    <span class="col-2 f-left">QQ</span>
                  </div>
                  <div class="row">
                    <div class="col-1 f-left">
                      <i class="w-icon-normal icon-normal-alert"></i>
                      绑定手机
                    </div>
                    <span class="col-2 f-left f-txt-assist">绑定手机后，您可享受严选丰富的手机服务以及重要信息更改时的身份验证</span>
                    <a href="javascript:;" class="w-link f-right">绑定</a>
                  </div>
                  <div class="row last">
                    <label class="col-1 f-left">
                      <i class="w-icon-normal icon-normal-alert"></i>
                       支付密码
                    </label>
                    <span class="col-2 f-left f-txt-assist">支付密码启用后，将作为您帐号资产使用时的身份证明</span>
                    <a href="/user/securityCenter/setPayPwd" class="w-link f-right">立即设置</a>
                  </div>
                  <div class="row securityTips "></div>
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
        arr:["个人中心","消息通知","账号信息","地址管理","账号安全","我的积分","我的收藏","我的足迹","我的甄选家"],
        listid:0
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
@import url("../../static/yucss/five.css")
</style>


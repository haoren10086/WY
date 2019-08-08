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
                       <a href="JavaScript;" class="w-menu-item  sideText  active">
                          <router-link to="/four">地址管理</router-link>
                       </a>
                    </li>
                      <li>
                       <a href="JavaScript;" class="w-menu-item  sideText">
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
                <div class="g-main">
                  <div class="j-address-con">
                    <div class="w-address-none">
                      <div class="m-emptyStatus">
                        <div class="w-icon-empty icon-empty-addr"></div>
                        <div class="emptyText">您还没有收货地址</div>
                        <a class="w-link add" href="javascript:;">新建地址</a>
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
@import url("../../static/yucss/four.css")
</style>


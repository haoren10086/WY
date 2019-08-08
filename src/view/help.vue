<template>
  <div class="container">
    <div class="container_center">
      <div class="container_top">
        <div class="c_crumbs">
          <a href>首页</a>
          <span class="w_icon"></span>
          <span class="z_cur">帮助中心</span>
        </div>
      </div>
      <div class="leftside">
          <div class="m_left">
              <dl class="help">
                  <dt class="help">
                      <router-link to="/help/1">
                        <a class="help_explain" href="">常见问题</a>
                      </router-link>
                     
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">购买相关</a>
                      <span class="icon"></span>
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">配送与验收</a>
                      <span class="icon"></span>
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">售后服务</a>
                      <span class="icon"></span>
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">会员制度</a>
                      <span class="icon"></span>
                  </dt>
              </dl>
                <dl class="help">
                  <dt class="help">
                      <router-link to="/help/2">
                            <a class="help_explain" href="">甄选家</a>
                      </router-link>
                      
                     
                  </dt>
              </dl>
                <dl class="help">
                  <dt class="help">
                       <router-link to="/help/strict_select">
                      <a class="help_explain" href="">严选众筹</a>
                        </router-link>
                  </dt>
              </dl>
                <dl class="help">
                  <dt class="help">
                       <router-link to="/help/evaluation_rules">
                      <a class="help_explain" href="">评价规则</a>
                        </router-link>
                  </dt>
              </dl>
          </div>

           <div class="m_left favour">
              <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">优惠券</a>
                       <span class="icon"></span>
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">活动规则</a>
                      <span class="icon"></span>
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">红包</a>
                      
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">回馈金</a>
                      
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">购物津贴</a>
                      
                  </dt>
              </dl>
                <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">定金购</a>
                     
                  </dt>
              </dl>
                <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">优先购</a>
                       <span class="icon"></span>
                  </dt>
              </dl>
                <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">年购套餐</a>
                     
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">礼品卡</a>
                       <span class="icon"></span>
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">积分规则</a>
                     
                  </dt>
              </dl>
          </div>
          <div class="m_left cooperate">
              <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">服务协议</a>
                       <span class="icon"></span>
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">隐私政策</a>
                     
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">公告</a>
                       <span class="icon"></span>
                  </dt>
              </dl>
               <dl class="help">
                  <dt class="help">
                      <a class="help_explain" href="">商务合作</a>
                      
                  </dt>
              </dl>
          </div>

     <router-view></router-view>
      
      </div>
      <div class="box">
         
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
@import "../../static/css/help";
</style>

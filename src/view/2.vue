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
                  <dt id="zhenxuan" class="help">
                      <router-link to="/help/2">
                              <a style=" color: #b4a078;" class="help_explain" href="">甄选家</a>
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
                      <a class="help_explain" href="">评价规则</a>
                     
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
        <div class="content">
            <div class="c_title">甄选家</div>
            <ul class="decimal">
                <li>
                    <div class="question">问：我在样式甄选中点喜欢有什么用呢？</div>
                    <div class="answer">答：样式甄选中的好物都是严选待开发的商品，受更多用户喜爱的款将成为商品定样的参考。</div>
                </li>
                 <li>
                    <div class="question">问：申请了样品试用后，怎样知道自己是否入选？</div>
                    <div class="answer">答：筛选结果会在申请截止后1—3天公布，请点击【我的甄选家】—【我的试用】查看；此外，我们会发送中选通知函至每期试用者的邮箱，请注意查收。</div>
                </li>
                 <li>
                    <div class="question">问：什么时候能收到试用的样品？是用什么快递发的？</div>
                    <div class="answer">答：样品会在筛选结果公布后1—2天安排寄出，2—4天后到货（具体以物流情况为准），试用品统一使用顺丰快递发货；我们会在邮件中告知快递单号，供您查询。</div>
                </li>
                 <li>
                    <div class="question">问：为什么样品的包装和严选一般商品的包装不一样？</div>
                    <div class="answer">答：样品正处于严选开发阶段，尚未配备专用包装，因此，在保障样品不受损的前提下，采用通用包装邮寄。</div>
                </li>
                 <li>
                    <div class="question">问：在哪里填写报告？</div>
                    <div class="answer">答：请点击【我的甄选家】—【我的试用】，您申请的试用会在【申请成功】里，您可点击并填写报告；此外，您还可以在邮件中直接点击“填写报告”；移动端填写报告操作不便，为了您的填写体验，请登录PC端进行填写。报告入口将在试用截止时自动关闭。</div>
                </li>
                 <li>
                    <div class="question">问：什么时候可以收到50元直减券？</div>
                    <div class="answer">答：如期提交真实详尽、图文并茂、专业全面的优秀报告，您将在活动结束前获得50元直减优惠券，十分感谢您在这款样品开发定样过程中的贡献。</div>
                </li>






            </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>



<script>
export default {

}
</script>

<style scoped>
  @import "../../static/css/2.css";
</style>

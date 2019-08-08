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
                <a class="help_explain" href>常见问题</a>
              </router-link>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>购买相关</a>
              <span class="icon"></span>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>配送与验收</a>
              <span class="icon"></span>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>售后服务</a>
              <span class="icon"></span>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>会员制度</a>
              <span class="icon"></span>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <router-link to="/help/2">
                <a class="help_explain" href>甄选家</a>
              </router-link>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help" id="strict_select">
              <router-link to="/help/strict_select">
                <a style=" color: #b4a078;" class="help_explain" href>严选众筹</a>
              </router-link>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <router-link to="/help/evaluation_rules">
                <a class="help_explain" href>评价规则</a>
              </router-link>
            </dt>
          </dl>
        </div>

        <div class="m_left favour">
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>优惠券</a>
              <span class="icon"></span>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>活动规则</a>
              <span class="icon"></span>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <router-link to="/help/red_envelopes">
                <a class="help_explain" href>红包</a>
              </router-link>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>回馈金</a>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>购物津贴</a>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>定金购</a>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>优先购</a>
              <span class="icon"></span>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>年购套餐</a>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>礼品卡</a>
              <span class="icon"></span>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>积分规则</a>
            </dt>
          </dl>
        </div>
        <div class="m_left cooperate">
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>服务协议</a>
              <span class="icon"></span>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>隐私政策</a>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>公告</a>
              <span class="icon"></span>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
              <a class="help_explain" href>商务合作</a>
            </dt>
          </dl>
        </div>

        <router-view></router-view>
      </div>
      <div class="box">
        <div class="content">
          <div class="c_title">严选众筹</div>
          <ul class="decimal">
            <li>
              <div class="question">问：严选众筹是什么？</div>
              <div
                class="answer"
              >答：严选众筹是网易严选的众筹栏目。用户可以在这里优先体验严选供应商的优质新品。众筹成功的商品代表其已获得严选用户的认可，日后会在网易严选全渠道上线售卖。我们希望用户通过这样的方式加入严选商品环节，和网易严选一起，找寻天下好物。</div>
            </li>
            <li>
              <div class="question">问：众筹商品一般的众筹周期是多久？</div>
              <div class="answer">答：众筹商品根据产品的属性不同，有15天、30天、60天等不同的众筹周期。目前，众筹的商品会以30天众筹周期为主。</div>
            </li>
            <li>
              <div class="question">问：众筹商品上新周期？</div>
              <div class="answer">答：严选众筹第一期会上线6到8款产品，之后的每周五是固定的众筹产品上新时间，每次上线1-2款新品。</div>
            </li>
            <li>
              <div class="question">问：众筹商品的质检，严选是怎么参与其中的？</div>
              <div
                class="answer"
              >答：关于众筹商品的质检，严选有三道把关。首先，在严选上线的众筹商品，会有来自供应商的第三方质检报告。同时，严选的质检专家团队会对质检报告以及产品进行第二道专家评估。最后，在产品入库前，严选还会有最后一道入库质检。</div>
            </li>
            <li>
              <div class="question">问：如果众筹产品的质量出现了问题，要怎么处理？</div>
              <div class="answer">答：严选众筹产品如有质量问题，支持30天售后服务。但鉴于众筹产品特殊性，可支持30天退货，不支持换货。</div>
            </li>
            <li>
              <div class="question">问：众筹商品的物流体系是怎么样的？工厂发货还是严选仓库发货？众筹成功后发货周期是多久？</div>
              <div class="answer">答：除了大件需要代发的商品，其他众筹成功的商品都是由杭州严选仓库发货，一般来说众筹成功的商品会在众筹成功7天后发货。</div>
            </li>
            <li>
              <div class="question">问：众筹商品的定价是怎么定的？</div>
              <div class="answer">答：众筹商品会以比较优惠的价格提供给消费者，让消费者用实惠的价格体验到新鲜好物。</div>
            </li>
            <li>
              <div class="question">问：众筹成功的商品一定会上线网易严选吗？</div>
              <div
                class="answer"
              >答：视众筹商品情况而定。对于效果比较好，用户呼声高的众筹商品，严选会根据众筹期间用户提出的建议进一步改进商品后，在网易严选全渠道上线售卖。</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {};
</script>

<style scoped>
@import "../../static/css/strict_select.css";
</style>

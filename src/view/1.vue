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
            <dt id="commom_problem" class="help">
              <router-link to="/help/1">
                <a style=" color: #b4a078;" class="help_explain" href>常见问题</a>
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
            <dt class="help">
               <router-link to="/help/strict_select">
                      <a class="help_explain" href="">严选众筹</a>
                        </router-link>
            </dt>
          </dl>
          <dl class="help">
            <dt class="help">
               <router-link to="/help/evaluation_rules">
                      <a   class="help_explain" href="">评价规则</a>
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
              <a class="help_explain" href>红包</a>
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
      </div>
      <div class="box">
        <div class="content">
          <div class="c_title">常见问题</div>
          <ul class="decimal">
            <li>
              <div class="question">问：网易严选的商品都是正品吗？</div>
              <div class="answer">答：网易严选秉承网易一贯的严谨态度，对商品的产地、工艺、原材料都严格把关，力求帮消费者甄选到最优质的商品，您可以放心选购。</div>
            </li>
            <li>
              <div class="question">问：网易严选的订单如何配送？</div>
              <div
                class="answer"
              >答：网易严选会根据商品所在地、顾客所在地和商品的尺寸重量优选物流配送商，确保优质用户体验。目前暂不支持自选快递，具体物流信息可在下单成功后“我的订单-追踪物流”中查看。</div>
            </li>
            <li>
              <div class="question">问：我的包裹多长时间能送到？</div>
              <div class="answer">答：我们会在订单支付成功后1-3天内发货（节假日顺延，部分特殊商品七天内发货），送达时间视快递配送时间而定。</div>
            </li>
            <li>
              <div class="question">问：如何免运费？</div>
              <div
                class="answer"
              >答：对于单笔所购商品总价金额（不含运费）大于或等于88元，我们提供一次免费送货服务（港澳台地区需大于或等于500元包邮； 部分商品的详情页服务政策中说明有单独的运费政策，以商详页运费说明为准）。</div>
            </li>
            <li>
              <div class="question">问：订单生成后我需要在多长时间内支付货款？</div>
              <div class="answer">答：下单后我们会为您保留1小时，为确保订单的有效性，需要您在1小时内完成支付。</div>
            </li>
            <li>
              <div class="question">问：在线支付已经成功，为什么我的订单状态还是显示“待付款”？</div>
              <div
                class="answer"
              >答：一般来说，网上支付是即时到账的。但有时因为网络原因，可能会有几分钟的延迟，请您耐心等待，并及时查询您的银行卡账户余额，如果费用已扣，但订单状态依然是“等待付款”，请联系客服处理。</div>
            </li>
            <li>
              <div class="question">问：实物与图片有色差吗？</div>
              <div class="answer">答：网易严选中的商品照片均以实物拍摄，颜色经设计师校对，由于不同的电脑显示器、光线、亮度都有差异，造成轻微色差难以避免。</div>
            </li>
            <li>
              <div class="question">问：下单后可以修改订单信息吗？</div>
              <div class="answer">答：订单支付前，用户可以在订单详情页中修改订单收货信息和发票信息，修改结果以实际页面修改提示为准。</div>
            </li>
            <li>
              <div class="question">问：下单时忘记选择开发票，我该如何申请补开发票？</div>
              <div
                class="answer"
              >答：下单时如未选择开发票，可在订单确认收货后180天内，在需补开发票的订单详情页申请补开（网易严选App也可在“售后服务-发票服务”未开票订单列表申请开票）。确认收货超过180天的订单，请联系严选在线客服咨询是否可补开。</div>
            </li>
            <li>
              <div class="question">问：网易严选的订单如何配送？</div>
              <div
                class="answer"
              >答：网易严选会根据商品所在地、顾客所在地和商品的尺寸重量优选物流配送商，确保优质用户体验。目前暂不支持自选快递，具体物流信息可在下单成功后“我的订单-追踪物流”中查看。</div>
            </li>
            <li>
              <div class="question">问：客服的联系方式是什么？</div>
              <div class="answer">
                答：您可以通过在线客服和电话联系客服。
                <br />客服电话: 400-0368-163
              </div>
            </li>
            <li>
              <div class="question">问：使用优惠券后，订单中单个商品实际支付的价格怎么计算的？</div>
              <div class="answer">
                答：订单中使用过的优惠券金额将按比例摊分到每件商品上，您是根据"券后结算价"来支付的。
                <br />
                <br />
                <br />例如：若订单中包含价格70元的商品A，价格30元的商品B，此单中用了10元优惠券（该券均适用A、B）。那么商品A上被摊分的金额等于：10（现金券金额）/100（订单总额）*70（商品A 的价格）=7元。因此商品A的实际支付价格为63元，若商品A发生退货，则退款金额也为63元。
              </div>
            </li>
            <li>
              <div class="question">问：退货时，商品的退款是怎么计算的？</div>
              <div class="answer">答：按照实际支付货款退还。若您在该订单中使用过优惠券，则该优惠券不予返还，并按 "券后结算价"为商品退款。</div>
            </li>
            <li>
              <div class="question">问：在哪里查看我的优惠券？</div>
              <div class="answer">答：登录网易严选，在“个人中心-优惠券”中可查看您的优惠券，包括未使用、已使用、已失效优惠券。</div>
            </li>
            <li>
              <div class="question">问：如何解绑银行卡?</div>
              <div class="answer">
                答：目前只支持在PC端进行解绑，解绑流程如下:
                <br />1）163或126等网易通行证账号:
                <br />步骤1 登录网易支付网站（epay.163.com）
                <br />步骤2 在"帐户管理"中解除绑定银行卡
                <br />
                <br />2）"微信/QQ/微博"等第三方联登帐号:
                <br />步骤1 用需要解绑的帐户登录网易严选PC版(you.163.com)
                <br />步骤2 打开网易支付网站（epay.163.com）
                <br />步骤3 在"帐户管理"解除绑定银行卡
              </div>
            </li>
            <li>
              <div class="question">问：商品发货后，拒收会收取费用吗？</div>
              <div class="answer">答：商品发货后，非商品质量问题拒收产生的退回物流费用由用户承担。</div>
            </li>
            <li>
              <div class="question">问：违规订单处理规则？</div>
              <div class="answer">
                为了维护广大严选会员的合法权益，一旦发现存在如下恶意刷单、刷券的行为（包括但不限于以下行为）：
                <br />1）从淘宝等其他非严选及合作商合法活动页面获得优惠券并下单购买的订单；
                <br />2）在严选网站通过机器手段恶意批量刷取优惠券并在严选进行下单购买的订单；
                <br />3）利用软件、技术手段或其他方式，为套取商品、优惠券、优惠活动、运费或者其他利益的下单行为；
                <br />
                <br />用户承诺其自愿接受严选对违规订单进行以下一项或多项操作：
                <br />1）取消订单；
                <br />2）不发货；
                <br />3）对已出库、发货的订单进行拦截、追回；
                <br />4）暂停或阻止后续在严选购物；
                <br />5）其他严选认为有必要的管控措施；
                <br />
                <br />注：
                <br />1）对于本规则规定的违规订单，如订单被取消、不发货等，严选不提供任何赔付、补偿；
                <br />2）对于本规则规定的违规订单，如订单被取消、不发货等，将按平台规则进行退款；
                <br />3）如对订单取消、不发货等情形有疑问，可与严选客服进行联系。
              </div>
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

<style csoped>
@import "../../static/css/1.css";
</style>

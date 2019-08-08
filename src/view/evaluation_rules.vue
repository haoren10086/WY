
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
            <dt class="help">
              <router-link to="/help/strict_select">
                <a class="help_explain" href>严选众筹</a>
              </router-link>
            </dt>
          </dl>
          <dl class="help">
            <dt id="evaluation_rules" class="help">
              <router-link to="/help/evaluation_rules">
                <a style=" color: #b4a078;" class="help_explain" href>评价规则</a>
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
             <router-link to="/help/red">
                <a style=" color: #b4a078;" class="help_explain" href="javascript:;">红包</a>
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
          <div class="c_title">评价规则</div>
          <div class="decimal">
            <p class="p_title">
              <b>第一章 &nbsp;&nbsp;</b>
              <b>概述</b>
            </p>
            <p
              class="discrible"
            >第一条 为促进用户基于真实的交易作出公正、客观、真实的评价，进而为其他消费者在购物决策过程中提供参考，根据《网易严选服务协议》等相关协议、规则的规定，制定本规则。</p>
            <p class="discrible">第二条 本规则适用于网易严选官网及网易严选APP的所有用户。</p>
            <p class="discrible">第三条 《网易严选服务协议》中已有规定的，从其规定；未有规定或本规则有特殊规定的，按照本规则执行。</p>

            <p style="margin-top:20px;" class="discrible">
              <b>第二章 评价基本信息</b>
            </p>
            <p class="discrible">第一条&nbsp; 除退货完成的订单外，网易严选用户有权基于真实的交易在订单交易成功后15天内进行评价。</p>
            <p class="discrible">第二条&nbsp; 除退货完成的订单外，在评价完成后90天内进行评价，用户可以追加一次评价。</p>
            <p class="discrible">第三条&nbsp; 确认收货后超过15天未评价的商品，系统将默认匹配好评。</p>
            <p
              class="discrible"
            >第四条&nbsp; 评论内容包括“文字评论”、“图片评论”、“视频”和“文字+图片评论+视频”等（视频功能目前仅支持App4.3.0 以上版本）。</p>
            <p class="discrible">第五条 &nbsp; 用户评论后，可获得成长值（成长值可参考帮助中心-会员成长值）。</p>
            <p class="discrible">第六条 用户提交评论后，网易严选有权依据本规则及相关规定对评论进行审核，审核时效为1-2个工作日。</p>
            <p style="margin-top:20px;" class="discrible">
              <b>第三章 评价处理</b>
            </p>
            <p
              class="discrible"
            >第一条&nbsp;为了确保评价体系的公正性、客观性和真实性，网易严选将基于有限的技术手段，对违规评价、不当评价、恶意评价等破坏网易严选评价体系、侵犯消费者知情权的违规行为予以坚决打击。</p>
            <p class="discrible">第二条&nbsp;网易严选保留拒绝或屏蔽违反国家法律、行政法规、规章或其他强制性规定的违规评价的权利。具体而言，违规评价是指包含有以下信息的评价：</p>

            <p class="discrible">1. 违反宪法或法律法规规定的；</p>
            <p class="discrible">2. 危害国家安全、泄露国家秘密、颠覆国家政权、破坏国家统一的；</p>
            <p class="discrible">3. 损害国家荣誉和利益的，损害公共利益的；</p>
            <p class="discrible">4. 煽动民族仇恨、民族歧视的，破坏民族团结的；</p>
            <p class="discrible">5. 破坏国家宗教政策，宣扬邪教和封建迷信的；</p>
            <p class="discrible">6. 散布谣言，扰乱社会秩序，破坏社会稳定的；</p>
            <p class="discrible">7. 散布赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>
            <p class="discrible">8. 含有法律、行政法规、规章禁止的其他内容的。</p>
            <p class="discrible">第三条&nbsp;网易严选有权对不当评价作拒绝或屏蔽处理。不当评价是指包含有（包括但不限于）辱骂、泄露信息、污言秽语（包括同音字）、广告信息、无实际意义信息、色情低俗内容、其他有违公序良俗或违反《网易严选服务协议》信息的评价。具体而言，不当评价通常包含有以下信息：</p>
             <p class="discrible">1. 含有恶意诋毁，谩骂性质的词语（包括同音字）；</p>
            <p class="discrible">2. 泄露信息，如含有私人信息：如手机号，银行卡号，个人地址、购物清单、快递面单等；</p>
            <p class="discrible">3. 广告信息，如涉及网络广告或推销性质（个人二维码、微信名、网址、公众号等）、以及兜售商品含有外部链接或二维码等内容；</p>
            <p class="discrible">4. 无实际意义的信息，如与评价商品无关的 、无意义及不雅观的文字、图片、数字、符号、表情等；</p>
            <p class="discrible">5. 非网易严选官网销售的商品、商家信息，包括但不限于店铺、商品链接、联系信息等；</p>
            <p class="discrible">6. 就同一订单多次发送的且内容完全相同的信息；</p>
            <p class="discrible">7. 色情低俗内容：如涉及淫秽、色情等不雅内容；</p>
            <p class="discrible">8. 违反《网易严选服务协议》；</p>
              <p class="discrible">9. 其他违反公序良俗的信息。</p>
            <p class="discrible">第四条&nbsp;如评价用户被发现有以给予好评、中评、差评、负面评论等方式谋取额外财物或其它不当利益的恶意评价行为，</p>
             <p class="discrible">第五条&nbsp;针对前述违规行为，除对产生的评价做相应处理外，网易严选将视情形对评价用户采取身份验证、拒绝评论、屏蔽评论内容、限制评价、限制用户行为等处理措施。 </p>
               <p class="discrible">第六条&nbsp;第六条 网易严选将根据平台运营需要，调整评价的排序逻辑。</p>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {};
</script>

<style scoped>
@import "../../static/css/evaluation_rules.css";
</style>

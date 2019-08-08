<template>
  <div class="container">
    <div class="container_center">
      <div class="container_top">
        <div class="c_crumbs">
          <a href>首页</a>
          <span class="w_icon"></span>
          <span class="z_cur"></span>
        </div>
      </div>
      <div class="aside">
        <div class="m_aside">
          <div class="hd">帐号管理</div>
          <ul class="bd">
            <li>
              <a href class="w_menu_item">个人中心</a>
            </li>
            <li>
              <a href class="w_menu_item">消息通知</a>
            </li>
            <li>
              <a href class="w_menu_item">账号信息</a>
            </li>

            <li>
              <a href class="w_menu_item">地址管理</a>
            </li>
            <li>
              <a href class="w_menu_item">账号安全</a>
            </li>
            <li>
              <a href class="w_menu_item">我的积分</a>
            </li>
            <li>
              <a href class="w_menu_item">我的收藏</a>
            </li>
            <li>
              <a href class="w_menu_item">我的足迹</a>
            </li>
            <li>
              <a href class="w_menu_item">我的甄选家</a>
            </li>
          </ul>
        </div>

        <div class="m_aside buy">
          <div class="hd">交易管理</div>
          <ul class="bd">
            <li>
              <a href class="w_menu_item">订单管理</a>
            </li>
            <li>
              <a href class="w_menu_item">津贴</a>
            </li>
            <li>
              <a href class="w_menu_item">回馈金</a>
            </li>

            <li>
              <a href class="w_menu_item">我的红包</a>
            </li>
            <li>
              <a href class="w_menu_item">优惠券（0）</a>
            </li>
            <li>
              <a href class="w_menu_item">礼品卡</a>
            </li>
            <li>
              <a href class="w_menu_item">优先购</a>
            </li>
            <li>
              <a href class="w_menu_item">我的众筹</a>
            </li>
          </ul>
        </div>

        <div class="m_aside server">
          <div class="hd">服务中心</div>
          <ul class="bd">
            <li>
              <router-link to="/aftersale">
                    <a href class="w_menu_item">售后记录</a>
              </router-link>
             
            </li>
            <li>
              <a href class="w_menu_item">价格保护</a>
            </li>
            <li>
              <router-link to="/help/1">
                <a href="" class="w_menu_item">帮助中心</a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>

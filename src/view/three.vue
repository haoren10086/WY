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
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/">个人中心</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/two">消息通知</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText active">
                      <router-link to="/three">账号信息</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/four">地址管理</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/five">账号安全</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/six">我的积分</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/seven">我的收藏</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/eight">我的足迹</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="JavaScript;" class="w-menu-item sideText">
                      <router-link to="/nine">我的甄选家</router-link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="bigbox">
          <div>
            <ul class="list">
              <li
                v-for="(item,index) in arr1"
                @click="choose(index)"
                :class="{show:listid==index}"
                :key="index"
              >{{item.name}}</li>
            </ul>
            <div class="con">
              <div class="con_a" v-show="listid==0">
                <div class="s-one">
                  <form action class="m-userInfoForm">
                    <div class="item useravator">
                      <label class="label f-left">用户头像</label>
                      <div class="content f-left">
                        <div class="w-avator">
                          <img
                            src="https://thirdqq.qlogo.cn/g?b=oidb&k=qOm1qbSx8iaHTibeDH8Thobg&s=100&t=1557093349"
                            alt
                          />
                          <div class="modifyAvatar w-icon-normal icon-normal-camera"></div>
                          <div class="mask"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <label class="label f-left userId">
                        <span>用</span>
                        <span class="ml3">户</span>
                        <span class="ml3">ID</span>
                      </label>
                      <div class="content f-left">26198249984</div>
                    </div>
                    <div class="item">
                      <label class="label f-left">帐 号</label>
                      <div class="content f-left">QQ</div>
                    </div>
                    <div class="item">
                      <label class="label f-left">昵 称</label>
                      <div class="content f-left">
                        <input type="text" class="w-ipt w-ipt-l" name="nickname" maxlength="20" />
                      </div>
                    </div>
                    <div class="item">
                      <label class="label f-left">性 别</label>
                      <div class="content f-left">
                        <div class="w-radio f-left s-gold">
                          <input class="raido" type="radio" name="gender" id="male" value="0" />
                          <label for="male" class="ml3">男</label>
                        </div>
                        <div class="w-radio f-left ml40 s-gold">
                          <input class="radio" type="radio" name="gender" id="female" value="1" />
                          <label for="female" class="ml3">女</label>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <label class="label f-left">手机号码</label>
                      <div class="content f-left">
                        <a class="w-link">绑定手机号码</a>
                      </div>
                    </div>
                    <div class="item">
                      <label class="label f-left">出生日期</label>
                      <div class="content f-left j-birthdayParent">
                        <div>
                          <select name="birthYear" class="w-select w-select-s pad4">
                            <option value="0">--</option>
                          </select>
                          <label class="unit">年</label>
                          <select name="birthMonth" class="w-select w-select-s pad4">
                            <option value="0">--</option>
                          </select>
                          <label class="unit">月</label>
                          <select name="birthDay" class="w-select w-select-s pad4">
                            <option value="0">--</option>
                          </select>
                          <label class="unit">日</label>
                        </div>
                      </div>
                    </div>
                    <div class="item studentItem">
                      <label class="label-1 f-left">在校大学生</label>
                      <div class="content f-left">
                        <span>
                          <a href="javascript:;" class="w-link">未认证</a>
                        </span>
                        <span>
                          <a href="javascript:;" class="w-link">什么是学生特权</a>
                        </span>
                      </div>
                      <div class="splitLine"></div>
                    </div>
                    <div class="item">
                      <div class="content f-left">
                        <div class="w-button w-button-primary w-button-l">保存</div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="con_a" v-show="listid==1">
                <div class="s-two">
                  <div class="m-userInterestedCate">
                    <div class="interestedTips">多选几个，小选会推荐地更精准哦！</div>
                    <div class="interestedBox" v-for="itema in gan" :key="itema.id">
                      <div class="w-interestedItem">
                        <div class="itemCover">
                          <img  :src="itema.pic"  alt="床品被枕" class="cateImg" />
                        </div>
                        <div class="itemDes">
                          <span class="w-chkbox">
                            <input type="checkbox" />
                          </span>
                          <span class="cateName">{{itema.text}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="submitInner">
                      <button class="w-button w-button-primary">提交</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="con_a" v-show="listid==2">
                <div class="s-three">
                  <div class="m-userSizeInfoContainer">
                    <div class="header">
                      <span>最多可创建10个角色</span>
                      <a href="javascript:;" class="w-button w-button-primary f-right addBtn">新建</a>
                    </div>
                    <div class="roleSizeList">
                      <div class="roleSizeItem f-left">
                        <div class="roleName">
                          <span>我的尺码</span>
                          <div class="btns">
                            <a href="javascript:;" class="w-link f-margin-right-10">修改</a>
                            <a href="javascript:;" class="w-link">删除</a>
                          </div>
                        </div>
                        <div class="sizeInfo">
                          <div class="infoItem">
                            <div class="infoItemName">性别</div>
                            <div class="infoItemValue">男</div>
                          </div>
                           <div class="infoItem">
                            <div class="infoItemName">身高(cm)</div>
                            <div class="infoItemValue">--</div>
                          </div>
                           <div class="infoItem">
                            <div class="infoItemName">体重(kg)</div>
                            <div class="infoItemValue">--</div>
                          </div>
                          <div class="infoItem">
                            <div class="infoItemName">肩宽(cm)</div>
                            <div class="infoItemValue">--</div>
                          </div>
                           <div class="infoItem">
                            <div class="infoItemName">胸围(cm)</div>
                            <div class="infoItemValue">--</div>
                          </div>
                           <div class="infoItem">
                            <div class="infoItemName">腰围(cm)</div>
                            <div class="infoItemValue">--</div>
                          </div>
                          <div class="infoItem">
                            <div class="infoItemName">臀围(cm)</div>
                            <div class="infoItemValue">--</div>
                          </div>
                          <div class="infoItem">
                            <div class="infoItemName">脚长(cm)</div>
                            <div class="infoItemValue">--</div>
                          </div>
                          <div class="infoItem">
                            <div class="infoItemName">脚围(cm)</div>
                            <div class="infoItemValue">--</div>
                          </div>
                        </div>
                      </div>
                    </div>
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
      listid: 0,
      arr1: [
        { name: "基本资料" },
        { name: "感兴趣的分类" },
        { name: "我的尺码" }
      ],
      gan: [
        {
          id: 1,
          pic:"https://yanxuan.nosdn.127.net/d105860d3db3107c514cf5cd8ff10290.png",
          text: "床品被枕"
        },
        {
          id: 2,
          pic: "https://yanxuan.nosdn.127.net/28c8948f823fe0169220438d86c4e3a9.png",
          text: "餐厨用品"
        },
        {
          id: 3,
          pic: "https://yanxuan.nosdn.127.net/3867e21072ca77376ac8a216d6ca4372.png",
          text: "居家神器"
        },
        {
          id: 4,
          pic: "https://yanxuan.nosdn.127.net/e0289727dedcbe1ed3832d2e4ea838a1.png",
          text: "家具家饰"
        },
        {
          id: 5,
          pic: "https://yanxuan.nosdn.127.net/f74beafd16c357ec50fbd8baa79c0697.png",
          text: "鞋靴外搭"
        },
        {
          id: 6,
          pic: "https://yanxuan.nosdn.127.net/d16abeb9672ed9e4c9fd06337a127461.png",
          text: "内衣裤袜"
        },
        {
          id: 7,
          pic: "https://yanxuan.nosdn.127.net/c0a4f59ef66cbb57c7c6873e42bfd92c.png",
          text: "箱包差旅"
        },{
          id: 8,
          pic:"https://yanxuan.nosdn.127.net/d105860d3db3107c514cf5cd8ff10290.png",
          text: "床品被枕"
        },
        {
          id: 9,
          pic: "https://yanxuan.nosdn.127.net/28c8948f823fe0169220438d86c4e3a9.png",
          text: "餐厨用品"
        },
        {
          id: 10,
          pic: "https://yanxuan.nosdn.127.net/3867e21072ca77376ac8a216d6ca4372.png",
          text: "居家神器"
        },
        {
          id: 11,
          pic: "https://yanxuan.nosdn.127.net/e0289727dedcbe1ed3832d2e4ea838a1.png",
          text: "家具家饰"
        },
        {
          id: 12,
          pic: "https://yanxuan.nosdn.127.net/f74beafd16c357ec50fbd8baa79c0697.png",
          text: "鞋靴外搭"
        },
        {
          id: 13,
          pic: "https://yanxuan.nosdn.127.net/d16abeb9672ed9e4c9fd06337a127461.png",
          text: "内衣裤袜"
        },{
          id: 14,
          pic: "https://yanxuan.nosdn.127.net/3867e21072ca77376ac8a216d6ca4372.png",
          text: "居家神器"
        },
        {
          id: 15,
          pic: "https://yanxuan.nosdn.127.net/e0289727dedcbe1ed3832d2e4ea838a1.png",
          text: "家具家饰"
        }
      ]
    };
  },
  methods: {
    choose(index) {
      this.listid = index;
    }
  }
};
</script>

<style scope>
@import url("../../static/yucss/three.css");
</style>


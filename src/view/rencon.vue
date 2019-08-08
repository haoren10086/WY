<template>
  <div>
    <div class="exper">
      <div class="exper_item" v-for="(chao,index) in tang" :key="chao.id">
        <div class="exper_con">
          <div class="exper_top">
            <div class="exper_top_left">
              <h3>{{chao.name}}</h3>
            </div>
            <div class="exper_top_right">
              <div class="exper_top_chin">
                <div class="top_chin_item" v-for="cda in tang[index].top" :key="cda.id">
                  <a v-if="cda.shu!=''">/</a>
                  <span>{{cda.zi}}</span>
                </div>
              </div>
              <div class="exper_top_twochin">查看更多 ></div>
            </div>
          </div>
          <div class="exper_center">
            <div class="exper_but_left" @click="prev()"></div>
            <div class="exper_pic">
              <div class="exper_pic_one" :style="{'left':-(num*1090)+'px'}">
                <div class="exper_picture" v-for="(ban) in tang[index].pic" :key="ban.id">
                  <img :src="ban.url" alt />
                  <!-- {{ban.id}} -->
                </div>
              </div>
            </div>
            <div class="exper_but_right" @click="next()"></div>
            <ul class="exper_list">
              <li
                @click="ji(dex)"
                :class="{exper_list_dow:dex==num}"
                v-for="(cdb,dex) in tang[index].pic"
                :key="cdb.id"
              >
                <a></a>
              </li>
            </ul>
          </div>
          <div class="exper_bot">
            <div class="exper_bot_item" v-for="kiss in tang[index].shadom" :key="kiss.id">
              <div class="exper_item_box">
                <div class="exper_bot_pic">
                  <div class="experbot_pic_one">
                    <img :src="kiss.pic" alt />
                  </div>
                  <div class="experbot_pic_two">
                    <img :src="kiss.picone" alt />
                  </div>
                  <div class="experbot_pic_shadow" v-if="kiss.guo!=''">{{kiss.guo}}</div>
                </div>
                <div class="exper_bot_chin">
                  <div class="prdtTags">
                    <span class="red" v-if="kiss.red!=''">{{kiss.red}}</span>
                    <span class="jin" v-if="kiss.jin!=''">{{kiss.jin}}</span>
                    <span class="chao" v-if="kiss.chao!=''">{{kiss.chao}}</span>
                    <span class="xin" v-if="kiss.xin!=''">{{kiss.xin}}</span>
                  </div>
                  <div class="name">{{kiss.name}}</div>
                  <div class="price">{{kiss.qian}}</div>
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
      num: 0,
      index:0,
      tang: [
        {
          name: "居家生活",
          id: 60,
          top: [
            {
              id: 101,
              zi: "夏凉热卖",
              shu: ""
            },
            {
              id: 102,
              zi: "主题床品",
              shu: "1"
            },
            {
              id: 103,
              zi: "北欧原木",
              shu: "1"
            },
            {
              id: 104,
              zi: "餐厨系列",
              shu: "1"
            },
            {
              id: 105,
              zi: "床品件套",
              shu: "1"
            },
            {
              id: 106,
              zi: "被枕盖毯",
              shu: "1"
            },
            {
              id: 107,
              zi: "床垫床褥",
              shu: "1"
            }
          ],
          pic: [
            {
              id: 108,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/67e2745929964fa1fe6ff7aba033281f.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 109,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/d535ef7c63d5da2cc8e8511496d5375d.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 110,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/b4f9a9b1ad0bed5d9d1f614449b2cc97.jpg?imageView&quality=95&thumbnail=1090x310"
            }
          ],
          shadom: [
            {
              id: 111,
              name: "玩味·带盖耐热玻璃杯",
              pic:
                "https://yanxuan.nosdn.127.net/580f85a05883586045fda2fe1f987d5d.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/943d2b07a933aa1472e652221cf3c16b.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥49",
              red: "满额减",
              redone: "",
              chao: "",
              jin: "APP特惠",
              xin: "",
              guo: ""
            },
            {
              id: 112,
              name: "日本制造 抽拉式标签收纳篮 3色可选",
              pic:
                "https://yanxuan.nosdn.127.net/6a9e0335e23c3a2556e0536494d048c8.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/20bfaac2d4fadd58a117141b50804037.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥9.9",
              red: "",
              redone: "",
              chao: "超值价",
              jin: "",
              xin: "",
              guo: "日本制造"
            },
            {
              id: 113,
              name: "轻柔无捻小方巾 ",
              picone:
                "https://yanxuan.nosdn.127.net/3a4025a7422ddac7b7e296e49ba2f734.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              pic:
                "https://yanxuan.nosdn.127.net/cc200f6d6d2cff85ba10667b44beda51.png?quality=95&thumbnail=265x265&imageView",
              qian: "¥9.9",
              red: "",
              redone: "",
              chao: "超值价",
              jin: "",
              xin: "",
              guo: ""
            },
            {
              id: 114,
              name: "全价猫粮 1.8千克*1袋",
              pic:
                "https://yanxuan-item.nosdn.127.net/4c876e91e4875faaa2db61b41a46a7c0.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan-item.nosdn.127.net/2f8e97b45f7effdabee02cb667cbdd76.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥88",
              red: "加价购",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            }
          ]
        },
        {
          name: "服饰鞋包",
          id: 61,
          top: [
            {
              id: 108,
              zi: "人气爆款",
              shu: ""
            },
            {
              id: 109,
              zi: "好物上新",
              shu: "1"
            },
            {
              id: 110,
              zi: "七夕好礼",
              shu: "1"
            },
            {
              id: 111,
              zi: "男式T恤/POLO",
              shu: "1"
            },
            {
              id: 112,
              zi: "男式衬衫",
              shu: "1"
            },
            {
              id: 113,
              zi: "男式裤装",
              shu: "1"
            },
            {
              id: 114,
              zi: "男式牛仔",
              shu: "1"
            }
          ],
          pic: [
            {
              id: 115,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/4087d6993eff082d260ce071b0baa428.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 116,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/5bf456c3af3be352de231f6001c2a711.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 119,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/9c91f93226d32c83826b3a7f69d0b9af.jpg?imageView&quality=95&thumbnail=1090x310"
            }
          ],
          shadom: [
            {
              id: 111,
              name: "女式小锁扣牛皮双拉链斜挎包",
              pic:
                "https://yanxuan.nosdn.127.net/1ea83edde924aa22524cb399afadb823.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/9a160d95625d78666518e1061e2b87c2.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥349",
              red: "",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: "2色可选"
            },
            {
              id: 112,
              name: "2条装 男式基础平角内裤",
              pic:
                "https://yanxuan.nosdn.127.net/6a9e0335e23c3a2556e0536494d048c8.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/20bfaac2d4fadd58a117141b50804037.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥59",
              red: "满折",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: "6色可选"
            },
            {
              id: 113,
              name: "男式精梳棉圆领短袖T恤衫 ",
              picone:
                "https://yanxuan.nosdn.127.net/edc658ce0afdc9a0ba4742a4e4b5981d.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              pic:
                "https://yanxuan.nosdn.127.net/03faa79c841e439c9aeb645977f4f8f7.png?quality=95&thumbnail=265x265&imageView",
              qian: "¥49",
              red: "",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: "8色可选"
            },
            {
              id: 114,
              name: "3双/5双装 男式基础纯色抑菌船袜",
              pic:
                "https://yanxuan.nosdn.127.net/4a89b652c30fbfc6b40adfe08d996aa3.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/0ad3a926930ceb513b43bdf1c0b859b2.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥43.9",
              red: "满折",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: "5色可选"
            }
          ]
        },
        {
          name: "美食酒水",
          id: 62,
          top: [
            {
              id: 108,
              zi: "中秋好礼",
              shu: ""
            },
            {
              id: 109,
              zi: "新品首发",
              shu: "1"
            },
            {
              id: 110,
              zi: "好味精选",
              shu: "1"
            },
            {
              id: 111,
              zi: "饼干糕点",
              shu: "1"
            },
            {
              id: 112,
              zi: "小食糖巧",
              shu: "1"
            },
            {
              id: 113,
              zi: "肉类零食",
              shu: "1"
            },
            {
              id: 114,
              zi: "坚果炒货",
              shu: "1"
            }
          ],
          pic: [
            {
              id: 115,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/bda5d77ddf6ef375f74df4cca948c70f.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 116,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/3fac52e647381d2f18ed22733ff45bae.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 117,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/b99d1f95496bfbc06a202b070d7d6721.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 118,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/3e43eb4bff0f96f74e195ad833df86b8.jpg?imageView&quality=95&thumbnail=1090x310"
            }
          ],
          shadom: [
            {
              id: 111,
              name: "茗月 月饼礼盒 50克*12枚",
              pic:
                "https://yanxuan-item.nosdn.127.net/dffd7b146964572c222e42db535bf475.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan-item.nosdn.127.net/1c1940bce1d9f3bfef4aa0e3570ecbf3.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥308",
              red: "特价",
              redone: "特价",
              chao: "",
              jin: "",
              xin: "新品",
              guo: "2色可选"
            },
            {
              id: 112,
              name: "嚼劲十足的牛肉粒 100克",
              pic:
                "https://yanxuan-item.nosdn.127.net/af7fe534423a1d316e49bf84986a01c2.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan-item.nosdn.127.net/e4d67a42618560457af6b915f2772787.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥18",
              red: "满额减",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: "2个口味"
            },
            {
              id: 113,
              name: "九制黑芝麻丸 100克*3罐",
              picone:
                "https://yanxuan.nosdn.127.net/edc658ce0afdc9a0ba4742a4e4b5981d.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              pic:
                "https://yanxuan.nosdn.127.net/03faa79c841e439c9aeb645977f4f8f7.png?quality=95&thumbnail=265x265&imageView",
              qian: "¥69",
              red: "特价",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: "2个规格"
            },
            {
              id: 114,
              name: "鲜果冻 30克*10颗",
              pic:
                "https://yanxuan-item.nosdn.127.net/384c689de50380bbd5094d3c51e9a688.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan-item.nosdn.127.net/eef8bb238b94ea8d85bd256d4fba4e30.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥18",
              red: "特价",
              redone: "满额减",
              chao: "",
              jin: "",
              xin: "",
              guo: "4个口味"
            }
          ]
        },
        {
          name: "个护清洁",
          id: 63,
          top:[
            {
              id: 108,
              zi: "爆款榜单",
              shu: ""
            },
            {
              id: 109,
              zi: "新品尝鲜",
              shu: "1"
            },
            {
              id: 110,
              zi: "基础护肤",
              shu: "1"
            },
            {
              id: 111,
              zi: "卸妆洁面",
              shu: "1"
            },
            {
              id: 112,
              zi: "护肤工具",
              shu: "1"
            },
            {
              id: 113,
              zi: "洗发护发",
              shu: "1"
            },
            {
              id: 114,
              zi: "身体护理",
              shu: "1"
            }
          ],
          pic:[
            {
              id: 115,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/79a2accbd73a03a1a2bcc9f4ad98e650.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 116,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/04afc6fe1cf773ab0edd8401d90d9c74.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 117,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/78ef8e0572f5817dd89c63d83e345841.jpg?imageView&quality=95&thumbnail=1090x310"
            }
          ],
          shadom:[
            {
              id: 111,
              name: "水感多效防晒凝露 SPF30 100g",
              pic:
                "https://yanxuan.nosdn.127.net/e7db2a1800e1aa394d52cac0565a414b.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/5ac37e7ad8cdfd811b6617be5f2510d6.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥89.9",
              red: "抄底特惠",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            },
            {
              id: 112,
              name: "3片装 三层复合洗碗刷",
              pic:
                "https://yanxuan-item.nosdn.127.net/af7fe534423a1d316e49bf84986a01c2.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan-item.nosdn.127.net/e4d67a42618560457af6b915f2772787.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥6.9",
              red: "满折",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            },
            {
              id: 113,
              name: "温和纤柔衣物柔顺剂 500ml",
              picone:
                "https://yanxuan-item.nosdn.127.net/22ac627c44f5fa147e67b557992edeb1.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              pic:
                "https://yanxuan-item.nosdn.127.net/d1627459515a7123ec038ef8cb67f0ab.png?quality=95&thumbnail=265x265&imageView",
              qian: "¥19.9",
              red: "超值价",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            },
            {
              id: 114,
              name: "海洋香氛洁厕剂 600g",
              pic:
                "https://yanxuan.nosdn.127.net/c3e9fa4133d168adfb295286c795ba55.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/e2094f9dd1d4f9db99571fba0cb04179.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥12.9",
              red: "限时购",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            }
          ]
        },
        {
          name: "母婴亲子",
          id: 64,
          top:[
            {
              id: 108,
              zi: "七夕有礼",
              shu: ""
            },
            {
              id: 109,
              zi: "必买好货",
              shu: "1"
            },
            {
              id: 110,
              zi: "五折封顶",
              shu: "1"
            },
            {
              id: 111,
              zi: "囤货精选",
              shu: "1"
            },
            {
              id: 112,
              zi: "开学好物",
              shu: "1"
            },
            {
              id: 113,
              zi: "初秋精选",
              shu: "1"
            },
            {
              id: 114,
              zi: "上衣",
              shu: "1"
            }
          ],
          pic:[
            {
              id: 115,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/30964353bebc083acb432344a64b660b.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 116,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/67394bf3831a02d891be60f5095fbd21.jpg?imageView&quality=95&thumbnail=1090x310"
            }
          ],
          shadom:[
            {
              id: 111,
              name: "超薄婴儿纸尿裤 S码（38片）*1包",
              pic:
                "https://yanxuan.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/bbe9ad5da097ebc42e6ebc2a262387af.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥69",
              red: "满折",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            },
            {
              id: 112,
              name: "婴幼儿酵素洗衣液 1L瓶装",
              pic:
                "https://yanxuan-item.nosdn.127.net/4467776eb370a1d46e0dac48a6ae9893.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan-item.nosdn.127.net/08b512713a23f827afb861e85addd948.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥19.9",
              red: "超值价",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            },
            {
              id: 113,
              name: "不锈钢叉勺套装",
              picone:
                "https://yanxuan.nosdn.127.net/90d97bac5ec91ccc25b546c87cd6c29d.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              pic:
                "https://yanxuan.nosdn.127.net/487aacafc9d463612d5500e048f74224.png?quality=95&thumbnail=265x265&imageView",
              qian: "¥9.9",
              red: "超值价",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            },
            {
              id: 114,
              name: "婴幼儿卡通棉袜",
              pic:
                "https://yanxuan.nosdn.127.net/2862a7c31788a61e0862d523f411b498.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/f000e37fcc24f5141d5983e010f2bc1c.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥4.9",
              red: "抄底特惠",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            }
          ]
        },
        {
          name: "运动旅行",
          id: 65,
          top:[
            {
              id: 108,
              zi: "Yessing",
              shu: ""
            },
            {
              id: 109,
              zi: "夏季清凉防晒",
              shu: "1"
            },
            {
              id: 110,
              zi: "瑜伽系列",
              shu: "1"
            },
            {
              id: 111,
              zi: "出行好物",
              shu: "1"
            },
            {
              id: 112,
              zi: "男式运动T恤",
              shu: "1"
            },
            {
              id: 113,
              zi: "男式运动外套/卫衣",
              shu: "1"
            },
            {
              id: 114,
              zi: "男式运动裤装",
              shu: "1"
            }
          ],
          pic:[
            {
              id: 115,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/9deb50ed1c8f376c8194926ffb98581f.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 116,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/6810711e025438e8ed29bb05e765c04b.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 117,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/f0e5fcc15dc0f14d14419e3a148e825d.jpg?imageView&quality=95&thumbnail=1090x310"
            }
          ],
          shadom:[
            {
              id: 111,
              name: "男式无缝休闲运动T恤",
              pic:
                "https://yanxuan-item.nosdn.127.net/35dcfb65d0c065902c404e429ab7fb36.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan-item.nosdn.127.net/ee88829d38059b07081ad569b6805f60.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥49.9",
              red: "超值价",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: "4色可选"
            },
            {
              id: 112,
              name: "超轻口袋遮阳伞",
              pic:
                "https://yanxuan.nosdn.127.net/e3ae33519b9b62248619ec270934a05c.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/12ca3ad5124d6917771034bc928179e2.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥69",
              red: "",
              redone: "",
              chao: "",
              jin: "APP特惠",
              xin: "",
              guo: ""
            },
            {
              id: 113,
              name: "便携鞋子收纳袋",
              picone:
                "https://yanxuan.nosdn.127.net/55f1af377e7a30f03656671b1f5140d4.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              pic:
                "https://yanxuan.nosdn.127.net/fc52845cf3d269e10ea76f049800757c.png?quality=95&thumbnail=265x265&imageView",
              qian: "¥19.9",
              red: "超值价",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: "3色可选"
            },
            {
              id: 114,
              name: "出行 360度可旋转挂钩 2件装",
              pic:
                "https://yanxuan-item.nosdn.127.net/ebcd67d317fdfa4175c078a33972a207.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan-item.nosdn.127.net/ea3306c2f33634333738d72246716ee6.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥15.9",
              red: "满额减",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: "2色可选"
            }
          ]
        },
        {
          name: "数码家电",
          id: 66,
          top:[
            {
              id: 108,
              zi: "夏季热卖",
              shu: ""
            },
            {
              id: 109,
              zi: "甄选爆款",
              shu: "1"
            },
            {
              id: 110,
              zi: "颜值好物",
              shu: "1"
            },
            {
              id: 111,
              zi: "口腔护理",
              shu: "1"
            },
            {
              id: 112,
              zi: "身体护理",
              shu: "1"
            },
            {
              id: 113,
              zi: "面部护理",
              shu: "1"
            },
            {
              id: 114,
              zi: "头发护理",
              shu: "1"
            }
          ],
          pic:[
            {
              id: 115,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/0179ff7afcc481d09a9c74e65d149f8e.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 116,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/ef6313a83a53d2966e1797a6e7f2d857.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 118,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/18037a726ddd997c4841a646b19834af.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 119,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/ad2bf769ab018e22131d96eea3633686.jpg?imageView&quality=95&thumbnail=1090x310"
            }
          ],
          shadom:[
            {
              id: 111,
              name: "网易智造强劲交流风扇",
              pic:
                "https://yanxuan.nosdn.127.net/77aca51443b0e5e93c73621ffb70aae3.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/4f4e8de9ee72b8a3c11a8acb5d76237f.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥199",
              red: "",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            },
            {
              id: 112,
              name: "网易智造手持式小旋风风扇",
              pic:
                "https://yanxuan.nosdn.127.net/d39bdbe009a85eb4a2949541ffa2aab8.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/9d8ed4d646c6bfb896babb9bf9076523.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥59",
              red: "",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            },
            {
              id: 113,
              name: "英国设计 便携式榨汁杯",
              picone:
                "https://yanxuan.nosdn.127.net/55f1af377e7a30f03656671b1f5140d4.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              pic:
                "https://yanxuan.nosdn.127.net/fc52845cf3d269e10ea76f049800757c.png?quality=95&thumbnail=265x265&imageView",
              qian: "¥199",
              red: "特价",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: "英国设计"
            },
            {
              id: 114,
              name: "网易智造空气感超薄苹果手机壳",
              pic:
                "https://yanxuan-item.nosdn.127.net/cc30fc286cf3c705e71411911cc27926.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan-item.nosdn.127.net/00eddf792d462a28fc6f9079282ebc19.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥19",
              red: "抄底特惠",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            }
          ]
        },
        {
          name: "全球特色",
          id: 67,
          top:[
            {
              id: 108,
              zi: "七夕上新",
              shu: ""
            },
            {
              id: 109,
              zi: "当季星品",
              shu: "1"
            },
            {
              id: 110,
              zi: "好评推荐",
              shu: "1"
            },
            {
              id: 111,
              zi: "礼品点卡",
              shu: "1"
            },
            {
              id: 112,
              zi: "礼盒",
              shu: "1"
            },
            {
              id: 113,
              zi: "床品家纺",
              shu: "1"
            },
            {
              id: 114,
              zi: "床品家纺",
              shu: "1"
            }
          ],
          pic:[
            {
              id: 115,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/0c3773b8042ad3ae3bb45586dbffec0c.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 116,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/e411d39f8f11980b86bc7f65b30a128d.jpg?imageView&quality=95&thumbnail=1090x310"
            },
            {
              id: 117,
              nm: "",
              url:
                "https://yanxuan.nosdn.127.net/53d14c98af77d94459f3911e13b020b7.png?imageView&quality=95&thumbnail=1090x310"
            }
          ],
          shadom:[
            {
              id: 111,
              name: "茶隔保温杯 玉藻前 阴阳师",
              pic:
                "https://yanxuan.nosdn.127.net/8fc54f638b8e9e0f871594738ceb5180.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan.nosdn.127.net/c6ad7ff3decfd482c16cbbb52b6a87d3.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥108",
              red: "",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            },
            {
              id: 112,
              name: "严选礼品卡 1000元面值",
              pic:
                "https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan-item.nosdn.127.net/a4e7213c0d64564f65a999a7575764a4.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥1000",
              red: "",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            },
            {
              id: 113,
              name: "【限量】纪念版麻将套装 暗黑破坏神III",
              picone:
                "https://yanxuan-item.nosdn.127.net/d70517de1d415b456b7bc8a66a865cd8.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              pic:
                "https://yanxuan-item.nosdn.127.net/4b88808ac20a1ec58512e4707b371183.png?quality=95&thumbnail=265x265&imageView",
              qian: "¥317",
              red: "抄底特惠",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            }, 
            {
              id: 114,
              name: "铁盔甲史蒂夫 儿童短袜 我的世界",
              pic:
                "https://yanxuan-item.nosdn.127.net/6da7f90d6f626eb8e6e38c95cae88b88.png?quality=95&thumbnail=265x265&imageView",
              picone:
                "https://yanxuan-item.nosdn.127.net/04608009090eaa28f83dd14a8c61ec27.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
              qian: "¥9.9",
              red: "抄底特惠",
              redone: "",
              chao: "",
              jin: "",
              xin: "",
              guo: ""
            }
          ]
        }
      ]
    };
  },
  methods: {
    prev() {
      this.num--;
      if (this.num < 0) {
        this.num = 2;
      }
    },
    next() {
      
      this.num++;
      
      if (this.num>2) {
        this.num = 0;
      }
    },
    ji(dex) {
      this.num = dex;
    }
  }
};
</script>
<style scope>
</style>
<template>
  <div>
    <div class="minren">
      <div class="grow">
        <div class="grow_top">
          <div class="grow_chin">
            <h3>人气推荐</h3>
            <div class="minren_box">
              <div
                :class="{active:index==num}"
                @click="tab(index)"
                v-for="(fot,index) in list"
                :key="fot.id"
              >{{fot.name}}</div>
            </div>
          </div>
          <div class="grow_gd">
            <a>更多推荐 ></a>
          </div>
        </div>
        <div class="min_ren">
          <div class="min_item" v-for="about in list[num].nav" :key="about.id">
            <div class="min_box">
              <div class="min_xiaopic" v-if="about.don!=''">{{about.don}}</div>
              <div class="min_pic">
                <img :src="about.url" alt />
              </div>
            </div>
            <div class="min_chin">
              <div class="chin_one">
                <div class="chin_don" v-if="about.chin!=''">{{about.chin}}</div>
                <div
                  class="chin_don"
                  style="margin-left:3px;"
                  v-if="about.china!=''"
                >{{about.china}}</div>
                <div class="chin_done" v-if="about.chinone!=''">{{about.chinone}}</div>
              </div>
              <div class="chin_two">
                <span>{{about.content}}</span>
              </div>
              <div class="chin_three">
                <span>{{about.qian}}</span>
                <div>{{about.qianone}}</div>
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
      list: [
        {
          id: "26",
          name: "编辑推荐",
          nav: [
            {
              id: "28",
              don: "",
              url:
                "https://yanxuan.nosdn.127.net/1d46c9cd1995175aadd7892ffc086539.png?quality=95&thumbnail=320x320&imageView",
              chin: "满折",
              china: "",
              chinone: "APP特惠",
              content: "黑科技吸放湿超冷感垫 夏凉垫可机洗",
              qian: "¥199",
              qianone: ""
            },
            {
              id: "29",
              don: "英国设计",
              url:
                "https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png?quality=95&thumbnail=180y180&imageView",
              chin: "特价",
              china: "满赠",
              chinone: "",
              content: "英国设计 便携式榨汁杯",
              qian: "¥199",
              qianone: "¥219"
            },
            {
              id: "30",
              don: "",
              url:
                "https://yanxuan.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?quality=95&thumbnail=180y180&imageView",
              chin: "特价",
              china: "",
              chinone: "",
              content: "无损风味 超即溶精品咖啡（24颗入）",
              qian: "¥169",
              qianone: "¥219"
            },
            {
              id: "31",
              don: "大溪地珍珠",
              url:
                "https://yanxuan.nosdn.127.net/aef3c8ec5ad59187e2975492a56dbfd7.png?quality=95&thumbnail=180y180&imageView",
              chin: "限时购",
              china: "",
              chinone: "",
              content: "法国大溪地黑珍珠 18K白金项链",
              qian: "¥1119",
              qianone: "¥1499"
            },
            {
              id: "32",
              don: "",
              url:
                "https://yanxuan.nosdn.127.net/5ea16aa8e9f001da18302b7626dd846d.png?quality=95&thumbnail=180y180&imageView",
              chin: "",
              china: "",
              chinone: "",
              content: "全面屏 无线充电移动电源 充电宝",
              qian: "¥129",
              qianone: ""
            },
            {
              id: "33",
              don: "",
              url:
                "https://yanxuan.nosdn.127.net/f827657a7c796f32bbc1b7142f35b5e5.png?quality=95&thumbnail=180y180&imageView",
              chin: "",
              china: "",
              chinone: "",
              content: "网易智造3D揉捏按摩肩带",
              qian: "¥449",
              qianone: ""
            },
            {
              id: "34",
              don: "4色可选",
              url:
                "https://yanxuan-item.nosdn.127.net/073f16bf0c7ad8634c3abb7636e063c2.png?quality=95&thumbnail=180y180&imageView",
              chin: "",
              china: "",
              chinone: "超值价",
              content: "男/女轻弹云朵家居拖鞋",
              qian: "¥9.9",
              qianone: ""
            }
          ]
        },
        {
          id: "27",
          name: "热销总榜",
          nav: [
            {
              id: "35",
              don: "6色可选",
              url:
                "https://yanxuan-item.nosdn.127.net/089fd1b96fa7be9776edb1f43878f826.png?quality=95&thumbnail=320x320&imageView",
              chin: "",
              china: "",
              chinone: "",
              content: "男/女 色画轻主义人字凉拖鞋",
              qian: "¥19.9",
              qianone: ""
            },
            {
              id: "36",
              don: "7色可选",
              url:
                "https://yanxuan.nosdn.127.net/864633a00a776555b1c53abd50df0a40.png?quality=95&thumbnail=180y180&imageView",
              chin: "超值价",
              china: "",
              chinone: "",
              content: "男/女 舒弹按摩家居拖鞋",
              qian: "¥19.9",
              qianone: ""
            },
            {
              id: "37",
              don: "",
              url:
                "https://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?quality=95&thumbnail=180y180&imageView",
              chin: "",
              china: "",
              chinone: "加价购",
              content: "常温纯牛奶 250毫升*12盒*2提",
              qian: "¥88",
              qianone: ""
            },
            {
              id: "38",
              don: "",
              url:
                "https://yanxuan-item.nosdn.127.net/1d85a516aadbeb11978f325f205820b9.png?quality=95&thumbnail=180y180&imageView",
              chin: "",
              china: "",
              chinone: "",
              content: "大丈夫冻干牛肉面",
              qian: "¥28.5",
              qianone: ""
            },
            {
              id: "39",
              don: "",
              url:
                "https://yanxuan-item.nosdn.127.net/3f9a412e160d7e864442ce28f42d7e08.png?quality=95&thumbnail=180y180&imageView",
              chin: "",
              china: "",
              chinone: "",
              content: "12包/条 谷风一木4层印花手帕纸",
              qian: "¥5.9",
              qianone: ""
            },
            {
              id: "40",
              don: "",
              url:
                "https://yanxuan-item.nosdn.127.net/a10ed5c19533c9e1e2abf1d8cb843c24.png?quality=95&thumbnail=180y180&imageView",
              chin: "",
              china: "",
              chinone: "",
              content: "10卷/提 谷风一木3层小卷纸",
              qian: "¥27.9",
              qianone: ""
            },
            {
              id: "40",
              don: "",
              url:
                "https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?quality=95&thumbnail=180y180&imageView",
              chin: "超值价",
              china: "",
              chinone: "满额减",
              content: "3kg/1kg 强力去污酵素洗衣液",
              qian: "¥49.9",
              qianone: ""
            }
          ]
        },{
          
        }
      ]
    };
  },
  methods: {
    tab(index) {
      this.num = index;
    }
  }
};
</script>
<style scoped>

</style>
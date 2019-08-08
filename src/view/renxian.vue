<template>
  <div>
    <div class="flash">
      <div class="flash_center">
        <div class="flash_top">
          <div class="flash_chin">
            <h3>福利社</h3>
          </div>
          <div class="flash_text">
            <a>查看全部福利 ></a>
          </div>
        </div>
        <div class="flash_bot">
          <div class="flash_banner">
            <div class="flash_but_left" @click="add()"></div>

            <div class="flash_but_right" @click="reduce()"></div>
            <ul class="sck">
              <li
                :class="{li_shadow:index==num}"
                @click="mag(index)"
                v-for="(msi,index) in list"
                :key="msi.id"
              >
                <div class="sck_item"></div>
              </li>
            </ul>
            <div class="flash_ban">
              <div class="ban_box">
                <div class="ban_item">
                  <img
                    class="ban_pic"
                    v-for="about in list[num].nav"
                    :src="about.xpc"
                    :key="about.id"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flash_content" style="background:white">
            <div class="flash_bbox" v-for="(smb,index) in bbot" :key="smb.id">
              <div class="flash_bbox_top">
                <div class="bbox_left">{{smb.name}}</div>
                <div class="bbox_right">{{smb.xianame}} ></div>
              </div>
              <div class="flash_bbox_bot">
                <div class="bbox_bot_item" v-for="smbit in bbot[index].cont" :key="smbit.id">
                  <div class="bot_item_left">
                    <div>
                      <img :src="smbit.pic" alt />
                    </div>
                    <!-- <div class="item_left_dow">
                      <span class="num">{{smbit.ubm}}</span>
                      <span class="zhe">折</span>
                    </div>-->
                  </div>
                  <div class="bbot_item_rit">
                    <div class="item_right_one">{{smbit.chin}}</div>
                    <div class="item_right_two" >
                      <span v-if="smbit.xianshi!=''">{{smbit.xianshi}}</span>
                      <span class="qian">¥</span>
                      <span class="shu">{{smbit.xiachin}}</span>
                    </div>
                    <div class="item_right_three">
                      <span v-if="smbit.qian!=''">{{smbit.qian}}</span>
                    </div>
                    <div class="item_right_four" v-if="smbit.liji!=''">{{smbit.liji}}</div>
                    <div class="item_right_five" v-if="smbit.li!=''"></div>
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
      num: 0,
      list: [
        {
          id: "41",
          name: "ssc",
          nav: [
            {
              id: "41",
              xpc:
                "https://yanxuan.nosdn.127.net/2e3dc81dbcbae772cb16eeca0ade5878.jpg?imageView&quality=95&thumbnail=224x376"
            }
          ]
        },
        {
          id: "42",
          name: "ssc",
          nav: [
            {
              id: "42",
              xpc:
                "https://yanxuan.nosdn.127.net/7abed5dae3e904cff7e0e5bea3ef1be4.jpg?imageView&quality=95&thumbnail=224x376"
            }
          ]
        },
        {
          id: "43",
          name: "ssc",
          nav: [
            {
              id: "43",
              xpc:
                "https://yanxuan.nosdn.127.net/9e4c6bced6dbe08f3c3079071594feb6.jpg?imageView&quality=95&thumbnail=224x376"
            }
          ]
        },
        {
          id: "44",
          name: "ssc",
          nav: [
            {
              id: "44",
              xpc:
                "https://yanxuan.nosdn.127.net/5afd3b5fdec0ac1357ce359061eebedf.jpg?imageView&quality=95&thumbnail=224x376"
            }
          ]
        },
        {
          id: "45",
          name: "ssc",
          nav: [
            {
              id: "45",
              xpc:
                "https://yanxuan.nosdn.127.net/2bd19deef1198a934ab96f70b6f70ffd.jpg?imageView&quality=95&thumbnail=224x376"
            }
          ]
        },
        {
          id: "46",
          name: "ssc",
          nav: [
            {
              id: "46",
              xpc:
                "https://yanxuan.nosdn.127.net/8e49f80e8bcdcbed0d64f8c4c3eeacf2.jpg?imageView&quality=95&thumbnail=224x376"
            }
          ]
        }
      ],
      bbot: [
        {
        id:"48",
          name: "今日特价",
          xianame:"查看全部",
         cont:[
             {
                 id:"51",
                 pic:"https://yanxuan.nosdn.127.net/f961b628a67e5a95150b962a48963b6d.png?quality=95&thumbnail=130x130&imageView",
                 ubm:"7",
                 chin:"九制黑芝麻丸 100克*3罐",
                 xiachin:"69",
                 qian:"¥99",
                 liji:"立即抢购",
                 xianshi:"限时价 ",
                 li:''
             },
             {
                 id:"52",
                 pic:"https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png?quality=95&thumbnail=130x130&imageView",
                 ubm:"9.1",
                 chin:"英国设计 便携式榨汁杯",
                 xiachin:"199",
                 qian:"¥219",
                 liji:"立即抢购",
                 xianshi:"限时价 ",
                 li:''
             },
             {
                 id:"53",
                 pic:"https://yanxuan-item.nosdn.127.net/b9a12d07f8f2d04d662d9340e68e6687.png?quality=95&thumbnail=130x130&imageView",
                 ubm:"4",
                 chin:"绿野仙踪永生花",
                 xiachin:"187",
                 qian:"¥469",
                 liji:"立即抢购",
                 xianshi:"限时价 ",
                 li:''
             },
             {
                 id:"54",
                 pic:"https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png?quality=95&thumbnail=130x130&imageView",
                 ubm:"8",
                 chin:"射频导入嫩肤仪",
                 xiachin:"399",
                 qian:"¥499",
                 liji:"立即抢购",
                 xianshi:"限时价 ",
                 li:''
             }
         ]
        },
        {
            id:"49",
          name: "量贩囤货",
          xianame:"全部",
        cont:[
            {
                id:"55",
                 pic:"https://yanxuan.nosdn.127.net/47561399d63af0ea7582eb256d8ef559.png?quality=95&thumbnail=50x50&imageView",
                 ubm:"",
                 chin:"提手式分类垃圾袋超值组 24卷装",
                 xiachin:"99.9",
                 qian:"",
                 xian:"",
                liji:"",
                xianshi:"",
                li:'1'
                
            },
            {
                id:"56",
                 pic:"https://yanxuan.nosdn.127.net/8be3d1c5738d47c19814ad92a9618671.png?quality=95&thumbnail=50x50&imageView",
                 ubm:"",
                 chin:"天空之境·手工拼色玻璃杯",
                 xiachin:"129",
                 qian:"",
                 xian:"",
                liji:"",
                xianshi:" ",
                li:'1'
            }
        ]
        },
        {
            id:"50",
          name: "今日APP价",
          xianame:"全部",
          cont:[
            {
                id:"57",
                 pic:"https://yanxuan.nosdn.127.net/0f06898140d349b7e466cc5b41265685.png?quality=95&thumbnail=50x50&imageView",
                 ubm:"",
                 chin:"提花冰丝席三件套 可折叠凉席",
                 xiachin:"99.9",
                 qian:"",
                 xian:"",
                liji:"",
                xianshi:"",
                li:'1'
                
            },
            {
                id:"58",
                 pic:"https://yanxuan.nosdn.127.net/59076d34f559eb0fdab57d111fa68178.png?quality=95&thumbnail=50x50&imageView",
                 ubm:"",
                 chin:"长粒香大米 5千克",
                 xiachin:"129",
                 qian:"",
                 xian:"",
                liji:"",
                xianshi:"",
                li:'1'
                
            }
        ]
        }
      ]
    };
  },
  methods: {
    mag(index) {
      this.num = index;
    },
    add() {
      this.num--;
      if (this.num < 0) {
        this.num = 5;
      }
    },
    reduce() {
      this.num++;
      if (this.num > 5) {
        this.num = 0;
      }
    }
  }
};
</script>
<style scoped>

</style>
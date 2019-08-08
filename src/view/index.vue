<template>
  <div>
    <div class="grow">
      <div class="grow_top">
        <div class="grow_chin">
          <h3>品牌制造商</h3>
          <small>工厂直达消费者，剔除品牌溢价</small>
        </div>
        <div class="grow_gd">
          <a>更多制造商 ></a>
        </div>
      </div>
      <div class="grow_bot">
        <div class="grow_item">
          <div class="grow_name">
            <span>海外制造商</span>
            <span class="sx">上新</span>
          </div>
          <div class="grow_move">9.9元起</div>
          <div class="grow_pic">
            <img src="https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png" alt />
          </div>
        </div>
        <div class="grow_item" style="margin-left: 9px!important;">
          <div class="grow_name">
            <span>CK制造商</span>
            <!-- <span class="sx">上新</span> -->
          </div>
          <div class="grow_move">29元起</div>
          <div class="grow_pic">
            <img src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png" alt />
          </div>
        </div>
        <div class="grow_item_two">
          <div class="grow_item_name">
            <span>新秀丽制造商</span>
          </div>
          <div class="grow_item_move">159元起</div>
          <div class="grow_item_pic">
            <img src="https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png" alt />
          </div>
        </div>
        <div class="grow_item_two" style="margin-top:10px;">
          <div class="grow_item_name">
            <span>Armani制造商</span>
          </div>
          <div class="grow_item_move">199元起</div>
          <div class="grow_item_pic">
            <img src="https://yanxuan.nosdn.127.net/407ff2d67dd59e7701a83eb5f08f07b0.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="grow" style="padding-top:60px;height:510px;">
      <div class="grow_top">
        <div class="grow_chin">
          <h3>新品首发</h3>
          <small>为你寻觅世间好物</small>
        </div>
        <div class="grow_gd">
          <a>更多新品 ></a>
        </div>
      </div>
      <div class="slick">
        <div class="but_left" @click='chang1()'></div>
        <div class="but_right" @click='chang2()'></div>
        <div class="slick_box">
        <div class="slick_center" :style="{'left':-(index*1100)+'px'}">  
            <div class="slick_item" v-for="(item,index) in lipic" :key="index">
              <div class="slick_top">
                <div class="slick_don" v-if="item.don!=''">{{item.don}}</div>
                <img class="item_pic" :src="item.url" alt />
                <img :src="item.urlone" alt />
              </div>
              <div class="slick_bot">
                <div class="slick_one">
                  <span v-if="item.chin!=''">{{item.chin}}</span>
                </div>
                <div class="slick_bbs">
                </div>
                <div class="slick_two">
                  <span>{{item.chinone}}</span>
                </div>
                <div class="slick_three">
                  <div class="slick_for">
                    <span>{{item.qian}}</span>
                  </div>
                  <div class="slick_fortwo">
                    <span>{{item.qianone}}</span>
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
  name: "er",
  methods: {
   chang1(){
     if(this.index<=0){
       return 
     }else{
       this.index--
     }
   },
     chang2(){
       if(this.index<this.lipic.length/4-1){
        this.index++
       }else{
         return
       }
     }
    
   },
  
  data() {
    return {
      index:0,
      lipic: [
        {
          id: 10,
          don: "",
          url:
            "https://yanxuan-item.nosdn.127.net/79ce75dee9f360313c7bf759f09dd9ba.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan-item.nosdn.127.net/3f00757eafcd26d096d4c3dc97d09ce7.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "好货内部价",
          chinone: "俄罗斯设计 弦月流星项链",
          qian: "¥179",
          qianone: "¥199"
        },
        {
          id: 11,
          don: "泰国制造",
          url:
            "https://yanxuan.nosdn.127.net/7f5f2b51b69dacfd49d4e77c6110b9de.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan-item.nosdn.127.net/78e5bedaebad45c46e37500f7d75c3ac.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "",
          chinone: "泰国制造 天然乳胶枕 释压按摩",
          qian: "¥229",
          qianone: ""
        },
        {
          id: 12,
          don: "日本设计",
          url:
            "https://yanxuan.nosdn.127.net/8bf32abb64fabdfad8f9498a3199e91e.jpg?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan.nosdn.127.net/788e674b4bb72f107f383bf3d223fbf9.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "满赠",
          chinone: "脚踏式双桶分类垃圾桶20L",
          qian: "¥198",
          qianone: ""
        },
        {
          id: 13,
          don: "",
          url:
            "https://yanxuan.nosdn.127.net/4fc7ea43e829af4ed31e09673f68db89.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan.nosdn.127.net/e3c8427fbfadc833ed592310f6e4955f.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "满折",
          chinone: "10件装 本色抑菌懒人抹布超值组 50节*10卷",
          qian: "¥119",
          qianone: ""
        },
        {
          id: 14,
          don: "",
          url:
            "https://yanxuan.nosdn.127.net/59bd6ae0307588f6eebf3848a4bd265f.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan.nosdn.127.net/095cc082fa29f4475b40f526043aad5a.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "",
          chinone: "家用除湿机",
          qian: "¥2788",
          qianone: ""
        },
        {
          id: 15,
          don: "南非",
          url:
            "https://yanxuan.nosdn.127.net/d3699cde5248020762bd72fc68042310.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan.nosdn.127.net/1bb309a6b9eab639d7ef910b5a34b4de.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "",
          chinone: "红心西柚 6个装",
          qian: "¥58",
          qianone: ""
        },
        {
          id: 16,
          don: "2个规格",
          url:
            "https://yanxuan.nosdn.127.net/4114839cec128a22b8f60ddafec3f944.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan.nosdn.127.net/0aa6c60e8ab27b7d397cb1707a7cd9d6.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "",
          chinone: "红豆薏米丸 100克",
          qian: "¥39",
          qianone: ""
        },
        {
          id: 17,
          don: "",
          url:
            "https://yanxuan-item.nosdn.127.net/37a38070478d14a3bdb10c23006ba52c.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan-item.nosdn.127.net/98f2be449a9fdd1d6d46686779abd085.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "",
          chinone: "六鳌蜜薯 5斤装",
          qian: "¥39",
          qianone: ""
        },
        {
          id: 18,
          don: "3个规格",
          url:
            "https://yanxuan-item.nosdn.127.net/7c3e75c07fe78b7a5414fdc78ea5c53f.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan-item.nosdn.127.net/3b890b06c9c37decd39b827cb11bbdd3.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "",
          chinone: "弋阳年糕 500克*2盒",
          qian: "¥36",
          qianone: ""
        },
        {
          id: 19,
          don: "2色可选",
          url:
            "https://yanxuan-item.nosdn.127.net/37fc8c83a4e82e688f233cbab5ab04df.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan-item.nosdn.127.net/2a4b963040be858f051a6a6c207bcff5.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "",
          chinone: "男式基础牛仔裤",
          qian: "¥99.9",
          qianone: ""
        },
        {
          id: 20,
          don: "",
          url:
            "https://yanxuan-item.nosdn.127.net/f848602138275d9745bc1c129004f9da.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan-item.nosdn.127.net/4dcca45b81503d0746712fb539543b86.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "",
          chinone: "日本制造 10K金钻石钥匙项链",
          qian: "¥1799",
          qianone: ""
        },
        {
          id: 21,
          don: "",
          url:
            "https://yanxuan-item.nosdn.127.net/9ce01b9576a473d93e5f2f09a2564f14.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan-item.nosdn.127.net/889a9d14fdd4dcac2a9beb90baadd77c.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "专场限时购",
          chinone: "泰国红宝石 18K金爱心项链",
          qian: "¥2299",
          qianone: "¥2599"
        },
        {
          id: 22,
          don: "",
          url:
            "https://yanxuan-item.nosdn.127.net/dc57a22131d10d3d480a09b0d129b38b.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan-item.nosdn.127.net/94a22ad1c7ca073edb30bc5cd586ec78.png?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "特价",
          chinone: "俄罗斯设计 18K金红玛瑙爱心项链",
          qian: "¥799",
          qianone: "¥899"
        },
        {
          id: 23,
          don: "",
          url:
            "https://yanxuan-item.nosdn.127.net/092dbe1bfd8eda96b5d04ccbd3bab130.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan-item.nosdn.127.net/fa347616d3c3ace66ec67994a6b703e6.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView",
          chin: "满赠",
          chinone: "春风魂系列千面电动飞机杯 焕新版",
          qian: "¥379",
          qianone: ""
        },
        {
          id: 24,
          don: "",
          url:
            "https://yanxuan-item.nosdn.127.net/6118fbbf3aae3c19fc1b4a2f3e6ae21f.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan-item.nosdn.127.net/6118fbbf3aae3c19fc1b4a2f3e6ae21f.png?quality=95&thumbnail=265x265&imageView",
          chin: "特价",
          chinone: "比利时设计 RON不锈钢厨刀",
          qian: "¥179",
          qianone: "¥199"
        },
        {
          id: 25,
          don: "",
          url:
            "https://yanxuan-item.nosdn.127.net/ba89958ec861c0c82faf779cfcb9b1c9.png?quality=95&thumbnail=265x265&imageView",
          urlone:
            "https://yanxuan-item.nosdn.127.net/ba89958ec861c0c82faf779cfcb9b1c9.png?quality=95&thumbnail=265x265&imageView",
          chin: "特价",
          chinone: "日本制造 AKOYA海水珍珠红宝石项链",
          qian: "¥1299",
          qianone: "¥1499"
        }
      ]
    };
  }
};
</script>
<style scoped>


</style>
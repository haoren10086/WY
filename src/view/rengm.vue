<template>
  <div>
    <div class="sale">
      <div class="sale_center">
        <div class="flash_top">
          <div class="flash_chin">
            <h3>限时购</h3>
          </div>
          <div class="flash_text">
            <a>更多抢购 ></a>
          </div>
        </div>
        <div class="sale_bot">
            <div class="sale_left">
                <div class="sale_one">18点场</div>
                <div class="sale_two"></div>
                <div class="sale_three">距离结束还剩</div>
                <div class="sale_four">
                    <div class="sale_shi shi">{{`${hr}`}}</div>
                    <div class="sale_co">:</div>
                    <div class="sale_shi fen">{{`${min}`}}</div>
                    <div class="sale_co">:</div>
                    <div class="sale_shi miao">{{`${sec}`}}</div>
                </div>
                <div class="sale_five">查看全部 ></div>
            </div>
            <div class="sale_right">
                <div class="sale_item" v-for="(five) in rengm" :key="five.id">
                    <div class="sale_item_one">
                        <img :src="five.pic" alt="">
                    </div>
                    <div class="sale_item_two">
                        <div class="sale_chin">{{five.chin}}</div>
                        <div class="sale_twochin">{{five.xiachin}}</div>
                        <div class="sale_threechin">
                            <div class="threechin_z">
                                <div class="threechin_x"></div>
                            </div>
                            <div class="three_chin">
                                还剩{{five.liang}}件
                            </div>
                        </div>
                        <div class="sale_fourchin">
                            <div class="four_chin">
                                限时价
                                <div class="four_chin_qian">{{five.qian}}</div>
                            </div>
                            <div class="four_chin_two">
                                {{five.jia}}
                            </div>
                        </div>
                        <div class="sale_fivechin">
                            立即抢购
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
    data(){
        return{
            day: 0, hr: 0, min: 0, sec: 0,
            rengm:[
                {
                    id:51,
                    pic:'https://yanxuan.nosdn.127.net/a67acf2967b188a6cd5e03cbf18a3a44.png?imageView&thumbnail=180x180&quality=95',
                    chin:'Yessing男式夏凉弹力合体梭织长裤',
                    xiachin:"凉感舒适面料，弹力合体",
                    liang:"82",
                    qian:"¥125",
                    jia:"¥279",
                },
                {
                    id:52,
                    pic:'https://yanxuan.nosdn.127.net/294f5da2e345b6e8e135627858e7e894.png?imageView&thumbnail=180x180&quality=95',
                    chin:'蛋壳杯 旅行茶具3件套',
                    xiachin:"手掌大小，随身便携",
                    liang:"69",
                    qian:"¥139",
                    jia:"¥169",
                },
                {
                    id:53,
                    pic:'https://yanxuan.nosdn.127.net/ae193555b8d16bd98c9c7e9a5fcc171c.png?imageView&thumbnail=180x180&quality=95',
                    chin:'魔芋代餐粥 40克*10袋',
                    xiachin:"浓醇香滑 代餐佳选",
                    liang:"143",
                    qian:"¥22.9",
                    jia:"¥38",
                },
                {
                    id:54,
                    pic:'https://yanxuan.nosdn.127.net/a49c720a760b0096129d0c3d0bbbb409.png?imageView&thumbnail=180x180&quality=95',
                    chin:'女式基础牛仔直筒半裙',
                    xiachin:"清爽蓝，不对称开叉更显俏皮",
                    liang:"55",
                    qian:"¥89.6",
                    jia:"¥199",
                }
            ]
        }
    },
    mounted: function () {
    this.countdown()
  },
  methods: {
    countdown: function () {
      const end = Date.parse(new Date('2019-12-01'))
      const now = Date.parse(new Date())
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      setTimeout(function () {
        that.countdown()
      }, 1000)
    }
  }
};
</script>
<style scoped>

</style>
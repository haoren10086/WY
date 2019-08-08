<template>
    <div>
        <div class="reban">
            <div class="reban_center">
                <div class="me_center">
                    <div class="me_left">
                        <h3>大家都在说</h3>
                        <small>生活，没有统一标准</small>
                    </div>
                </div>
                <div class="reban_bot">
                    <div class="reban_bot_one">
                        <div class="reban_left" @click='apl()' ></div>
                        <div class="reban_content">
                            <div class="reban_big" :style="{'left':-(ap*367)+'px'}">
                                <div class="reban_item" v-for="(abs,app) in lis" :key="app">
                                    <div class="reban_box">
                                        <div class="reban_box_pic">
                                            <img :src="abs.pic" alt="">
                                        </div>
                                        <div class="reban_box_chin">
                                            <div class="reban_one">
                                                <div class="reban_one_top">{{abs.shijian}}</div>
                                                <div class="reban_one_center">
                                                    {{abs.name}}
                                                    <span style="float:right; display:inline-block;color: #b4a078;font-size:13px;">{{abs.qian}}</span>
                                                </div>
                                                <div class="reban_one_bot">
                                                    {{abs.plun}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="reban_right" @click='apr()'></div>
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
            ap:0,
            lis:[
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan.nosdn.127.net/8d1ac1912d88eb2d2238624d302f91c3.jpg?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"小龙虾拌面",
                    shijian:'2019-07-13 12:55',
                    pic:"https://yanxuan-item.nosdn.127.net/e409b1f38b59538f6863ce9ffb1dc42a.png?imageView&quality=95&thumbnail=355x355",
                    qian:'¥59',
                    plun:'非常好，喜欢挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan.nosdn.127.net/afd72817ea9cc39c8968210723a8269b.jpg?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan-item.nosdn.127.net/6c29eb3145833e39d8520f467388f118.jpg?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan.nosdn.127.net/8d1ac1912d88eb2d2238624d302f91c3.jpg?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan-item.nosdn.127.net/57985bfb47d7c2311a91d772a938173e.png?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan.nosdn.127.net/e41a14d97015c3452ef2bc928cc2af8e.png?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan.nosdn.127.net/8d1ac1912d88eb2d2238624d302f91c3.jpg?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan-item.nosdn.127.net/e409b1f38b59538f6863ce9ffb1dc42a.png?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan.nosdn.127.net/3d7299f1aa210c1ae3315e33a6bad275.png?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan-item.nosdn.127.net/8f592129f86e122ed1b3efbf0786d90b.png?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan.nosdn.127.net/f48eb8b01767e34d2b285d01b728ccbc.jpg?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan-item.nosdn.127.net/57985bfb47d7c2311a91d772a938173e.png?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan.nosdn.127.net/087675373fcf3e1f34523ac0aa90eeef.jpg?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                },
                {
                    name:"女式时尚V领针织连衣裙",
                    shijian:'2019-07-26 01:45',
                    pic:"https://yanxuan-item.nosdn.127.net/139b22dda9ce34610e2dfd6f7a0d3bbc.jpg?imageView&quality=95&thumbnail=355x355",
                    qian:'¥469',
                    plun:'挺好的'
                }
            ]
        }
    },
    methods: {
        apl(){
            if(this.ap<=0){
                return
            }else{
                this.ap--
            }
        },
        apr(){
            if(this.ap<this.lis.length-3){
                this.ap++
            }else{
                return
            }
        }
    },
}
</script>
<style lang="">
    
</style>
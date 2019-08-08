<template>
    <div class="aindex">
        <div class="aLun">
            <div class="aLpic">
                <a href="text/javascript">
                    <img src="https://yanxuan.nosdn.127.net/a613161cbe115a5f0d86750f34b47085.jpg?imageView&quality=95&thumbnail=1920x480" >
                </a>
            </div>
            <div class="aLbo">
                <div class="aL-nav">
                    <ul class="aL-ul">
                        <a href="text/javascript">
                            <li class="aL-li">
                                <i class="aL-i"></i>
                                我的甄选家
                            </li>
                        </a>
                        <a href="text/javascript">
                            <li class="aL-li">
                                <i class="aL-i aL-i2"></i>
                                样式甄选
                            </li>
                        </a>
                        <a href="text/javascript">
                            <li class="aL-li">
                                <i class="aL-i aL-i3"></i>
                                建议征集
                            </li>
                        </a>
                        <a href="text/javascript">
                            <li class="aL-li">
                                <i class="aL-i aL-i4"></i>
                                样品试用
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <div class="aBox1">
                <div class="aText">
                    <h2>样式甄选</h2>
                    <p class="aText-1"></p>
                    <p class="aText-2">请挑选，你喜爱的好物款式</p>
                </div>
                <div class="aBox1-b">
                    <div class="aB1-div">
                        <div class="aB1-text">
                            <div class="aB1-tag">
                                <p class="aB1-p">母婴篇</p>
                            </div>
                            <p class="aB1-title">毛毛虫运动儿童鞋选色</p>
                            <div class="aB1-desc">
                                <div class="aB1-descI">
                                    <p class="aB1-txt1">经典色系选色</p>
                                    <p class="aB1-txt2">参与数&nbsp;693</p>
                                </div>
                            </div>
                        </div>
                        <div class="aB1-xie">
                            <div class="aB1-one" v-for="(item,index) in items" :key="index">
                                <div class="aB1-Xpic">
                                    <div style="width:100%;height:100%" class="aB1-Xpicc">
                                        <img class="aB1-Xp" :src="item.pic" />
                                    </div>
                                    <i class="aB1-Xi img"></i>
                                </div>
                                <div class="aB1-Xtext">
                                    <ul class="aB1-Xul">
                                        <li class="aB1-Xli">{{item.color}}</li>
                                    </ul>
                                    <div class="aB1-Xxin">
                                        <span class="aB1-Xs1 ">
                                            <i class="aB1-Xii img"></i>
                                        </span>
                                        <span>{{item.men}}</span>
                                        <span class="aB1-Xs3">人喜欢</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aFoot">
                    <a href="aFa">
                        <span class="aFtext">更多甄选</span>
                        <i class="aFi img"></i>
                        
                    </a>
                </div>
            </div>
            <div class="aBox2">
                <div class="aText">
                    <h2>建议征集</h2>
                    <p class="aText-1"></p>
                    <p class="aText-2">告诉我们，你的好物标准</p>
                </div>
                <div class="aB2">
                    <div class="aB2-top">
                        <a class="aB2-ta" href="text/javascript">
                            <img src="https://yanxuan.nosdn.127.net/a86c8a0924cd5c2459fcaf29b4c00bd4.png?imageView&quality=95&thumbnail=324y270">
                        </a>
                        <div class="aB2-right">
                            <a href="text/javascript" class="aB2-ra">
                                聊一聊你想要的女式衬衫和裙装
                            </a>
                            <p class="aB2-rp">
                                告别夏天单一的短袖，女生们有更多的穿衣选择。
                                春夏款的女式衬衫或裙装，你会希望有什么款式和颜色呢？ 
                                在面料上，你会更喜欢哪一种？心仪的价格区间是多少。
                                关于严选服装的其他建议，欢迎和我们聊一聊！
                            </p>
                            <dir class="aB2-rd">
                                <div style="width=100%;height=100%">
                                    <img src="https://yanxuan.nosdn.127.net/67d25dfb82013711b7c41d9fcd7b7c45.png" >
                                </div>
                                <div style="width=100%;height=100%">
                                    <img src="https://yanxuan.nosdn.127.net/54aaed3de6bb420859e63b74f39680d8?imageView&quality=95&thumbnail=34y34" >
                                </div>
                                <div style="width=100%;height=100%">
                                    <img src="https://q.qlogo.cn/qqapp/101330628/2288E110C0858D14CC8E2DF7745FDC73/100?imageView&quality=95&thumbnail=34y34" >
                                </div>
                                <div style="width=100%;height=100%">
                                    <img src="https://yanxuan.nosdn.127.net/67d25dfb82013711b7c41d9fcd7b7c45.png" >
                                </div>
                                <div style="width=100%;height=100%">
                                    <img class="aB2-rimg" src="https://yanxuan.nosdn.127.net/67d25dfb82013711b7c41d9fcd7b7c45.png" >
                                </div>
                                <p class="aB2-rpp">39人提过意见</p>
                                <p class="aB2-rpp">1324人看过</p>
                                <a class="aB2-raa" href="text/javascript">我来建议</a>
                            </dir>
                        </div>
                    </div>
                    <div class="aB2-button">
                        <div class="aB2-btit">TA们正在建议</div>
                        <ul class="aB2-bul">
                            <div class="aB2-bhid">
                                <div class="aB2-bbox">
                                    <div class="aB2-bk">
                                        <div class="aB2-bx">
                                            <a href="text/javascript">
                                                <div class="aB2-bx1">
                                                    <div class="aB2-btou">
                                                        <img src="https://yanxuan.nosdn.127.net/1cb84938f9c045f127e5ab790ec4f930?imageView&quality=95&thumbnail=50y50">
                                                        <div class="img aB2-btouu"></div>
                                                    </div>
                                                    <div class="aB2-bming">
                                                        <p class="aB2-bmp">
                                                            <i class="aB2-bmi"></i>
                                                            <span>暖****</span>
                                                        </p>
                                                        <p class="aB2-btian">6天前</p>
                                                    </div>
                                                </div>
                                                <div class="aB2-bx2">
                                                    面料质地好一些，夏天以透气舒服为主，款式呢，
                                                    优雅简单大方，不需要装饰，像严选有一条冬天的羊毛裙就非常的好，
                                                    版型设计非常好，如果夏天，一字领，带有荷叶袖，收腰的长裙
                                                </div>
                                                <div class="aB2-bx3">
                                                    <span>来自“</span>
                                                    <span>聊一聊你想要的女式衬衫和裙装</span>
                                                    <span>”</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="aB2-bx aB2-bxx">
                                            <a href="text/javascript">
                                                <div class="aB2-bx1">
                                                    <div class="aB2-btou">
                                                        <img src="https://yanxuan.nosdn.127.net/86bf67a148dc09816e9480c34e4e5489.jpg?imageView&quality=95&thumbnail=50y50">
                                                        <div class="img aB2-btouu"></div>
                                                    </div>
                                                    <div class="aB2-bming">
                                                        <p class="aB2-bmp">
                                                            <i class="aB2-bmi"></i>
                                                            <span>方****k</span>
                                                        </p>
                                                        <p class="aB2-btian">7天前</p>
                                                    </div>
                                                </div>
                                                <div class="aB2-bx2">
                                                    多来点有质感的可以在职场中穿也可以休息游玩时穿的，休闲搭配方便，
                                                    比如宽松衬衫配上建议短裙可以在上班时间穿搭，休息时衬衫可以搭配牛仔裤，
                                                    短裤变得舒适简易，这样衣服不用太多，可以更好的搭配；在材质方便雪纺，
                                                    纯棉布料我觉得都会很舒适，给人的感觉不像常规的衬衫那样板正。
                                                </div>
                                                <div class="aB2-bx3">
                                                    <span>来自“</span>
                                                    <span>聊一聊你想要的女式衬衫和裙装</span>
                                                    <span>”</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="aB2-bx aB2-bxx">
                                            <a href="text/javascript">
                                                <div class="aB2-bx1">
                                                    <div class="aB2-btou">
                                                        <img src="https://yanxuan.nosdn.127.net/12021bc711b16da971f808f85ab0e0ac?imageView&quality=95&thumbnail=50y50">
                                                        <div class="img aB2-btouu"></div>
                                                    </div>
                                                    <div class="aB2-bming">
                                                        <p class="aB2-bmp">
                                                            <i class="aB2-bmi"></i>
                                                            <span>h****k</span>
                                                        </p>
                                                        <p class="aB2-btian">9天前</p>
                                                    </div>
                                                </div>
                                                <div class="aB2-bx2">
                                                    喜欢裙裤，穿着舒服方便，短款中长都可以，面料喜欢滑爽点的
                                                </div>
                                                <div class="aB2-bx3">
                                                    <span>来自“</span>
                                                    <span>聊一聊你想要的女式衬衫和裙装</span>
                                                    <span>”</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="aFoot">
                    <a href="aFa">
                        <span class="aFtext">更多甄选</span>
                        <i class="aFi img"></i>
                        
                    </a>
                </div>
            </div>
            <div class="aBox3">
                <div class="aBox3-b">
                    <div class="aText">
                        <h2>样式使用</h2>
                        <p class="aText-1"></p>
                        <p class="aText-2">加入我们，一起检验好物初样</p>
                    </div>
                    <div class="aB3">
                        <div class="aB3-b1">
                            <a class="aB3-ba" href="text/jabascript">
                                <div class="aB3-bt">
                                    <span>259期 距结束 10天20：58：38</span>
                                </div>
                                <div class="aB3-bs">
                                    限量2份
                                </div>
                                <div style="width:100%;height:100%">
                                    <img src="https://yanxuan.nosdn.127.net/ee39f0852ad4dd0558f05c863998e8b5.jpg?imageView&quality=95&thumbnail=352y298">
                                </div>
                            </a>
                            <div class="aB3-t">
                                <p class="aB3-t1">
                                    <span>泰国制造 天然乳胶枕 豪华礼盒</span>
                                    <span class="aB3-t1s">参考价&nbsp;￥100</span>
                                </p>
                                <p class="aB3-t2">
                                    居家爱好者看过来
                                </p>
                                <a class="aB3-t3" href="text/javascript">
                                    立即申请
                                </a>
                            </div>
                        </div>
                        <div class="aB3-b1 aB3-b11">
                            <a class="aB3-ba" href="text/jabascript">
                                <div class="aB3-bt">
                                    <span>258期 距结束 13天20：58：38</span>
                                </div>
                                <div class="aB3-bs">
                                    限量8份
                                </div>
                                <div style="width:100%;height:100%">
                                    <img src="https://yanxuan.nosdn.127.net/c2d671f1275437460dbeac5a356357eb.jpg?imageView&quality=95&thumbnail=352y298">
                                </div>
                            </a>
                            <div class="aB3-t">
                                <p class="aB3-t1">
                                    <span>实地考察严选电动牙刷工厂</span>
                                    <span class="aB3-t1s">参考价&nbsp;￥199</span>
                                </p>
                                <p class="aB3-t2">
                                    甄选家工厂考察团第13期
                                </p>
                                <a class="aB3-t3" href="text/javascript">
                                    立即申请
                                </a>
                            </div>
                        </div>
                        <div class="aB3-b1 aB3-b11">
                            <a class="aB3-ba" href="text/jabascript">
                                <div class="aB3-bt">
                                    <span>259期 试用用户筛选中</span>
                                </div>
                                <div class="aB3-bs">
                                    限量3份
                                </div>
                                <div style="width:100%;height:100%">
                                    <img src="https://yanxuan.nosdn.127.net/ae78e9c75aaf27ed95621dc2d2eafe4a.jpg?imageView&quality=95&thumbnail=352y298">
                                </div>
                            </a>
                            <div class="aB3-t">
                                <p class="aB3-t1">
                                    <span>网易智造强劲交流风扇</span>
                                    <span class="aB3-t1s">参考价&nbsp;￥299</span>
                                </p>
                                <p class="aB3-t2">
                                    数码家电爱好者看过来
                                </p>
                                <a class="aB3-t3" href="text/javascript">
                                    查看
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="ab3">
                        <div class="aB2-btit">TA们正在建议</div>
                        <div>
                            <div class="ab3-buy">
                                <a class="ab3-a" href="text/javascript">
                                    <div class="ab3-a1">
                                        样品已通过
                                    </div>
                                    <div class="ab3-a2">
                                        <img src="https://yanxuan.nosdn.127.net/50db986beda0236a35f92d2ed7263db4.jpg?imageView&quality=95&thumbnail=363y300">
                                    </div>
                                </a>
                                <div class="ab3-b">
                                    <div class="ab3-bb">
                                        <div class="ab3-b1">
                                            <span class="ab3-b11">女式天丝棉柔基础...</span>
                                            <span class="ab3-b12">￥&nbsp;129</span>
                                            <a class="ab3-b13" href="text/javascript">
                                                立即购买 >>
                                            </a>
                                        </div>
                                        <div style="height:50px;" class="aB2-bx1">
                                            <div class="aB2-btou">
                                                <img src="https://yanxuan.nosdn.127.net/80a0d913e8045a1cb4f6a9062cc57da4.jpg">
                                                <div class="img aB2-btouu"></div>
                                            </div>
                                            <div class="aB2-bming">
                                                <p class="aB2-bmp">
                                                    <i class="aB2-bmi"></i>
                                                    <span>暖****</span>
                                                    <span>&nbsp;&nbsp;</span>
                                                    <span>互联网公司</span>
                                                </p>
                                                <p class="ab3-b2">
                                                    <span>评分：</span>
                                                    <i class="img ab3-b21"></i>
                                                    <i class="img ab3-b21"></i>
                                                    <i class="img ab3-b21"></i>
                                                    <i class="img ab3-b21"></i>
                                                    <i class="img ab3-b21"></i>
                                                </p>
                                            </div>
                                        </div>
                                        <p class="img ab3-b3"></p>
                                        <div class="ab3-b4">
                                            <a class="ab3-b44" href="text/javascript">
                                                你的衣柜里真的需要这样一条严选的牛仔裤    
                                            </a>
                                        </div>
                                        <div class="ab3-b5">
                                            说实话，我以前一直很少穿牛仔裤，因为我下身胖，一直不敢穿牛仔裤，
                                            特别容易暴露自己的身材，但是直到我工作后遇到了严选，尝试了严选的牛仔裤，
                                            就开始一发不可收拾。
                                            这次看到甄选家有严选牛仔裤的活动，于是马上激动的报名参加，被选上了，
                                            大概是因为我买了快10条严选的裤子吗？哈哈哈，感恩感恩...
                                            <a href="text/javascript" class="ab3-b55">阅读全文>></a>
                                        </div>
                                        <a class="ab3-b6" href="text/javascript">
                                            <span>来自&nbsp;243期使用样品</span>
                                            <span class="ab3-b66">“女士天丝棉柔基础牛仔裤”</span>
                                        </a>
                                        <div class="ab3-b7">
                                            <p class="ab3-b71">
                                                <i class="ab3-b71a img"></i>
                                                <span>1105</span>
                                            </p>
                                            <p class="ab3-b71">
                                                <i class="ab3-b71b img"></i>
                                                <span>26</span>
                                            </p>
                                            <p class="ab3-b71">2019-02-25 01:13</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ab3-buy">
                                <a class="ab3-a" href="text/javascript">
                                    <!-- <div class="ab3-a1">
                                        样品已通过
                                    </div> -->
                                    <div class="ab3-a2">
                                        <img src="https://yanxuan.nosdn.127.net/63c2ab25a1e3f401d393f6ce22dd1c65.jpeg?imageView&quality=95&thumbnail=363y300">
                                    </div>
                                </a>
                                <div class="ab3-b">
                                    <div class="ab3-bb">
                                        <!-- <div class="ab3-b1">
                                            <span class="ab3-b11">女式天丝棉柔基础...</span>
                                            <span class="ab3-b12">￥&nbsp;129</span>
                                            <a class="ab3-b13" href="text/javascript">
                                                立即购买 >>
                                            </a>
                                        </div> -->
                                        <div style="height:50px;" class="aB2-bx1">
                                            <div class="aB2-btou">
                                                <img src="https://yanxuan.nosdn.127.net/f08e9effb563f0348fd3bbe80eabc9c3.jpg">
                                                <div class="img aB2-btouu"></div>
                                            </div>
                                            <div class="aB2-bming">
                                                <p class="aB2-bmp">
                                                    <i class="aB2-bmi"></i>
                                                    <span>沈****南</span>
                                                    <span>&nbsp;&nbsp;</span>
                                                    <span>职业经理人</span>
                                                </p>
                                                <p class="ab3-b2">
                                                    <span>评分：</span>
                                                    <i class="img ab3-b21"></i>
                                                    <i class="img ab3-b21"></i>
                                                    <i class="img ab3-b21"></i>
                                                    <i class="img ab3-b21"></i>
                                                    <i class="img ab3-b21"></i>
                                                </p>
                                            </div>
                                        </div>
                                        <p class="img ab3-b3"></p>
                                        <div class="ab3-b4">
                                            <a class="ab3-b44" href="text/javascript">
                                                一条可以做高抬腿的喇叭裤    
                                            </a>
                                        </div>
                                        <div class="ab3-b5">
                                            竟然抽中了严选牛仔裤的试用！Surprise！
                                            本人腿型还是有蛮多的缺点的，胯宽、大腿粗、小腿粗（捂脸）所以对牛仔裤的要求格外高一些。
                                            去年报名参加了严选的甄选家活动，实地体验了一番严选做牛仔裤的用心。
                                            这次看到出了这条立体剪裁微喇牛仔裤，按捺不住内心的狂喜就申请了。
                                            严选的包装还是...
                                            <a href="text/javascript" class="ab3-b55">阅读全文>></a>
                                        </div>
                                        <a class="ab3-b6" href="text/javascript">
                                            <span>来自&nbsp;244期使用样品</span>
                                            <span class="ab3-b66">“女士立体修剪微喇修身牛仔裤”</span>
                                        </a>
                                        <div class="ab3-b7">
                                            <p class="ab3-b71">
                                                <i class="ab3-b71a img"></i>
                                                <span>1482</span>
                                            </p>
                                            <p class="ab3-b71">
                                                <i class="ab3-b71b img"></i>
                                                <span>84</span>
                                            </p>
                                            <p class="ab3-b71">2019-03-13 14:23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aFoot">
                    <a href="aFa">
                        <span class="aFtext">更多试用</span>
                        <i class="aFi img"></i>
                        
                    </a>
                </div>
            </div>
            <div class="aBox4">
                <div class="aBox4-b">
                    <div class="aText">
                        <h2>样式使用</h2>
                        <p class="aText-1"></p>
                        <p class="aText-2">加入我们，一起检验好物初样</p>
                    </div>
                    <div class="aB4">
                        <div class="aB4-x" v-for="(user,index) in users" :key="index">
                            <a class="aB4-bp" href="text/javascript">
                                <div style="width:100%;height:100%;">
                                    <img :src="user.pic">
                                </div>
                                <div v-show="user.show4" class="aB4-bp1">{{user.color}}</div>
                            </a>
                            <div class="aB4-bt">
                                <ul class="aB4-bul">
                                    <li v-show="user.show4" class="aB4-bli">抄底特惠</li>
                                </ul>
                                <a class="aB4-bming" href="text/javascript">{{user.name}}</a>
                                <p class="aB4-bm">{{user.money}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aFoot aFoot-1">
                    <a href="aFa">
                        <span class="aFtext">更多试用</span>
                        <i class="aFi img"></i>
                        
                    </a>
                </div>
            </div>
        </div>
      <!-- <ul>
          <li v-for="(v,i) in list" :key="i">{{v}}</li>
      </ul> -->
      
    </div>
</template>
<script>
export default {
    
    data(){
        return{
          items:[
            {
                pic:"https://yanxuan.nosdn.127.net/f984b5a258f94be7e85c2385ed9331cf.png?imageView&quality=95&thumbnail=257y257",
                color:'紫色',
                men:104,
                show1:false
            },{
                pic:"https://yanxuan.nosdn.127.net/c2c5d72bc22bf4d3f301b6ad398fd959.png?imageView&quality=95&thumbnail=257y257",
                color:'银色',
                men:75,
                show1:false
            },{
                pic:"https://yanxuan.nosdn.127.net/13243dece079a75f27a6687eef5d3041.png?imageView&quality=95&thumbnail=257y257",
                color:'蓝色',
                men:95,
                show1:false
            },{
                pic:"https://yanxuan.nosdn.127.net/4fd7f4eb2482609ff7a9107a424f71d3.png?imageView&quality=95&thumbnail=257y257",
                color:'蓝色',
                men:154,
                show1:false
            },{
                pic:"https://yanxuan.nosdn.127.net/c0abb2d5f8632e284f8f931b05a5f767.png?imageView&quality=95&thumbnail=257y257",
                color:'黑色',
                men:64,
                show1:false
            },{
                pic:"https://yanxuan.nosdn.127.net/f6320744dfb48fff53c80f34020e4dfe.png?imageView&quality=95&thumbnail=257y257",
                color:'粉色',
                men:94,
                show1:false
            },{
                pic:"https://yanxuan.nosdn.127.net/ff1ea87e91ec18620731f6bbc8766690.png?imageView&quality=95&thumbnail=257y257",
                color:'豆沙红',
                men:124,
                show1:false
            },
          ],
          users:[
              {
                pic:"https://yanxuan-item.nosdn.127.net/deb62eff0b012d4227c9504d265d772b.png?imageView&quality=95&thumbnail=265y265",
                color:"五色可选",
                show4:true,
                name:"大团圆福袋馅抱枕",
                money:"￥"+39.6,
              },{
                pic:"https://yanxuan-item.nosdn.127.net/396461e7619c38222c656b8ffe6b469d.png?imageView&quality=95&thumbnail=265y265",
                color:"四色可选",
                show4:true,
                name:"经典头层牛皮护照夹",
                money:"￥"+199,
              },{
                pic:"https://yanxuan-item.nosdn.127.net/6b69d2d0b70a427b8ab2ec39c650c864.png?imageView&quality=95&thumbnail=265y265",
                color:"",
                show4:false,
                name:"铝柄钢丝跳绳",
                money:"￥"+59,
              },{
                pic:"https://yanxuan.nosdn.127.net/745a8814c19996459284db168d598e16.png?imageView&quality=95&thumbnail=265y265",
                color:"",
                show4:false,
                name:"大理石风九色晕染眼影盘",
                money:"￥"+129,
              },
          ]
        }
    },
    methods:{
        
    }
  
}
</script>
<style scoped>
/* reset */
body {
    position: relative;
    min-height: 100%;
    min-width: 1090px;
    background-color: #fff;
    font-size: 12px;
    font-family: "Microsoft Yahei","微软雅黑",verdana;
    color: #333;
}
.aLun{
        position: relative;
            height: 420px;
    overflow: hidden;
}
.aLpic{
    position: relative;
    left: 0px;
    top: 0px;
    opacity: 1;
}
.aLpic a{
        position: absolute;
    left: 50%;
}
.aLpic a img{
        position: relative;
    left: -50%;
    max-width: none;
}
.aLbo{
        top: 0;
    margin-left: -545px;
    left: 50%;
        width: 1090px;
    margin-right: auto;
        position: absolute;
}
.aL-nav{
        top: 0;
    z-index: 1;
    display: block;
    left: 0;
}
.aL-ul{
        width: 180px;
    margin: 7px 0 7px 10px;
}
.aL-li{
        padding-top: 15px;
            height: 100px;
    margin-bottom: 2px;
    font-size: 16px;
    color: #666;
    background: rgba(255,255,255,.8);
    border-radius: 2px;
    text-align: center;
}
.aL-li:hover{
    color:#ffffff;
    background: rgba(178, 159, 124, 0.8)
}
.aL-i{
        width: 42px;
    height: 42px;
    display: block;
    margin: 0 auto 6px;
    background: url(https://yanxuan.nosdn.127.net/54f06b8ea88f2a0d56c58e36c7f2c22d.png) no-repeat;
    background-position: 0 -114px;
}
.aL-i2{
    background-position: 0 0;
}
.aL-i3{
    background-position: 0 -34px;
}
.aL-i4{
    background-position: 0 -72px;
}


.aBox1{
    padding: 35px 0 50px;
    background: #f5f5f5;
}
.aText{
    padding-top: 0;
    margin-bottom: 25px;
    text-align: center;
}
h2{
    position: relative;
    display: inline-block;
    font-size: 26px;
    line-height: 1;
    color: #333;
    font-weight: 400;
}
.aText-1{
    width: 50px;
    height: 2px;
    background: #333;
    margin: 20px auto 30px;
    margin-bottom: 12px;
}
.aText-2{
        font-size: 14px;
    line-height: 24px;
    color: #666;
}
.aBox1-b{
    width: 1090px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
}

.aB1-div{
        position: relative;
    margin-bottom: 40px;
    background: #fff;
    line-height: 1;
    overflow: hidden;
}
.aB1-text{
        width: 100%;
    color: #333;
    padding: 32px 30px 20px;
}
.aB1-tag{
        position: relative;
    display: inline-block;
    font-size: 22px;
    color: #B4A078;
    letter-spacing: 0;
}
.aB1-tag:before,.aB1-tag:after{
        content: '';
    position: absolute;
    width: 2px;
    background-color: #B4A078;
    height: 100%;
}
.aB1-p{
        display: inline-block;
    padding: 0 8px;
}
.aB1-title{
        display: inline-block;
    font-size: 22px;
    color: #151515;
    letter-spacing: 0;
    line-height: 30px;
    margin-left: 15px;
}
.aB1-desc{
    position: relative;
    height: 19px;
    margin: 5px 0 0;
    font-size: 13px;
    line-height: 23px;
    color: #666;
    border-bottom: 1px solid #eaeaea;
}
.aB1-descI{
        height: 27px;
    position: absolute;
    background: #fff;
}
.aB1-txt1{
        font-size: 14px;
    color: #666;
    letter-spacing: 0;
    padding-right: 20px;
    line-height: 23px;
    display: inline-block;
}
.aB1-txt2{
        position: relative;
    display: inline-block;
    padding-right: 20px;
}
.aB1-xie{
        margin-right: -20px;
}
.aB1-one{
        position: relative;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    color: #333;
    margin-bottom: 44px;
    margin-right: 20px;
}
.aB1-Xpic{
        width: 257px;
    height: 257px;
    overflow: hidden;
    margin-bottom: 20px;
}

.aB1-Xp{
    width: 100%;
    height: 100%;
        background: #fff;
    color: #fff
}
.img{
    background-image:url(https://yanxuan.nosdn.127.net/hxm/yanxuan-expert/p/20170510/style/img/icon-normal-s862ebfdc8a-3c47d76a4c.png) 
}
.aB1-Xi{
    display:none;
    position: absolute;
    top: 91px;
    left: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
        background-position: 0 -5287px;
    height: 70px;
    width: 70px;
}
.aB1-Xpic:hover .aB1-Xi{
    display:block;
}
.aB1-Xtext{
        font-size: 12px;
    position: relative;
}
.aB1-Xul{
    width: 200px;
    height: 30px;
    margin: 0 auto;
    white-space: nowrap;
}
.aB1-Xli{
    position: relative;
    display: inline-block;
    padding: 0 8px;
    font-size: 14px;
    color: #666;
    letter-spacing: 0;
    line-height: 14px;
}
.aB1-Xxin{
        text-align: center;
}
.aB1-Xs1{
        position: relative;
}
.aB1-Xs1:before{
    position: absolute;
    width: 20px;
    margin-left: -37px;
    top: 50%;
    background-color: #ddd;
    height: 2px;
    margin-top: -1px;
    content: '';
}
.aB1-Xs3:after{
    position: absolute;
    width: 20px;
    margin-left: 17px;
    top: 81%;
    background-color: #ddd;
    height: 2px;
    margin-top: -1px;
    content: '';
}
.aB1-Xii{
        width: 23px;
    height: 20px;
    margin-right: 7px;
    margin-top: -2px;
    vertical-align: middle;
        background-position: 0 -4088px;
    display: inline-block;
}
.aFoot{
        text-align: center;
}
.aFa{
    display: inline-block;
        cursor: pointer;
}
.aFtext{
        margin-right: 10px;
    line-height: 26px;
    font-size: 20px;
    color: #333;
    letter-spacing: 5px;
}
.aFi{
        background-position: 0 -2832px;
    height: 28px;
    width: 28px;
        display: inline-block;
    overflow: hidden;
    vertical-align: top;
    font-size: 12px;
    word-spacing: normal;
    letter-spacing: normal;
}
.aFi:hover{
        background-position: 0 -2796px;
}

/* 第二个 */
.aBox2{
        padding: 55px 0;
}
.aB2{
        width: 1090px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
}
.aB2-top{
        position: relative;
    margin-bottom: 33px;
    background-color: #f4f4f4;
    height: 270px;
    overflow: hidden;
}
.aB2-ta{
    float: left;
    width: 324px;
}
.aB2-ta img{
        display: block;
    width: 100%;
    height: 270px;
}
.aB2-right{
        margin-left: 324px;
    padding: 40px 50px 0 46px;
    line-height: 1;
}
.aB2-ra{
    display: block;
    font-size: 22px;
    color: #333;
}
.aB2-rp{
    margin-top: 16px;
    margin-bottom: 60px;
    line-height: 20px;
    font-size: 14px;
    color: #666;
}
.aB2-rd{
        position: absolute;
    width: 670px;
    bottom: 32px;
        margin-top: 20px;
}
.aB2-rd img{
    float: left;
    width: 34px;
    height: 34px;
    margin-right: -8px;
    border-radius: 50%;
    border: 2px solid #fff;
        background: #f4f4f4;
    color: #f4f4f4;
        vertical-align: top;
}
.aB2-rd .aB2-rimg{
        margin-right: 18px;
}
.aB2-rpp{
        position: relative;
    padding-top: 10px;
    display: inline-block;
    font-size: 14px;
    color: #333;
        margin-right: 12px;
}
.aB2-rpp:after{
        content: '\22C5';
    position: absolute;
    right: -11px;
    color: #333;
}
.aB2-raa{
        width: 144px;
    height: 42px;
    line-height: 40px;
    font-size: 16px;
        float: right;
        color: #fff;
    border: 1px solid #b4a078;
    background-color: #b4a078;
        text-align: center;
            border-radius: 2px;
}
.aB2-raa:hover{
    background-color: #c0ae8a;
}
.aB2-button{
        margin-bottom: 33px;
}
.aB2-btit{
        margin-bottom: 15px;
    font-size: 22px;
    color: #333;
        text-align: center;
}
.aB2-bul{
        position: relative;
    display: block;
}
.aB2-bhid{
    z-index: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
        height: 182px;
}
.aB2-bbox{
    opacity: 1;
    height: 2184px;
    transform: translate3d(0px, 0px, 0px);
        top: 0;
    left: 0;
}
.aB2-bk{
        display: block;
    height: auto;
    border: 1px solid transparent;
        width: 1090px;
    float: left;
    min-height: 1px;
}
.aB2-bx{
        position: relative;
    display: inline-block;
    width: 354px;
    height: 180px;
    padding: 17px 22px 10px 20px;;
    box-sizing: border-box;
    border: 1px solid #eaeaea;
    vertical-align: top;
}
.aB2-bx1{
        outline: 0;
}
.aB2-btou{
    position: relative;
    width: 50px;
    height: 50px;
    float: left;
}
.aB2-btou img{
    width: 100%;
    height: 100%;
}
.aB2-btouu{
        position: absolute;
    top: 0;
    left: 0;
    background-position: 0 -4314px;
    height: 50px;
    width: 50px;

}
.aB2-bming{
        margin-left: 60px;
    padding-top: 5px;
    font-size: 14px;
    color: #333;
    line-height: 18px;
}
.aB2-bmp{
        min-height: 19px;
}
.aB2-bmi{
        display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
        background-image: url(//yanxuan.nosdn.127.net/hxm/yanxuan-expert/p/20170510/style/img/member-sc28e9b1859-64c775de52.png);
        background-position: 0 -2594px;
    height: 18px;
    width: 18px;
    background-repeat: no-repeat;
}
.aB2-btian{
        line-height: 1;
    margin-top: 9px;
    font-size: 13px;
    color: #999;
}
.aB2-bx2{
        width: 310px;
    min-height: 57px;
    margin-top: 14px;
    font-size: 14px;
    color: #666;
    line-height: 19px;
    word-wrap: break-word;
    position: relative;
    height: 57px;
    overflow: hidden;
}
.aB2-bx2:after{
        content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 19px;
    text-align: right;
    background: url(https://yanxuan.nosdn.127.net/6712d08b989bc2952f8791903dba7db6.png);
    color: #999;
}
.aB2-bx3{
        position: absolute;
    bottom: 20px;
    display: inline-block;
    margin-top: 10px;
    font-size: 13px;
    color: #69c;
        text-align: center;
}
.aB2-bxx{
    margin-left: 8px;
}

/* 第三 */
.aBox3{
        padding: 55px 0;
}
.aBox3-b{
    width: 1090px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
}
.aB3{
        width: 1090px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
        text-align: center;
}
.aB3-b1{
        display: inline-block;
    width: 354px;
    height: 440px;
    border: 1px solid #eaeaea;
}
.aB3-b11{
    margin-left: 9px;
}
.aB3-ba{
        position: relative;
    display: block;
    height: 298px;
}
.aB3-bt{
        position: absolute;
    z-index: 1;
    top: 23px;
    right: -3px;
    padding: 0 10px 0 18px;
    height: 32px;
    line-height: 32px;
        color: #333;
    font-size: 13px;
    font-weight: 700;
    border-radius: 2px;
    border-right: 3px solid #333;
    background: rgba(255,255,255,.8);
}
.aB3-bs{
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    padding-left: 8px;
    line-height: 30px;
    color: #fff;
    font-size: 14px;
    background: url(https://yanxuan.nosdn.127.net/9b01974b8183ab78a3b0b20ba40493b4.png) repeat-y;
    text-align: left;
}
.aB3-t{
        position: relative;
    z-index: 1;
    padding-top: 20px;
    border-top: 1px solid #eaeaea;
    background: #fff;
    text-align: center;
    line-height: 1;
}
.aB3-t1{
        font-size: 18px;
    color: #292929;
}
.aB3-t1s{
        display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #b29f7c;
}
.aB3-t2{
        margin-top: 12px;
    color: #666;
    font-size: 14px;
}
.aB3-t3{
        margin-top: 20px;
    width: 164px;
    height: 38px;
    line-height: 36px;
    font-size: 18px;    
        color: #b4a078;
    border: 1px solid #b4a078;
    background-color: #f5f3ef;
        border-radius: 2px;
    text-align: center;
    display: inline-block;
}
.aB3-t3:hover{
    color:#c0ae8a;
    background: #ffffff;
}
.ab3{
        margin-top: 40px;
    margin-bottom: 30px;
}
.ab3-a{
    position: relative;
    width: 363px;
    height: 300px;
    overflow: hidden;
    float: left;
    cursor: pointer;
}
.ab3-a1{
        position: absolute;
    z-index: 2;
    top: 19px;
    left: 0;
    height: 34px;
    line-height: 34px;
    padding: 0 12px;
    background: #f5f5f5;
    color: #aaa;
    font-size: 15px;
        background: #333;
    color: #e2cba0;
}
.ab3-a1:after{
        content: '';
    position: absolute;
    right: -10px;
    border-top: 17px solid #f5f5f5;
    border-bottom: 17px solid #f5f5f5;
    border-right: 10px solid transparent;
        border-top-color: #333;
    border-bottom-color: #333;
}
.ab3-a2{
    width: 100%;
    height: 100%;
}
.ab3-a2 img{
        background: #f4f4f4;
    color: #f4f4f4;

    width: 100%;
    height: 100%;
}
.ab3-b{
        height: 300px;
    position: relative;
    margin-left: 363px;
    padding: 18px 16px 0 26px;
    border: 1px solid #eaeaea;
}
.ab3-b1{
        position: absolute;
    left: -364px;
    bottom: 0;
    width: 363px;
    height: 34px;
    line-height: 34px;
    padding: 0 17px 0 10px;
    color: #fff;
    font-size: 15px;
    background: #333;
    opacity: .8;
}
.ab3-b11{
        display: inline-block;
    margin-right: 19px;
}
.ab3-b12{
    display: inline-block;
    vertical-align: top;
}
.ab3-buy .ab3-b13{
        float: right;
    color: #e2cba0;
}
.ab3-b2{
        margin-top: 7px;
        font-size: 14px;
    color: #666;
    line-height: 1;
}
.ab3-b21{
        margin-right: 7px;
    vertical-align: text-bottom;
        display: inline-block;
            background-position: 0 -6949px;
    height: 16px;
    width: 17px;
}
.ab3-b3{
        position: absolute;
    right: 15px;
    top: 13px;
    width: 70px;
    height: 70px;
    line-height: 100px;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 35px;
    font-size: 18px;
        background-position: 0 -3305px;
}
.ab3-b4{
        margin-top: 20px;
    line-height: 1;
}
.ab3-buy .ab3-b44{
        margin-bottom: 14px;
    font-size: 20px;
    height: inherit;
    padding-left: 0;
        color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 356px;
    display: inline-block;
}
.ab3-b5{
        margin-top: 17px;
    font-size: 13px;
    color: #333;
    line-height: 25px;
}
.ab3-b55{
        display: inline-block;
    margin-left: 10px;
    text-decoration: underline;
}
.ab3-buy .ab3-b6{
        position: absolute;
    bottom: 20px;
    left: 26px;
    font-size: 13px;
    color: #999;
}
.ab3-b66{
        color: #69c;
}
.ab3-b7{
        position: absolute;
    bottom: 20px;
    right: 19px;
    color: #999;
    font-size: 10px;
}
.ab3-b71{
        display: inline-block;
    color: #999;
    margin-left: 22px;
}
.ab3-b71a{
        margin-right: 6px;
    display: inline-block;
    vertical-align: middle;
    margin-top: -4px;
        background-position: 0 -8250px;
    height: 12px;
    width: 22px;
}
.ab3-b71b{
        margin-right: 6px;
    display: inline-block;
    vertical-align: middle;
    margin-top: -4px;
        background-position: 0 -8034px;
        height: 14px;
    width: 16px;
}
.ab3-buy+.ab3-buy{
        margin-top: 29px;
}
.ab3-buy a{
        color: #69c;
}

/* 第四 */
.aBox4{
        padding-top: 25px;
}
.aBox4-b{
        width: 1090px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
}
.aB4{
        width: 100%;
    overflow: hidden;
    margin-bottom: 33px;
}
.aB4-x{
        position: relative;
    float: left;
    width: 265px;
    margin-left: 10px;
    margin-bottom: 10px;
    text-align: center;
}
.aB4-x:first-child{
        margin-left: 0;
}
.aB4-bp{
        position: relative;
    margin-bottom: 34px;
    display: inline-block;
    width: 265px;
    height: 265px;
}
.aB4-bp img{
        display: inline-block;
    width: 265px;
    height: 265px;
}
.aB4-bp1{
        position: absolute;
    top: 10px;
    left: 10px;
    height: 20px;
    font-size: 12px;
    color: #a7936e;
    border: 1px solid #b3a07d;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 0 4px;
    line-height: 18px;
    background-color: #f4f0ea;
}
.aB4-bt{
        position: relative;
}
.aB4-bul{
        position: absolute;
    top: -24px;
    width: 100%;
        overflow: hidden;
    height: 20px;
}
.aB4-bli{
        background-color: #E36843;
        display: inline-block;
    height: 20px;
    line-height: 20px;
    color: #fff;
    padding: 0 5px;
    font-size: 12px;
}
.aB4-bming{
        display: inline-block;
    margin-bottom: 10px;
    font-size: 14px;
    color: #333;
    letter-spacing: 0;
    line-height: 18px;
}
.aB4-bming:hover{
    color:#b29f7c
}
.aB4-bm{
        font-size: 14px;
    color: #BE4141;
    letter-spacing: 0;
    line-height: 18px;
}
.aFoot-1{
        margin-bottom: 80px;
}
</style>
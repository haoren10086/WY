<template>
    <div class="my_module p2p_module cyc_m_c7DpjD5n">
        <div class="p2p-content">
            <div class="p2p-imgContent">
                <img v-for="item in arr" :key="item.id" :src="item.img" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            arr:[{
                id:0,
                img:"https://yanxuan.nosdn.127.net/15440868583456784.jpeg"
            },{
                id:1,
                img:"https://yanxuan.nosdn.127.net/15440868585216785.jpeg"
            },{
                id:2,
                img:"https://yanxuan.nosdn.127.net/15440868586056786.jpeg"
            },{
                id:3,
                img:"https://yanxuan.nosdn.127.net/15440868586396787.jpeg"
            },{
                id:4,
                img:"https://yanxuan.nosdn.127.net/15440868587566788.jpeg"
            },{
                id:5,
                img:"https://yanxuan.nosdn.127.net/15440868589676789.jpeg"
            },{
                id:6,
                img:"https://yanxuan.nosdn.127.net/15440868592186790.jpeg"
            },{
                id:7,
                img:"https://yanxuan.nosdn.127.net/15440868596576791.jpeg"
            },{
                id:8,
                img:"https://yanxuan.nosdn.127.net/15440868599946792.jpeg"
            },{
                id:9,
                img:"https://yanxuan.nosdn.127.net/15440868601436793.jpeg"
            },{
                id:10,
                img:"https://yanxuan.nosdn.127.net/15440868604556794.jpeg"
            },{
                id:11,
                img:"https://yanxuan.nosdn.127.net/15440868604916795.jpeg"
            }]
        }
    }
}
</script>
<style lang="">
    .p2p-content .p2p-imgContent img{
        display: block;
        margin: auto;
        position: relative;
        width: 1920px;
        left: 50%;
        max-height: 300px;
        margin-left: -960px;
    }
    img{
        border-style: none;
        width: auto;
        height: auto;
    }
    .p2p_module .p2p-content{
        width: 100%;
        max-width: 1920px;
        margin: auto;
        overflow: hidden;
        position: relative;
    }
    .p2p-content .p2p-imgContent{
        font-size: 0px;
        position: relative;
    }
</style>
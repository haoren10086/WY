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
                img:"https://yanxuan.nosdn.127.net/15609361907666851.jpeg"
            },{
                id:1,
                img:"https://yanxuan.nosdn.127.net/15609361908176852.jpeg"
            },{
                id:2,
                img:"https://yanxuan.nosdn.127.net/15609361908746853.jpeg"
            },{
                id:3,
                img:"https://yanxuan.nosdn.127.net/15609361911376854.jpeg"
            },{
                id:4,
                img:"https://yanxuan.nosdn.127.net/15609361913826855.jpeg"
            },{
                id:5,
                img:"https://yanxuan.nosdn.127.net/15609361914106856.jpeg"
            },{
                id:6,
                img:"https://yanxuan.nosdn.127.net/15609361918396857.jpeg"
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
        height: 2009.00px;
    }
</style>
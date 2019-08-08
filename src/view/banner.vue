<template>
  <div>
    <!-- 轮播 -->
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in list" :key="index">
          <img :src="item.url" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {

  name: "banner",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      list: [
        {
          id: 1,
          url:
            "https://yanxuan.nosdn.127.net/4988fb9a77bdb09f873b07a9e4f15c0a.jpg?imageView&quality=95&thumbnail=1920x420"
        },
        {
          id: 2,
          url:
            "https://yanxuan.nosdn.127.net/2d7a9b782240c38cb9014f911bcb54d3.jpg?imageView&quality=95&thumbnail=1920x420"
        },
        {
          id: 3,
          url:
            "https://yanxuan.nosdn.127.net/4238a03aa65620f981bcacb180c63870.png?imageView&quality=95&thumbnail=1920x420"
        },
        {
          id: 4,
          url:
            "https://yanxuan.nosdn.127.net/4238a03aa65620f981bcacb180c63870.png?imageView&quality=95&thumbnail=1920x420"
        },
        {
          id: 5,
          url:
            "https://yanxuan.nosdn.127.net/2ed192767b8517ee88b9e4240e14a7a2.jpg?imageView&quality=95&thumbnail=1920x420"
        },
        {
          id: 6,
          url:
            "https://yanxuan.nosdn.127.net/2ed192767b8517ee88b9e4240e14a7a2.jpg?imageView&quality=95&thumbnail=1920x420"
        },
        {
          id: 7,
          url:
            "https://yanxuan.nosdn.127.net/4e8b00f2b5fffe617c325fcf5ec8e098.jpg?imageView&quality=95&thumbnail=1920x420"
        },
        {
          id: 8,
          url:
            "https://yanxuan.nosdn.127.net/9c208818dea852d078e68d35b5df023b.jpg?imageView&quality=95&thumbnail=1920x420"
        },
        {
          id: 9,
          url:
            "https://yanxuan.nosdn.127.net/0442b95c8e3750d1edf11aed3bb4c302.jpg?imageView&quality=95&thumbnail=1920x420"
        }
      ],
      //定义一个变量,接收后台传过来的图片

      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        pagination: {
          el: ".swiper-pagination"
        },
        // paginationClickable: true,
        // mousewheelControl: true,
        // observeParents: true,
        // onTransitionStart(swiper){
        //   console.log(swiper)
        // }
        slidesPerView: 1,
        spaceBetween: 0,
        // slidesPerGroup: 3,
        // grabCursor: true,//鼠标光标
        autoplay: {
          delay: 3000000 //秒
          // stopOnLastSlide: false,
          // disableOnInteraction: false //滑动不会失效
        },
        loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination"
          // clickable: true
        }
      }
    };
  }
};
</script>

<style scoped>
.swiper-pagination > .swiper-pagination-bullet {
  width: 8px !important;
  height: 8px !important;
  cursor: pointer !important;
  color: transparent !important;
  border: 1px solid #cecece !important;
  background: #fff !important;
  opacity: 1 !important;

  bottom: 35px !important;
  position: relative !important;
}
.swiper-pagination-bullet-active {
  box-shadow: 0 0 0 4px #dfcead !important;
  background: #a7936e !important;
}
.swiper-pagination {
  position: relative !important;
  bottom: 35px !important;
}
.swiper-container {
  min-width: 100px;
  max-width: 1920px;
}
/* .banner {
    height: 420px;
    min-width: 100px;
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
}
.swiper-slide{
    min-width: 100px;
    max-width: 1920px;
    position: relative;
    left: 0px;
    top: 0px;
}
img{
        width: 100%;
        height: 100%;
}
.swiper-pagination-bullet{
    width: 8px;
    height: 8px;
    cursor: pointer;
    color: transparent;
        border: 1px solid #cecece;
        background: #fff;
        opacity: 1;
}
.swiper-pagination-bullet-active{
        box-shadow: 0 0 0 4px #dfcead;
        background: #a7936e;
} */
</style>

window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    })
}
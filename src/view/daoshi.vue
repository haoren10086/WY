<template>
    <div id="app">{{ `${day}天 ${hr}小时 ${min}分钟 ${sec}分钟` }}</div>
</template>

<script>
    export default {
  data() {
    return {
      day: 0, hr: 0, min: 0, sec: 0
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



    }
</script>

<style scoped>
span{
    display: block;
}
</style>
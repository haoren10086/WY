<template>
  <div id="ahome">
    <!-- <router-view/> -->
    <aindex></aindex>
  </div>
</template>

<script>
import Aindex from "./Aindex"
export default {
  name:'ahome',
  data(){
    return{
      
    }
  },
  components:{
    "aindex":Aindex
  }
}
</script>

<style>
*{margin:0;padding:0;box-sizing: border-box;}
a {
    color: #333;
    text-decoration : none;
}
li{
    list-style:none;
}

</style>

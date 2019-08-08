<template>
<div>
    <header>
        <h1>{{title}}</h1>
    </header>
</div>
    
</template>

<script>
export default {
    name:"app-header",
    data(){
        return{
            title:"vue.js hahaha"
        }
    }

}
</script>

<style>
header{
    background: red;
    padding: 10px;
}
h1{
    color: #222;
    text-align:center;
}
</style>
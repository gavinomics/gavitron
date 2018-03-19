<template>
    <div class="main-content">
        <div class="homeContent">
            <router-link to="/prints" style="text-decoration: none; color: #000;">
            <div class="small-text"> Selected art and photography from various artists</div>
            <br>
            <img style="width: 800px;" src="/static/images/art/munky1.jpg">
            <br>
            <h3 style="">Gmunk</h3>
            <br>
            <br>
            <img style="width: 800px" src="/static/images/art/at-bladerunner-cover.jpg">
            <br>
            <h3 style="">Ash Thorp</h3>
            <br>
            <br>
        
        </router-link>
        </div>
    </div>
</template>

<script>
 export default {
   name: 'Home',
   
 }
</script>

<style scoped>
/*==============================MAIN-CONTENT==============================*/
.main-content {
    margin: 0px;
    padding: 24px;
    background-color: #fff;

    /*padding: 0px 24px;*/
}

.homeContent {
    color: #000;
    width: 800px; 
    margin: 0px auto;
    
}
</style>
<script>
import { store } from '../store';
export default {
    
    data(){
        return {
            store,
        }
    }
    
}
</script>





<template>
    <div class="stats">
        <!-- <img class="globe" src="../assets/img/globe.png" alt=""> -->
        <div class="globe">
            <img style="width: 100%;" src="../assets/img/shape-top.png" alt="">
            <h1>Anidio Quick Facts</h1>
            <div class="stats-container">
            <div class="stat" v-for="fact in store.QuickFacts" :key="fact.data"  >
                <h1>{{ fact.num  }}+</h1>
                <h2>{{ fact.data }}</h2>
            </div>
        </div>
        <img class="bottom" src="../assets/img/shape-bottom.png" alt="">
        </div>
        
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/style/Partials/variables.scss' as *;

.stats{
    height: 600px;
    background-image: url(../assets/img/banner-bg.png);
    text-align: center;
    position: relative;
    
    h1{
        font-size: 4em;
        padding-top: 1em;
        color: $brand-base-color;
    }
    
}


.globe{
    height: 100%;
    background-image: url(../assets/img/globe.png);
    background-repeat: no-repeat;
    background-position:center;
    background-size: contain;
}
.stats-container{
    margin-top: 70px;
    width: 80%;
    margin-inline: auto;
    display: flex;
    gap: 1em;
    

}

.stat{
        width: 300px;
        height: 200px;
        border: 1px solid rgb(182, 168, 168);
        border-radius: 20px;
        h2{
            color: $brand-primary-orange;
        }

    }

    
    .bottom{
        width: 100%;
        margin-top: 8.3em;
    }

    // .globe{
    //     position: fixed;
    //     left: 35%;
    //     bottom: 10%;
    //     height: 500px;
    //     z-index: 1;
    // }
    
</style>

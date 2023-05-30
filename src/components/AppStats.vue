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
        <img style="width: 100%;" src="../assets/img/shape-top.png" alt="">
        <h1>Anidio Quick Facts</h1>
        <div class="stats-container">
            <div class="stat" v-for="fact in store.QuickFacts" :key="fact.data"  >
                <h1>{{ fact.num  }}+</h1>
                <h2>{{ fact.data }}</h2>
            </div>
            <img class="globe" src="../assets/img/globe.png" alt="">
        </div>
        <img class="bottom" src="../assets/img/shape-top.png" alt="">
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/style/Partials/variables.scss' as *;

.stats{
    height: 600px;
    background-image: url(../assets/img/banner-bg.png);
    text-align: center;
    
    h1{
        font-size: 4em;
        padding-top: 1em;
        color: $brand-base-color;
    }
    
}


.stats-container{
    position: relative;

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
        margin-top: 9em;
        transform: rotate(3.142rad);
    }

    .globe{
        position: absolute;
        left: 35%;
        bottom: -55%;
        height: 500px;
    }
    
</style>

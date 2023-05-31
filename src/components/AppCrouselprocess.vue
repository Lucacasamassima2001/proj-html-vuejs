
<script>
import { store } from '../store';

export default {
    data(){
        return {
            store,
            activeIndex: 0,
        }
    },

    
    methods:{
        showNextSlide () {
            this.activeIndex++
        
        if (this.activeIndex >= store.Ourprocess.length) {
        this.activeIndex = 0;
        }},
        
        showPrevSlide () {
            this.activeIndex--
        
        if (this.activeIndex < 0) {
            this.activeIndex = store.Ourprocess.length - 1;
        }},
        
        setActiveIndex(index) { 
            this.activeIndex = index;
        },
    }

}
</script>


<template>
        <div class="container">
            <div class="img-container">
                <img class="smart" src="../assets/img/process-thumb.png" alt="">
            </div>
            <div class="slider">
                <h2>Our Process</h2>
                <h1>Our Process For <br> Your Animation <br> Production</h1>
                <p>We have an effective process for working on animation</p>
                <div class="carousel">
                    <div @click="setActiveIndex(index)" :class="{active: index == activeIndex}" class="card" v-for="(process, index) in store.Ourprocess" :key="process.title"  >
                        <div class="thumb-img">
                            <img  :src="process.image" :alt="process.title">
                        </div>
                        <h2>{{ process.title }}</h2>
                        <p>{{ process.text }}</p>
                        <div class="id">{{ process.id }}</div>
                    </div>
                    <div @click="setActiveIndex(index)" :class="{active: index == activeIndex}" class="card" v-for="(process, index) in store.Ourprocess1" :key="process.title"  >
                        <div class="thumb-img">
                            <img  :src="process.image" :alt="process.title">
                        </div>
                        <h2>{{ process.title }}</h2>
                        <p>{{ process.text }}</p>
                        <div class="id">{{ process.id }}</div>
                    </div>
                </div>
                <div class="controls">
                    <button @click="showPrevSlide"><i class="fa-solid fa-arrow-left"></i></button>
                    <button @click="showNextSlide"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <img class="rocket" src="../assets/img/smart4.png" alt="">
            </div>
        </div>
</template>

<style lang="scss" scoped>
@use '../assets/style/Partials/variables.scss' as *;

.container{
    display: flex;
    position: relative;
    height: 800px;
}


.img-container{
    width: 50%;
    position: absolute;
    left: -300px;
    top: -10px;
    
    img{
        height: 800px;
    }

}


.slider{
    width: 50%;
    margin-left: 40%;
    
    h2{
        margin-bottom: 1em;
        color: $brand-primary-light;
    }
    
    h1{
        font-size: 3em;
        margin-bottom: .3em;
        color: $brand-primary-dark;
    }
    
    p{
        color: $brand-primary-dark;
    }
}



.carousel{
    margin-top: 50px;
    display: flex;
    gap: 1em;
}
.card.active{
        display: block;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        align-items: center;
        text-align: center;
        height: 380px;
        width: 250px;
        border: 1px solid lightgrey;
        border-radius: 20px;
        padding: 1em;
        position: relative;
    }
    
    .card:hover{
        background-color: $brand-secondary-pink;

    }
.card{
    
    display: none;
    h2{
        margin-top: 1em;
        margin-bottom: 1em;
        color: $brand-primary-dark;
    }
    
    img{
        height: 80px;
    }
    
    p{
        line-height: 1.8em;
    }
    
    .id{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: absolute;
        top: 0;
        right: 10px;
        width: 40px;
        height: 60px;
        background-color: $brand-secondary-base;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        padding-bottom: 10px;
    }
    
    .thumb-img{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $brand-secondary-pink;
        width: 150px;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }
}


.controls{
    display: flex;
    gap: 1em;
    margin-top: 1em;
}
button{
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: none;
    background-color: white;
    border: 2px solid $brand-secondary-pink;
}


button:active{
    background-color: $brand-primary-orange;

}


.rocket{
    position: absolute;
    right: 20px;
    height: 120px;
}


</style>
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
        
        if (this.activeIndex >= store.TeamMembers.length) {
        this.activeIndex = 0;
        }},
        
        showPrevSlide () {
            this.activeIndex--
        
        if (this.activeIndex < 0) {
            this.activeIndex = store.TeamMembers.length - 1;
        }},
        
        setActiveIndex(index) { 
            this.activeIndex = index;
        },
    }
}
</script>



<template>
  <div class="container">
        <h2>Anidio Magic Team Members</h2>
        <h1>Let Us Animate Your <br> Project</h1>
        <p>We create New worlds! Let's collaborate and create engaging, effective, <br>award-winning animations</p>
        <div class="slider">
            <div @click="setActiveIndex(index)" :class="{active: index == activeIndex}" class="member" v-for="(member, index) in store.TeamMembers" :key="member.name" >
                <img :src="member.image" alt="">
                <h3>{{ member.name }}</h3>
                <p>{{ member.job  }}</p>
                <div class="socials">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div @click="setActiveIndex(index)" :class="{active: index == activeIndex}" class="member" v-for="(member, index) in store.TeamMembers1" :key="member.name" >
                <img :src="member.image" alt="">
                <h3>{{ member.name }}</h3>
                <p>{{ member.job  }}</p>
                <div class="socials">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div @click="setActiveIndex(index)" :class="{active: index == activeIndex}" class="member" v-for="(member, index) in store.TeamMembers2" :key="member.name" >
                <img :src="member.image" alt="">
                <h3>{{ member.name }}</h3>
                <p>{{ member.job  }}</p>
                <div class="socials">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div class="controls">
                    <button @click="showPrevSlide"><i class="fa-solid fa-arrow-left"></i></button>
                    <span :value="activeIndex" :class="{activedot: index == activeIndex}"  v-for="(member,index) in store.TeamMembers" :key="member.name"  class="selected-member"></span>
                    <button @click="showNextSlide"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
        </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../assets/style/Partials/variables.scss' as *;


.container{
    margin-bottom: 300px;
    text-align: center;
    margin-top: 100px;
    position: relative;

    
    h2{
        margin-bottom: .5em;
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


.slider{
    margin-top: 2em;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    gap: 8em;
}
.member{
    background-color: $brand-secondary-pink;
    box-shadow: -0px 30px 2px 40px $brand-secondary-pink;
    border-radius: 20px;
    cursor: pointer;
    // DISPLAY ONE CARD
    display: none;
    img{
        border-radius: 20px;
    }



    h3{
        color: $brand-primary-dark;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    
    p{
        color: $brand-primary-light;
    }
    
    .socials{
        margin-top: 1em;
        display: flex;
        gap: 1em;
        justify-content: center;
        
        i{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            aspect-ratio: 1/1;
            border: 1px solid $brand-primary-light;
            border-radius: 50%;
            font-size: 1.2em;
            color: $brand-primary-light;
        }
        i:hover{
            transform: scale(1.2);
            background-color: $brand-primary-orange;
            color: $brand-base-color;
            border: 1px solid $brand-primary-orange;
        }

    }
}

.controls{
    position: absolute;
    bottom: -200px;
    left: 43%;
    display: flex;
    align-items: center;
    gap: 1em;
    margin-top: 1em;
}

    .selected-member{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: lightgray;
    }

    .activedot{
        // background-color: $brand-secondary-pink;
        transform: scale(1.1);
        background-color: $brand-primary-orange;
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

.active{
        display: block;
    }

    
</style>
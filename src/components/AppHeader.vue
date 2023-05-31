<script>
// import {store} from '../store';
import AppHnavOptionsVue from './AppHnavOptions.vue';
export default {
    data(){
        
        return{
            // store,
            NavOptions:[
            {
                name:'Home',
                id:1
            },
            {
                name:'About Us',
                id:11
            },
            {
                name:'Portfolio',
                id:12
            },
            {
                name:'Our Process',
                id:13
            },
            {
                name:'Pricing',
                id:14
            },
            {
                name:'Blog',
                id:15
            },
            {
                name:'Contact',
                id:16
            },
        ],
        }
    },

    
    components:{
        AppHnavOptionsVue,
    }

}
</script>




<template>
    <header id="Homepage">
        <nav>
            <div class="img-">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="options-container">
                <AppHnavOptionsVue
                v-for="option in NavOptions"
                :key="option.id"
                :opname="option.name"
                />
                <button>Get a Quote</button>
            </div>
            

        </nav>
        <div class="container-titles">
            <h3>Imagine, Create, Experience</h3>
            <h1>We animate <br> with Ninja Like Precision</h1>
            <h4>We are a Character driven animation studio striving to make high-quality animations.</h4>
            <div class="buttons">
                <button>Start a project</button>
                <button>Portfolio</button>
            </div>
            <img src="../assets/img/middle.png" alt="">
        </div>


        <!-- POSITIONED BACKGROUND IMAGES -->
        <img class="bottom" src="../assets/img/shape-bottom.png" alt="">
        <img class="left-man" src="../assets/img/left-man.png" alt="">
        <img class="globe" src="../assets/img/globe.png" alt="">
        <img class="globe-2" src="../assets/img/globe2.png" alt="">
        <img class="globe-3" src="../assets/img/globe3.png" alt="">
        <img class="dots-left" src="../assets/img/dots-left.png" alt="">
        <img class="right-man" src="../assets/img/right-man.png" alt="">
        <img class="light" src="../assets/img/light.png" alt="">
        <img class="dots-right" src="../assets/img/dots-right.png" alt="">
    </header>
    
</template>



<style lang="scss" scoped>
@use '../assets/style/Partials/variables.scss' as *;

header{
    height: 650px;
    background-image: url(../assets/img/banner-bg.png);
    padding: 1em;
    position: relative;
}


nav{
    @include nav;

}
button{
        width: 120px;
        @include button;
    }
    button:hover{
        @include glowing-btn;
    }

.options-container{
    display: flex;
    align-items: center;
    z-index: 99;
}




.container-titles{
    margin-top: 5rem;
    width: 60%;
    margin-inline: auto;
    text-align: center;
    z-index: 99;
    
    h1{
        margin-top: .2em;
        font-size: 4em;
        color: $brand-base-color;
    }
    
    h3{
        color: $brand-primary-orange;
        margin-top: .2em;
    }
    
    h4{
        margin-top: 1em;
        color: $brand-base-color;
        margin-bottom: 1em
    }

    
    
    button{
        width: 120px;
        margin-top: .2em;
        @include button;
    }
    
    button:hover{
        @include glowing-btn;
    }
    img{
        margin-top: 2em;
        z-index: 99;
        position: absolute;
        right: 18%;
    }

}
    .bottom{
        width: 100%;
        position: absolute;
        bottom: -10px;
        left: 0;
        margin-top: 12em;
        z-index: 9;
    }

    
    .left-man{
        position: absolute;
        left: 50px;
        bottom: 100px;
        height: 350px;
    }

    
    .globe{
        position: absolute;
        top: 10%;
        left: 10%;
        height: 100px;
    }
    .globe-2{
        position: absolute;
        top: 20%;
        left: 70%;
        height: 100px;
    }
    .globe-3{
        position: absolute;
        left: 40%;
        top: -35%;
        z-index: 1;
    }
    .dots-left{
        position: absolute;
        left: 7%;
        top: 30%;
        z-index: 1;
    }

    .dots-right{
        position: absolute;
        right: 10%;
        top: 20%;
        z-index: 1;
        height: 300px;
    }

    .right-man{
        position: absolute;
        right: 5%;
        bottom: 25%;
        height: 350px;
    }
    .light{
        position: absolute;
        right: 10%;
        top: 10%;
    }

</style>




<script>
import {store} from '../store';

export default {
    data(){
        
        return{
            store,
        }
    },
}
</script>




<template>
    <header id="Homepage">
        <nav>
            <div class="img-">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="options-container">
                <ul class="options">
                    <li v-for="option in store.NavOptions" :key="option.id">{{ option.name }} </li>
                </ul>
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
        <img class="bottom" src="../assets/img/shape-bottom.png" alt="">
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


.options-container{
    display: flex;
    align-items: center;
    
    button{
        width: 120px;
        @include button;
    }
    button:hover{
        @include glowing-btn;
    }
}

ul{
    @include list;
    color: $brand-base-color;
    
    li:hover{
        color: $brand-primary-orange;
        cursor: pointer;
    }

}


.container-titles{
    margin-top: 5rem;
    width: 60%;
    margin-inline: auto;
    text-align: center;
    position: relative;
    
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
        left: -2%;
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
</style>




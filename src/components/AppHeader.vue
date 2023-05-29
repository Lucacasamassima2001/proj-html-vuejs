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
    <header>
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
    </header>  
</template>



<style lang="scss" scoped>
@use '../assets/style/Partials/variables.scss' as *;

header{
    height: 600px;
    background-image: url(../assets/img/banner-bg.png);
    padding: 1em;
}


nav{
    width: 70%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
}


.options-container{
    display: flex;
    align-items: center;
    
    button{
        @include button;
    }
    button:hover{
        @include glowing-btn;
    }
}

ul{
    display: flex;
    gap: 1em;
    list-style: none;
    color: $brand-base-color;
    
    li:hover{
        color: $brand-primary3-orange;
        cursor: pointer;
    }

}


.container-titles{
    margin-top: 5rem;
    width: 60%;
    margin-inline: auto;
    text-align: center;
    
    h1{
        margin-top: .2em;
        font-size: 4em;
        color: $brand-base-color;
    }
    
    h3{
        color: $brand-primary3-orange;
        margin-top: .2em;
    }
    
    h4{
        margin-top: 1em;
        color: $brand-base-color;
        margin-bottom: 1em
    }

    
    
    button{
        margin-top: .2em;
        @include button;
    }
    
    button:hover{
        @include glowing-btn;
    }
    img{
        margin-top: 2em;
    }

}
</style>



<!-- TO DO IMAGES ON BACKGROUND AND VIDEO TAG -->
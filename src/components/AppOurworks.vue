<script>
import { store } from '../store';

export default {
    data(){
        return {
            store,
        }
    },
}
</script>


<template>
  <div class="container">
    <h2>Our Works</h2>
    <h1>Featured Productions</h1>
    <p>Here's just a small sample of some of those projects that we're quite proud of. <br> If you're looking for something specific fell free to get in contactc with us</p>
    <div class="works">
        <div v-for="work in store.WorksCards"  :key="work.name"  class="work">
            <img :src="work.url" :alt="work.name">
        </div>
    </div>
    <div>
        <button>See Our Work</button>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../assets/style/Partials/variables.scss' as *;


.container{
    margin-top: 150px;
    margin-bottom: 150px;
    width: 80%;
    margin-inline: auto;
    text-align: center;
    
    h2{
        color: $brand-primary-light;
        margin-bottom: 1em;
    }
    h1{
        color: $brand-primary-dark;
        margin-bottom: .5em;
        font-size: 3em;
    }
    
    p{
        line-height: 1.8em;
    }

    
    .works{
        margin-top: 2em;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2em;
        
        img{
            height: 300px;
        }

    }

    
    button{
        margin-top: 2em;
        padding: 1em;
        margin-left: 1em;
        border-radius: 20px;
        border: 1px solid lightgrey;
        background-color: $brand-base-color;
        cursor: pointer;
        color: $brand-primary-dark;
    }
}

</style>
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
    <div class="container">
        <img src="../assets/img/shape-top.png" alt="">
        <h2>We Create New Worlds!</h2>
        <h1>Want Tips On Your Storytelling?</h1>
        <p>Join our newsletter for tips on how to elevate your brand through storytelling</p>
        <input class="email" type="text" placeholder="Enter your e-mail...">
        <img class="bottom" src="../assets/img/shape-top.png" alt="">
    </div>
  
</template>



<style lang="scss" scoped>
@use '../assets/style/Partials/variables.scss' as *;

.container{
    height: 500px;
    background-image: url(../assets/img/banner-bg.png);
    text-align: center;
    h2{
        padding-top: 3em;
        color: $brand-primary-orange;
        margin-bottom: 1em;
    }
    
    h1{
        color: $brand-base-color;
        font-size: 3em;
        margin-bottom: .3em;
    }
    p{
        color: $brand-base-color;
    }
    
    .email{
        margin-top: 2em;
        width: 800px;
        padding: 1.5em;
        border-radius: 30px;
        border: 1px solid $brand-primary-dark
    }
    .bottom{
        margin-top: 8em;
        transform: rotate(3.142rad);
    }
}
</style>
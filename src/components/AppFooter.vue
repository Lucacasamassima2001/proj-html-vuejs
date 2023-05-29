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
  <footer>
        <nav>
            <div class="img-">
                <img  src="../assets/img/footer-logo.png" alt="">
            </div>
            <div class="options-container">
                <ul class="options">
                    <li v-for="option in store.FooterOption" :key="option.id">{{ option.name }} </li>
                </ul>
            </div>
        </nav>
        <div class="subnav">
            <div class="copyright">Copyright &#169; 2022 <span class="soft-virus">Softvirus</span>. All rights reserverd</div>
            <div class="socials">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
  </footer>
</template>



<style lang="scss" scoped>
@use '../assets/style/Partials/variables.scss' as *;


footer{
    margin-top: 150px;
    height: 200px;
    
    nav{
        @include nav;
        align-items: center;
        padding-bottom: 1em;
        border-bottom: 1px solid grey;
        font-size: 1.3em;
        
        ul{
            @include list;
            li:hover{
                    color: $brand-primary-orange;
                    cursor: pointer;
            }
        }
    }
}


.subnav{
        @include nav;
        align-items: center;
        margin-top: 1em;
        font-size: 1.3em;
    .soft-virus{
        color: $brand-primary-light;
    }
    
    .socials{
        display: flex;
        gap: 1em;
        
        i{
            width: 60px;
            text-align: center;
            color: $brand-primary-dark;
            border: 1px solid grey;
            padding: .8em;
            border-radius: 50%;
        }


    }


}



</style>
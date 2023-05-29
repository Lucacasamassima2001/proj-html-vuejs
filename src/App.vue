<script>
import {store} from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    
    data(){
        
        return{
            store,
        }
    },


    components:{
        AppHeader,
        AppMain,
        AppFooter,
    }
}
</script>



<template>
    <div class="app">
        <AppHeader />
        <AppMain />
        <AppFooter/>
        <a class="to-homepage" href="#Homepage"><i class="fa-solid fa-arrow-up"></i></a>
    </div>
    
</template>



<style lang="scss">

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}



.app{
    position: relative;
}

.to-homepage{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    aspect-ratio: 1/1;
    background-color: #311852;
    color: white;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 5px;
    text-decoration: none;
}

</style>
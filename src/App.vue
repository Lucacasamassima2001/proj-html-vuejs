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
    <AppHeader />
    <AppMain />
  
</template>



<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
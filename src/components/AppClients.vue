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
        <h2>Why Anidio studio?</h2>
        <h1>We Love Our Clients</h1>
        <p>We are trusted throughout adland and have a wealth of recommendations <br> from start-ups to renowned global brands.</p>
        <div class="clients">
            <div v-show="client.approval == true" class="client" v-for="client in store.Clients" :key="client.name" >
                <img :src="client.url" :alt="client.name">
            </div>
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

        
        .clients{
            margin-top: 2em;
            display: flex;
            justify-content: center;
            gap: .8em;
        }
    }
</style>
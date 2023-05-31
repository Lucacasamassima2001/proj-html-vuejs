<script>
import { store } from '../store';
import AppStatsVue from './AppStats.vue';
import AppOurworks from './AppOurworks.vue';
import AppClients from './AppClients.vue';
import Appform from './Appform.vue';
import AppCrouselprocessVue from './AppCrouselprocess.vue';
import AppTeamVue from './AppTeam.vue';

export default {
    
    data(){
        return {
            store,
        }
    },


    components:{
        AppStatsVue,
        AppOurworks,
        AppClients,
        Appform,
        AppCrouselprocessVue,
        AppTeamVue,
    }
    
}
</script>




<template>
    <main>
            <div class="container-storytelling">
                <img class="smart" src="../assets/img/smart.png" alt="">
                <div class="presentation">
                    <h3>Our love for animation</h3>
                    <h2>
                    We're Storytelling
                    <br>
                    Experts With Creative
                    <br>
                    Smarts
                    </h2>
                    <p>Our culture inspires the creative and innovative spirit found throughout our Studio.We brathe life into new ideas!</p>
                    <div class="cards">
                        <div class="card-pink">
                            <img src="../assets/img/smart1.png" alt="">
                            <h3>3D modeling</h3>
                            <p>We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.</p>
                        </div>
                        <div class="card-blue">
                            <img src="../assets/img/smart2.png" alt="">
                            <h3>Collaboration</h3>
                            <p>We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.</p>
                        </div>
                        <div class="card-pink">
                            <img src="../assets/img/smart3.png" alt="">
                            <h3>Creativity</h3>
                            <p>We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.</p>
                        </div>
                        <img class="rocket" src="../assets/img/smart4.png" alt="">
                    </div>
                </div>
            </div>
    </main>

  <AppStatsVue/>
  <AppOurworks/>
  <AppCrouselprocessVue/>
  <AppTeamVue/>
  <AppClients/>
  <Appform/>
</template>



<style lang="scss" scoped>
@use '../assets/style/Partials/variables.scss' as *;
.container-storytelling{
    position: relative;
    margin-top: 500px;
    margin-bottom: 400px;
    height: 500px;
    text-align: center;
}



.smart{
    position: absolute;
    left: -120px;
    top: -150px;
}
.presentation{
    margin-inline-start: 35%;
    width: 55%;
    h3{
        margin-bottom: 1em;
        color: $brand-primary-dark;
    }

    
    h2{
        color: $brand-primary-dark;
        font-size: 3em;
        margin-bottom: 1em;
    }

    
    p{
        color: $brand-secondary-violet;
        font-size: 1.2em;
    }

}



.cards{
    position: relative;
    margin-top: 2em;
    display: flex;
    gap: 2em;
    h3 {
            font-size: 1.8em;
            margin-top: .5em
        }
    .card-pink{
        @include card;
        background: linear-gradient(150deg, #ffffff, $brand-secondary-pink 100%);
        border: 2px solid $brand-secondary-pink;
        
        p{
            line-height: 1.8em;
        }

    }

    
    .card-blue{
        @include card;
        background: linear-gradient(150deg, #ffffff, rgba(105, 105, 220, 0.327) 100%);
        border: 2px solid rgba(105, 105, 220, 0.163);
        
        p{
            line-height: 1.8em;
        }

    }


    
    .rocket{
        height: 120px;
        position: absolute;
        right: -90px;
        bottom: -150px;
    }
}

</style>
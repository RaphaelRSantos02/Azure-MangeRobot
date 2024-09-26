<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Robot from './components/Robot.vue'
import Menu from './components/Menu.vue';


</script>

<template>
    <main id="card-app">
        <div id="content-app">
            <Menu />
            <RouterView/>
        </div>
        <footer class="flex flex-row align-items-end justify-content-end">
            <div class="footer-Robot flex flex-row justify-content-evenly">
                <Robot img="bot0.png" :text="$t('FOOTER.TECHNOLOGY')"/>
                <Robot img="bot1.png" :text="$t('FOOTER.PLATFORM')"/>
                <Robot img="bot2.png" :text="$t('FOOTER.SUPPORT')"/>
            </div>
            <img class="circle" src="/icon2.png" alt="">
        </footer>
    </main>



</template>

<style scoped lang="scss">
#card-app{
    width: 80%;
    height: 90%;
    background-color: var(--app-card-background);
    border-radius: 1.5rem;
    box-shadow: 0px 0px 12px 15px rgba(0,0,0,0.1);
}

#content-app{
    height: calc(100% - 10rem);
}

footer{
    width: 100%;
    height: 20%;
    max-height: 10rem;
    background-color: var(--app-footer-background);
    border-radius: 0 0 1.5rem 1.5rem;
    .footer-bot{
        width: 80%;
        margin: auto;
    }
    .circle{
    height: 100%;
    margin-right: 1.5rem;
  }
}

@media (max-height: 880px){
    #content-app{
        height: 80%;
    }
}

</style>

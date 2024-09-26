<script setup lang="ts">
import { changeLanguage, type AvailableLanguages, i18nApplication } from '@/I18n/i18n';
import { computed, type Ref, ref } from 'vue'

const currentLanguage: Ref<AvailableLanguages> =
    ref(i18nApplication.global.locale.value);

const change = () => {
    if (currentLanguage.value == 'br'){
        changeLanguage('en');
    }
    else{
        changeLanguage('br');
    }
    currentLanguage.value = i18nApplication.global.locale.value;
}

const flag = computed(()=>currentLanguage.value == 'br'? 'en.png' : 'br.jpg');

</script>

<template>
    <header class="flex flex-row align-items-center justify-content-start">
        <img src="/build-a-bot-logo.png" alt="robot logo">
        <nav class="ml-5">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/buildView"> Build </RouterLink>
            <RouterLink to="cartView"> Carrinho </RouterLink>
            <img id="flag" :src="flag" @click="change">
        </nav>
    </header>

</template>

<style lang="scss">

header{
    height: 5rem;
    width: 40rem;
    img{
        margin-left: 4rem;
        height: 4rem;
    }
    a{
        text-decoration: none;
        font-size: 1.5rem;
        color: var(--app-dark-text-color);
        margin-left: 5px;
    }
    .router-link-exact-active{
        font-weight: bold;
    }
}

</style>
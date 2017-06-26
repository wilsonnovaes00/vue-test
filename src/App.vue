<template>
 <div id="app">
 <meu-menu></meu-menu>
 <router-view></router-view>
 </div>
                    
</template>

<script>
import Menu from './components/shared/menu/Menu.vue';

export default {
    components: {
        'meu-menu' : Menu
    }
}

</script>

<style>

</style>
<template>
    <div>
        <list-pokemons :pokemons="pokemons" />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'   
    import ListPokemons from '~/components/ListPokemons.vue'

    export default Vue.extend({
        components: { 
            ListPokemons 
        },

        data() {
            return {
                pokemons: []
            };
        },

        async asyncData({$axios}) {
            const pokemons = (await $axios.get('/buscar')).data
            return { pokemons }
        },
  
    })
</script>

<style lang="scss">
    
</style>

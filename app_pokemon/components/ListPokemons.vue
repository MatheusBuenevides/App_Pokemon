
<template>
    <div>
        <div v-for="(pokemon,index) in pokemons" :key="pokemon.name" class="content-wrapper">
            <div class="content">
                <p>{{pokemon.name}}</p>
                <nuxt-link :to="`/pokemon/${index+1}`" class="btn-primary ">
                    Detalhes
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content-wrapper{
        display: flex;
        justify-content: center;
    }
    .content{
        display: flex;
        justify-content: space-between;
        width: 20%;
        align-items: center;
        padding: 10px 0;
    }
    p{
        text-transform: capitalize;
    }
</style>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        props: {
            pokemons: Array
        },

    })
</script>
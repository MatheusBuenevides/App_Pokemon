
<template>
    <div>
        <div v-for="(pokemon,index) in pokemons" :key="pokemon.name" class="content-wrapper">
            <div class="content">
                <p>{{pokemon.name}}</p>
                <button>{{index}}</button>
                <p>oi</p>
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
        width: 15%;
        align-items: center;
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
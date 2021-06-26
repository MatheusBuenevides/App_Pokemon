<template>
    <div>
        <h4>{{pokemon.name}}</h4>
        <p>Weight: {{pokemon.weight}}</p>
        <p>Height: {{pokemon.height}}</p>
        
        <nuxt-link :to="`/pokemon`">
            Voltar
        </nuxt-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pokemon: []
        };
    },

    async asyncData({$axios, params}) {
        const pokemon = (await $axios.get(`/buscar/${params.id}`)).data
        return { pokemon }
    },
}
</script>

<style>

</style>

<template>
    <div>
        <div v-for="(pokemon,index) in pokemons" :key="pokemon.name">
            <div class="">
                <p>{{pokemon.name}}</p>
                <button @click="detailsPokemon(index+1)">Detalhes</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ListPokemons',
    data () {
        return {
        pokemons: null
        }
    },
    mounted (){
        axios
        .get(process.env.BASE_URL)
        .then(response => (this.pokemons = response.data)) 
    },
    methods: {
        detailsPokemon(id){
            this.$router.push(`/detalhes/${id}`)
        }
    },
}
</script>
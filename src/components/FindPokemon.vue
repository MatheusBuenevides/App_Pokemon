
<template>
    <div>
        <h4>{{pokemon.name}}</h4>
        <p>Weight: {{pokemon.weight}}</p>
        <p>Height: {{pokemon.height}}</p>
        
        <button @click="returnHome">Voltar</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'FindPokemons',
    data () {
        return {
        pokemon: null
        }
    },
    mounted () {
        this.getIdPokemon()
        console.log(process.env.BASE_URL);
    },
    methods: {
        getIdPokemon(){
            const {id} = this.$route.params;
            this.getDados(id);
        },
        getDados(id){
            axios
            .get(process.env.BASE_URL+ id)
            .then(response => (this.pokemon = response.data))
            
        },
        returnHome(){
            this.$router.push(`/`)
        }
    },
}
</script>
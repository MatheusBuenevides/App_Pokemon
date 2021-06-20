
<template>
    <div>
        <div v-for="(pokemon,index) in pokemons" :key="pokemon.name">
            <div class="">
                <p>{{pokemon.name}}</p>
                <primary-button :id="index"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import PrimaryButton from './buttons/PrimaryButton.vue';

export default {
  components: { PrimaryButton },
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
    
}
</script>
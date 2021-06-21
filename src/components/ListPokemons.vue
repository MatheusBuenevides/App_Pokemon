
<template>
    <div>
        <div v-for="(pokemon,index) in pokemons" :key="pokemon.name" class="content-wrapper">
            <div class="content">
                <p>{{pokemon.name}}</p>
                <primary-button :id="index"/>
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
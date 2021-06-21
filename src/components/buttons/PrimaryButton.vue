<template>
    <button @click="detailsPokemon()">{{title}}</button>
</template>

<style scoped>
    button{
        height: 30px;
        border: none;
        background: #76D7C4;
        border-radius: 4px;
        border: solid 1px #76D7C4;
        
    }

    button:hover{
        background-color: #16A085;
        border:solid 1px #76D7C4;
    }
</style>

<script>
    export default {
        name: 'PrimaryButton',
        props: {
            title: {
                type: String,
                required: false,
                default: 'Detalhes'
            },
            id:{
                type: [Number, String],
                required: true
            }
        },
        methods: {
            detailsPokemon(){
                this.$router.push(`/detalhes/${this.id+1}`)
            }   
        }
    }
</script>
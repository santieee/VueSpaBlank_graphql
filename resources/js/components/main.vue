<template>
  <v-layout justify-space-around>
    <v-icon large color="green darken-2">business</v-icon>
   <v-btn class="ma-2" color="primary" dark @click="ch">Hello World!
        <v-icon dark right>check_circle</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
import gql from 'graphql-tag'
    export default {
        data(){
            return{
               user: ''
            }
        },
        mounted(){
        },
        methods:{
          ch(){
            axios.post("/graphql", {
              query: "query{user(id: 2){id name}}"})
            .then((res)=>console.log(res.data.data.user))
          }
        },
        apollo: {
          user: gql`query{
            user(id: 2){
              id
              name
            }
          }`
        },
    }
</script>

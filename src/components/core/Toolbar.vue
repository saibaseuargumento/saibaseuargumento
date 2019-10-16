

<template functional>
  <v-toolbar app clipped-left class="elevation-2" height="70px">
    <v-toolbar-title>
      <v-toolbar-side-icon v-on:click="listeners.click"></v-toolbar-side-icon>
    </v-toolbar-title>
     <v-img 
        src="../../assets/imagem1.png"
        aspect-ratio="1"
        max-width="500"
        max-height="300"
      >
      </v-img>
    <v-spacer></v-spacer>
  </v-toolbar>
</template> 

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Toolbar extends Vue {}
</script> 





<template>
  <v-app>
    <navigation-drawer class="mt-0" :toggle="drawer" v-on:update-viewer="updateViewer" />
    <toolbar v-on:click="drawer = !drawer" />
    <v-content class="pt-0">
      <v-container fluid>
        <Calculator />
      </v-container>
    </v-content>
  </v-app>
</template> 

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationDrawer from './core/NavigationDrawer.vue';
import Toolbar from './core/Toolbar.vue';
import Calculator from './content/Calculator.vue';

@Component({
  components: { NavigationDrawer, Toolbar, Calculator },
  })
export default class AppNavigation extends Vue {
  private drawer: boolean;
  private page: string;

  constructor() {
    super();
    this.drawer = true;
    this.page = 'calculadora';
  }

  private updateViewer(data: string) {
    this.page = data;
  }
}
</script>


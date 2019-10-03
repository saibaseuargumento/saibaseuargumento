<template >
  <v-navigation-drawer v-model="drawer" clipped absolute app>
    <v-list>
      <v-list-tile @click="updateViewer(0)">
        <v-list-tile-action>
          <v-icon>check_circle</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 0}, 'item-title' ]">Calculadora PAS</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template> 

<script lang="ts">
import { Vue, Emit, Prop, Component } from 'vue-property-decorator';

@Component
export default class NavigationDrawer extends Vue {
  private selectedIndex: number;

  @Prop() private toggle!: boolean;

  @Emit('update-viewer') private updateViewer(selectedIndex: number): string {
    const js = ['calculadora'];
    this.selectedIndex = selectedIndex;
    return js[selectedIndex];
  }
  constructor() {
    super();
    this.selectedIndex = 0;
  }
  get drawer(): boolean {
    return this.toggle;
  }
  set drawer(value: boolean) {}
}
</script>


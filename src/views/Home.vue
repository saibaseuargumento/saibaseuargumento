<template>
  <div class="home">
    <AppNavigation />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppNavigation from '@/components/AppNavigation.vue'; // @ is an alias to /src

@Component({
  components: {
    AppNavigation,
  },
})
export default class Home extends Vue {}
</script>

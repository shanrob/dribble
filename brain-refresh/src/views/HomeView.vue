<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MyComponent msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MyComponent from "@/components/MyComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    MyComponent,
  },
})
export default class HomeView extends Vue {}
</script>

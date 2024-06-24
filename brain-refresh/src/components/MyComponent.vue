<template>
  <div class="my-component">
    <h1>Shannon's test component</h1>
    <p>{{ catFacts }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FetchService from "../services/FetchService";

const resourceService = new FetchService();

@Options({
  props: {
    msg: String,
  },
  data() {
    return {
      catFacts: "",
    };
  },
  methods: {
    async getCatFacts(): Promise<string> {
      const cats = await resourceService.fetchData();
      return cats;
    },
  },
  async mounted() {
    this.catFacts = await this.getCatFacts();
  },
})
export default class MyComponent extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

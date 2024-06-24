<template>
  <div class="my-component">
    <h1>Shannon's test component</h1>
    <div class="loader" v-if="numberOfCatFacts === 0">
      <img alt="loader" src="../assets/Spinner-2.gif" />
    </div>
    <ul>
      <li v-for="(cat, index) in catFacts" i :key="index">{{ cat }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Component } from "vue-property-decorator"
import FetchService from "../services/FetchService";

const resourceService = new FetchService();

@Component({})

@Options({
  props: {
    msg: String,
  },
  data() {
    return {
      catFacts: [],
    };
  },
  methods: {
    async getCatFacts(): Promise<Array<string>> {
      let catFact = ["Unable to retrieve cat facts"];
      try {
        catFact = await resourceService.fetchData();
      } catch (error) {
        console.log(`Error: ${error}`);
      }
      return catFact;
    },
  },
  computed: {
    numberOfCatFacts(): number {
      return this.catFacts.length;
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
.my-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h3 {
  margin: 40px 0 0;
}

ul {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 600px;
}

li {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 1px 2px 3px 4px rgba(20, 20, 20, 0.2);
  border-radius: 3px;
}

a {
  color: #42b983;
}
</style>

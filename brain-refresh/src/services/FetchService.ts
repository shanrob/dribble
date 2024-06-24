import axios from "axios";

export default class FetchService {
  async fetchData(): Promise<Array<string>> {
    const factsList = [];
    for (let i = 0; i < 10; i++) {
      const tempCatFact = await axios.get("https://catfact.ninja/fact");
      factsList.push(tempCatFact.data.fact);
    }
    return factsList;
  }
}

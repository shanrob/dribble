import axios from "axios";

export default class FetchService {
  async fetchData(): Promise<string> {
    const response = await axios.get("https://catfact.ninja/fact");
    return response.data.fact;
  }
}

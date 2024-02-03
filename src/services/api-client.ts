import axios from "axios";
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7bf4cf23208b414fa288f1ca724c7422'
  }
})
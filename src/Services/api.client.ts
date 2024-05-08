import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8d24d47815b0472883f484c83605c801",
  },
});

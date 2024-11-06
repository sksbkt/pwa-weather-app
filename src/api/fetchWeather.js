import axios from "axios";
import { API_KEY, API_URL } from "../utils/variables";
export const fetchWeather = async (query) => {
  try {
    const { data } = await axios.get(API_URL, {
      params: {
        q: query,
        units: "metric",
        APPID: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

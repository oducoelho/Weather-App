import axios from "axios";

export const api = axios.create({
  baseURL: "http://api.weatherapi.com/v1/current.json?key=09d757c0c16149f391c12609232102&q=",
});
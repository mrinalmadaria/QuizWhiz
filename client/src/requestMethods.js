import axios from "axios";

const BASE_URL = "https://quizwhiz-5l3l.onrender.com";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});


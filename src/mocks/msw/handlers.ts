import { http, HttpResponse } from "msw";
import poolsMocks from "../poolsMocks";

const apiURL = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiURL}/pools`, () => HttpResponse.json(poolsMocks)),
];

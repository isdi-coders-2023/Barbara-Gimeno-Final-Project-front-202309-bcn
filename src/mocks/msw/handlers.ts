import { http, HttpResponse } from "msw";
import poolsMocks from "../poolsMocks";

const apiUrl = import.meta.env.VITE_API_URL;
const mock = poolsMocks;

export const handlers = [
  http.get(`${apiUrl}/pools`, async () => {
    return HttpResponse.json({ pools: mock });
  }),
];

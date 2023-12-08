import { http, HttpResponse } from "msw";
import poolsMocks from "../poolsMocks";

const apiUrl = import.meta.env.VITE_API_URL;
const mock = poolsMocks;

export const handlers = [
  http.get(`${apiUrl}/pools`, async () => {
    return HttpResponse.json({ pools: mock });
  }),

  http.delete(`${apiUrl}/pools/6565cdaa1d9be1bc1e6af452`, () => {
    return HttpResponse.json({});
  }),
];

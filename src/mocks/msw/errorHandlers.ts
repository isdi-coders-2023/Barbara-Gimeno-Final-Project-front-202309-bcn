import { http, HttpResponse } from "msw";

const apiURL = import.meta.env.VITE_API_URL;

export const errorHandlers = [
  http.get(`${apiURL}/pools`, () => HttpResponse.error()),
  http.delete(`${apiURL}/pools/6565cdaa1d9be1bc1e6af452`, () =>
    HttpResponse.error(),
  ),

  http.post(`${apiURL}/pools/create`, () => HttpResponse.error()),
  http.patch(`${apiURL}/pools/6571d83d81f419ec2f6fc543`, () =>
    HttpResponse.error(),
  ),
];

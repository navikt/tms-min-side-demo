import { mikrofrontendBundle } from "../../../../mock/data/microfrontend/microfrontend-oversikt.ts";

export const GET: APIRoute = async function get({ params, request }) {
  return new Response(mikrofrontendBundle("Microfrontend", "5vh"), {
    headers: {
      "Content-Type": "text/javascript",
    },
    status: 200
  });
};

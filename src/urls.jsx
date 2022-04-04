import { getEnvironment } from "./api/environment";

const MIN_SIDE = {
  local: "http://localhost:3000",
  development: "https://www.dev.nav.no/minside",
  production: "https://www.intern.nav.no/tms-min-side-proxy",
};

const MIN_SIDE_PROXY_URL = {
  local: "http://localhost:3000",
  development: "https://person.dev.nav.no/tms-min-side-proxy",
  production: "https://person.intern.nav.no/tms-min-side-proxy",
};

const MIN_SIDE_TOPP_URL = {
  local: "http://localhost:3000/tms-min-side-topp/bundle.js",
  development: "https://person.dev.nav.no/tms-min-side-topp/bundle.js",
  production: "https://person.nav.no/tms-min-side-topp/bundle.js",
};

const MIN_SIDE_BUNN_URL = {
  local: "http://localhost:3000/tms-min-side-bunn/bundle.js",
  development: "https://person.dev.nav.no/tms-min-side-bunn/bundle.js",
  production: "https://person.nav.no/tms-min-side-bunn/bundle.js",
};

export const minSideToppUrl = MIN_SIDE_TOPP_URL[getEnvironment()];
export const minSideBunnUrl = MIN_SIDE_BUNN_URL[getEnvironment()];
export const minSideUrl = MIN_SIDE_BUNN_URL[getEnvironment()];
export const minSideProxyUrl = MIN_SIDE_PROXY_URL[getEnvironment()];

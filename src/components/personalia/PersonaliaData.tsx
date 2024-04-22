import useSWRImmutable from "swr/immutable";
import { navnUrl } from "./personaliaUrls";
import { fetcher } from "@utils/api.client.ts";
import { setIsError } from "../../store/store.ts";
import style from "./Personalia.module.css";

interface Personalia {
  navn: string;
  ident: string;
}

const PersonaliaData = () => {
  const personalia = {
    "navn": "Navn Navnesen",
    "ident": "1234"
  }
  const error = false;

  if (error) {
    setIsError();
  }

  return (
    <span className={style.navn}>{personalia?.navn ? personalia.navn.toLowerCase() : personalia?.ident}</span>
  );
};

export default PersonaliaData;

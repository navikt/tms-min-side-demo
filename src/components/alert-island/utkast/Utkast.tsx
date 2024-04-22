import useSWRImmutable from "swr/immutable";
import UtkastIkon from "./UtkastIkon";
import { fetcher } from "@utils/api.client.ts";
import { antallUtkastUrl, utkastUrl } from "./utkastUrls";
import type { Language } from "@language/language.ts";
import { text } from "@language/utkast.ts";
import { logEvent } from "@utils/amplitude.ts";
import { setIsError } from "../../../store/store.ts";
import style from "./Utkast.module.css";

interface Props {
  language: Language;
}

const Utkast = ({ language }: Props) => {
  const utkastAntall = {
    "antall": 2
  }
  const utkastLoading = false;
  const utkastError = false;  

  const antall = (utkastAntall ? utkastAntall?.antall : 0);
  const hasUtkast = antall > 0;
  const ingress = antall === 1 ? text.soknad[language] : text.soknader[language](antall);

  if (utkastLoading) {
    return null;
  }

  if (utkastError) {
    setIsError();
  }

  if (!hasUtkast) {
    return null;
  }

  return (
    <a href={utkastUrl} className={style.utkast} onClick={() => logEvent("utkast", "generell", "Utkast")}>
      <UtkastIkon />
      <div className={style.container}>
        <h3 className="navds-heading navds-heading--small">{text.utkast[language]}</h3>
        <p className="navds-body-long navds-body-long--small">
          {ingress}
        </p>
      </div>
    </a>
  );
}

export default Utkast;

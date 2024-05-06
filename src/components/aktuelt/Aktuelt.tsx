import { BodyShort } from "@navikt/ds-react";
import type { Language } from "@language/language.ts";
import { text } from "@language/aktuelt.ts"
import style from "./Aktuelt.module.css"
import { showPensjonskalkulatorMicrofrontendAtom } from "src/store/store";
import Pensjonskalkulator from "@components/demo-microfrontends/pensjonskalkulator/Pensjonskalkulator";
import { useStore } from "@nanostores/react";

interface Props {
  language: Language;
}

const Aktuelt = ({ language }: Props) => {

  const showPensjonskalkulator = useStore(showPensjonskalkulatorMicrofrontendAtom)
  
  return (
    <>
    {showPensjonskalkulator ?
    <div className={style.container}>
      <BodyShort as="h2" className={style["aktuelt"]} spacing>{text.aktuelt[language]}</BodyShort>
      <Pensjonskalkulator />
    </div> : null}
    </>
  );
};

export default Aktuelt;

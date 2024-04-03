import useSWRImmutable from "swr/immutable";
import { fetcher } from "@utils/api.client.ts";
import { microfrontendsUrl } from "@components/oversikt/urls.ts";
import { BodyShort } from "@navikt/ds-react";
import MicrofrontendWrapper from "@components/oversikt/MicrofrontendWrapper.tsx";
import { EnabledMicrofrontend } from "@components/oversikt/microfrontendTypes.tsx";
import type { Language } from "@language/language.ts";
import { text } from "@language/aktuelt.ts"
import style from "./Aktuelt.module.css"

interface Props {
  language: Language;
}

const Aktuelt = ({ language }: Props) => {
  const { data, isLoading } = useSWRImmutable({ path: microfrontendsUrl }, fetcher);

  const aktuelt = data?.aktuelt 

  if (isLoading || aktuelt == null || aktuelt?.length === 0)
    return null;
  
  return (
    <div className={style.container}>
      <BodyShort as="h2" className={style["aktuelt"]} spacing>{text.aktuelt[language]}</BodyShort>
      {aktuelt?.map((microfrontend : EnabledMicrofrontend) => <MicrofrontendWrapper key={microfrontend.microfrontend_id} manifestUrl={microfrontend.url}/>)}
    </div>
  );
};

export default Aktuelt;

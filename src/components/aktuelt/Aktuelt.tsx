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

  if (isLoading || data === null)
    return null;

  return (
    <div className={style.container}>
      <BodyShort className={style["aktuelt"]} size={"medium"} textColor={"subtle"}>{text.aktuelt[language]}</BodyShort>
      {data?.aktuelt?.map((microfrontend : EnabledMicrofrontend) => <MicrofrontendWrapper key={microfrontend.microfrontend_id} manifestUrl={microfrontend.url}/>)}
    </div>
  );
};

export default Aktuelt;

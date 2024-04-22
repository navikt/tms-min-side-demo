import useSWRImmutable from "swr/immutable";
import { PersonalizedContent } from "@components/oversikt/microfrontendTypes.tsx";
import { dinOversiktUrl } from "@components/oversikt/urls.ts";
import { fetcher, include } from "@utils/api.client.ts";
import { personalizedContentAtom, setIsError } from "../store/store.ts";
import { logMfEvent } from "@utils/amplitude.ts";
import ProduktProperties from "@components/oversikt/produktkort/ProduktProperties.tsx";
import { hasMicrofrontends } from "@utils/oversikt.ts";
import { useStore } from "@nanostores/react";

export const useOversikt = (produktProperties?: ProduktProperties[]) => {
  const personalizedContent = useStore(personalizedContentAtom);
  const hasProduktkort = (produktConfig?: ProduktProperties[]) => produktConfig !== undefined && produktConfig.length > 0;

  return (
    hasMicrofrontends(personalizedContent.microfrontends)
    || hasProduktkort(produktProperties)
    || personalizedContent?.oppfolgingContent
    || personalizedContent?.aiaStandard
    || personalizedContent?.meldekort
  );
};




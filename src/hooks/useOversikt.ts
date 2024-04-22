import { personalizedContentAtom } from "../store/store.ts";
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




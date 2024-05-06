import { meldekortAtom, personalizedContentAtom, showAapMicrofrontendAtom, showFamilieEfMicrofrontendAtom, showPleiepengerMicrofrontendAtom, showSyfoAktivitetskravMicrofrontendAtom, showSyfoDialogMicrofrontendAtom, showSyfoOppfolgingMicrofrontendAtom } from "../store/store.ts";
import ProduktProperties from "@components/oversikt/produktkort/ProduktProperties.tsx";
import { hasMicrofrontends } from "@utils/oversikt.ts";
import { useStore } from "@nanostores/react";

export const useOversikt = (produktProperties?: ProduktProperties[]) => {
  const personalizedContent = useStore(personalizedContentAtom);
  const hasProduktkort = (produktConfig?: ProduktProperties[]) => produktConfig !== undefined && produktConfig.length > 0;
  const showAap = useStore(showAapMicrofrontendAtom);
  const showFamilieEf = useStore(showFamilieEfMicrofrontendAtom)
  const showPleiepenger = useStore(showPleiepengerMicrofrontendAtom);
  const showAktivitetskrav = useStore(showSyfoAktivitetskravMicrofrontendAtom);
  const showDialog = useStore(showSyfoDialogMicrofrontendAtom);
  const showOppfolging = useStore(showSyfoOppfolgingMicrofrontendAtom);
  const showMeldekort = useStore(meldekortAtom);

  return (
    hasMicrofrontends(personalizedContent.microfrontends)
    || hasProduktkort(produktProperties)
    || personalizedContent?.oppfolgingContent
    || personalizedContent?.aiaStandard
    || personalizedContent?.meldekort
    || showAap
    || showFamilieEf
    || showPleiepenger
    || showAktivitetskrav
    || showDialog
    || showOppfolging
    || showMeldekort
  );
};




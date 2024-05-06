import { BodyShort } from "@navikt/ds-react";
import NyAiaStandardWrapper from "./arbeidssoker/NyAiaStandardWrapper.tsx";
import DialogVeileder from "./dialog-veileder/DialogVeileder";
import MeldekortWrapper from "./meldekort/MeldekortWrapper";
import { getProduktProperties } from "@utils/oversikt.ts";
import { produktText } from "./produktkort/ProduktText";
import Produktkort from "./produktkort/Produktkort";
import MicrofrontendWrapper from "./MicrofrontendWrapper";
import Aktivitetsplan from "./aktivitetsplan/Aktivitetsplan";
import {
  meldekortAtom,
  personalizedContentAtom,
  showAapMicrofrontendAtom,
  showFamilieEfMicrofrontendAtom,
  showPleiepengerMicrofrontendAtom,
  showSyfoAktivitetskravMicrofrontendAtom,
  showSyfoDialogMicrofrontendAtom,
  showSyfoOppfolgingMicrofrontendAtom,
} from "./../../store/store.ts";
import type { Language } from "@language/language.ts";
import { useOversikt } from "@hooks/useOversikt.ts";
import styles from "./DinOversikt.module.css";
import { useStore } from "@nanostores/react";
import AapMicrofrontend from "@components/demo-microfrontends/aap/AapMicrofrontend.tsx";
import FamilieEfMicrofrontend from "@components/demo-microfrontends/familie-ef/FamilieEfMicrofrontend.tsx";
import PleiepengerMicrofrontend from "@components/demo-microfrontends/pleiepenger/PleiepengerMicrofrontend.tsx";
import AktivitetskravMicrofrontend from "@components/demo-microfrontends/syfo-aktivitetskrav/AktivitetskravMicrofrontend.tsx";
import DialogMicrofrontend from "@components/demo-microfrontends/syfo-dialog/DialogMicrofrontend.tsx";
import OppfolgingMikrofrontend from "@components/demo-microfrontends/syfo-meroppfolging/OppfolgingMicrofrontend.tsx";
import MeldekortEtterregistrering from "@components/demo-microfrontends/meldekort/domain/meldekort-etterregistrering/MeldekortEtterregistrering.tsx";
import MeldekortReady from "@components/demo-microfrontends/meldekort/domain/meldekort-ready/MeldekortReady.tsx";
import Aia from "@components/demo-microfrontends/aia/Aia.tsx";

interface Props {
  language: Language;
}

const DinOversikt = ({ language }: Props) => {
  const personalizedContent = useStore(personalizedContentAtom);
  const produktProperties = getProduktProperties(language, personalizedContent);
  const shouldShowOversikt = useOversikt(produktProperties);
  const showAap = useStore(showAapMicrofrontendAtom);
  const showFamilieEf = useStore(showFamilieEfMicrofrontendAtom)
  const showPleiepenger = useStore(showPleiepengerMicrofrontendAtom);
  const showAktivitetskrav = useStore(showSyfoAktivitetskravMicrofrontendAtom);
  const showDialog = useStore(showSyfoDialogMicrofrontendAtom);
  const showOppfolging = useStore(showSyfoOppfolgingMicrofrontendAtom);
  const showMeldekort = useStore(meldekortAtom);

  if (!shouldShowOversikt) {
    return null;
  }

  if (shouldShowOversikt) {
    return (
      <div className={styles.oversiktContainer}>
        <BodyShort as="h2" spacing>
          {produktText.oversiktTittel[language]}
        </BodyShort>
        {personalizedContent?.brukNyAia && (
          <div className={styles.nyAia}>
            <NyAiaStandardWrapper />
          </div>
        )}
        {personalizedContent?.aiaStandard && <Aia />}
        <div className={styles.listeContainer}>
          {personalizedContent?.microfrontends?.map((mf) => (
            <MicrofrontendWrapper manifestUrl={mf.url} key={mf.microfrontend_id} />
          ))}
          {showAap && <AapMicrofrontend />}
          {showFamilieEf && <FamilieEfMicrofrontend />}
          {showPleiepenger && <PleiepengerMicrofrontend />}
          {showAktivitetskrav && <AktivitetskravMicrofrontend />}
          {showDialog && <DialogMicrofrontend />}
          {showOppfolging && <OppfolgingMikrofrontend />}
          {showMeldekort && (
            <>
              <MeldekortEtterregistrering /> 
              <MeldekortReady />
            </>
          )}
          {personalizedContent?.oppfolgingContent && (
            <>
              <DialogVeileder language={language} />
              <Aktivitetsplan language={language} />
            </>
          )}
          {produktProperties?.map((produktConfig) => (
            <Produktkort produktConfig={produktConfig} key={produktConfig.tittel} />
          ))}
        </div>
      </div>
    );
  }
};

export default DinOversikt;

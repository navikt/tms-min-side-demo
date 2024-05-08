import { EnabledMicrofrontend } from "@components/oversikt/microfrontendTypes.tsx";
import { BodyLong, Checkbox, CheckboxGroup, Heading, ExpansionCard } from "@navikt/ds-react";
import {
  aiaStandardAtom,
  meldekortAtom,
  oppfolgingContentAtom,
  setAiaStandardAtom,
  setMeldekortAtom,
  setMicrofrontendsAtom,
  setOppfolgingContentAtom,
  setPersonalizedContent,
  setProduktkortAtom,
  setShowAapMicrofrontend,
  setShowFamilieEfMicrofrontend,
  setShowPensjonskalkulatorMicrofrontendAtom,
  setShowPleiepengerMicrofrontend,
  setShowSyfoAktivitetskravMicrofrontendAtom,
  setShowSyfoDialogMicrofrontendAtom,
  setShowSyfoOppfolgingMicrofrontendAtom,
  showAapMicrofrontendAtom,
  showFamilieEfMicrofrontendAtom,
  showPensjonskalkulatorMicrofrontendAtom,
  showPleiepengerMicrofrontendAtom,
  showSyfoAktivitetskravMicrofrontendAtom,
  showSyfoDialogMicrofrontendAtom,
  showSyfoOppfolgingMicrofrontendAtom,
} from "../../store/store.ts";
import styles from "./DemoToggle.module.css";

const DemoToggle = () => {
  const handleMicrofrontendsChange = (val: EnabledMicrofrontend[]) => {
    setMicrofrontendsAtom(val);
    setPersonalizedContent();
  };

  const handleMeldekortChange = () => {
    const meldekort = meldekortAtom.get();
    setMeldekortAtom(!meldekort);
    setPersonalizedContent();
  };

  const handleOppfolgingContentChange = () => {
    const oppfolgingContent = oppfolgingContentAtom.get();
    setOppfolgingContentAtom(!oppfolgingContent);
    setPersonalizedContent();
  };

  const handleAiaStandardAtomChange = () => {
    const aiaStandard = aiaStandardAtom.get();
    setAiaStandardAtom(!aiaStandard);
    setPersonalizedContent();
  };
  const handleProduktkortChange = (val: string[]) => {
    setProduktkortAtom(val);
    setPersonalizedContent();
  };

  const handleAapChange = () => {
    const aap = showAapMicrofrontendAtom.get();
    setShowAapMicrofrontend(!aap);
  };

  const handleFamilieEfChange = () => {
    const familieEf = showFamilieEfMicrofrontendAtom.get();
    setShowFamilieEfMicrofrontend(!familieEf);
  };

  const handlePleiepengerChange = () => {
    const pleiepenger = showPleiepengerMicrofrontendAtom.get();
    setShowPleiepengerMicrofrontend(!pleiepenger);
  };

  const handleSyfoAktivitetskravChange = () => {
    const aktivitetskrav = showSyfoAktivitetskravMicrofrontendAtom.get();
    setShowSyfoAktivitetskravMicrofrontendAtom(!aktivitetskrav);
  };

  const handleSyfoDialogChange = () => {
    const dialog = showSyfoDialogMicrofrontendAtom.get();
    setShowSyfoDialogMicrofrontendAtom(!dialog);
  };

  const handleSyfoOppfolgingChange = () => {
    const oppfolging = showSyfoOppfolgingMicrofrontendAtom.get();
    setShowSyfoOppfolgingMicrofrontendAtom(!oppfolging);
  };

  const handlePensjonskalkulatorChange = () => {
    const pensjonskalkulator = showPensjonskalkulatorMicrofrontendAtom.get();
    setShowPensjonskalkulatorMicrofrontendAtom(!pensjonskalkulator);
  };

  return (
    <>
      <div className={styles.heading}>
        <Heading level="2" size="large">Dette er en demo av Min side</Heading>
        <BodyLong size="large"><a href="https://www.intern.dev.nav.no/minside">Gå til dev versjonen av Min side</a></BodyLong>
      </div>
      <ExpansionCard aria-label="Demo med bare tittel">
        <ExpansionCard.Header>
          <ExpansionCard.Title>Nedtrekksliste for valg av komponenter</ExpansionCard.Title>
        </ExpansionCard.Header>
        <ExpansionCard.Content>
          <div className={styles.wrapper}> 
            <div className={styles.microfrontendToggles}>
              <CheckboxGroup legend="AiA" onChange={handleAiaStandardAtomChange}>
                <Checkbox value="AiA">AiA</Checkbox>
              </CheckboxGroup>
              <CheckboxGroup legend="Meldekort" onChange={handleMeldekortChange}>
                <Checkbox value="Meldekort">Meldekort</Checkbox>
              </CheckboxGroup>
              <CheckboxGroup legend="AAP" onChange={handleAapChange}>
                <Checkbox value="AAP">AAP</Checkbox>
              </CheckboxGroup>
              <CheckboxGroup legend="Familie EF" onChange={handleFamilieEfChange}>
                <Checkbox value="FamilieEF">Familie (Enslig forsørger)</Checkbox>
              </CheckboxGroup>
            </div>
            <div className={styles.microfrontendToggles}>
              <CheckboxGroup legend="Pleiepenger" onChange={handlePleiepengerChange}>
                <Checkbox value="Pleiepenger">Pleiepenger</Checkbox>
              </CheckboxGroup>
              <CheckboxGroup legend="Syfo Aktivitetskrav" onChange={handleSyfoAktivitetskravChange}>
                <Checkbox value="SyfoAktivitetskrav">Syfo Aktivitetskrav</Checkbox>
              </CheckboxGroup>
              <CheckboxGroup legend="Syfo Dialog" onChange={handleSyfoDialogChange}>
                <Checkbox value="SyfoDialog">Syfo Dialog</Checkbox>
              </CheckboxGroup>
              <CheckboxGroup legend="Syfo Oppfølging" onChange={handleSyfoOppfolgingChange}>
                <Checkbox value="SyfoOppfolging">Syfo Oppfølging</Checkbox>
              </CheckboxGroup>
            </div>
            <CheckboxGroup legend="Dialog med veileder og Aktivitetsplan" onChange={handleOppfolgingContentChange}>
              <Checkbox value="OppfolgingContent">Dialog med veileder og Aktivitetsplan</Checkbox>
            </CheckboxGroup>
            <CheckboxGroup legend="Pensjonskalkulator" onChange={handlePensjonskalkulatorChange}>
              <Checkbox value="Pensjonskalkulator">Pensjonskalkulator</Checkbox>
            </CheckboxGroup>
            <CheckboxGroup legend="Produktkort" onChange={handleProduktkortChange}>
              <Checkbox value="DAG">Dagpenger</Checkbox>
              <Checkbox value="FOR">Foreldrepenger</Checkbox>
              <Checkbox value="HJE">Hjelpemidler</Checkbox>
              <Checkbox value="KOM">Sosialhjelp</Checkbox>
              <Checkbox value="PEN">Pensjon</Checkbox>
              <Checkbox value="UFO">Uføretrygd</Checkbox>
              <Checkbox value="SYK">Sykefravær</Checkbox>
            </CheckboxGroup>
          </div>
        </ExpansionCard.Content>
      </ExpansionCard>
    </>
  );
};

export default DemoToggle;

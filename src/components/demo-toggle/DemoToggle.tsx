import { EnabledMicrofrontend } from "@components/oversikt/microfrontendTypes.tsx";
import { Checkbox, CheckboxGroup } from "@navikt/ds-react";
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

  return (
    <div className={styles.wrapper}>
      <CheckboxGroup legend="AiA" onChange={handleAiaStandardAtomChange}>
        <Checkbox value="AiA">AiA</Checkbox>
      </CheckboxGroup>
      <CheckboxGroup legend="Meldekort" onChange={handleMeldekortChange}>
        <Checkbox value="Meldekort">Meldekort</Checkbox>
      </CheckboxGroup>
      <CheckboxGroup legend="Microfrontends" onChange={handleMicrofrontendsChange}>
        <Checkbox value={{ microfrontend_id: "aap", url: "http://localhost:3000/aap/bundle.js" }}>AAP</Checkbox>
        <Checkbox value={{ microfrontend_id: "syfo-dialog", url: "http://localhost:3000/syfo-dialog/bundle.js" }}>Syfo-dialog</Checkbox>
        <Checkbox value={{ microfrontend_id: "pensjon", url: "http://localhost:3000/pensjon/bundle.js" }}>Pensjon</Checkbox>
      </CheckboxGroup>
      <CheckboxGroup legend="Dialog med veileder og Aktivitetsplan" onChange={handleOppfolgingContentChange}>
        <Checkbox value="OppfolgingContent">Dialog med veileder og Aktivitetsplan</Checkbox>
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
  );
};

export default DemoToggle;

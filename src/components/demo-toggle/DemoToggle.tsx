import { Checkbox, CheckboxGroup } from "@navikt/ds-react";
import styles from "./DemoToggle.module.css";
import { EnabledMicrofrontend } from "@components/oversikt/microfrontendTypes.tsx";
import { meldekortAtom, setMeldekortAtom, setMicrofrontendsAtom, setPersonalizedContent } from "../../store/store.ts";
import { useState } from "react";

const DemoToggle = () => {
  const handleMicrofrontendsChange = (val: EnabledMicrofrontend[]) => {
    setMicrofrontendsAtom(val)
    setPersonalizedContent();
  }

  const handleMeldekortChange = () => {
    const meldekort = meldekortAtom.get()
    setMeldekortAtom(!meldekort);
    setPersonalizedContent();
  }

  return(
    <div className={styles.wrapper}>
      <CheckboxGroup legend="Microfrontends" onChange={handleMicrofrontendsChange}>
        <Checkbox value={{microfrontend_id: "aap", url: "http://localhost:3000/bundle.js"}}>AAP</Checkbox>
        <Checkbox value={{microfrontend_id: "dagpenger", url: "http://localhost:3000/bundle.js"}}>Dagpenger</Checkbox>
        <Checkbox value={{microfrontend_id: "sykefravær", url: "http://localhost:3000/bundle.js"}}>Sykefrvær</Checkbox>
      </CheckboxGroup>
      <CheckboxGroup legend="Meldekort" onChange={handleMeldekortChange}>
        <Checkbox value="Meldekort">Meldekort</Checkbox>
      </CheckboxGroup>
    </div>
  )
}

export default DemoToggle;

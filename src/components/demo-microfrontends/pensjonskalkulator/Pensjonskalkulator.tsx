import { BodyLong, Heading } from "@navikt/ds-react";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import styles from "./Pensjonskalkulator.module.css";

const Pensjonskalkulator = () => {
  return (
    <a className={styles.container} >
      <div className={styles.ikonOgTekstContainer}>
        <div>
          <Heading size="small" level="2">
            Pensjonskalkulator
          </Heading>
          <BodyLong size="medium">Sjekk vår pensjonskalkulator for å se hvor mye du kan få i pensjon.</BodyLong>
        </div>
      </div>
      <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
    </a>
  );
};

export default Pensjonskalkulator;
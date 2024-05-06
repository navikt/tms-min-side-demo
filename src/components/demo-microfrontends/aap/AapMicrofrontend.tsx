import { ChevronRightIcon } from "@navikt/aksel-icons";
import { BodyLong, Heading } from "@navikt/ds-react";
import { Piktogram } from "./Piktogram";
import styles from "./AapMicrofrontend.module.css"

const AapMicrofrontend = () => {
  return(
    <div className={styles.container}>
      <div className={styles.ikonOgTekstContainer}>
          <div><Piktogram /></div>
          <div>
            <Heading size="small" level="2">
              AAP (Arbeidsavklaringspenger)
            </Heading>
            <BodyLong size="medium">Oversikt over saken din</BodyLong>
          </div>
        </div>
        <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
    </div>
  )
}

export default AapMicrofrontend;
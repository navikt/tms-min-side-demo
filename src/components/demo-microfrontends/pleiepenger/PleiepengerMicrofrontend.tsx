import { ChevronRightIcon } from "@navikt/aksel-icons";
import { BodyLong, Heading } from "@navikt/ds-react";
import styles from "./PleiepengerMicrofrontend.module.css"
import PleiepengerIcon from "./PleiepengerIcon";

const PleiepengerMicrofrontend = () => {
  return(
    <div className={styles.container}>
      <div className={styles.ikonOgTekstContainer}>
          <div><PleiepengerIcon /></div>
          <div>
            <Heading size="small" level="2">
              Dine pleiepenger
            </Heading>
            <BodyLong size="medium">Naviger til dine pleiepenger</BodyLong>
          </div>
        </div>
        <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
    </div>
  )
}

export default PleiepengerMicrofrontend;
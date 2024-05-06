import { ChevronRightIcon } from "@navikt/aksel-icons";
import { BodyLong, Heading } from "@navikt/ds-react";
import styles from "./FamilieEfMicrofrontend.module.css"
import { EnsligForsørgerIcon } from "./EnsligForsorgerIcon";

const FamilieEfMicrofrontend = () => {
  return(
    <div className={styles.container}>
      <div className={styles.ikonOgTekstContainer}>
          <div><EnsligForsørgerIcon /></div>
          <div>
            <Heading size="small" level="2">
              Stønad til enslig mor eller far
            </Heading>
            <BodyLong size="medium">Oversikt over saken din</BodyLong>
          </div>
        </div>
        <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
    </div>
  )
}

export default FamilieEfMicrofrontend;
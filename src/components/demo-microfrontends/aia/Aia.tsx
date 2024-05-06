import { ChevronRightIcon } from "@navikt/aksel-icons";
import { BodyLong, Heading } from "@navikt/ds-react";
import styles from "./Aia.module.css"

const AiaMicrofrontend = () => {
  return(
    <div className={styles.container}>
      <Heading size="small" level="2">
        Arbeidssøker innhold med info fra regisstrering med mer
      </Heading>
    </div>
  )
}

export default AiaMicrofrontend;
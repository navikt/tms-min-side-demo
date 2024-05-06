import { Alert, BodyLong } from "@navikt/ds-react";
import LinkCard from "../../components/card/LinkCard";
import styles from "../../components/card/LinkCard.module.css";


const MeldekortEtterregistrering = () => {
  return (
    <LinkCard warning={true}>
      <>
        <BodyLong className={styles.text}>Du har fått vedtak for en periode du ikke har sendt meldekort.</BodyLong>
        <Alert inline variant="warning" size="small">
          Du må sende 2 meldekort
        </Alert>
      </>
    </LinkCard>
  );
};

export default MeldekortEtterregistrering;
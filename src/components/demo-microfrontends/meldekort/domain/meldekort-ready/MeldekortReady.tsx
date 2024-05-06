import { Alert, BodyLong } from "@navikt/ds-react";
import LinkCard from "../../components/card/LinkCard";
import styles from "../../components/card/LinkCard.module.css";
import { getLongDateFormat } from "@components/demo-microfrontends/syfo-dialog/utils/dateUtils";

const MeldekortReady = () => {

  return (
    <LinkCard>
      <>
        <BodyLong className={styles.text}>Send inn meldekort</BodyLong>
        <Alert inline variant="info" size="small">
          Siste frist før trekk: {getLongDateFormat("2023-04-13T14:36:13Z")}
        </Alert>
      </>
    </LinkCard>
  );
};

export default MeldekortReady;
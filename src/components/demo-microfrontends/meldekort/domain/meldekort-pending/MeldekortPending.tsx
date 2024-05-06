import { BodyLong } from "@navikt/ds-react";
import LinkCard from "../../components/card/LinkCard";
import styles from "../../components/card/LinkCard.module.css";
import { getLongDateFormat } from "@components/demo-microfrontends/syfo-dialog/utils/dateUtils";

const MeldekortPending = () => {

  return (
    <LinkCard>
      <BodyLong className={styles.text}>Neste meldekort kan sendes fra {getLongDateFormat("2023-04-06T14:36:13Z")}</BodyLong>
    </LinkCard>
  );
};

export default MeldekortPending;
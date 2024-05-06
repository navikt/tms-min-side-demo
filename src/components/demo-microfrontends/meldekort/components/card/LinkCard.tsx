import { ChevronRightIcon, ExclamationmarkTriangleFillIcon } from "@navikt/aksel-icons";
import styles from "./LinkCard.module.css";
import { ReactElement } from "react";
import { Heading } from "@navikt/ds-react";

interface Props {
  warning?: boolean;
  children: ReactElement;
}

const LinkCard = ({ warning, children }: Props) => {

  return (
    <a className={styles.container}>
      <div className={styles.headerContainer}>
        <Heading size="small" level="2">
          Meldekort
        </Heading>
        <div className={styles.chevronContainer}>
          {warning && <ExclamationmarkTriangleFillIcon className={styles.warning} aria-hidden fontSize="24px" />}
          <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
        </div>
      </div>
      <div className={styles.contentContainer}>{children}</div>
    </a>
  );
};

export default LinkCard;
import { BodyShort } from "@navikt/ds-react/cjs/typography/BodyShort.js";
import { BodyLong } from "@navikt/ds-react/cjs/typography/BodyLong.js";
import { Skeleton } from "@navikt/ds-react/cjs/skeleton";
import useSWRImmutable from "swr/immutable";
import Dokument from "../dokument/Dokument.tsx";
import { mineSakerApiSisteUrl, dokumentarkivUrl } from "../dokumentarkivUrls.ts";
import { fetcher, include } from "@utils/api.client.ts";
import type { Language } from "@language/language.ts";
import { text } from "@language/dokumentarkiv.ts";
import { logEvent } from "@utils/amplitude.ts";
import { Heading } from "@navikt/ds-react";
import { setIsError } from "../../../store/store.ts";
import styles from "./Dokumenter.module.css";

interface Dokument {
  navn: string;
  kode: string;
  sistEndret: string;
  detaljvisningUrl: string;
}

interface Dokumenter {
  sakstemaer: Dokument[];
}

interface Props {
  language: Language;
}

const Dokumenter = ({ language }: Props) => {

  const saker = {
    "sakstemaer": [
      {
        "navn": "Serviceklager",
        "kode": "SER",
        "sistEndret": "2023-05-25T12:41:02Z",
        "detaljvisningUrl": "https://www.intern.dev.nav.no/mine-saker/tema/SER"
      },
      {
        "navn": "Arbeidsavklaringspenger",
        "kode": "AAP",
        "sistEndret": "2023-04-20T11:33:51Z",
        "detaljvisningUrl": "https://aap-innsyn.dev.nav.no/aap/mine-aap"
      }
    ]
  }

  const isLoading = false;
  const error = false;

  const hasDokumenter = saker && saker.sakstemaer.length > 0;
  
  const spraakTilpassetDokumentarkivUrl = (language: Language) => {
    if(language === "en") {
      return dokumentarkivUrl + "/en";
    }
    if(language === "nn") {
      return dokumentarkivUrl + "/nn";
    }
    return dokumentarkivUrl;
  }

  if (isLoading) {
    return (
      <div className={styles.dokumentContainer}>
        <BodyShort as="h2" spacing={true}>
          {text.heading[language]}
        </BodyShort>
        <div className={styles.skeletonContainer}>
          <Skeleton className={styles.dokumentSkeleton} width={272} height={20} />
          <Skeleton className={styles.dokumentSkeleton} width={199} height={20} />
        </div>
        <div className={styles.skeletonContainer}>
          <Skeleton className={styles.dokumentSkeleton} width={109} height={20} />
          <Skeleton className={styles.dokumentSkeleton} width={199} height={20} />
        </div>
        <div className={styles.skeletonContainer}>
          <Skeleton className={styles.dokumentSkeleton} width={48} height={20} />
        </div>
      </div>
    );
  }

  if (error) {
    setIsError();
  }

  return (
    <>
      {hasDokumenter ? (
        <div className={styles.dokumentContainer}>
          <BodyShort as="h2" spacing={true}>
            {text.heading[language]}
          </BodyShort>
          {saker?.sakstemaer.slice(0, 2).map((dokument: Dokument) => (
            <Dokument
              key={dokument.kode}
              kode={dokument.kode}
              href={dokument.detaljvisningUrl}
              sakstema={dokument.navn}
              sistEndret={dokument.sistEndret}
              language={language}
            />
          ))}
          <BodyShort className={styles.linkContainer}>
            <a
              className={styles.link}
              href={spraakTilpassetDokumentarkivUrl(language)}
              onClick={() => logEvent("dokumentarkiv", "generell", "Gå til dokumentarkivet")}
            >
              {text.dokumentarkiv[language]}
            </a>
          </BodyShort>
        </div>
      ) : (
        <div className={styles.dokumentContainer}>
          <BodyShort as="h2" spacing={true}>
            {text.heading[language]}
          </BodyShort>
          <div className={styles.skeletonContainer}>
            <Heading size="small" as="h3">
              {text.ingenHeading[language]}
            </Heading>
            <BodyLong className={styles.ingenText}>
              {text.ingenText[language]}
            </BodyLong>
          </div>
          <div className={styles.skeletonContainer} />
            <a className={styles.link} href={spraakTilpassetDokumentarkivUrl(language)} >
              {text.dokumentarkiv[language]}
            </a>
          </div>
      )}
    </>
  );
};

export default Dokumenter;

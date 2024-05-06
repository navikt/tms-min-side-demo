import React from "react";
import { MikrofrontendLinkPanel } from "./common/MikrofrontendLinkPanel";

const AktivitetskravMicrofrontend = () => {
    
  return (
    <MikrofrontendLinkPanel
      headingText="NAV vurderer aktivitetsplikten din"
      bodyText="Les mer om aktivitetsplikten og hva den betyr for deg"
      alertStyle="info"
    />
  );
};

export default AktivitetskravMicrofrontend;
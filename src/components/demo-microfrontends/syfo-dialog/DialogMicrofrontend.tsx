import { BasePanel, TagMeta } from "./common/BasePanel";
import { getLongDateFormat } from "./utils/dateUtils";

const DialogMicrofrontend = () => {

  return (
    <BasePanel
      heading={{ text: "Dialogmøte med NAV", icon: "warning" }}
      mainContent={{
        text: getLongDateFormat("2023-04-13T14:36:13Z"),
        textFormat: "date",
      }}
    />
  );
};

export default DialogMicrofrontend;
import React from "react";
import { useQuery } from "react-query";
import redirectToIdPorten, { redirectToLoginService } from "../../api/redirect";
import { legacyAuthenticationUrl, authenticationUrl } from "../../urls";
import { fetcher } from "../../api/api";
import ContentLoader from "../loader/ContentLoader";

const Authentication = ({ children }) => {
  const { data: status, isLoading: isLoadingStatus, isError } = useQuery(authenticationUrl, fetcher);
  const { data: legacyStatus, isLoading: isLoadingLegacyStatus } = useQuery(legacyAuthenticationUrl, fetcher, {
    enabled: !isLoadingStatus,
    onError: (error) => {
      if (error.response.status === 401) {
        redirectToLoginService();
      }
    },
  });

  if (isLoadingStatus || isLoadingLegacyStatus) {
    return <ContentLoader size="2xlarge">...</ContentLoader>;
  }

  if (!status?.authenticated || isError) {
    redirectToIdPorten();
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;

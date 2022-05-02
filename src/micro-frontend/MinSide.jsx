import React from "react";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { minSideTjenesterUrl, minSideOversiktUrl } from "../urls";

const MinSideTjenester = React.lazy(() => import(minSideTjenesterUrl));
const MinSideOversikt = React.lazy(() => import(minSideOversiktUrl));

export const MinSide = () => (
  <React.Suspense fallback={<ContentLoader />}>
    <ErrorBoundary>
      <MinSideOversikt />
    </ErrorBoundary>
    <ErrorBoundary>
      <MinSideTjenester />
    </ErrorBoundary>
  </React.Suspense>
);

export default MinSide;
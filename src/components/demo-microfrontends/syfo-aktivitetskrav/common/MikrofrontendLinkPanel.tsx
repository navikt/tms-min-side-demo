import React from "react";
import {
  AlertContainer,
  ChevronPanel,
  ChevronSection,
  ContainedTag,
  ErrorIcon,
  HeadingRow,
  InfoIcon,
  MainContentRow,
  MainContentText,
  SuccessIcon,
  YellowWarningIcon,
} from "./PanelComponents";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import { Column } from "../columns/Column";
import { HeadingSpacing } from "../typography/typography";

export interface TagMeta {
  text: string;
  variant: "info-moderate" | "success-moderate" | "warning-moderate" | "error-moderate";
}

interface Props {
  headingText: string;
  alertStyle: "info" | "success" | "warning" | "error";
  bodyText: string;
  tag?: TagMeta;
}

export const MikrofrontendLinkPanel = ({ headingText, alertStyle, bodyText, tag }: Props) => {
  return (
    <ChevronPanel
      id="mikrofrontend__linkPanel"
    >
      <HeadingRow>
        <HeadingSpacing size={"small"} level={"2"} className="aktivitetskrav__title">
          {headingText}
        </HeadingSpacing>
        <ChevronSection>
          <AlertContainer>
            {alertStyle === "info" && <InfoIcon />}
            {alertStyle === "warning" && <YellowWarningIcon />}
            {alertStyle === "success" && <SuccessIcon />}
            {alertStyle === "error" && <ErrorIcon />}
          </AlertContainer>
          <ChevronRightIcon className="navds-link-panel__chevron" aria-hidden />
        </ChevronSection>
      </HeadingRow>
      <MainContentRow>
        <Column gap={"1rem"}>
          <MainContentText size="medium" level={"3"}>
            {bodyText}
          </MainContentText>
          {tag && (
            <ContainedTag size={"small"} variant={tag.variant}>
              {tag.text}
            </ContainedTag>
          )}
        </Column>
      </MainContentRow>
    </ChevronPanel>
  );
};
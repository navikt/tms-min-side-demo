import { Column } from "./Column";
import React from "react";
import styled from "styled-components";
import { Heading } from "@navikt/ds-react";
import { HeadingSpacing } from "../typography/typography";

export const HeadingLighter = styled(Heading)`
  font-weight: var(--a-font-weight-regular) !important;
`;

interface Props {
  text: string;
}

export const LeftColumn = ({ text }: Props) => {
  return (
    <Column paddingRight={"1rem"}>
      <HeadingSpacing size={"small"} level={"2"} spacing>
        Dialogmøte
      </HeadingSpacing>
      <HeadingLighter size={"medium"}>{text}</HeadingLighter>
    </Column>
  );
};
import { Language } from "@language/language.ts";
import { PersonalizedContent } from "@components/oversikt/microfrontendTypes.tsx";
import { getProduktPropertiesMap } from "@components/oversikt/produktkort/ProduktProperties.tsx";


export const getProduktProperties = (language: Language, personalizedContent?: PersonalizedContent) => {
  if (personalizedContent === undefined) return undefined;

  const produktPropertiesMap = getProduktPropertiesMap(language);

  return personalizedContent?.produktkort
    ?.sort((a, b) => a.localeCompare(b))
    .map((sakstema) => produktPropertiesMap[sakstema]);
};

export const hasMicrofrontends = (microfrontends: any) => microfrontends !== undefined && microfrontends.length > 0;

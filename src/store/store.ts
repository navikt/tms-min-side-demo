import { atom } from "nanostores";
import { EnabledMicrofrontend, PersonalizedContent } from "@components/oversikt/microfrontendTypes.tsx";

export const isErrorAtom = atom<boolean>(false);
export const personalizedContentAtom = atom<PersonalizedContent>({
  microfrontends: [],
  produktkort: [],
  aiaStandard: false,
  brukNyAia: false,
  oppfolgingContent: false,
  meldekort: false,
  aktuelt: [],
  offerStepup: false
})

export const microfrontendsAtom = atom<EnabledMicrofrontend[]>([]);
export const produktkortAtom = atom<string[]>([]);
export const aiaStandardAtom = atom<boolean>(false);
export const brukNyAiaAtom = atom<boolean>(false);
export const oppfolgingContentAtom = atom<boolean>(false);
export const meldekortAtom = atom<boolean>(false);
export const aktueltAtom = atom<EnabledMicrofrontend[]>([]);

export function setProduktkortAtom(value: string[]) {
  produktkortAtom.set(value)
}

export function setMicrofrontendsAtom(value: EnabledMicrofrontend[]) {
  microfrontendsAtom.set(value)
}

export function setMeldekortAtom(value: boolean) {
  meldekortAtom.set(value)
}

export function setOppfolgingContentAtom(value: boolean) {
  oppfolgingContentAtom.set(value)
}

export function setAiaStandardAtom(value: boolean) {
  aiaStandardAtom.set(value)
}

export function setIsError() {
  isErrorAtom.set(true);
}

export function setPersonalizedContent() {
  personalizedContentAtom.set({
    microfrontends: [...microfrontendsAtom.get()],
    produktkort: [...produktkortAtom.get()],
    aiaStandard: aiaStandardAtom.get(),
    brukNyAia: brukNyAiaAtom.get(),
    oppfolgingContent: oppfolgingContentAtom.get(),
    meldekort: meldekortAtom.get(),
    aktuelt: [...aktueltAtom.get()],
    offerStepup: false
  })
}

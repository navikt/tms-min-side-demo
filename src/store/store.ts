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
export const showAapMicrofrontendAtom = atom<boolean>(false);
export const showFamilieEfMicrofrontendAtom = atom<boolean>(false);
export const showPleiepengerMicrofrontendAtom = atom<boolean>(false);
export const showSyfoAktivitetskravMicrofrontendAtom = atom<boolean>(false);
export const showSyfoDialogMicrofrontendAtom = atom<boolean>(false);
export const showSyfoOppfolgingMicrofrontendAtom = atom<boolean>(false);
export const showPensjonskalkulatorMicrofrontendAtom = atom<boolean>(false);



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

export function setShowAapMicrofrontend(value: boolean) {
  showAapMicrofrontendAtom.set(value)
}

export function setShowFamilieEfMicrofrontend(value: boolean) {
  showFamilieEfMicrofrontendAtom.set(value)
}

export function setShowPleiepengerMicrofrontend(value: boolean) {
  showPleiepengerMicrofrontendAtom.set(value)
}

export function setShowSyfoAktivitetskravMicrofrontendAtom(value: boolean) {
  showSyfoAktivitetskravMicrofrontendAtom.set(value)
}

export function setShowSyfoDialogMicrofrontendAtom(value: boolean) {
  showSyfoDialogMicrofrontendAtom.set(value)
}

export function setShowSyfoOppfolgingMicrofrontendAtom(value: boolean) {
  showSyfoOppfolgingMicrofrontendAtom.set(value)
}

export function setShowPensjonskalkulatorMicrofrontendAtom(value: boolean) {
  showPensjonskalkulatorMicrofrontendAtom.set(value)
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

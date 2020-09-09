export enum TARGETS {
  WEB = 'web-ui',
  NATIVE = 'native-ui',
}
export enum LANGUAGES {
  EN = 'en',
  FI = 'fi',
}

export type Targets = TARGETS.WEB | TARGETS.NATIVE;
export type Languages = LANGUAGES.EN | LANGUAGES.FI;

export interface UseStore {
  target: Targets;
  language: Languages;
  setTarget: (target: Targets) => void;
  setLanguage: (language: Languages) => void;
}

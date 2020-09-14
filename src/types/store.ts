export enum TARGETS {
  WEB = 'web-ui',
  NATIVE = 'native-ui',
}
export enum LANGUAGES {
  EN = 'en',
  FI = 'fi',
}
export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Targets = TARGETS.WEB | TARGETS.NATIVE;
export type Languages = LANGUAGES.EN | LANGUAGES.FI;
export type Themes = THEMES.LIGHT | THEMES.DARK;

export interface UseStore {
  target: Targets;
  language: Languages;
  theme: Themes;
  setTarget: (target: Targets) => void;
  setLanguage: (language: Languages) => void;
  setTheme: (theme: Themes) => void;
}

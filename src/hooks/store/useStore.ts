import { useState } from 'react';

import {
  Targets,
  Languages,
  Themes,
  UseStore,
  TARGETS,
  LANGUAGES,
  THEMES,
} from '../../types/store';

function useStore(): UseStore {
  const [target, setTarget] = useState<Targets>(TARGETS.WEB);
  const [language, setLanguage] = useState<Languages>(LANGUAGES.FI);
  const [theme, setTheme] = useState<Themes>(THEMES.LIGHT);

  return { target, setTarget, language, setLanguage, theme, setTheme };
}

export default useStore;

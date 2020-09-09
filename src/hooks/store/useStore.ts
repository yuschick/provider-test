import { useState } from 'react';

import {
  Targets,
  Languages,
  UseStore,
  TARGETS,
  LANGUAGES,
} from '../../types/store';

function useStore(): UseStore {
  const [target, setTarget] = useState<Targets>(TARGETS.WEB);
  const [language, setLanguage] = useState<Languages>(LANGUAGES.FI);

  return { target, setTarget, language, setLanguage };
}

export default useStore;

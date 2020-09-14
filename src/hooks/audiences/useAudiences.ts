import { useQuery } from 'react-query';

import { UseAudiences } from '../../types/audiences';

function useAudiences(): UseAudiences {
  const audienceQuery = useQuery(
    'fetchAudiences',
    () =>
      fetch(
        'https://api.github.com/repos/tannerlinsley/react-query'
      ).then(res => res.json()),
    {
      enabled: false,
    }
  );

  return {
    fetchAudiences: audienceQuery.refetch,
    audiences: audienceQuery.data,
  };
}

export default useAudiences;

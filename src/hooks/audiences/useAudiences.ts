import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseAudiences } from '../../types/audiences';

function useAudiences(): UseAudiences {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const fetchAudiencesQuery = useQuery(
    'fetchAudiences',
    () => fetch('https://reqres.in/api/unknown'),
    {
      enabled: false,
    }
  );

  const fetchAudiences = () => {
    const { isLoading, isError, data, error, refetch } = fetchAudiencesQuery;
    return { isLoading, isError, data, error, refetch };
  };

  return { fetchAudiences };
}

export default useAudiences;

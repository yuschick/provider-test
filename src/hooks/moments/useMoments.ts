import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseMoments } from '../../types/moments';

function useMoments(): UseMoments {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const fetchMomentsQuery = useQuery(
    'fetchMoments',
    () => fetch('https://reqres.in/api/unknown/2'),
    {
      enabled: false,
    }
  );

  const fetchMoments = () => {
    const { isLoading, isError, data, error, refetch } = fetchMomentsQuery;
    return { isLoading, isError, data, error, refetch };
  };

  return { fetchMoments };
}

export default useMoments;

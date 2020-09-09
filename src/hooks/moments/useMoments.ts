import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseMoments } from '../../types/moments';

function useMoments(): UseMoments {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const fetchMomentsQuery = useQuery('fetchMoments', () =>
    fetch('https://reqres.in/api/unknown/2')
  );

  const fetchMoments = () => {
    const { isLoading, isError, data, error } = fetchMomentsQuery;
    return { isLoading, isError, data, error };
  };

  return { fetchMoments };
}

export default useMoments;

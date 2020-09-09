import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseStrengths } from '../../types/strengths';

function useStrengths(): UseStrengths {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const fetchStrengthsQuery = useQuery(
    'fetchStrengths',
    () => fetch('https://reqres.in/api/unknown/2'),
    {
      enabled: false,
    }
  );

  const fetchStrengths = () => {
    const { isLoading, isError, data, error, refetch } = fetchStrengthsQuery;
    return { isLoading, isError, data, error, refetch };
  };

  return { fetchStrengths };
}

export default useStrengths;

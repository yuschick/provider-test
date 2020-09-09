import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseMemberships } from '../../types/memberships';

function useMemberships(): UseMemberships {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const fetchMembershipsQuery = useQuery(
    'fetchMemberships',
    () => fetch('https://reqres.in/api/unknown/2'),
    {
      enabled: false,
    }
  );

  const fetchMemberships = () => {
    const { isLoading, isError, data, error, refetch } = fetchMembershipsQuery;
    return { isLoading, isError, data, error, refetch };
  };

  return { fetchMemberships };
}

export default useMemberships;

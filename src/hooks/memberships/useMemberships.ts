import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseMemberships } from '../../types/memberships';

function useMemberships(): UseMemberships {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const fetchMembershipsQuery = useQuery('fetchMemberships', () =>
    fetch('https://reqres.in/api/unknown/2')
  );

  const fetchMemberships = () => {
    const { isLoading, isError, data, error } = fetchMembershipsQuery;
    return { isLoading, isError, data, error };
  };

  return { fetchMemberships };
}

export default useMemberships;

import { useQuery } from 'react-query';
import { QueryResult, QueryConfig } from 'react-query/types';

import usePositiveStore from '../store';
import { UseGroups } from '../../types/groups';

function useGroups(): UseGroups {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const useFetchGroups = (
    options?: QueryConfig<Response>
  ): QueryResult<Response> => {
    return useQuery(
      'fetchGroups',
      () => fetch('https://reqres.in/api/users'),
      options
    );
  };

  return { fetchGroups: useFetchGroups };
}

export default useGroups;

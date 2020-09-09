import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseGroups } from '../../types/groups';

function useGroups(): UseGroups {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const fetchGroupsQuery = useQuery(
    'fetchGroups',
    () => fetch('https://reqres.in/api/users'),
    {
      enabled: false,
    }
  );

  const fetchGroups = () => {
    const groups = fetchGroupsQuery;
    return { groups, refetch: fetchGroupsQuery.refetch };
  };

  return { fetchGroups };
}

export default useGroups;

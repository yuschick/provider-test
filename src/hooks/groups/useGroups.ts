import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseGroups } from '../../types/groups';

function useGroups(): UseGroups {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const fetchGroupsQuery = useQuery('fetchGroups', () =>
    fetch('https://reqres.in/api/users')
  );

  const fetchGroups = () => {
    const { isLoading, isError, data, error } = fetchGroupsQuery;
    return { isLoading, isError, data, error };
  };

  return { fetchGroups };
}

export default useGroups;

import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseGroups } from '../../types/groups';

function useGroups(): UseGroups {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const useFetchGroups = () => {
    return useQuery('fetchGroups', () => fetch('https://reqres.in/api/users'));
  };

  return { fetchGroups: useFetchGroups };
}

export default useGroups;

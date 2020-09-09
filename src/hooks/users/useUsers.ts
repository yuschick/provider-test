import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseUsers } from '../../types/users';

function useUsers(): UseUsers {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const fetchUserQuery = useQuery('fetchUser', () =>
    fetch('https://reqres.in/api/unknown/2')
  );

  const fetchUser = () => {
    const { isLoading, isError, data, error } = fetchUserQuery;
    return { isLoading, isError, data, error };
  };

  return { fetchUser };
}

export default useUsers;

import { useQuery } from 'react-query';

function useGroups(): any {
  const { isLoading, isError, data, error } = useQuery('todos', () =>
    fetch('https://dummyapi.io/data/api/user')
  );
  return { isLoading, isError, data, error };
}

export default useGroups;

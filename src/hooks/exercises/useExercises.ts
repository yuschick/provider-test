import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseExercises } from '../../types/exercises';

function useExercises(): UseExercises {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const fetchExercisesQuery = useQuery('fetchExercises', () =>
    fetch('https://reqres.in/api/users/2')
  );

  const fetchExercises = () => {
    const { isLoading, isError, data, error } = fetchExercisesQuery;
    return { isLoading, isError, data, error };
  };

  return { fetchExercises };
}

export default useExercises;

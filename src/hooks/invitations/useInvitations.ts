import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseInvitations } from '../../types/invitations';

function useInvitations(): UseInvitations {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const fetchInvitationsQuery = useQuery('fetchExercises', () =>
    fetch('https://reqres.in/api/unknown/2')
  );

  const fetchInvitations = () => {
    const { isLoading, isError, data, error } = fetchInvitationsQuery;
    return { isLoading, isError, data, error };
  };

  return { fetchInvitations };
}

export default useInvitations;

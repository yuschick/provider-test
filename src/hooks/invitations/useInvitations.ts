import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseInvitations } from '../../types/invitations';

function useInvitations(): UseInvitations {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const fetchInvitationsQuery = useQuery(
    'fetchExercises',
    () => fetch('https://reqres.in/api/unknown/2'),
    {
      enabled: false,
    }
  );

  const fetchInvitations = () => {
    const { isLoading, isError, data, error, refetch } = fetchInvitationsQuery;
    return { isLoading, isError, data, error, refetch };
  };

  return { fetchInvitations };
}

export default useInvitations;

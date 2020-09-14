import { useQuery } from 'react-query';

import usePositiveStore from '../store';
import { UseAudiences } from '../../types/audiences';

function useAudiences(): UseAudiences {
  const { target, language } = usePositiveStore();
  console.log(target, language);

  const cleanAudiences = (data: any) => console.log(data);

  const audienceQuery = useQuery(
    'fetchAudiences',
    () => {
      console.log('in query');
      fetch('https://reqres.in/api/unknown');
    },
    {
      enabled: false,
    }
  );

  const fetchAudiences = () => {
    const { refetch } = audienceQuery;
    refetch();
  };

  const audiences = cleanAudiences(audienceQuery.data);

  return { fetchAudiences, audiences };
}

export default useAudiences;

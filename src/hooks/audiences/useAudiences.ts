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
      fetch(
        'https://api.github.com/repos/tannerlinsley/react-query'
      ).then(res => res.json());
    },
    {
      enabled: false,
    }
  );

  const fetchAudiences = () => {
    const { refetch } = audienceQuery;
    console.log('in refetch');
    refetch();
  };

  const audiences = cleanAudiences(audienceQuery.data);

  return { fetchAudiences, audiences };
}

export default useAudiences;

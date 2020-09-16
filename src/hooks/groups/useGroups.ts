import client, { paths } from '../../api';
import { useQuery } from 'react-query';

import { UseGroups } from '../../types/groups';

function useGroups(): UseGroups {
  const fetchGroupsQuery = useQuery(
    'fetchGroups',
    () => client.get(paths.groups).then((res: any) => res.json()),
    {
      enabled: false,
    }
  );

  return {
    fetchGroups: fetchGroupsQuery.refetch,
    groups: fetchGroupsQuery.data,
  };
}

export default useGroups;

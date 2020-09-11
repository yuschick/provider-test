import { QueryResult, QueryConfig } from 'react-query/types';

export interface UseGroups {
  fetchGroups: (options?: QueryConfig<Response>) => QueryResult<Response>;
}

export type QueryParams = Record<string, string | boolean | number | undefined>;

export interface UseApiOptions<Q extends QueryParams> {
    queryParams?: Q
    
}

export type ApiMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'
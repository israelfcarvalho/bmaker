import { useQuery } from "react-query";
import { QueryParams, UseApiOptions } from "../_common/types";
import { mountUrl } from "../_common/utils";

import { useApi } from "../provider/Provider";
import { apiGet } from "./get";
import { IUseApiGet } from "./types";

export function useApiGet<TData, TError = Error, Q extends QueryParams = QueryParams>(
    route: string, options?: UseApiOptions<Q>
): IUseApiGet<TData, TError> {
    const { baseUrl } = useApi(useApiGet.name)
    const url = mountUrl(baseUrl, route, options?.queryParams)

    const {data, error, isLoading} = useQuery<TData, TError>({
        queryKey: [url],
        queryFn: () => apiGet<TData>(url)
    })

    return {
        data,
        error,
        isLoading
    }
} 
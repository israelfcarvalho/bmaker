import { useMutation } from "react-query";

import { QueryParams, UseApiOptions } from "../_common/types";
import { mountUrl } from "../_common/utils";

import { useAuth } from "@workspace/core/auth";
import { useApi } from "../provider/Provider";
import { apiPost } from "./post";
import { ApiBody, IUseApiPost } from "./types";

export function useApiPost<
    TData, 
    TBody extends ApiBody,
    TError = Error,
    Q extends QueryParams = QueryParams
>(route: string, options?: UseApiOptions<Q>): IUseApiPost<TData, TBody, TError> {
    const {baseUrl} = useApi(useApiPost.name)
    const { getToken } = useAuth()
    const url = mountUrl(baseUrl, route, options?.queryParams)

    const {data, error, isLoading, mutate: post,} = useMutation<TData, TError, TBody>({
        mutationKey: [url],
        mutationFn: (body) => getToken().then(token => apiPost<TData, TBody>(url, body, token))
    })

    return {
        data,
        error,
        isLoading,
        post
    }
} 
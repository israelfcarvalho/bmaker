import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApiContext, ProviderProps } from "./types";

const apiContext = React.createContext<ApiContext | null>(null)

export const ApiProvider: React.FC<ProviderProps> = ({children, baseUrl}) => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 10000,
            retry: 3,
          },
        },
      }))

      return (
        <apiContext.Provider value={{baseUrl}}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </apiContext.Provider>
      )
}

export function useApi(hookName: string){
    const context = React.useContext(apiContext)
    if(context === null){
        throw new Error(`${hookName} must be used within a ApiProvider`)
    }

    return context
} 
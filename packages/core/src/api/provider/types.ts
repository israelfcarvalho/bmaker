import { PropsWithChildren } from "react";

export interface ApiContext {
    baseUrl: string
}

export interface ProviderProps extends PropsWithChildren, ApiContext {} 
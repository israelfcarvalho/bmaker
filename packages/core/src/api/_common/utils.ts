import { QueryParams } from "./types"

export function mountUrl(baseUrl: string, route: string, params: QueryParams = {}){
    const newUrl = trimSlashes(baseUrl)
    const newRoute = trimSlashes(route)
    const stringParams = queryParamsToString(params)

    return trimSlashes(`${newUrl}/${newRoute}/${stringParams}`)
}

export function trimSlashes(value: string): string {
    let newValueArray = value.trim().split('')

    if(!newValueArray.length){
        return newValueArray.join('')
    }

    const firstIndex = 0
    const lastIndex = newValueArray.length - 1
    const slash = '/'

    const newValue = newValueArray.reduce((result, currentValue, currentIndex) => {
        if([firstIndex, lastIndex].includes(currentIndex) && currentValue === slash){
            return result
        }

        return result.concat(currentValue)
    }, '')

    return newValue != value ? trimSlashes(newValue) : value 
}

export function queryParamsToString(params: QueryParams){
    const queryParams = new URLSearchParams()

    Object.entries(params).forEach(([Key, value]) => {
        if(value != undefined){
            queryParams.append(Key, value.toString())
        }
    })

    return queryParams.toString()
} 
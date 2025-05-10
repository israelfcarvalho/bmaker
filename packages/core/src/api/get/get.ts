export async function apiGet<TData>(url: string): Promise<TData> {
    return fetch(url).then(res => {
        if(!res.ok){
            throw new Error(`API Error: ${res.status} ${res.statusText}`);
        }
 
        return res.json()
    })
} 
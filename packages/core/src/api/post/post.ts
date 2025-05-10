export async function apiPost<TData, TBody>(url: string, body: TBody, token: string | null): Promise<TData> {
    return fetch(
        url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
        }
    ).then(res => {
        if(!res.ok){
            throw new Error(`API Error: ${res.status} ${res.statusText}`);
        }

        return res.json()
    })
} 
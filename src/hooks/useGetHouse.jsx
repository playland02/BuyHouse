import { useState, useEffect } from 'react'

export function useGetHouse(url) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const res = await fetch(url)
            const json = await res.json()

            setData(json.houses)
            setLoading(false)

        }
        fetchData()

    }, [url])


    return { data, loading }
}
import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = (dataUrl) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()

        const getData = async (url) => {
            setIsLoading(true)
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token,
                })
                if (isMounted) {
                    setData(response.data)
                    // console.log(response);
                    // console.log(response.data);
                    setError(null)
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message)
                    setData(null)
                }
            } finally {
                isMounted && setIsLoading(false)
            }
        }
        getData(dataUrl)

        const cleanUp = () => {
            isMounted = false
            source.cancel()
        }

        return cleanUp
    }, [dataUrl])

    return { data, isLoading, error }
}

export default useAxios

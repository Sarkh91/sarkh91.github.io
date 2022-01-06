import axios, {AjaxConfig, AjaxResponse} from "@/assets/ts/AjaxMethods"
import {useEffect, useState } from "react"
import {AxiosPromise} from "axios";

const useFetch = <C extends AjaxConfig, R extends AjaxResponse>(config: C) => {
    const [response, setResponse] = useState<R | null>(null)
    const [error, setError] = useState<Error|null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (config?.url) {
            setLoading(true)
            getFetch(config)
            .then((res)=>{
                setLoading(false)
                setResponse(res.data)
            })
            .catch((err)=>{
                setLoading(false)
                setError(err)
            })
        }
    }, [config.url, config.params])

    const getFetch = (config:C):AxiosPromise<R> => axios(config)

    return {response, error, loading}
}

export default useFetch
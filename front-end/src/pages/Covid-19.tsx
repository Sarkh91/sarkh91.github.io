import { useFetch } from "@/hooks";
import {Fragment, useEffect, useState} from "react";
import {AjaxConfig} from "@/assets/ts/AjaxMethods";

const Covid19 = () => {
    const [config, setConfig] = useState<AjaxConfig>({
        url:'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson',
        method:'get',
        params:{
            serviceKey:'hrqYE/kCYVlI2wCyioF0uwlwk/zvAV7+zHEXIUWMibWZpK75uJj0bNQXz0gVO5TWSYfjrkjG+dtIOVo38qXVqw==',
            pageNo:1,
            numOfRows:10,
        },
    })
    const {response, error} = useFetch(config, true)

    useEffect(() => {
        if (response) {
            console.log(response)
        }
    }, [response])

    return (
        <Fragment>
        </Fragment>
    )
}

export default Covid19
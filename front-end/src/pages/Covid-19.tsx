import { useFetch } from "@/hooks";
import {Fragment, useEffect, useState} from "react";
import {AjaxConfig} from "@/assets/ts/AjaxMethods";

const Covid19 = () => {
    const [config, setConfig] = useState<AjaxConfig>({
        url:'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson',
        method:'get',
        params:{
            serviceKey:'hrqYE%2FkCYVlI2wCyioF0uwlwk%2FzvAV7%2BzHEXIUWMibWZpK75uJj0bNQXz0gVO5TWSYfjrkjG%2BdtIOVo38qXVqw%3D%3D',
            pageNo:1,
            numOfRows:10,
        },
    })
    const {response, error} = useFetch(config, true)

    // useEffect(() => {
    //     if (error) {
    //         console.log(error)
    //     }
    // }, [response, error])

    return (
        <Fragment>
        </Fragment>
    )
}

export default Covid19
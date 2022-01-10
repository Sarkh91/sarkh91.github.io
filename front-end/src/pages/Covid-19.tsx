import { useFetch } from "@/hooks";
import {Fragment, useEffect, useRef, useState} from "react";
import {AjaxConfig} from "@/assets/ts/AjaxMethods";
import {CovidEntity, CovidResponse} from "@/types";
import CovidTable from "@/components/Covid/CovidTable";
import moment from "moment";
import {Backdrop, Button, CircularProgress} from "@mui/material";
import ajaxStyles from "@/pages/Ajax.module.scss";

const Covid19 = () => {
    const today = useRef(moment().format('YYYY-MM-DD'))
    const [covidInfo, setCovidInfo] = useState<CovidEntity|null>(null)
    const [config, setConfig] = useState<AjaxConfig>({
        url:'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson',
        method:'get',
        params:{
            serviceKey:'hrqYE/kCYVlI2wCyioF0uwlwk/zvAV7+zHEXIUWMibWZpK75uJj0bNQXz0gVO5TWSYfjrkjG+dtIOVo38qXVqw==',
            pageNo:1,
            numOfRows:10,
            startCreateDt: moment().format('YYYYMMDD'),
        },
    })
    const {response, loading} = useFetch<AjaxConfig, CovidResponse>(config, true)

    useEffect(() => {
        if (response?.response?.body?.items?.item) {
            setCovidInfo(response.response.body.items.item)
        }
    }, [response])

    const onClickGet = () => {
        let newConfig = Object.assign({}, config)
        const oldParams = Object.assign({}, newConfig.params)
        newConfig.params = {}
        newConfig.params = oldParams

        setConfig(newConfig)
    }

    return (
        <Fragment>
            <h1>코로나19 감염현황</h1>
            <p>{today.current}</p>
            <Button onClick={onClickGet} variant="contained" >REFRESH</Button>
            <div className={ajaxStyles.container}>
                {covidInfo ? <CovidTable covidInfo={covidInfo}/> : ''}
                <Backdrop className={ajaxStyles['MuiBackdrop-root']}  open={loading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        </Fragment>
    )
}

export default Covid19
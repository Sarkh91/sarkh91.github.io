import {Fragment, useEffect, useRef, useState} from "react";
import {AjaxConfig} from "@/assets/ts/AjaxMethods";
import {useFetch} from "@/hooks";
import {AirInfoEntity, AirInfoResponse} from "@/types";
import moment from "moment";
import {Backdrop, Button, CircularProgress} from "@mui/material";
import ajaxStyles from "@/pages/Ajax.module.scss";
import MovieTable from "@/components/BoxOfficeRanking/MovieTable";
import {AirInfoTable} from "@/components";

const AirInfo = () => {
    const today = useRef(moment().format('YYYY-MM-DD'))
    const [config, setConfig] = useState<AjaxConfig>({
        url:'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth',
        method:'get',
        params:{
            serviceKey:'hrqYE/kCYVlI2wCyioF0uwlwk/zvAV7+zHEXIUWMibWZpK75uJj0bNQXz0gVO5TWSYfjrkjG+dtIOVo38qXVqw==',
            returnType: 'json',
            searchDate: today.current
        },
    })
    const {response, loading} = useFetch<AjaxConfig, AirInfoResponse>(config, true)
    const [airInfoList, setAirInfoList] = useState<AirInfoEntity[]>([])

    useEffect(() => {
        if (response?.response?.body?.items?.length) {
            setAirInfoList(response.response.body.items)
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
            <h1 title="ミセモンジ">대기오염도 (미세먼지)</h1>
            <p>{today.current}</p>
            <Button onClick={onClickGet} variant="contained" >REFRESH</Button>
            <div className={ajaxStyles.container}>
                <AirInfoTable airInfoList={airInfoList} />
                <Backdrop className={ajaxStyles['MuiBackdrop-root']}  open={loading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        </Fragment>
    )
}

export default AirInfo
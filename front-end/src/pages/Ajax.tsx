import {Fragment, useEffect, useState} from 'react'
import {Backdrop, Button, CircularProgress} from "@mui/material";
import {useFetch} from "@/hooks";
import moment from 'moment'
import {AjaxConfig} from "@/assets/ts/AjaxMethods";
import {BoxOfficeResponse, Movie} from "@/types";
import MovieTable from "@/components/Ajax/MovieTable";
import ajaxStyles from './Ajax.module.scss'

const Ajax = () => {

    const [movies, setMovies] = useState<Movie[]>([])
    const [config, setConfig] = useState<AjaxConfig>({
        url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
        method: 'get',
        params: {
            key: 'db6af60d09e4ff95bdf3ae33d0e4b3c3',
            targetDt: moment().subtract(1, 'days').format('YYYYMMDD'),
            multiMovieYn: 'N'
        }
    })
    const {response, loading} = useFetch<AjaxConfig, BoxOfficeResponse>(config)


    useEffect(() => {
        if (response){
            setMovies(response.boxOfficeResult.dailyBoxOfficeList)
        }
    }, [response])

    const onClickGet = () => {
        let newConfig = Object.assign({}, config)
        newConfig.params = {}
        newConfig.params = {
            key: 'ccea22bea611d77fe7f18bd86f0b4113',
            targetDt: moment().subtract(1, 'days').format('YYYYMMDD'),
            multiMovieYn: 'N'
        }

        setConfig(newConfig)
    }

    return (
        <Fragment>
            <Button onClick={onClickGet} variant="contained" >REFRESH</Button>
            <div className={ajaxStyles.container}>
                <MovieTable movies={movies} />
                <Backdrop className={ajaxStyles['MuiBackdrop-root']}  open={loading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        </Fragment>
    )
}

export default Ajax
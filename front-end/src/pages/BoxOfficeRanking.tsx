import {Fragment, useEffect, useState} from 'react'
import {Backdrop, Button, CircularProgress} from "@mui/material";
import {useFetch} from "@/hooks";
import moment from 'moment'
import {AjaxConfig} from "@/assets/ts/AjaxMethods";
import {BoxOfficeResponse, Movie} from "@/types";
import MovieTable from "@/components/BoxOfficeRanking/MovieTable";
import ajaxStyles from './Ajax.module.scss'

const BoxOfficeRanking = () => {
    // https://sarkh-cors-proxy.herokuapp.com/http://apis.data.go.kr/9710000/BillInfoService2/getPetitionStatic?serviceKey=hrqYE%2FkCYVlI2wCyioF0uwlwk%2FzvAV7%2BzHEXIUWMibWZpK75uJj0bNQXz0gVO5TWSYfjrkjG%2BdtIOVo38qXVqw%3D%3D&pageNo=1&numOfRows=10&start_age=20&origin&x-requested-with=XMLHttpRequest
    const [movies, setMovies] = useState<Movie[]>([])
    const [config, setConfig] = useState<AjaxConfig>({
        url: 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
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
        const oldParams = Object.assign({}, newConfig.params)
        newConfig.params = {}
        newConfig.params = oldParams

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

export default BoxOfficeRanking
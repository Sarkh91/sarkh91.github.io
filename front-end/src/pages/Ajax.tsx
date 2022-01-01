import {Fragment} from 'react'
import {Button} from "@mui/material";
import {ajaxFn} from '@/assets/ts/AjaxMethods'
import moment from 'moment'

const Ajax = () => {
    const onClickGet = async () => {
        const res = await ajaxFn({
            url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            method: 'get',
            params: {
                key: 'ccea22bea611d77fe7f18bd86f0b4113',
                targetDt: moment().subtract(1, 'days').format('YYYYMMDD'),
                multiMovieYn: 'N'
            }
        })

        console.log(res)
    }

    return (
        <Fragment>
            <Button variant="contained" onClick={onClickGet}>GET</Button>
        </Fragment>
    )
}

export default Ajax
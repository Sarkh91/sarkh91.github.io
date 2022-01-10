import {AjaxResponse} from "@/assets/ts/AjaxMethods";
import {SxProps, Theme} from "@mui/material";

export interface BoxOfficeResponse extends AjaxResponse{
    boxOfficeResult:{
        dailyBoxOfficeList: Movie[]
    }
}

export interface Movie {
    rank: string,
    movieNm: string,
    rankOldAndNew: string,
    audiAcc: string
}

export interface AirInfoResponse extends AjaxResponse{
    response:{
        body:{
            items:AirInfoEntity[],
            numOfRows:number,
            pageNo:number,
            totalCount: number
        }
    }
}

export interface AirInfoEntity {
    informCode:string,
    informGrade:string,
    informOverall:string
}

export interface CovidResponse extends AjaxResponse{
    response:{
        body:{
            items:{
                item:CovidEntity
            }
        }
    }
}

export interface CovidEntity {
    accExamCnt: number,
    decideCnt: number,
    deathCnt: number
}

export interface MuiTableField {
    key:string,
    label:string,
    sx?:SxProps<Theme>,
}
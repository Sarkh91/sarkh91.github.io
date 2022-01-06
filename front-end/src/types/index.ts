import {AjaxResponse} from "@/assets/ts/AjaxMethods";

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
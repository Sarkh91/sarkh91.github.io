import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

export interface AjaxConfig extends AxiosRequestConfig {

}


export interface AjaxResponse extends AxiosResponse {

}

const axiosInstance = axios.create()
export default axiosInstance
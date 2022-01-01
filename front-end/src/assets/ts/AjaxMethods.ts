import axios from './CommonAxios'

export const ajaxFn = async function (config:object):Promise<any> {
    return axios(config)
}
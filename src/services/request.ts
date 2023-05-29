import axios from "axios";
import { apiURI } from "../utils/constants";

const instance = axios.create({
    baseURL: apiURI + "/",
});

const AxiosInterceptor = ({ children }: any) => {
    /* -------------------------------------------------------------------------- */
    /*                                    HOOKS                                   */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                                  CONSTATNT                                 */
    /* -------------------------------------------------------------------------- */
    //const accessToken = "";

    /* -------------------------------------------------------------------------- */
    /*                                   REQUEST                                  */
    /* -------------------------------------------------------------------------- */
    instance.interceptors.request.use((config) => {
        /*if (!config?.headers?.Authorization && accessToken) {
            config.headers["Authorization"] = "token " + accessToken;
        }*/
        return config;
    });
    /* -------------------------------------------------------------------------- */
    /*                                  RESPONSE                                  */
    /* -------------------------------------------------------------------------- */
    const resInterceptor = (response: any) => {
        return response;
    };
    const errInterceptor = async (error: any) => {
        const status = error?.response?.status || null;
        if (status === 401 && !error?.config?.sent) {
           console.log('token expired')
        }
        return Promise.reject(error);
    };

    instance.interceptors.response.use(resInterceptor, errInterceptor);
    return children;
};

export default instance;
export { AxiosInterceptor };

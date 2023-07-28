import axiosInstance from "../../http/axios";
import {AxiosResponse} from "axios";
import {ApiData} from "./routing-model";

export const getRouting = async (url: string): Promise<ApiData> => {
    try {
        const response: AxiosResponse<ApiData> = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Network response was not ok.');
    }
};

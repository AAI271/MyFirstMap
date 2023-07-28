import axiosInstance from "../../http/axios";
import {AxiosResponse} from "axios";
import { IRouting} from "../../models/models";

export const getRouting:(url: string) => Promise<IRouting> = async (url: string): Promise<IRouting> => {
    try {
        const response: AxiosResponse<IRouting> = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Network response was not ok.');
    }
};

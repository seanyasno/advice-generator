import axios, {AxiosResponse} from 'axios';
import {SlipAdvice} from '../../abstraction';

export const fetchRandomAdvice = async (): Promise<SlipAdvice> => {
    const url = 'https://api.adviceslip.com/advice';
    try {
        const response = await axios.get<unknown, AxiosResponse<SlipAdvice>>(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

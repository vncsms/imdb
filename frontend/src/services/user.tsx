import axios from "axios";
import {DOMAIN} from "../config";

export const registerUser = (data: Record<string, any>) => {
    const url = DOMAIN + '/users';
    return axios.post(url, data);
};
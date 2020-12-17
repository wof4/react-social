import { resultType } from "../type/type";
import { instance } from "./api";

export const loginApi = {
    getLoginStatus() {
        return instance.get<resultType<LoginDataType>>('auth/me');
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null = null) {
        return instance.post<resultType<LoginDataType>>('auth/login', {
            email, password, rememberMe, captcha,
        });
    },

    logout() {
        return instance.delete<resultType>('auth/login');
    },

    getCaptcha() {
        return instance.get<captchaUrlType>('security/get-captcha-url');
    },
};



type LoginDataType =  { id: number, email: string, login: string }
type captchaUrlType = {url: string}




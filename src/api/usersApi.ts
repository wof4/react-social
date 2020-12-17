import {  photosType, profileUserType } from "../type/type";
import { instance } from "./api";

export const userApi = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },

    getUserStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then((response) => response.data);
    },

    getUser(userId: number) {
        return instance.get<profileUserType>(`profile/${userId}`)
            .then((response) => response.data);
    },


};



type itemsType = {
    id: number
    name: string
    status: string
    photos: photosType
    followed: boolean
}

 export type getUsersType = {
    items: Array<itemsType>
    totalCount: number
    error: string | null
}
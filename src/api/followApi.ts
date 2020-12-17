import { instance } from "./api";

export const following = {
    getFollowStatus(id: number, buttonStatus: string) {
        if (buttonStatus === 'delete') {
            return instance.delete<getFollowStatusPostType>(`follow/${id}`).then(res => res.data)
        }
        return instance.post<getFollowStatusPostType>(`follow/${id}`).then(res => res.data)
    },
};

export type getFollowStatusPostType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

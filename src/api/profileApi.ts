import { resultType, photosTypeObj } from './../type/type';

import { profileUserType } from "../type/type";
import { instance } from "./api";
import { onChangeLocalProfile, updateLocalStstus } from '../redux/localReducer';
// import { onChangeLocalProfile, updateLocalStstus } from '../utils/validators/func';

export const profileApi = {
    updateStatus(status: string) {
        return instance.put<resultType>('profile/status', { status }).then(res => res.data)
       .catch(() => updateLocalStstus(status))
    },

    onChangePhoto(photo: any) {
        debugger
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put<resultType<photosTypeObj>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    onChangeProfile(profile: profileUserType) {
        return instance.put<resultType>('profile', profile)
        .catch(() => onChangeLocalProfile(profile))
    },

}

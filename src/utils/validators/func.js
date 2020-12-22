// import { getUsersType } from "../../api/usersApi";

// import { localUsers } from "../../local-state/localUsers";
// import { profileUserType } from "../../type/type";

// export const localgetUsers = (localUsers: getUsersType, currentPage: number, pageSize: number) => {
//     const lefBorder = (currentPage - 1) * 5 + 1;
//     const rightBorder = currentPage * 5;
//     let filterObj = localUsers.items.filter((item, index) => index >= lefBorder && index <= rightBorder)

//     return { ...localUsers, items: filterObj }
// }


// export const getUserLocalStatus = (id: number, localUsers: getUsersType) => {
//     let b = localUsers.items.filter((item) => item.id == id)
//     if (b && b[0].status) {
//         return b[0].status
//     }
//     return ''
// }


// const lookingForAJobFace = (id: number) => {
//     if (id % 2 === 0) return true
// }

// export const getlocalUser = (id: number) => {

//     if (!id || id != localProfile.userId) id = localProfile.userId

//     let currentUser = localUsers.items.filter((item) => item.id == id)
//     let lookingForAJobBoolean = lookingForAJobFace(currentUser[0].id)



//         // const defaultUserObject = {
//         //     userId: localProfile.userId,
//         //     lookingForAJob: profile ? profile.lookingForAJob : true,
//         //     lookingForAJobDescription: profile ? profile.lookingForAJobDescription : localProfile.lookingForAJobDescription,
//         //     fullName: profile ? profile.fullName : localProfile.fullName,
//         //     contacts:
//         //     {
//         //         facebook: profile? profile.contacts.facebook : localProfile.contacts.facebook,
//         //         github: profile ? profile.contacts.github : localProfile.contacts.github,
//         //         instagram: profile ? profile.contacts.instagram : localProfile.contacts.instagram,
//         //         mainLink: profile ? profile.contacts.mainLink : localProfile.contacts.mainLink,
//         //         twitter: profile ? profile.contacts.twitter : localProfile.contacts.twitter,
//         //         vk: profile ? profile.contacts.vk : localProfile.contacts.vk,
//         //         website: profile ? profile.contacts.website : localProfile.contacts.website,
//         //         youtube: profile ? profile.contacts.youtube : localProfile.contacts.youtube
//         //     },
//         //     photos: profile ? profile.photos : localProfile.photos,
//         //     aboutMe: profile ? profile.aboutMe : localProfile.aboutMe,
//         // }
        
    
//         const defaultUserObject = {
//             userId: currentUser[0].id,
//             lookingForAJob: true,
//             lookingForAJobDescription: 'frontend',
//             fullName: currentUser[0].name,
//             contacts: {
//                 facebook: "https://facebook.com",
//                 github: '',
//                 instagram: '',
//                 mainLink: '',
//                 twitter: '',
//                 vk: '',
//                 website: '',
//                 youtube: ''
//             },
//             photos: currentUser[0].photos,
//             aboutMe: currentUser[0].status,
//         }
//         return defaultUserObject


// }



// export const updateLocalStstus = (status: string) => {
//     const data = {
//         data: { status: status },
//         resultCode: 0,
//         messages: [],
//     }
//     return data
// }







// export const onChangeLocalProfile = (profile: profileUserType) => {
//     // getlocalUser(profile.userId, profile )

//     // const newUserProfileObject = {
//     //     userId: localProfile.userId,
//     //     lookingForAJob: profile.lookingForAJob || localProfile.lookingForAJob,
//     //     lookingForAJobDescription: profile.lookingForAJobDescription || localProfile.lookingForAJobDescription,
//     //     fullName: profile.fullName || localProfile.fullName,

//     //     contacts:
//     //     {
//     //         facebook: profile.contacts.facebook || localProfile.contacts.facebook,
//     //         github: profile.contacts.github || localProfile.contacts.github,
//     //         instagram: profile.contacts.instagram || localProfile.contacts.instagram,
//     //         mainLink: profile.contacts.mainLink || localProfile.contacts.mainLink,
//     //         twitter: profile.contacts.twitter || localProfile.contacts.twitter,
//     //         vk: profile.contacts.vk || localProfile.contacts.vk,
//     //         website: profile.contacts.website || localProfile.contacts.website,
//     //         youtube: profile.contacts.youtube || localProfile.contacts.youtube
//     //     },
//     //     photos: profile.photos.large || localProfile.photos.large,
//     //     aboutMe: profile.aboutMe || localProfile.aboutMe,
//     // }



//     const data = {
//         data: { resultCode: 0, },
//         resultCode: 0,
//         messages: []
//     }
//     return data
// }
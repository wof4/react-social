const initialState = {
    me: {
        aboutMe: "Полюбому выучу",
        contacts:
        {
            facebook: "https://facebook.com",
            github: '',
            instagram: '',
            mainLink: '',
            twitter: '',
            vk: '',
            website: '',
            youtube: ''
        },
        fullName: "ALeksandr__Piter",
        lookingForAJob: true,
        lookingForAJobDescription: "hey))) hey)))hey))) hey)))",
        photos: { small: 'https://social-network.samuraijs.com/activecontent/images/users/8733/user.jpg?v=11', large: 'https://social-network.samuraijs.com/activecontent/images/users/8733/user.jpg?v=11' },
        userId: 1079
    },
    authlocalData: {
        data: {
            id: 1079,
            email: 'free@samuraijs.com',
            login: ' free',
        },
        resultCode: 0,
        messages: [],
    },
    localUsers: {
        items: [
            { name: "inspector", id: 12956, photos: { small: null, large: null }, status: "s", followed: false },
            { name: "locksmith", id: 12955, photos: { small: null, large: null }, status: '', followed: false },
            { name: "dakar", id: 12954, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Roman_ananev", id: 12953, photos: { small: null, large: null }, status: "ghgdddsdsd sdkkkkkk", followed: false },
            { name: "pahasa", id: 12952, photos: { small: "https://social-network.samuraijs.com/activecontent/images/users/12952/user-small.jpg?v=1", large: "https://social-network.samuraijs.com/activecontent/images/users/12952/user.jpg?v=1" }, status: "Ou", followed: false },
            { name: "testering", id: 13337, photos: { small: "https://social-network.samuraijs.com/activecontent/images/users/13337/user-small.jpg?v=1", large: "https://social-network.samuraijs.com/activecontent/images/users/13337/user.jpg?v=1" }, status: "♥ React", followed: false },
            { name: "Kostya", id: 13383, photos: { small: null, large: null }, status: '', followed: false },
            { name: "essedger", id: 5, photos: { small: null, large: null }, status: '', followed: false },
            { name: "marina", id: 4, photos: { small: null, large: null }, status: '', followed: true },
            { name: "AlexanderKhodaryonok", id: 3, photos: { small: null, large: null }, status: "qwerty", followed: false },
            { name: "samurai dimych", id: 2, photos: { small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=1", large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=1" }, status: "ghgdddsdsd sd", followed: true },
            { name: "deonis", id: 13382, photos: { small: null, large: null }, status: '', followed: false },
            { name: "EvgenEvgen", id: 13381, photos: { small: null, large: null }, status: '', followed: false },
            { name: "rollame", id: 13380, photos: { small: null, large: null }, status: '', followed: false },
            { name: "sergey777", id: 13379, photos: { small: null, large: null }, status: '', followed: false },
            { name: "mqwerty", id: 13391, photos: { small: null, large: null }, status: '', followed: false },
            { name: "card", id: 13390, photos: { small: null, large: null }, status: '', followed: false },
            { name: "PrincessDaisy", id: 13389, photos: { small: null, large: null }, status: '', followed: false },
            { name: "nrm_mrn", id: 13388, photos: { small: null, large: null }, status: '', followed: false },
            { name: "vasyaPupkin228", id: 13387, photos: { small: null, large: null }, status: '', followed: true },
            { name: "ALeksandr__Piter", id: 1079, photos: { small: 'https://social-network.samuraijs.com/activecontent/images/users/8733/user.jpg?v=11', large: 'https://social-network.samuraijs.com/activecontent/images/users/8733/user.jpg?v=11' }, status: "Полюбому выучу", followed: true },
            { name: "justforfun", id: 13376, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Saint-Fons", id: 13375, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Vlad_Piskun", id: 13374, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Nikron", id: 13373, photos: { small: null, large: null }, status: '', followed: false },
            { name: "SILHOUETTE", id: 13372, photos: { small: null, large: null }, status: '', followed: false },
            { name: "lyolylk", id: 13371, photos: { small: null, large: null }, status: '', followed: false },
            { name: "test123456765", id: 13370, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Tratatushka123", id: 13369, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Tratatushka", id: 13368, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Lambada1", id: 13367, photos: { small: null, large: null }, status: '', followed: false },
            { name: "GusiGusi123", id: 13366, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Fess2008", id: 13365, photos: { small: null, large: null }, status: '', followed: false },
            { name: "y-patap", id: 13364, photos: { small: null, large: null }, status: '', followed: false },
            { name: "kizvad", id: 13363, photos: { small: null, large: null }, status: '', followed: false },
            { name: "kizenkov", id: 13362, photos: { small: null, large: null }, status: '', followed: false },
            { name: "starworm_", id: 13361, photos: { small: null, large: null }, status: '', followed: false },
            { name: "starworm", id: 13360, photos: { small: null, large: null }, status: '', followed: false },
            { name: "doqtur", id: 13359, photos: { small: null, large: null }, status: '', followed: false },
            { name: "RaMzy_666", id: 13358, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Lambada", id: 13357, photos: { small: null, large: null }, status: '', followed: false },
            { name: "picassonk", id: 13356, photos: { small: null, large: null }, status: '', followed: false },
            { name: "picassonk21", id: 13355, photos: { small: null, large: null }, status: '', followed: false },
            { name: "DonJuan", id: 13354, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Andromeda22", id: 13353, photos: { small: null, large: null }, status: '', followed: false },
            { name: "baiakombi", id: 13352, photos: { small: null, large: null }, status: '', followed: true },
            { name: "Maksim", id: 13351, photos: { small: null, large: null }, status: '', followed: false },
            { name: "LittleFunnyPug", id: 13350, photos: { small: null, large: null }, status: "My prettie status in our sweetie world!!!", followed: false },
            { name: "Natasha12034t9", id: 13349, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Hamvol", id: 13348, photos: { small: null, large: null }, status: '', followed: false },
            { name: "unformer", id: 13347, photos: { small: null, large: null }, status: '', followed: false },
            { name: "dragzir", id: 13346, photos: { small: null, large: null }, status: '', followed: false },
            { name: "glontyid", id: 13345, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Roma123", id: 13344, photos: { small: null, large: null }, status: '', followed: false },
            { name: "IgorPlisko", id: 13343, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Romas", id: 13342, photos: { small: null, large: null }, status: '', followed: false },
            { name: "malakhovandy", id: 13341, photos: { small: null, large: null }, status: '', followed: false },
            { name: "gearonix87", id: 13340, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Gearonix", id: 13339, photos: { small: null, large: null }, status: '', followed: false },
            { name: "Zav", id: 13338, photos: { small: null, large: null }, status: '', followed: false },
        ],
        totalCount: 59,
        error: null
    },

};






export const getMeData = () => {
    return initialState.authlocalData
}


export const getlocalUser = (id) => {
    if (!id || initialState.me.me) return initialState.me.me

    let currentUser = initialState.localUsers.items.filter((item) => item.id == id)

    if (id === initialState.me.userId) {
        console.log(initialState.me)
        return initialState.me
    }

    const lookingForAJobFace = (id) => {
        if (id % 2 === 0) return true
        return false
    }
    const defaultUserObject = {
        userId: currentUser[0].id,
        lookingForAJob: lookingForAJobFace(currentUser[0].id),
        lookingForAJobDescription: 'frontend',
        fullName: currentUser[0].name,
        contacts: {
            facebook: "https://facebook.com",
            github: '',
            instagram: '',
            mainLink: '',
            twitter: '',
            vk: '',
            website: '',
            youtube: ''
        },
        photos: currentUser[0].photos,
        aboutMe: currentUser[0].status,
    }
    return defaultUserObject
}






export const getUserLocalStatus = (id) => {
    let currentUser = initialState.localUsers.items.filter((item) => item.id == id)
    if (currentUser && currentUser[0].status) {
        return currentUser[0].status
    }
    return ''
}



export const localgetUsers = (currentPage, pageSize) => {
    const lefBorder = (currentPage - 1) * 5 + 1;
    const rightBorder = currentPage * 5;
    let filterObj = initialState.localUsers.items.filter((item, index) => index >= lefBorder && index <= rightBorder)
    console.log(filterObj)
    return { ...initialState.localUsers, items: filterObj }
}


export const updateLocalStstus = (status) => {
    const data = {
        data: { status: status },
        resultCode: 0,
        messages: [],
    }
    return data
}









export const onChangeLocalProfile = (profile) => {
    console.log(profile)
    const resultData = {
        data: {
            resultCode: 0
        }
    }
    const me = {
        aboutMe: profile.aboutMe || initialState.aboutMe,
        contacts:
        {
            facebook: profile.contacts ? profile.contacts.facebook : initialState.me.contacts.facebook ,
            github: profile.contacts ? profile.contacts.github : initialState.me.contacts.github,
            instagram: profile.contacts ? profile.contacts.instagram : initialState.me.contacts.instagram,
            mainLink: profile.contacts ? profile.contacts.mainLink : initialState.me.contacts.mainLink,
            twitter: profile.contacts ? profile.contacts.twitter : initialState.me.contacts.twitter,
            vk: profile.contacts ? profile.contacts.vk : initialState.me.contacts.vk,
            website: profile.contacts ? profile.contacts.website : initialState.me.contacts.website,
            youtube: profile.contacts ? profile.contacts.youtube : initialState.me.contacts.youtube
        },
        fullName: profile.fullName || initialState.fullName,
        lookingForAJob:  profile.lookingForAJob || initialState.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription || initialState.lookingForAJobDescription,
        photos: { small: 'https://social-network.samuraijs.com/activecontent/images/users/8733/user.jpg?v=11', large: 'https://social-network.samuraijs.com/activecontent/images/users/8733/user.jpg?v=11' },
        userId: 1079
    }



    initialState.me = { ...initialState, ...initialState.me, me: me }



    return resultData

}


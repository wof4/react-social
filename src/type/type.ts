
export type postsType = {
    id: number
    message: string
    LikesCount: number
}

export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type photosTypeObj = {
    large?: string | null
    small?: string | null
}





export type photosType = {
    small: string | null
    large: string | null
}

export type profileUserType = {
    userId: number
    lookingForAJob: boolean 
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType
    aboutMe: string
}

export type usersType = {
    id: number
    name: string
    status: string
    photos: photosType
    followed?: boolean
}

export type resultType<D = {}> = {
    data: D
    resultCode: number
    messages: Array<string>
}
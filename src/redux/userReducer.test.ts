import usersReducer, { actions, initialStateType } from "./usersReducer";

let state: initialStateType
beforeEach(()=> {
    state = {
        users:[
            { id: 0, name: "Sasha 0", status: "status 0", photos: { small: null, large: null }, followed: true, },
            { id: 1, name: "Sasha 1", status: "status 1", photos: { small: null, large: null }, followed: true, },
            { id: 2, name: "Sasha 2", status: "status 2", photos: { small: null, large: null }, followed: false, },
            { id: 3, name: "Sasha 3", status: "status 3", photos: { small: null, large: null }, followed: false, }
        ],
        pageSize: 5,
        totalUserCount: 0,
        currentPage: 1,
        isFething: false,
        followedProgress: [],
    };
})





test("follow success", () => {
    const newState = usersReducer(state, actions.followSuccess(2))

    expect(newState.users[0].followed).toBeTruthy()
    expect(newState.users[1].followed).toBeTruthy()
    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})


test("unfollow success", () => {
    const newState = usersReducer(state, actions.unfollowSuccess(0))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
    expect(newState.users[2].followed).toBeFalsy()
    expect(newState.users[3].followed).toBeFalsy()
})
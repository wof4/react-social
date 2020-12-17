import { actions, follow, getPage, getUsers, unfollow } from './usersReducer';
import { following, getFollowStatusPostType } from '../api/followApi';
import { getUsersType, userApi } from '../api/usersApi';
jest.mock('../api/followApi')
jest.mock('../api/usersApi')

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    getStateMock.mockClear()
    dispatchMock.mockClear()
})


const folowingData: getFollowStatusPostType = {
    resultCode: 0,
    messages: [],
    data: {}
};

const followingMock = following as jest.Mocked<typeof following>

followingMock.getFollowStatus.mockReturnValue(Promise.resolve(folowingData))

test('follow success thunc', async () => {
    const followThunc = follow(1)
    await followThunc(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.followedInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.followedInProgress(false, 1))
})


test('unfollow success thunc', async () => {
    const unfollowThunc = unfollow(1)
    await unfollowThunc(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.followedInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.followedInProgress(false, 1))
})








const usersApiData: getUsersType = {
    items: [
        {id: 0, name: 'Вася 0', status: 'привет', photos: { small: null, large: null }, followed: true },
        {id: 1, name: 'Вася 1', status: 'привет', photos: { small: null, large: null }, followed: true },
        {id: 2, name: 'Вася 2', status: 'привет', photos: { small: null, large: null }, followed: false },
        {id: 3, name: 'Вася 3', status: 'привет', photos: { small: null, large: null }, followed: false },
        {id: 4, name: 'Вася 4', status: 'привет', photos: { small: null, large: null }, followed: true },
    ],
    totalCount: 8364,
    error: null
}

const userApiMock = userApi as jest.Mocked<typeof userApi>
userApiMock.getUsers.mockReturnValue(Promise.resolve(usersApiData))

test('get users thunc', async () => {
    const getUsersThunc = getUsers(1, 5)
    await getUsersThunc(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(4)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFetching(true))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setUsers(usersApiData.items))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setUserCounter(usersApiData.totalCount))
    expect(dispatchMock).toHaveBeenNthCalledWith(4, actions.toggleFetching(false))
})




const getPageData: getUsersType = {
    items: [
        {id: 0, name: 'Вася 0', status: 'привет', photos: { small: null, large: null }, followed: true },
        {id: 1, name: 'Вася 1', status: 'привет', photos: { small: null, large: null }, followed: true },
        {id: 2, name: 'Вася 2', status: 'привет', photos: { small: null, large: null }, followed: false },
        {id: 3, name: 'Вася 3', status: 'привет', photos: { small: null, large: null }, followed: false },
        {id: 4, name: 'Вася 4', status: 'привет', photos: { small: null, large: null }, followed: true },
    ],
    totalCount: 8364,
    error: null
}

userApiMock.getUsers.mockReturnValue(Promise.resolve(getPageData))

test("get page thunc", async () => {

const getPageThunc = getPage(1, 5)
await getPageThunc(dispatchMock, getStateMock, {})
expect(dispatchMock).toBeCalledTimes(4)
expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFetching(true))
expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setPage(1))
expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setUsers(getPageData.items))
expect(dispatchMock).toHaveBeenNthCalledWith(4, actions.toggleFetching(false))
})




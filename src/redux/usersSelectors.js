export const getUsersSelector = (state) => state.usersPage.users;

export const getPageSize = (state) => state.usersPage.pageSize;

export const getTotalUserCount = (state) => state.usersPage.totalUserCount;

export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getIsFething = (state) => state.usersPage.isFething;

export const getFollowedProgress = (state) => state.usersPage.followedProgress;

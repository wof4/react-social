import { appStateType } from "./reduxStore";

export const getUsersSelector = (state: appStateType) => state.usersPage.users;

export const getPageSize = (state: appStateType) => state.usersPage.pageSize;

export const getTotalUserCount = (state: appStateType) => state.usersPage.totalUserCount;

export const getCurrentPage = (state: appStateType) => state.usersPage.currentPage;

export const getIsFething = (state: appStateType) => state.usersPage.isFething;

export const getFollowedProgress = (state: appStateType) => state.usersPage.followedProgress;

import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '66eaa091-b1b1-422c-b2ae-3ed8be8735b4',
  },
});

export const userApi = {

  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then((response) => response.data);
  },

  getUser(userId) {
    return instance.get(`profile/${userId}`)
      .then((response) => response.data);
  },

  updateStatus(status) {
    return instance.put('profile/status', { status })
      .then((response) => response.data);
  },

  login(email, password, rememberMe, captcha = null) {
    return instance.post('auth/login', {
      email, password, rememberMe, captcha,
    });
  },

  logout() {
    return instance.delete('auth/login');
  },

  getCaptcha() {
    return instance.get('security/get-captcha-url');
  },

  onChangePhoto(photo) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  onChangeProfile(profile) {
    return instance.put('profile', profile);
  },
};

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const followig = {
  getFollowStatus(id, buttonStatus) {
    if (buttonStatus === 'delete') {
      return instance.delete(`follow/${id}`)
        .then((response) => response.data);
    }
    return instance.post(`follow/${id}`)
      .then((response) => response.data);
  },
};

export const loginApi = {
  getLoginStatus() {
    return instance.get('auth/me');
  },
};

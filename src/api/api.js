import axios from "axios";
import { login } from "../redux/authReducer";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "e060da06-7423-4b8b-b7eb-1237ab224fc4",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollow(u) {
    return instance.delete(`follow/${u.id}`);
  },
  follow(u) {
    return instance.post(`follow/${u.id}`);
  },
  showUsersProfile(userId) {
    console.warn("please use profileAPI.showUsersProfile :(");
    return profileAPI.showUsersProfile(userId);
  },
};

export const profileAPI = {
  showUsersProfile(userId) {
    return instance.get("profile/" + userId);
  },
  getStatus(userId) {
    return instance.get("profile/status/" + userId);
  },
  updateStatus(status) {
    return instance.put("profile/status", { status: status });
  },
};
export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe) {
    return instance.post(`/auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`/auth/login`);
  },
};

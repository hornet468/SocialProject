import axios from "axios";

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
    return instance.get("profile/" + userId);
  },
};
export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
};

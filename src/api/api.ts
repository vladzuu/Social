import { UserProfileType } from './../redux/profile-reducer';
import { UsersType } from '../redux/find-user-slice';
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': 'b9394587-3e7a-482d-a7f6-fa24cc2f35ca' }
})

interface Follow {
  resultCode: number
  messages: string[]
  data: {}
}
export const usersApi = {
  getUsers(pageNumber = 1) {
    return instance.get(`users?page=${pageNumber}`)
  },
  follow(userId: number) {
    return instance.post<Follow>(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
}


export const profileApi = {
  logout() {
    return instance.post('auth/logout')
  },
  login(userData: any) {
    return instance.post('auth/login', { ...userData })
  },
  myAccount() {
    return instance.get('auth/me')
  },
  setStatus(status: string) {
    return instance.put('/profile/status', { status })
  },
  getUserProfile(id: number) {
    return instance.get<UserProfileType>(`profile/${id}`)
  },
  getStatus(id: number) {
    return instance.get(`profile/status/${id}`)
  },
  addPhotoProfile(photoFile: any) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData);
  }
}

export const news = {
  getNews() {
    return axios.get('https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=b632ed81fe45482e8a07d031db3894a2')
  }
}
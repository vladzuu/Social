import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: { 'API-KEY': 'b9394587-3e7a-482d-a7f6-fa24cc2f35ca' }
})

export const usersApi = {
   getUsers(pageNumber = 1) {
      return instance.get(`users?page=${pageNumber}`)
   },
   follow(userId) {
      return instance.post(`follow/${userId}`)
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`)
   },
}


export const profileApi = {
   myAccount() {
      return instance.get('auth/me')
   },
   setStatus(status) {
      return instance.put('/profile/status', { status })
   },
   getUserProfile(id) {
      return instance.get(`profile/${id}`)
   },
   getStatus(id) {
      return instance.get(`profile/status/${id}`)
   },
   addPhotoProfile(photoFile) {
      const formData = new FormData();
      formData.append("image", photoFile);
      return instance.put(`profile/photo`, formData);
   }
}
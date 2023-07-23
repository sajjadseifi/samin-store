import { createSlice } from '@reduxjs/toolkit'
import { users } from '../../helper/data/users'
const initialState = {
   data: users,
   info: {
      id: null,
      username: null,
   }
}
export const authSlice = createSlice({
   name: 'auth',
   initialState: initialState,
   reducers: {
      logout: (state) => {
         state.info = initialState.info
         localStorage.removeItem('token')

         return state
      },
      login: (state, action) => {
         console.log(state, action)
         const { username, password } = action.payload
         const user = state.data
            .find(u => (
               u.username == username &&
               u.password == password
            ))
         if (user) {
            const { id } = user
            state.info = { id, username }
            localStorage.setItem('token', id)
         }

         return state
      },
   },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
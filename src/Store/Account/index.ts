import User from '@/Models/User'
import { createSlice } from '@reduxjs/toolkit'

const account = createSlice({
  name: 'account',
  initialState: { user: null } as AccountState,
  reducers: {
    setUser: (state, { payload: { user } }: AccountPayload) => {
      // console.log('store user', user)
      if (typeof user !== 'undefined') {
        //console.log('store user', user)
        state.user = user
      }
    },
  },
})

export const { setUser } = account.actions

export default account.reducer

export type AccountState = {
  user: User | null
}

type AccountPayload = {
  payload: Partial<AccountState>
}

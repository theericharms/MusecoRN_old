import { api } from '@/Services/api'
import Authenticate from './Authenticate'
import fetchOne from './fetchOne'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchOne: fetchOne(build),
    authenticate: Authenticate(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchOneQuery, useAuthenticateMutation } = userApi

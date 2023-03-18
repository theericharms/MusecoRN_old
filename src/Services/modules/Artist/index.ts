import { api } from '@/Services/api'
import getArtistByKey from './GetArtistByKey'

export const artistApi = api.injectEndpoints({
  endpoints: (build) => ({
    getArtistByKey: getArtistByKey(build),
  }),
  overrideExisting: false,
})

export const { useLazyGetArtistByKeyQuery } = artistApi

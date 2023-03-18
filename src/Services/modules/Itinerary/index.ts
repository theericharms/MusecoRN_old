import { api } from '@/Services/api'
import GetItineraryList from './GetItineraryList'

export const itineraryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getItineraryList: GetItineraryList(build),
  }),
  overrideExisting: false,
})

export const { useLazyGetItineraryListQuery } = itineraryApi

import { api } from '@/Services/api'
import getCountries from './GetCountries'
import getCountryById from './GetCountryById'

export const countryApi = api.injectEndpoints({
  reducerPath: "countryApi",
  endpoints: build => ({
    getCountries: getCountries(build),
    getCountryById: getCountryById(build)
  }),
  overrideExisting: false,
})

export const { useLazyGetCountriesQuery, useLazyGetCountryByIdQuery } = countryApi

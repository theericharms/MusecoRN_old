import { Country } from '@/Models/Country'
import { createSlice } from '@reduxjs/toolkit'

const country = createSlice({
  name: 'country',
  initialState: { allCountries: null } as CountryState,
  reducers: {
    setAllCountries: (state, { payload: { allCountries } }: CountryPayload) => {
      if (typeof allCountries !== 'undefined') {
        state.allCountries = allCountries
      }
    },
    setSelectedCountry: (
      state,
      { payload: { selectedCountry } }: CountryPayload,
    ) => {
      if (!state.selectedCountry) {
        if (typeof selectedCountry !== 'undefined') {
          state.selectedCountry = selectedCountry
        }
      }
    },
  },
})

export const { setAllCountries, setSelectedCountry } = country.actions

export default country.reducer

export type CountryState = {
  allCountries: Country[] | null
  selectedCountry: Country | null
}

type CountryPayload = {
  payload: Partial<CountryState>
}

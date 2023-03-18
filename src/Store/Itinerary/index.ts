import { ItineraryBookings } from '@/Models/ItineraryBookings'
import { createSlice } from '@reduxjs/toolkit'

const itinerary = createSlice({
  name: 'itinerary',
  initialState: { itineraryBookings: null } as ItineraryState,
  reducers: {
    setItineraryBookings: (
      state,
      { payload: { itineraryBookings } }: ItineraryPayload,
    ) => {
      // console.log('setItineraryBookings', itineraryBookings)
      if (typeof itineraryBookings !== 'undefined') {
        state.itineraryBookings = itineraryBookings
      }
    },
  },
})

export const { setItineraryBookings } = itinerary.actions

export default itinerary.reducer

export type ItineraryState = {
  itineraryBookings: ItineraryBookings | null
}

type ItineraryPayload = {
  payload: Partial<ItineraryState>
}

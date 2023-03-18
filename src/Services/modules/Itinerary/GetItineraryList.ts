import { ItineraryBookings } from '@/Models/ItineraryBookings'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<ItineraryBookings, void>({
    query: () => ({
      url: `Itinerary/GetItineraryList`,
      method: 'GET',
    }),
  })

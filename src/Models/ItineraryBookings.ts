import { Itinerary } from './Itinerary'

export type ItineraryBookings = {
  itineraryBookings_AdminUserId?: number
  itineraryBookings_ArtistId?: number
  itineraryBookings_ArtistKey?: string
  itineraryBookings_Bookings?: Itinerary[]
  itineraryBookings_VenueId?: number
}

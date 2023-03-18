import { ItineraryItem } from './ItineraryItem'
import { ItineraryType } from './ItineraryType'
import { FeeTotals } from './FeeTotals'

export type Itinerary = {
  itineraryBookings_Bookings: Itinerary[]
  itinerary_Id: number
  itinerary_Key: string
  itinerary_Name: string
  itinerary_ArtistId: number
  itinerary_BookingAgentUserId: string
  itinerary_ItineraryItemList: ItineraryItem[]
  itinerary_ItineraryTypeVMList: ItineraryType[]
  itinerary_SumFees: number
  itineraryItemListFeeTotals: FeeTotals[]
  itineraryItemListFeeTotal_GrandTotal: number
}

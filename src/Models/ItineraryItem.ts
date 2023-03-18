import { Airline } from './Airline'
import { Currency } from './Currency'
import { ItineraryItemArtistContract } from './ItineraryItemArtistContract'
import { ItineraryItemStatus } from './ItineraryItemStatus'
import { ItineraryType } from './ItineraryType'
import { Venue } from './Venue'

export type ItineraryItem = {
  itineraryItem_Id: number
  itineraryItem_ItineraryId: number
  itineraryItem_TypeId: number
  itineraryItem_VenueId: number
  itineraryItem_ArtistId: number
  itineraryItem_PresaleSold: number
  itineraryItem_StatusId: number
  itineraryItem_AddressId: number
  itineraryItem_CurrencyId: number
  SelectedItineraryItemStatusId: number
  SelectedItineraryTypeId: number
  itineraryItem_ItineraryType: ItineraryType
  itineraryItem_TicketPricePreSale: number
  itineraryItem_TicketPriceDOS: number
  itineraryItem_Fee: null
  itineraryItem_ItineraryKey: string
  itineraryItem_TypeName: null
  itineraryItem_DateTime: string
  itineraryItem_Time: null
  itineraryItem_Location: string
  itineraryItem_DiningNotes: null
  itineraryItem_AccomodationNotes: null
  itineraryItem_Notes: string
  itineraryItem_FlightAirlineId: null
  itinearyItem_FlightNumber: null
  itineraryItem_FlightDepartureTime: null
  itineraryItem_FlightAirport: null
  itineraryItem_FlightAirline: null
  itineraryItem_BandRoleId: null
  itineraryItem_Dining: boolean
  itineraryItem_Accomodation: boolean
  itineraryItem_CurrencyVM: Currency
  itineraryItem_ItineraryItemStatus: ItineraryItemStatus
  itineraryItem_Status: ItineraryItemStatus
  itineraryItemEventVM: ItineraryItem
  itinearyItem_Venue: Venue
  itineraryItem_FlightAirlinesList: Airline[]
  itineraryItem_ItineraryTypeList: ItineraryType[]
  itineraryItem_ItineraryItemStatusList: ItineraryItemStatus[]
  itineraryItem_CurrencyList: Currency[]
  itineraryItem_ArtistContractVMList: ItineraryItemArtistContract[]
}

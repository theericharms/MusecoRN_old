import { Currency } from '@/Models/Currency'
import { Artist } from './Artist'
import { ItineraryItemEventType } from './ItineraryItemEventType'

export type ItineraryItemArtistContract = {
  ItineraryItemArtistContract_Id: number
  ItineraryItemArtistContract_ItinearyItemId: number
  ItineraryItemArtistContract_ArtistId: number
  ItineraryItemArtistContract_Headliner: boolean
  ItineraryItemArtistContract_Support: boolean
  itineraryItemArtistContract_ArtistFee: number
  ItineraryItemArtistContract_ArtistFeePercentage: number
  ItineraryItemArtistContract_PercentageDoor: boolean
  ItineraryItemArtistContract_PercentageBar: boolean
  ItineraryItemArtistContract_ArtistVM: Artist
  ItineraryItemArtistContract_CurrencyVM: Currency
  ItineraryItemArtistContract_EventTypeId: number
  ItineraryItemArtistContract_EventType: ItineraryItemEventType
  ItineraryItemArtistContract_UTC?: string
  ItineraryItemArtistContract_LengthMinutes: number
}

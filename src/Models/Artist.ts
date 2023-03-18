import { ArtistInvite } from '@/Models/ArtistInvite'
import { ApiUser } from '@/Models/ApiUser'
import { File } from '@/Models/File'
import { Invite } from './Invite'
import { ArtistWebSocialTypes } from '@/Models/ArtistWebSocialTypes'
import { USState } from '@/Models/USState'
import { Country } from '@/Models/Country'

export type Artist = {
  artist_Id: number
  artist_LocationStateId: number
  artist_LocationStateIdSelected: number
  artist_LocationCountryId: number
  artist_LocationCountryIdSelected: number
  artist_EventTypeId: number
  artist_ItinearyItemId: number
  artist_Active: boolean
  artist_Headliner: boolean
  artist_Name: string
  artist_UrlName: string
  artist_Key: string
  artist_LocationCity: string | null
  artist_LongDescription: string | null
  artist_ShortDescription: string | null
  artist_StagePlotUrl: string | null
  countryCodeSelected: string | null
  phoneNumberRaw: string | null
  artist_ContactPhoneCountryCode: string | null
  artist_SelectedContactPhoneCountryCode: string | null
  artist_ContactPhone: string | null
  artist_ContactEmail: string | null
  artist_WebisteUrl: string | null
  artist_ArtistAdminUserId: string | null
  artist_PromoterId: string | null
  aritst_BookingAgentId: string | null
  artist_BookingAgentEmail: string | null
  aritst_Rider: string | null
  artist_StripeAccountId: string | null
  returnUrl: string | null
  artist_CreatedAt: string
  artist_ModifiedAt: string | null
  artist_DeletedAt: string | null
  artist_InviteVM: ArtistInvite
  artist_ArtistAdminAccount: ApiUser | null
  artist_StagePlot: File
  artist_ArtistRider: File
  artist_InviteVMList: Invite[] | null
  artist_ImageList: File[]
  artistSocialWebTypes: ArtistWebSocialTypes[]
  uSStateList: USState[] | null
  countryList: Country[]
  countryCodeList: Country[]
}

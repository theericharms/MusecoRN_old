import { Address } from './Address'
import { Country } from './Country'
import { USState } from './USState'

export type Venue = {
  venue_Id: number
  venue_Key: string
  venue_Name: string
  venue_ContactName?: string
  venue_ContactEmail?: string
  venue_ContactPhone?: string
  venue_AddressId: number
  venue_ParkingDetails?: string
  venue_HasShowers: boolean
  venue_HasToilets: boolean
  venue_HasLaundry: boolean
  venue_HasGreenRoom: boolean
  venue_HasInternet: boolean
  venue_WifiName?: string
  venue_WifiPassword?: string
  venue_HouseBackline?: string
  venue_HouseTechSpecs?: string
  venue_Capacity: number
  venue_AvailableBackline?: string
  venue_StageSize?: string
  venue_AddressVM: Address
  Venue_USStateList: USState[]
  Venue_CountryList: Country[]
  Venue_AdministatorUserId: string
  //   Venue_AdministratorUserVM: ApiUser
}

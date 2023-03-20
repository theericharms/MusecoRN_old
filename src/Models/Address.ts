export type Address = {
  address_Id: number
  address_Road1: string
  address_Road2: string | null
  address_Road3: string | null
  address_City: string
  address_StateId: number | null
  address_StateIdSelected: number | null
  address_CountyId: number | null
  stateString: string | null
  countryString: string | null
  formattedAddress: string | null
  addressExists: boolean
  address_Lat: string | null
  address_Lng: string | null
  address_GooglePlaceId: string | null
  address_GoogleMapsUrl: string | null
  address_PostCode: string | null
  address_CountryId: number
  address_CountryIdSelected: number
  address_ComputedAddress: string
}

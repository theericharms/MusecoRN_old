import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { Country } from '@/Models/Country'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<Country, number>({
    query: (id) => `Country/${id}`,
  })

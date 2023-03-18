import { Artist } from '@/Models/Artist'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<Artist, string>({
    query: (artistKey) => `Artist/GetArtist/${artistKey}`,
  })

import { Artist } from '@/Models/Artist'
import { createSlice } from '@reduxjs/toolkit'

const artist = createSlice({
  name: 'artist',
  initialState: { artist: null } as ArtistState,
  reducers: {
    setArtist: (state, { payload: { artist } }: ArtistPayload) => {
      if (typeof artist !== 'undefined') {
        state.artist = artist
      }
    },
  },
})

export const { setArtist } = artist.actions

export default artist.reducer

export type ArtistState = {
  artist: Artist | null
}

type ArtistPayload = {
  payload: Partial<ArtistState>
}

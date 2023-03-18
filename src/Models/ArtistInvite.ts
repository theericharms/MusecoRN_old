import { Invite } from '@/Models/Invite'
import { Role } from './Role'

export type ArtistInvite = {
  artistId: number
  invite_ArtistKey: string
  roles: Role[] | null
  invite_RoleTypeId: string
  invite_EmailAddress: string | null
  invite_FromUserId: string | null
  invite_ArtistId: number
  inviteVMList: Invite[] | null
}

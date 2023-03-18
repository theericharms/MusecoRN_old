import { Invite } from '@/Models/Invite'

export type User = {
  id: string
  userName: string
  email: string
  token: string
  openInvite: Invite
}

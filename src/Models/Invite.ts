import User from './User'
import Role from './Role'

export default interface Invite {
    "invite_Id": number,
    "invite_Key": string,
    "invite_Active": boolean,
    "invite_RoleTypeId": string,
    "invite_ArtistId": number,
    "invite_FromUserEntityId": number,
    "invite_EntityTypeId": number,
    "invite_FromUserEntityName": string,
    "invite_ToUserId": string,
    "invite_FromUserId": string,
    "invite_EmailAddress": string,
    "invite_DateRequested": string,
    "invite_DateAccepted": string,
    "invite_InviteMessage": string,
    "fromUser": User,
    "toUser": User
    "fromRole": Role
    "toRole": Role
}
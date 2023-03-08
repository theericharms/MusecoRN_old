import User from '@/Models/User'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<User, AuthenticateCredentials>({
    query: (user: AuthenticateCredentials) => ({
      url: `Account/Login`,
      method: 'POST',
      // body: {
      //   Email: user.username,
      //   Password: user.password,
      // },
      body: {
        Email: 'eric@museco.io',
        Password: 'pp00))PP',
      },
    }),
  })

export type AuthenticateCredentials = {
  username: string
  password: string
}

import { Config } from '@/Config'
// import Bugsnag from '@bugsnag/react-native'
import { store } from '@/Store'

const Logger = {
  log: function (title, params) {
    try {
      if (Config.ENV === 'PRODUCTION') {
        console.log('logger prod', title)
        // return Bugsnag.leaveBreadcrumb(title)
      } else {
        // console.log(
        //   'store.getState().analytics.isLoggingEnabled',
        //   store.getState().analytics.isLoggingEnabled,
        // )
        if (store.getState().analytics.isLoggingEnabled) {
          var p = params

          if (typeof params === 'object') {
            try {
              p = params
            } catch (error) {
              p = null
            }
          }

          try {
            if (p != null || p !== undefined) {
              console.log(`${title} : ${typeof p} : `, p)
            } else {
              console.log(title)
            }

            // Bugsnag.leaveBreadcrumb(title)
          } catch (err) {
            // something
          }
        }
      }
    } catch (error) {
      // console.log('logger error', error)
    }
  },
}

export default Logger

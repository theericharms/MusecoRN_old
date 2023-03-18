import { sortBy, find, orderBy, reverse } from 'lodash'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { store } from '@/Store'

const Utilities = {
  sortShows: (items) => {
    // console.log('prepare to sort', items)

    const dates = sortBy(items, [
      function (o) {
        return o.date
      },
    ])

    // console.log('sorted dates', items)

    return dates
  },

  sortCashFlow: (dates) => {
    // console.log('sort cash flow', dates)

    const sorted = sortBy(dates, [
      function (o) {
        return o.date
      },
    ])

    return reverse(sorted)
  },

  sortCashFlowReasons: (reasons) => {
    // console.log('sort reasons', reasons)

    const sorted = sortBy(reasons, [
      function (o) {
        return o.text
      },
    ])

    return sorted
  },

  mapCurrencies: () => {
    const currencies = [
      { currency: 'cad', country: 'Canada', icon: '\u0024', selected: false },
      {
        currency: 'usd',
        country: 'United States',
        icon: '\u0024',
        selected: true,
      },
      { currency: 'mxn', country: 'Mexico', icon: '\u0024', selected: false },
      { currency: 'eur', country: 'France', icon: '\u20AC', selected: false },
      { currency: 'eur', country: 'Italy', icon: '\u20AC', selected: false },
      { currency: 'eur', country: 'Germany', icon: '\u20AC', selected: false },
      { currency: 'eur', country: 'Spain', icon: '\u20AC', selected: false },
      {
        currency: 'gbp',
        country: 'United Kingdom',
        icon: '\u00A3',
        selected: false,
      },
      {
        currency: 'chf',
        country: 'Switzerland',
        icon: 'CHF',
        selected: false,
      },
      {
        currency: 'dkk',
        country: 'Denmark',
        icon: 'kr',
        selected: false,
      },
    ]

    return currencies
  },

  getSelectedCurrency: () => {
    // const currency = store.getState().settings.currency
    // const selectedCurrency = find(currency, (item) => {
    //   return item.selected
    // })
    // return selectedCurrency
  },

  formatCurrency: (amount) => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    })

    formatter.format(2500) /* $2,500.00 */
  },

  sentenceCaseWords: (words) => {
    // debugger
    if (words && typeof words === 'string') {
      var rg = /(^\w{1}|(?:\.|\!|\?)\s*\w{1})/gi

      words = words.toLowerCase().replace(rg, function (toReplace) {
        return toReplace.toUpperCase()
      })

      return words
    } else {
      return words
    }
  },
}

export default Utilities

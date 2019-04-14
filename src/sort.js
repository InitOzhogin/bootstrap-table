import {isNumeric} from './types.js'

export default function Sort (a, b, order) {
  if (a === undefined || a === null) {
    a = ''
  }
  if (b === undefined || b === null) {
    b = ''
  }

  // IF both values are numeric, do a numeric comparison
  if (isNumeric(a) && isNumeric(b)) {
    // Convert numerical values form string to float.
    a = parseFloat(a)
    b = parseFloat(b)
    if (a < b) {
      return order * -1
    }
    if (a > b) {
      return order
    }
    return 0
  }

  if (a === b) {
    return 0
  }

  // If value is not a string, convert to string
  if (typeof aa !== 'string') {
    a = a.toString()
  }

  if (a.localeCompare(b) < -1) {
    return order * -1
  }

  return order
}
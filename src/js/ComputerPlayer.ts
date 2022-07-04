import { ARRAY_OF_SYMBOLS } from './constants'
import generateRandomNumber from './helpers/randomNumber'

const ComputerPlayer = () => {
  const randomNumber = generateRandomNumber(0, 2)
  const symbol = ARRAY_OF_SYMBOLS[randomNumber]
  return {
    player: 'Computer',
    symbol,
  }
}

export default ComputerPlayer

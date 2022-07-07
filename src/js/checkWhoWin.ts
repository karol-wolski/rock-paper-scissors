import { COMPUTER_PLAYER, DRAW, HUMAN_PLAYER, PAPER, ROCK, SCISSORS } from './constants'

const checkWhoWin = (user: string, computer: string) => {
  const check = `${user}${computer}`
  let result

  switch (check) {
    case `${PAPER}${SCISSORS}`:
    case `${ROCK}${PAPER}`:
    case `${SCISSORS}${ROCK}`:
      result = COMPUTER_PLAYER
      break
    case `${SCISSORS}${PAPER}`:
    case `${ROCK}${SCISSORS}`:
    case `${PAPER}${ROCK}`:
      result = HUMAN_PLAYER
      break
    case `${SCISSORS}${SCISSORS}`:
    case `${ROCK}${ROCK}`:
    case `${PAPER}${PAPER}`:
      result = DRAW
      break
    default:
      break
  }

  return result
}

export default checkWhoWin

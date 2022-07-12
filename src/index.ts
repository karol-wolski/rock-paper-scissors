import checkWhoWin from './js/checkWhoWin'
import ComputerPlayer from './js/ComputerPlayer'
import { COMPUTER_PLAYER, HUMAN_PLAYER } from './js/constants'
import displayResult from './js/displayResult'
import displaySymbols from './js/displaySymbols'
import HumanPlayer from './js/HumanPlayer'
import './styles/style.scss'

const init = () => {
  const buttons = document.querySelectorAll('.btn-symbol')
  const result = {
    human: 0,
    computer: 0,
  }

  buttons.forEach(button =>
    button.addEventListener('click', () => {
      const humanPlayer = HumanPlayer(button.getAttribute('data-symbol'))
      const computerPlayer = ComputerPlayer()
      const whoWin = checkWhoWin(humanPlayer.symbol, computerPlayer.symbol)
      if (whoWin === COMPUTER_PLAYER) result.computer += 1
      if (whoWin === HUMAN_PLAYER) result.human += 1
      displaySymbols(humanPlayer.symbol, computerPlayer.symbol)
      displayResult(result.human, result.computer)
    }),
  )
}

init()

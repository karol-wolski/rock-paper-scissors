import checkWhoWin from '../checkWhoWin'
import clearMain from '../clearMain'
import ComputerPlayer from '../ComputerPlayer'
import { COMPUTER_PLAYER, HUMAN_PLAYER } from '../constants'
import displayResult from '../displayResult'
import displaySymbols from '../displaySymbols'
import HumanPlayer from '../HumanPlayer'
import arena from '../ui/arena'
import backToTheMenu from '../ui/backToTheMenu'
import buttonsWithSymbols from '../ui/buttons-with-symbols'
import scoreboard from '../ui/scoreboard'

const playerComputerMode = () => {
  const main = document.querySelector('.main')
  clearMain()
  main.append(scoreboard())
  main.append(arena())
  main.append(buttonsWithSymbols())
  main.append(backToTheMenu())
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

export default playerComputerMode

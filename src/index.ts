import checkWhoWin from './js/checkWhoWin'
import ComputerPlayer from './js/ComputerPlayer'
import { COMPUTER_PLAYER, HUMAN_PLAYER } from './js/constants'
import displayResult from './js/displayResult'
import displaySymbols from './js/displaySymbols'
import HumanPlayer from './js/HumanPlayer'
import arena from './js/ui/arena'
import scoreboard from './js/ui/scoreboard'
import buttonsWithSymbols from './js/ui/buttons-with-symbols'
import './styles/style.scss'
import startMenu from './js/ui/startMenu'
import backToTheMenu from './js/ui/backToTheMenu'

const playerComputerMode = () => {
  const buttons = document.querySelectorAll('.btn-symbol')
  const main = document.querySelector('.main')
  main.innerHTML = scoreboard()
  main.innerHTML += arena()
  main.innerHTML += buttonsWithSymbols()
  backToTheMenu()
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

const init = () => {
  const main = document.querySelector('.main')
  main.innerHTML += startMenu()
  const playerComputerModeBtn = document.querySelector('#player-computer-mode')
  playerComputerModeBtn.addEventListener('click', () => playerComputerMode())
}

init()

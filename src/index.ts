import ComputerPlayer from './js/ComputerPlayer'
import HumanPlayer from './js/HumanPlayer'
import './styles/style.scss'

const init = () => {
  const buttons = document.querySelectorAll('.btn__symbol')
  let humanPlayer
  const computerPlayer = ComputerPlayer()

  buttons.forEach(button =>
    button.addEventListener('click', () => {
      humanPlayer = HumanPlayer(button.getAttribute('data-symbol'))
      console.log(humanPlayer, computerPlayer)
    }),
  )
}

init()

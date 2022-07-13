import clearMain from './js/clearMain'
import startMenu from './js/ui/startMenu'
import './styles/style.scss'

const init = () => {
  const main = document.querySelector('.main')
  clearMain()
  main.appendChild(startMenu())
}

init()

import playerComputerMode from '../modes/playerComputerMode'

const startMenu = () => {
  const menuTemplate = document.querySelector('#menu-template') as HTMLTemplateElement
  const clonMenuTemplate = menuTemplate.content.cloneNode(true) as HTMLElement
  clonMenuTemplate.querySelector('#player-computer-mode-btn').addEventListener('click', () => playerComputerMode())
  clonMenuTemplate.querySelector('#player-friend-mode-btn').addEventListener('click', () => playerComputerMode())
  return clonMenuTemplate
}

export default startMenu

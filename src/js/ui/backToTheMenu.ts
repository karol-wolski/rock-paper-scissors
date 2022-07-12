import clearMain from '../clearMain'
import startMenu from './startMenu'

const backToTheMenu = () => {
  const template = document.querySelector('#back-menu-template') as HTMLTemplateElement
  const cloneTemplate = template.content.cloneNode(true) as HTMLElement
  cloneTemplate.querySelector('#back-to-the-menu-btn').addEventListener('click', () => {
    const main = document.querySelector('.main')
    clearMain()
    main.append(startMenu())
  })
  return cloneTemplate
}

export default backToTheMenu

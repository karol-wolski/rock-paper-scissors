import startMenu from './startMenu'

const backToTheMenu = () => {
  const mainContainer = document.querySelector('.main')
  mainContainer.innerHTML += `
    <div class="btns">
      <button id="back-to-the-menu" class="btn">Back to select mode game</button>
    </div>
  `
  const btn = document.querySelector('#back-to-the-menu')
  btn.addEventListener('click', () => {
    mainContainer.innerHTML = startMenu()
  })
}

export default backToTheMenu

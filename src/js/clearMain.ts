const clearMain = () => {
  const main = document.querySelector('.main')
  while (main.firstChild) {
    main.firstChild.remove()
  }
}

export default clearMain

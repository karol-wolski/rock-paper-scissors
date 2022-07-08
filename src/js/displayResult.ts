const displayResult = (playerOne: number, playerTwo: number) => {
  const scoreEl = document.querySelector('#score')
  scoreEl.innerHTML = `${playerOne} : ${playerTwo}`
}

export default displayResult

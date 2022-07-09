const displaySymbols = (playerOneSymbol: string, playerTwoSymbol: string) => {
  const playerOne = document.querySelector('#arena-player-one')
  const playerTwo = document.querySelector('#arena-player-two')
  playerOne.innerHTML = `
  <img class="btn-symbol__icon" src="./assets/${playerOneSymbol}.png" alt="" />
  `
  playerTwo.innerHTML = `
  <img class="btn-symbol__icon" src="./assets/${playerTwoSymbol}.png" alt="" />
  `
}

export default displaySymbols

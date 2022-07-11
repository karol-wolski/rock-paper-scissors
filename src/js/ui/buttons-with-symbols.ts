const buttonsWithSymbols = () => {
  return `
    <div class="btns-symbol">
      <button id="symbol-rock" class="btn-symbol" data-symbol="rock" aria-labelledby="rock">
        <img class="btn-symbol__icon" src="./assets/rock.png" alt="" />
      </button>
      <button id="symbol-paper" class="btn-symbol" data-symbol="paper" aria-labelledby="paper">
        <img class="btn-symbol__icon" src="./assets/paper.png" alt="" />
      </button>
      <button id="symbol-scissors" class="btn-symbol" data-symbol="scissors" aria-labelledby="scissors">
        <img class="btn-symbol__icon" src="./assets/scissors.png" alt="" />
      </button>
    </div>
  `
}

export default buttonsWithSymbols

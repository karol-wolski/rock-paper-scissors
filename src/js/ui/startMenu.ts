const startMenu = () => {
  return `
    <div class="btns">
      <button id="player-computer-mode" class="btn">Play with computer</button>
      <button id="player-friend-mode" class="btn" disabled>Play with friend</button>
      <button id="player-random-mode" class="btn" disabled>Play with random oponnent</button>
    </div>
  `
}

export default startMenu

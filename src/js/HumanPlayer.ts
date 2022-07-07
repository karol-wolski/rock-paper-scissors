const HumanPlayer = (symbol: string) => {
  const playerName = localStorage.getItem('playerName') || 'Human'

  return {
    player: playerName,
    symbol,
  }
}

export default HumanPlayer

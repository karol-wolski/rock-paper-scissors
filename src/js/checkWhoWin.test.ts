import checkWhoWin from './checkWhoWin'
import { COMPUTER_PLAYER, DRAW, HUMAN_PLAYER, PAPER, ROCK, SCISSORS } from './constants'

describe('checkWhoWin', () => {
  it('should return computer for paper and scissors', () => {
    expect(checkWhoWin(PAPER, SCISSORS)).toBe(COMPUTER_PLAYER)
  })
  it('should return computer for scissors and rock', () => {
    expect(checkWhoWin(SCISSORS, ROCK)).toBe(COMPUTER_PLAYER)
  })
  it('should return computer for rock and paper', () => {
    expect(checkWhoWin(ROCK, PAPER)).toBe(COMPUTER_PLAYER)
  })
  it('should return human for paper and rock', () => {
    expect(checkWhoWin(PAPER, ROCK)).toBe(HUMAN_PLAYER)
  })
  it('should return human for scissors and paper', () => {
    expect(checkWhoWin(SCISSORS, PAPER)).toBe(HUMAN_PLAYER)
  })
  it('should return human for rock and scissors', () => {
    expect(checkWhoWin(ROCK, SCISSORS)).toBe(HUMAN_PLAYER)
  })
  it('should return draw for paper and paper', () => {
    expect(checkWhoWin(PAPER, PAPER)).toBe(DRAW)
  })
  it('should return draw for scissors and scissors', () => {
    expect(checkWhoWin(SCISSORS, SCISSORS)).toBe(DRAW)
  })
  it('should return draw for rock and rock', () => {
    expect(checkWhoWin(ROCK, ROCK)).toBe(DRAW)
  })
})

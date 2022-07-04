import * as genRandomNumber from './helpers/randomNumber'
import ComputerPlayer from './ComputerPlayer'
import { SCISSORS } from './constants'

describe('ComputerPlayer', () => {
  const finalResult = {
    player: 'Computer',
    symbol: SCISSORS,
  }

  beforeEach(() => {
    return jest.spyOn(genRandomNumber, 'default').mockReturnValue(2)
  })

  afterEach(() => {
    jest.spyOn(genRandomNumber, 'default').mockRestore()
  })

  it('should return an object {player: Computer, symbol: scissors}', () => {
    expect(ComputerPlayer()).toStrictEqual(finalResult)
  })
})

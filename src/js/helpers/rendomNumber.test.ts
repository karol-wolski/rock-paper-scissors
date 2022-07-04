import generateRandomNumber from './randomNumber'

describe('randomNumber', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'floor').mockReturnValue(2)
  })

  afterEach(() => {
    jest.spyOn(global.Math, 'floor').mockRestore()
  })

  it('should return number two', () => {
    expect(generateRandomNumber(0, 12)).toBe(2)
  })
})

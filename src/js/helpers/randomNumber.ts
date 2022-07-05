const generateRandomNumber = (rangeStart: number, rangeEnd: number): number =>
  Math.floor(Math.random() * (rangeEnd - rangeStart + 1) + rangeStart)

export default generateRandomNumber

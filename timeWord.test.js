const {timeWord} = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('Midnight', () => {
    const result = timeWord("00:00")
    expect(result).toBeUndefined()
  })

  test('Noon', () => {
    const result = timeWord("12:00")
    expect(result).toBeUndefined()
  })

  test('invalid time - hour greater than 23', () => {
    const res = jest.spyOn(console, "log").mockImplementation(() => {})
    timeWord("24:45");
    expect(res).toHaveBeenCalledWith("Invalid Time")
    res.mockRestore();
  });

  test('invalid time - minute greater than 59', () => {
    const res = jest.spyOn(console, 'log').mockImplementation(() => {});
    timeWord("12:60");
    expect(res).toHaveBeenCalledWith("Invalid Time");
    res.mockRestore();
  });

  test('invalid time - negative hour', () => {
    const res = jest.spyOn(console, 'log').mockImplementation(() => {});
    timeWord("-1:30");
    expect(res).toHaveBeenCalledWith("Invalid Time");
    res.mockRestore();
  });

  test('invalid time - negative minute', () => {
    const res = jest.spyOn(console, 'log').mockImplementation(() => {});
    timeWord("12:-5");
    expect(res).toHaveBeenCalledWith("Invalid Time");
    res.mockRestore();
  });

  test('invalid time - NaN', () => {
    const res = jest.spyOn(console, 'error').mockImplementation(() => {});
    timeWord("invalid");
    expect(res).toHaveBeenCalledWith("Error: NaN");
    res.mockRestore();
  });
});
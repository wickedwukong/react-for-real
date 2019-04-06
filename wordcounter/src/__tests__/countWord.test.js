import countWords from '../countWords'

describe('count words function', () => {
  it('count correct number of words', () => {
    expect(countWords("hello world ")).toBe(2);
  });

  it('count empty words', () => {
    expect(countWords('')).toBe(0);
  });
});

import {practiceTest} from "./index";

describe('Test for initial Jest setup.', () => {
  describe('practiceTest', () => {
    test('Given Hello World, return Hello World!', () => {
      const arg: string = 'Hello World';
      const expected: string = 'Hello World!';
      expect(practiceTest(arg)).toBe(expected);
    });
  });
});

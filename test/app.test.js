import { getMultiples } from '../src/app';

describe('app', function() {
  it('does nothing', function() {
    expect(true).toBe(true);
  });
});

describe('app', function() {
  it("should return multiple 30 as an array given 30 as an input!", function () {
    expect(getMultiples(30)).toStrictEqual(expect.arrayContaining([30, 60, 90, 120]));
  });
});

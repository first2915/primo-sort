import { merge } from '../src/merge';

describe('merge()', () => {
  it('merges typical arrays', () => {
    expect(merge([9,7,5,3,1], [0,2,4,6,8], [-5,-1,10]))
      .toEqual([-5,-1,0,1,2,3,4,5,6,7,8,9,10]);
  });

  it('handles duplicates and negatives', () => {
    expect(merge([5,5,0,-2], [-2,0,3], [-1,4,5]))
      .toEqual([-2,-2,-1,0,0,3,4,5,5,5]);
  });

  it('handles empties', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([3,2,1], [], [])).toEqual([1,2,3]);
    expect(merge([], [1,2], [3,4])).toEqual([1,2,3,4]);
  });

  it('handles single element arrays', () => {
    expect(merge([3], [2], [1])).toEqual([1,2,3]);
    expect(merge([3], [], [1])).toEqual([1,3]);
  });
});

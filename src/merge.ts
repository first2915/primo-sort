/**
 * Merge three sorted collections into ascending order without using sort().
 * - collection_1: sorted DESC (max -> min)
 * - collection_2: sorted ASC (min -> max)
 * - collection_3: sorted ASC (min -> max)
 * Returns: new array sorted ASC.
 * Time complexity O(n), space O(1) extra (excluding output).
 */
export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const result: number[] = [];
  let i = collection_1.length - 1; // read backwards -> ascending
  let j = 0;                       // forward
  let k = 0;                       // forward

  while (i >= 0 || j < collection_2.length || k < collection_3.length) {
    const a = i >= 0 ? collection_1[i] : Number.POSITIVE_INFINITY;
    const b = j < collection_2.length ? collection_2[j] : Number.POSITIVE_INFINITY;
    const c = k < collection_3.length ? collection_3[k] : Number.POSITIVE_INFINITY;

    if (a <= b && a <= c) {
      result.push(a); i--;
    } else if (b <= a && b <= c) {
      result.push(b); j++;
    } else {
      result.push(c); k++;
    }
  }
  return result;
}

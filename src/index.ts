import { merge } from './merge';

// Example
const c1 = [9, 7, 5, 3, 1];        // desc
const c2 = [0, 2, 4, 6, 8];        // asc
const c3 = [-5, -1, 10];           // asc
console.log(merge(c1, c2, c3));    // [-5,-1,0,1,2,3,4,5,6,7,8,9,10]

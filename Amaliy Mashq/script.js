const sameFirstLast = arr => arr[0] === arr.at(-1);
const numbers = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
const oneCount = (...arr) => numbers[arr.flat().filter(n => n === 1).length];
const answerCell = (...arr) => arr.every(val => val === arr[0]);
const blackjack = (...arr) => {
    let max = Math.max(...arr);
    let strArr = [...max.toString()].map(digit => numbers[digit]);
    return { max_number: max, arr: strArr, arr_length: strArr.length };
};

const removeDups = arr => [...new Set(arr)];

const getSum = arr => {
    let sum = arr.flat(Infinity).reduce((a, b) => a + b, 0);
    return { sum: sum > 10 ? sum : numbers[sum] };
};

const uniqueSort = arr => [...new Set(arr)].sort((a, b) => a - b);

const specialReverse = (str, filter_letter) =>
    Object.fromEntries(
        str.split(' ')
           .filter(word => word.includes(filter_letter))
           .map(word => [word, [...word].reverse().join('')])
    );

const max = arr => Math.max(...arr);

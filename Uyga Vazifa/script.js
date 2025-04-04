const countArrayEl = arr => {
    let obj = {};
    for (let el of arr) {
        if (obj[el]) {
            obj[el] += 1;
        } else {
            obj[el] = 1;
        }
    }
    return obj;
};

const firstLast6 = arr => {
    if (arr[0] === 6 || arr[arr.length - 1] === 6) {
        return true;
    }
    return false;
};

const midThree = arr => {
    const num = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
    if (arr.length % 2 === 0) {
        arr.push(1);
    }
    let mid = Math.floor(arr.length / 2);
    return [num[arr[mid - 1]], num[arr[mid]], num[arr[mid + 1]]];
};

const reverseWords = str => {
    let words = str.trim().split(/\s+/);
    let reversed = words.reverse().join(' ');
    return reversed;
};

const duplicateCount = str => {
    let obj = {};
    for (let el of str) {
        if (obj[el]) {
            obj[el] += 1;
        } else {
            obj[el] = 1;
        }
    }
    let counts = Object.values(obj).filter(el => el > 1);
    return Math.min(...counts);
};

const rev = num => {
    let absNum = Math.abs(num).toString();
    let reversed = absNum.split('').reverse().join('');
    return reversed;
};

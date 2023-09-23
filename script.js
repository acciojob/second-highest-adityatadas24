//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    let firstHighest = -Infinity;
    let secondHighest = -Infinity;

    for (let num of arr) {
        if (num > firstHighest) {
            secondHighest = firstHighest;
            firstHighest = num;
        } else if (num > secondHighest && num < firstHighest) {
            secondHighest = num;
        }
    }

    if (secondHighest === -Infinity) {
        return -Infinity;
    }

    return secondHighest;
}


// Test cases
console.log(secondHighest([5, 1, 2, 3, 4]));  // Output: 4
console.log(secondHighest([-1, -2, -3, -4, -5]));  // Output: -2
console.log(secondHighest([]));  // Output: -Infinity
console.log(secondHighest([1]));  // Output: -Infinity
console.log(secondHighest([1, 1, 1, 1, 1]));  // Output: -Infinity

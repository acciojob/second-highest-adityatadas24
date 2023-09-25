function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    let firstMax = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== firstMax) {
            secondMax = arr[i];
        }
    }
    if (secondMax === -Infinity) {
        return -Infinity;
    }

    return secondMax;
}


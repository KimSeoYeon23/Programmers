function solution(array) {
    let counts = {};
    for (let num of array) {
        counts[num] = (counts[num] || 0) + 1;
    }

    let maxCount = 0;
    let modes = [];
    for (let num in counts) {
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            modes = [Number(num)];
        } else if (counts[num] === maxCount) {
            modes.push(Number(num));
        }
    }

    if (modes.length > 1) {
        return -1;
    } else {
        return modes[0];
    }
}

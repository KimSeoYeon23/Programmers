function solution(arr, query) {
    for (let i=0; i < query.length; i++) {
        const cur = query[i]
        if (i % 2 === 0) {       
            arr = arr.slice(0, cur+1)
        } else {
            arr = arr.slice(cur)
        }
    }
    return arr;
}
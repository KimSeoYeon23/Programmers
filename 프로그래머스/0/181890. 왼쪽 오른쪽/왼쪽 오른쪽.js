function solution(str_list) {
    const leftIndex = str_list.findIndex((i) => i === 'l')
    const rightIndex = str_list.findIndex(i => i === 'r')
    
    if (leftIndex === -1 || rightIndex === -1) {
        if (rightIndex !== -1 && leftIndex === -1) {
            return str_list.slice(rightIndex+1)
        } else if (leftIndex !== -1 && rightIndex === -1) {
            return str_list.slice(0, leftIndex)
        }
        return []
    }
    
    if (leftIndex !== -1 && leftIndex < rightIndex) {
        return str_list.slice(0, leftIndex)
    } else if (rightIndex !== -1 && rightIndex < leftIndex) {
        return str_list.slice(rightIndex+1)
    }
}
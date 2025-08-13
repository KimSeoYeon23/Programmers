function solution(my_string, is_suffix) {
    const suffix = []
    for (let i = 0; i < my_string.length; i++) {
        suffix.push(my_string.substr(i, my_string.length))
    }
    
    return suffix.includes(is_suffix) ? 1 : 0
}
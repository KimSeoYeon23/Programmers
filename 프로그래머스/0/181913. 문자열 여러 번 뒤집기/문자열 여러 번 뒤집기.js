function solution(my_string, queries) {
    let result = my_string.split('');
    
    queries.forEach(([s, e]) => {
        const reversed = result.slice(s, e + 1).reverse();
        result.splice(s, e - s + 1, ...reversed);
    });
    
    return result.join('');
}
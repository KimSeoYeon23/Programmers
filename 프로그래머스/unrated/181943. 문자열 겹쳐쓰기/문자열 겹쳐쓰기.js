function solution(my_string, overwrite_string, s) {
    var answer = '';
    const endIdx = s + overwrite_string.length;
    const replaced_string = my_string.substring(0, s) + overwrite_string + my_string.substring(endIdx);
    return replaced_string;
}
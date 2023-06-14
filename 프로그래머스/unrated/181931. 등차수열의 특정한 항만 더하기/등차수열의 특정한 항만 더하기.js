function solution(a, d, included) {
   return included.reduce((sum, inc, idx) => {
        return inc ? sum + a + d * idx : sum;
    }, 0);
}
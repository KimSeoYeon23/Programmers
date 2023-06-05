function solution(quiz) {
    var answer = [];
    quiz.map((modi) => {
        const oneQuiz = modi.split(' ');
        
        const x = Number(oneQuiz[0]);
        const y = Number(oneQuiz[2]);
        
        let calc = 0;
        
        if(oneQuiz[1] === "+") {
            calc = x + y;
        } else if(oneQuiz[1] === '-') {
            calc = x - y;
        }
        const result = Number(oneQuiz[4]);
        
        if(calc === result) {
            answer.push("O");
        } else {
            answer.push("X");
        }
    })

    return answer;
}
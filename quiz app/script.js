window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const quizData = [
        {
            question: " Dünyada neçə okean var?",
            a: "1",
            b: "2",
            c: "3",
            d: "4",
            correct: "d",
        },
        {
            question: " Əlifbada neçə sait var?",
            a: "8",
            b: "9",
            c: "7",
            d: "10",
            correct: "b",
        },
        {
            question: " Əlifbada neçə samit var?",
            a: "23",
            b: "25",
            c: "32",
            d: "40",
            correct: "a",
        },
        {
            question: " Ada nədir?",
            a: "2 tərəfi su ilə ahəta olunmuş quru parçası",
            b: "3 tərəfi su ilə əhatə olunmuş quru parçası",
            c: "1 tərəfi su ilə əlatə olunmuş quru parçası ",
            d: "4 tərəfi su ilə əlatə olunmuş quru parçası",
            correct: "d",
        }

    ];
    const quiz = document.getElementById("quiz")
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");

    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");
    

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();


    function loadQuiz() {

        deselectAnswer();

        const currentQuizData = quizData[currentQuiz];

        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;


    }
    function getSelected() {
        let answer = undefined;

        answerEls.forEach((answerEl) => {
            if (answerEl.checked) {
                answer = answerEl.id;
            }
        });
        return answer;
    }

    function deselectAnswer() {
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
        });
    }

    submitBtn.addEventListener("click", () => {
        const answer = getSelected();
        
        

        if (answer) {
            if (answer === quizData[currentQuiz].correct) {
                score++;
            }

            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `
            <h2> Sizin cavabınız ${score} 
            /${quizData.length} suallar arası doğrudur <h2> 
            <button onclick ="location.reload()">Reload<buttn>`;

            }
        }
    });
});







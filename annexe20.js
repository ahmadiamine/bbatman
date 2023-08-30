function checkAnswers() {
    var score = 0;

    if (document.querySelector('.q1:checked')?.classList.contains('i1')) {
        score = score +1;
    }
    if (document.querySelector('.q2:checked')?.classList.contains('i1')) {
        score++;
    }
    if (document.querySelector('.q3:checked')?.classList.contains('i1')) {
        score++;
    }
    if (document.querySelector('.q4:checked')?.classList.contains('i1')) {
        score++;
    }
    if (document.querySelector('.q5:checked')?.classList.contains('i1')) {
        score++;
    }
    if (document.querySelector('.q6:checked')?.classList.contains('i1')) {
        score++;
    }
    if (document.querySelector('.q7:checked')?.classList.contains('i1')) {
        score++;
    }
    if (document.querySelector('.q8:checked')?.classList.contains('i1')) {
        score++;
    }
    if (document.querySelector('.q9:checked')?.classList.contains('i1')) {
        score++;
    }
    if (document.querySelector('.q10:checked')?.classList.contains('i1')) {
        score++;
    }

    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Your score: 1' + score + ' out of 10';
}

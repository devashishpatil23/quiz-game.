const correctAnswers =['A','B','A','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e =>{
    e.preventDefault();

let score = 0;

const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

// cheack answers
userAnswers.forEach((answers,index)=>{
    if(answers === correctAnswers[index]){
        score += 25
    }
});

// result display
result.querySelector('span').textContent =`${score}%`
result.classList.remove('d-none')
scrollTo(0,0);

let score2 = 0;
const timer = setInterval(()=>{
    result.querySelector('span').textContent =`${score2}%`
    if(score2 === score){
        clearInterval(timer);
    }else{
        score2++;
    }

},10);



});
const quizData = [
    {
        question: 'What does HTML stand for?',
        a: 'Hyper Text Markup Language',
        b: 'Home Tool Markup Language',
        c: 'Hyperlinks and Text Markup Language',
        d: 'Home and Text Markup Language',
        correct: 'a',

    } , {
        question: 'Who is making Web standards?',
        a: 'The World Wide Web Consortium',
        b: 'Microsoft',
        c: 'Google',
        d: 'Mozilla',
        correct: 'a',
    
    }, {
        question: 'Choose the correct HTML element for the largest heading: ',
        a:'<heading>',
        b: '<h1>',
        c: '<head>',
        d: '<h6>',
        correct: 'b',
    }, {
        question: 'What is the correct HTML element for inserting a line break?',
        a: '<break>',
        b: '<br>',
        c: '<lb>',
        d: '</br>',
        correct: 'b',
    }, {
        question: 'What is the correct HTML for adding a background color? ',
        a: '<body style="background-color:yellow;">',
        b: '<body bg ="yellow">',
        c: '<background>yellow</background>',
        d: '<body style="bg:yellow;">', 
        correct: 'a'
    } , {
        question: 'Choose the correct HTML element to define important text: ',
        a: '<b>',
        b: '<important>',
        c: '<strong>',
        d: '<i>',
        correct: 'c',
    }, {
        question: 'Choose the correct HTML element to define emphasized text: ',
        a: '<i>',
        b: '<italic>',
        c: '<em>',
        d: '<br>',
        correct: 'c',
    }, {
        question: 'Which character is used to indicate an end tag?',
        a: '*',
        b: '<',
        c: '^',
        d: '/',
        correct: 'd',
    }, {
        question: 'How can you make a numbered list?',
        a: '<ul>',
        b: 'list',
        c: '<ol>',
        d: '<dl>',
        correct: 'c',
    }, {
        question: 'How can you make a bulleted list?',
        a: '<ol>',
        b: '<ul>',
        c: '<dl>',
        d: '<list',
        correct: 'b',

    }, {
        question: 'Which HTML element defines the title of a document?',
        a: '<head>',
        b: '<meta>',
        c: '<title>',
        d: '<link>',
        correct: 'c',
    }, {
        question: 'Which HTML element is used to specify a header for a  document or section?',
        a: '<head>',
        b: '<header>',
        c: '<meta>',
        d: '<section>',
        correct: 'b',
    }, {
        question: 'What is the correct HTML for making a drop-down list ?',
        a: "<input type='dropdown'>",
        b: "<input type='list'>",
        c: '<list>',
        d: '<select>',
        correct: 'd',
    }, {
        question: 'What is correct HTML for making a text area ?',
        a: "<textarea>",
        b: "<input type='textbox'>",
        c: "<input type='textarea'>",
        d: "<input type='list'>",
        correct: 'a',
    }, {
        question: 'Which HTML attribute specifies as  alternate text for an image, if the image cannot be displayed?',
        a: 'src',
        b: 'alt',
        c: 'longdesc',
        d: 'title',
        correct: 'b',
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText  =  currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    const answerELs = document.querySelectorAll('.answer')
    let answer = undefined;

    answerEls.forEach((answerEl) => {

        if (answerEl.checked) {
            answer = answerEl.id;
        }
        // console.log (answer.checked);
    });

    return answer;

}


function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();
    // console.log (answer);

    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
          loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions .</h2> 
            <button onClick='location.reload()'>Reload</button>`;
        //   // TO DO : show the results
        //   alert("You have successfully finished the quiz!");
        }
    }
   
});
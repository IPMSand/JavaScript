// variables

let btn = document.querySelector('#new-quo');
let quo = document.querySelector('.quo');
let person = document.querySelector('.person');

// quotes array

const quolist = [{
    quo: '“It is better to be hated for what you are than to be loved for what you are not.”',
    person: '― Andre Gide, Autumn Leaves '
},
{
    quo: '“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.” ',
    person: '― Jane Austen, Northanger Abbey  '
},
{
    quo: '“It is our choices, Harry, that show what we truly are, far more than our abilities.”',
    person: '― J.K. Rowling, Harry Potter and the Chamber of Secrets '
},
{
    quo: '“Good friends, good books, and a sleepy conscience: this is the ideal life.” ',
    person: '― Mark Twain '
},
{
    quo: '“The fool doth think he is wise, but the wise man knows himself to be a fool.” ',
    person: '― William Shakespeare, As You Like It '
},
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quolist.length);

    quo.innerHTML = quolist[random].quo;
    person.innerHTML = quolist[random].quo;
})
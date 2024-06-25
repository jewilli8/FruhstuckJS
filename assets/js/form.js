const submitEl = document.querySelector('#submit');
const usernameInput = document.querySelector('#userName');
const titleInput = document.querySelector('#title');
const contentInput =document.querySelector('#postContent');


//Store user input

function generatePost (event){
    event.preventDefault();
    const post = {
        userName: usernameInput.value ,
        title: titleInput.value,
        content: contentInput.value.trim(),
    };
    localStorage.setItem('post'), JSON.stringify(post)
    
};

//Event listener for submit element
submitEl.addEventListener('click', generatePost);
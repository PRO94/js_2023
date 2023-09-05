// const list = document.getElementById('list');
const list = document.querySelector('#list');   // the same result as getElementById
// const userNameFilterElement = document.getElementById('filter');
const userNameFilterElement = document.querySelector('#filter');

let USERS = []

userNameFilterElement.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUser = USERS.filter((user) => user.name.toLowerCase().includes(value));
    render(filteredUser);
});

async function start() {
    list.innerHTML = 'Loading...'
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        });
        const data = await response.json();
        setTimeout(() => {  // waiting imitation
            USERS = data;
            render(data);
        }, 500);
    } catch(error) {
        console.error('Error', error);
        list.style.color = 'red'
        list.innerHTML = error.message;
    }
}

function render(users = []) {
    if (users.length === 0) { 
        list.innerHTML = 'No matched users';
    } else {
        const html = users.map(toHTML).join('');
        list.innerHTML = html;
    }
}

function toHTML(user) {
    return `
        <li class="list-group-item">${user.name}</li>
    `;
}

start();
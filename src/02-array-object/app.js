const titleInput = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

const notes = [
    {
        title: 'Go to a market',
        completed: true
    },
    {
        title: 'Buy some food',
        completed: false
    }];

function render() {
    listElement.innerHTML = '';

    if (notes.length === 0) {
        listElement.innerHTML = '<p class="text-light text-center">Empty list of notes</p>'
    }        

    notes.forEach((note, index) => {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note, index));  
    });
};

render();

createBtn.onclick = function() {
    if (titleInput.value.length === 0)
        return;

    const newNote = { title: titleInput.value, completed: false };
    
    notes.push(newNote);

    titleInput.value = '';

    render();
};

listElement.onclick = function(event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index);
        const type = event.target.dataset.type;
        if (type === "toggle") {
            notes[index].completed = !notes[index].completed;
        } else if (type === "remove") {
            notes.splice(index, 1);
        }

        render();
    }
}

function getNoteTemplate(note, index) {
    return `
    <li
        class="list-group-item d-flex justify-content-between align-items-center ${note.completed ? 'bg-success' : ''}"
    >
        <span>${note.title}</span>
        <span>
            <span
                class="btn btn-small border border-primary btn-${note.completed ? 'warning' : 'success'}" 
                data-index=${index}
                data-type="toggle">&check;</span>
            <span
                class="btn btn-small btn-danger border border-primary"
                data-index=${index}
                data-type="remove">&times;</span>
        </span>
    </li>
    `;
}
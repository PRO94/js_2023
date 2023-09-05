const outputElement = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

let mode = 'full';

setInterval(update, 1000);
update();

fullBtn.onclick = bindMode('full');
dateBtn.onclick = bindMode('date');
timeBtn.onclick = bindMode('time');

function update() {
    outputElement.textContent = format(mode);
}

function format(formatMode) {
    const now = new Date();

    switch(formatMode)
    {
        case 'time': 
            return now.toLocaleTimeString();
        case 'date': 
            return now.toLocaleDateString();
        case 'full': 
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        default:
            return 'Unknown mode'
    }
}

// Closure
function bindMode(name) {
    return function()
    {
        mode = name;
        update();
    }
}
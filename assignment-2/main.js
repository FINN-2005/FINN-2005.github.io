/* ================================================================ */
/* ================ D A R K   M O D E   T O G G L E =============== */
/* ================================================================ */

const toggle_button = document.querySelector('.toggle_button');

function toggle_dark_mode() {
    const body = document.body;
    if (body.classList.toggle('dark_theme')) {
        toggle_button.innerText = '🌙';
        localStorage.setItem('theme', 'dark_theme');
    }
    else {
        toggle_button.innerText = '☀️';
        localStorage.setItem('theme', 'light_theme');
    } 
}



/* ================================================================ */
/* ======================= N O T E S  A P P ======================= */
/* ================================================================ */

// note object {body: <body content>, datetime: <date and time>}
// notes object {title1: <obj1>, title2: <obj2>, ...}

let notes = {
    note1 : {body: 'body stuff 1', datetime: 'date time stuff 1'},
    note2 : {body: 'body stuff 2', datetime: 'date time stuff 2'},
    note3 : {body: 'body stuff 3', datetime: 'date time stuff 3'},
    note4 : {body: 'body stuff 4', datetime: 'date time stuff 4'},
    note5 : {body: 'body stuff 5', datetime: 'date time stuff 5'},
    note6 : {body: 'body stuff 6', datetime: 'date time stuff 6'},
    note7 : {body: 'body stuff 7', datetime: 'date time stuff 6'},
    note8 : {body: 'body stuff 8', datetime: 'date time stuff 6'},
    note9 : {body: 'body stuff 9', datetime: 'date time stuff 6'},
};

function render_notes() {
    const notes_grid = document.querySelector('.notes-grid');
    notes_grid.innerHTML = '';

    Object.entries(notes).forEach(([title, note]) => {

        const card = document.createElement('div');
        card.classList.add('note-card');
        // card.addEventListener('click', () => card_clicked(title));

        card.innerHTML = `
            <div class="note-title">${title}</div>
            <div class="note-datetime">${note.datetime}</div>
            <div class="note-body">${note.body}</div>
        `;

        notes_grid.appendChild(card);
    });
}

// function card_clicked(title) {

// }


// function make_new_note() {
//     const new_title = prompt('Enter Title');
// }








// on webpage init
document.addEventListener("DOMContentLoaded", init);
function init() {
    const theme = localStorage.getItem('theme');
    if (theme == 'dark_theme') toggle_dark_mode();  // null, light_theme -> default is light theme anyway
    document.body.classList.remove('no-transition');

    render_notes();
}

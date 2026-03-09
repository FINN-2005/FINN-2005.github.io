/* ================================================================ */
/* ================ D A R K   M O D E   T O G G L E =============== */
/* ================================================================ */

const toggle_button = document.querySelector('.toggle_button');

function toggle_dark_mode() {
    const body = document.body;

    if (body.classList.toggle('dark_theme')) {
        toggle_button.innerText = '🌙';
        localStorage.setItem('theme', 'dark_theme');
    } else {
        toggle_button.innerText = '☀️';
        localStorage.setItem('theme', 'light_theme');
    }
}


/* ================================================================ */
/* ======================= N O T E S  A P P ======================= */
/* ================================================================ */

let notes = {};     // empty

let active_note = null;
let delete_mode = false;


/* ===================== RENDER NOTES ===================== */

function render_notes() {
    const notes_grid = document.querySelector('.notes-grid');
    notes_grid.innerHTML = '';

    Object.entries(notes).forEach(([title, note]) => {

        const card = document.createElement('div');
        card.classList.add('note-card');

        card.addEventListener('click', () => card_clicked(title));

        card.innerHTML = `
            <div class="note-title">${title}</div>
            <div class="note-datetime">${note.datetime}</div>
            <div class="note-body">${note.body}</div>
        `;

        notes_grid.appendChild(card);
    });
}


/* ===================== OPEN NOTE ===================== */

function card_clicked(title) {
    if (delete_mode) {
        if (confirm(`Delete note "${title}"?`)) {
            delete notes[title];
            localStorage.setItem("notes", JSON.stringify(notes));
            render_notes();
        }
        delete_mode = false;
        return;
    }

    active_note = title;

    document.querySelector('.notes-grid').style.display = 'none';
    document.querySelectorAll('.primary-buttons').forEach(b => b.style.display = 'none');

    const viewer = document.querySelector('.note-viewer');
    const data = notes[title];

    viewer.style.display = 'block';

    const body = data.body || "";
    const placeholder = body === "" ? 'placeholder="Write your note..."' : "";

    viewer.innerHTML = `
        <input class="editor-title" value="${title}">
        <div class="editor-datetime">${data.datetime}</div>
        <textarea class="editor-body" ${placeholder}>${body}</textarea>

        <div class="editor-controls">
            <button class="save-note">Save</button>
            <button class="cancel-note">Cancel</button>
        </div>
    `;

    viewer.querySelector('.editor-title').focus();    

    viewer.querySelector('.save-note').addEventListener('click', save_note);
    viewer.querySelector('.cancel-note').addEventListener('click', close_editor);
}


/* ===================== CLOSE EDITOR ===================== */

function close_editor() {
    document.querySelector('.note-viewer').style.display = 'none';
    document.querySelector('.notes-grid').style.display = 'grid';
    document.querySelectorAll('.primary-buttons').forEach(b => b.style.display = '');
}


/* ===================== SAVE NOTE ===================== */

function save_note() {

    const title = document.querySelector('.editor-title').value.trim();
    const body = document.querySelector('.editor-body').value;
    const datetime = new Date().toLocaleString();
    
    if (!title) return;

    if (notes[title]) {
        alert("A note with this title already exists.");
        return;
    }
    
    /* creating new note */
    if (active_note === "__new__") {
        notes[title] = {
            body: body,
            datetime: datetime
        };
    } else {
        /* editing existing note */
        if (title !== active_note) {
            delete notes[active_note];
        }
        notes[title] = {
            body: body,
            datetime: datetime
        };
    }
    active_note = title;
    localStorage.setItem("notes", JSON.stringify(notes));

    close_editor();
    render_notes();
}


/* ===================== NEW NOTE ===================== */

function make_new_note() {
    active_note = "__new__";
    
    document.querySelector('.notes-grid').style.display = 'none';
    document.querySelectorAll('.primary-buttons').forEach(b => b.style.display = 'none');

    const viewer = document.querySelector('.note-viewer');
    viewer.style.display = 'block';

    const datetime = new Date().toLocaleString();

    viewer.innerHTML = `
        <input class="editor-title" placeholder="Title">
        <div class="editor-datetime">${datetime}</div>
        <textarea class="editor-body" placeholder="Write your note..."></textarea>

        <div class="editor-controls">
            <button class="save-note">Save</button>
            <button class="cancel-note">Cancel</button>
        </div>
    `;
    
    viewer.querySelector('.editor-title').focus();

    viewer.querySelector('.save-note').addEventListener('click', save_note);
    viewer.querySelector('.cancel-note').addEventListener('click', close_editor);
}


/* ===================== DELETE ONE NOTE ===================== */

function delete_note() {
    delete_mode = true;
    alert("Click a note to delete it.");
}


/* ===================== DELETE ALL NOTE ===================== */

function clear_notes() {
    if (!confirm("Clear all notes? This cannot be undone.")) return;
    notes = {};
    localStorage.removeItem("notes");
    render_notes();
}



/* ================================================================ */
/* ========================= INIT SYSTEM ========================== */
/* ================================================================ */

document.addEventListener("DOMContentLoaded", init);

function init() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark_theme') toggle_dark_mode();

    document.body.classList.remove('no-transition');

    const stored_notes = localStorage.getItem("notes");
    if (stored_notes) notes = JSON.parse(stored_notes);

    render_notes();
}
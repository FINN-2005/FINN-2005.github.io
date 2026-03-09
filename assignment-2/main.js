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

// on webpage init
document.addEventListener("DOMContentLoaded", init);
function init() {
    const theme = localStorage.getItem('theme');
    if (theme == 'dark_theme') toggle_dark_mode();  // null, light_theme -> default is light theme anyway
    document.body.classList.remove('no-transition');
}

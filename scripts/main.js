/* GENERAL & STARTUP JS */

log = console.log;

const dmStateSaved = JSON.parse(localStorage.getItem('dmState'));
log("darkMode = " + dmStateSaved);

/* ON "LOAD" EVENTS */

window.addEventListener("load", () => {
    /* FIRST DIV */
    let body = document.body;

    if (dmStateSaved == true) {
        document.body.classList.toggle('dark');
    }
    /* SECOND DIV */
    
})

/* FIRST DIV */

const toggle = document.getElementById('toggle');

/* toggle.addEventListener('change', () => {
	document.body.classList.toggle('dark');
}); */

/* darkMode = false; */
darkMode = dmStateSaved;
log(darkMode);

toggle.addEventListener('click', () => {
	document.body.classList.toggle('dark');
    if (darkMode == false) {
        darkMode = true;
    } else if (darkMode == true) {
        darkMode = false;
    }
    log("darkMode = " + darkMode);

    localStorage.setItem('dmState', JSON.stringify(darkMode));
});

/* SECOND DIV */


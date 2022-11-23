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

let screen = document.getElementById("calculator-screen");

let calcButtons = Array.from(document.getElementsByClassName("btnCalc"));

calcButtons.map(button => {
    button.addEventListener("click", (b) => {
        if (screen.innerText == "Noooooooo!") {
            screen.innerText = "";
        }

        switch (b.target.innerText) {
            case "CA":
                screen.innerText = "";
                break;

            case "←":
                if (screen.innerText) {
                    screen.innerText = screen.innerText.slice(0, -1);
                }
                break;

            case "=":
                try {
                    /* screen.innerText = eval(screen.innerText); */
                    result = eval(screen.innerText);
                    /* screen.innerText = result.toFixed(4); */
                    screen.innerText = Math.floor(result * 1000) / 1000;
                } catch {
                    screen.innerText = "Noooooooo!"
                }
                break;

            default:
                screen.innerText += b.target.innerText;
        }
    });
});

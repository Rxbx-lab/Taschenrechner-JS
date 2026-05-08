function appendOperation(operation) {

    document.getElementById("resultArea").textContent += operation;
}

function rechnen() {
    let container = document.getElementById("resultArea");
    let rawInput = container.textContent; 

    let sanitizedInput = rawInput.replace(/[^0-9+\-*/.()]/g, '');

    try {

        if (sanitizedInput.length > 0) {
            let result = new Function('return ' + sanitizedInput)();
            container.textContent = result;
        }
    } catch (e) {
        container.textContent = "Fehler";
        console.error("Berechnungsfehler:", e);
    }
}

function ac() {
    document.getElementById("resultArea").textContent = "";
}

function löschen() {
    let container = document.getElementById("resultArea");
    container.textContent = container.textContent.slice(0, -1);
}
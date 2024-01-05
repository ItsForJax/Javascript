let count = 0;

document.getElementById("decrease").onclick = function() {
    document.getElementById("counter").textContent = --count;
};

document.getElementById("increase").onclick = function() {
    document.getElementById("counter").textContent = ++count;
};

document.getElementById("reset").onclick = function() {
    document.getElementById("counter").textContent = 0;
};
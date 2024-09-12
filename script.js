function perkalian() {
    var x = 10;
    var y = 10;
    var z = x * y;

    return x * y;
}
const btn = document.getElementById("btn");

const tampilan = document.getElementById("tampilan");
btn.onclick = function() {
    tampilan.innerHTML = "Welcome Roys";
};
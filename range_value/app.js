var span = document.getElementById("span");
 var input = document.getElementById("input");
function show() {
 span.textContent = input.value + " / "+ input.max
}
show()
input.addEventListener("input", show);

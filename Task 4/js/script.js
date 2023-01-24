let btn = document.querySelectorAll(".btn");
let inpt = document.getElementById("input-str")
// console.log(btn)
Array.from(btn).forEach((button) => {
    button.addEventListener("click", (e) => {
        try {
            if (button.innerHTML == '=') {
                inpt.value = eval(inpt.value)
            }
            else if (button.innerHTML == 'AC') {
                inpt.value = '';
            }
            else if (button.innerHTML == 'Del') {
                inpt.value = inpt.value.slice(0, inpt.value.length - 1)
            }
            else {
                inpt.value += button.innerHTML;
            }
        }
        catch {

        }
    })
})

console.log("bottom")
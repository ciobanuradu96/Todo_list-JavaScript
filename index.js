let addButton = document.getElementById("add");
let inputField = document.getElementById("myInput");
let resultArea = document.getElementById("results");

addButton.addEventListener("click", () => {
    if (inputField.value != "") {
        inputVal = inputField.value;
        inputField.value = "";
        let div = document.createElement("div");
        div.setAttribute("class", "col-md-12 col-sm-12 col-xs-12")
        div.setAttribute("align", "center")
        div.innerHTML = inputVal
        resultArea.appendChild(div);
        let removeButton = document.createElement("i");
        removeButton.setAttribute("class", "fas fa-minus-square  remove-sign");
        div.appendChild(removeButton);
        removeButton.addEventListener("click", () => {
            div.removeChild(removeButton);
            resultArea.removeChild(div);
        })
    }
}, false)


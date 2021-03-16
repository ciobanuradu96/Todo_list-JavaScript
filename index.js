function getInputValue() {
    let inputVal = document.getElementById("myInput").value;
    document.getElementById("myInput").value = "";
    console.log(inputVal)
}
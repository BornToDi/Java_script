


var buttons = document.querySelectorAll(".submit");
console.log("buttons");
Array.from(buttons).map((button) => {

    button.addEventListener("click", function(e){
        console.log(e.target.innerText);
    });
});
const incrementbtn = document.getElementById("Increment_btn");
const decrementbtn = document.getElementById("Decrement_btn");
const current_value = document.getElementById("current_count");
const resetbtn = document.getElementById("reset_btn");
const colorchange = document.getElementById("color_change");
const container = document.getElementById("mainContainer");

// for increment button

incrementbtn.addEventListener("click",increment);
function increment(){
    const value = Number(current_value.innerText);
    if(value < 10){
        current_value.innerText = value + 1;
    }else{
        alert("Greater than 10 values are not allowed");
    }
}

// for decrement button

decrementbtn.addEventListener("click",decrement);
function decrement(){
    const value = Number(current_value.innerText);
    if(value > 0){
        current_value.innerText = value - 1;
    }else{
        alert("Negative values are not allowed")
    }
}

// for reset button
resetbtn.addEventListener("click",() => {
    current_value.innerText = 0;
})

// for color change 
colorchange.addEventListener("dblclick", () => {
    container.style.backgroundColor = randomColor();
    colorchange.style.backgroundColor = randomColor();
})

const randomColor = () =>{
    let val = "0123456789ABCDEF";
    let cons = "#";
    for(let i = 0; i < 6; i++){
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};
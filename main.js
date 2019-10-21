let boxes = document.querySelectorAll(".move");
let wrapper = document.querySelector(".wrapper")
let turn = document.querySelector('h2')
let reset = document.querySelector('.reset')
let j = 0;
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function (e) {
        e.preventDefault()
        console.log(e)
        if (e.target.style.backgroundColor != "") {   
        } else {
        if (j % 2 === 0) {
            e.target.style.backgroundColor = "red"
            j += 1
            turn.innerText = "Blue's Turn!"
            setTimeout(checkGame, 1000);
        } else {
            e.target.style.backgroundColor = "blue"
            j += 1
            turn.innerText = "Red's Turn!"
            setTimeout(checkGame, 1000);
        }
    }
    })
}
reset.addEventListener('click', function (e) {
    e.preventDefault();
    j = 0;
    for (let k = 0; k < boxes.length; k++) {
        boxes[k].style.backgroundColor = ""
    }
    turn.innerText = "Red Starts!"
})

function checkGame () {if 
((boxes[0].style.backgroundColor === "blue" && boxes[1].style.backgroundColor === "blue" && boxes[2].style.backgroundColor === "blue") ||
(boxes[3].style.backgroundColor === "blue" && boxes[4].style.backgroundColor === "blue" && boxes[5].style.backgroundColor === "blue") ||
(boxes[6].style.backgroundColor === "blue" && boxes[7].style.backgroundColor === "blue" && boxes[8].style.backgroundColor === "blue") ||
(boxes[0].style.backgroundColor === "blue" && boxes[3].style.backgroundColor === "blue" && boxes[6].style.backgroundColor === "blue") ||
(boxes[1].style.backgroundColor === "blue" && boxes[4].style.backgroundColor === "blue" && boxes[7].style.backgroundColor === "blue") ||
(boxes[2].style.backgroundColor === "blue" && boxes[5].style.backgroundColor === "blue" && boxes[8].style.backgroundColor === "blue") ||
(boxes[0].style.backgroundColor === "blue" && boxes[4].style.backgroundColor === "blue" && boxes[8].style.backgroundColor === "blue") ||
(boxes[2].style.backgroundColor === "blue" && boxes[4].style.backgroundColor === "blue" && boxes[6].style.backgroundColor === "blue")) {
    alert('Blue Wins!')
    j = 0;
    for (let k = 0; k < boxes.length; k++) {
        boxes[k].style.backgroundColor = ""
        turn.innerText = "Red Starts!"
    }
} else if 
((boxes[0].style.backgroundColor === "red" && boxes[1].style.backgroundColor === "red" && boxes[2].style.backgroundColor === "red") ||
(boxes[3].style.backgroundColor === "red" && boxes[4].style.backgroundColor === "red" && boxes[5].style.backgroundColor === "red") ||
(boxes[6].style.backgroundColor === "red" && boxes[7].style.backgroundColor === "red" && boxes[8].style.backgroundColor === "red") ||
(boxes[0].style.backgroundColor === "red" && boxes[3].style.backgroundColor === "red" && boxes[6].style.backgroundColor === "red") ||
(boxes[1].style.backgroundColor === "red" && boxes[4].style.backgroundColor === "red" && boxes[7].style.backgroundColor === "red") ||
(boxes[2].style.backgroundColor === "red" && boxes[5].style.backgroundColor === "red" && boxes[8].style.backgroundColor === "red") ||
(boxes[0].style.backgroundColor === "red" && boxes[4].style.backgroundColor === "red" && boxes[8].style.backgroundColor === "red") ||
(boxes[2].style.backgroundColor === "red" && boxes[4].style.backgroundColor === "red" && boxes[6].style.backgroundColor === "red")) {
    alert('Red Wins!')
    j = 0;
    for (let k = 0; k < boxes.length; k++) {
        boxes[k].style.backgroundColor = ""
        turn.innerText = "Red Starts!"
    }
} else if 
(boxes[0].style.backgroundColor !== "" && boxes[1].style.backgroundColor !== "" && boxes[2].style.backgroundColor !== "" &&
boxes[3].style.backgroundColor !== "" && boxes[4].style.backgroundColor !== "" && boxes[5].style.backgroundColor !== "" &&
boxes[6].style.backgroundColor !== "" && boxes[7].style.backgroundColor !== "" && boxes[8].style.backgroundColor !== "") {
    alert("It's a Tie!")
    j = 0;
    for (let k = 0; k < boxes.length; k++) {
        boxes[k].style.backgroundColor = ""
        turn.innerText = "Red Starts!"
    }
}
}

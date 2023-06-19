const theButtons = document.querySelectorAll("#buttonHolder img"), 
puzzleBoard = document.querySelector(".puzzle-board"), 
puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
dropZones = document.querySelectorAll(".drop-zone");
// store the dragged piece in a global variable
// We will need it in the handleDrop function
let draggedPiece;

console.log(puzzleBoard);

// event Listeners


function changeBGImage() {
    // console.log("changeBGImage called");

    // bug fix 2 will go here
    // will use a forEach loop and if statement
    // I want to loop through dropzones and check if there is puzzle
    // check firstChild
    // if there is a child
    // puzzlePieceDiv.appendChild(something needs to go here)

    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`

    // if(this.){
    //     return;
    // }
    // this.appendChild(draggedPiece);
}

function handleStartDrag() {
    // console.log("handleStartDrag called", this);
    draggedPiece = this;
}

function handleDragOver(e){
    e.preventDefault();
    // this will prevent the default dragover behaviour
    // e is short for event, could be e, evt a well
    console.log("dragged over me")

}


// This function solve the Bug 1
function handleDrop(e){
    e.preventDefault();
    // this will prevent the default dragover behaviour
    // e is short for event, could be e, evt a well
    console.log("dropped something on me");
    // This line moves the dragged piece from the left side of the board
    // into whatever dropzone we choose.

    if(this.children.length >= 1){
        return;
    }
    this.appendChild(draggedPiece);

}


theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

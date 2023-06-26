const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone"),
    puzzlePieceDiv = document.getElementsByClassName("puzzle-pieces");
// store the dragged piece in a global variable
// We will need it in the handleDrop function
let draggedPiece;

console.log(puzzleBoard);

// event Listeners


// --- These 2 functions will solve the bug 2 - puzzle pieces appearing in the drop zones on reset / choosing a new puzzle ---

function changeBGImage() {

    reset();

    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`
}

function reset() {

    dropZones.forEach(d => {

        if (d.children.length >= 1) {
            puzzlePieceDiv[0].appendChild(d.children[0]);
        }

    });

}

// --- End of the solution for the bug 2 ---

function handleStartDrag() {

    draggedPiece = this;

}

function handleDragOver(e) {

    e.preventDefault();
    
    console.log("dragged over me")

}


// --- This function solve the Bug 1 - You can drag and drop more than one puzzle piece into a drop zone ---

function handleDrop(e) {

    e.preventDefault();
   
    console.log("dropped something on me");
    // This line moves the dragged piece from the left side of the board
    // into whatever dropzone we choose.

    if (this.children.length >= 1) {
        return;
    }
    this.appendChild(draggedPiece);

}

// --- End of the solution for the bug 1 ---


theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));


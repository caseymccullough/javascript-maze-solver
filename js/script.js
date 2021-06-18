/* 
MazeSolver-JS
Solving first with Vanilla JS in non-graphical form
*/

let mazeDisplay = document.getElementById("maze-display");
let recursiveMazeSolution = document.getElementById("recursive-maze-solution");
let stackMazeSolution = document.getElementById("stack-maze-solution");

let stackSolveButton = document.getElementById("stack-solve-btn");
let recursiveSolveButton = document.getElementById("recursive-solve-btn");

let stackResults = document.getElementById("stack-results-container");
let recursiveResults = document.getElementById("recursive-results-container")

const SOLVED = "The maze was solved successfully";
const UNSOLVABLE = "The maze cannot be solved";

let grid = [];
let stackGrid;
let recursiveGrid;

let maze;
let numRows, numCols;
let stack = new Stack();
let isSolved = false; 

const input = document.querySelector('input[type="file"]');

input.addEventListener('change', function(e) {

    clearPrevious();
    console.log(input.files);
    const reader = new FileReader();
    reader.onload = function() {
            grid = reader.result.split('\n').map(function(line){
                return line.split(" ").map(x => parseInt(x))
            });
        numRows = parseInt(grid[0][0]);
        numCols = parseInt(grid[0][1]);

        grid = grid.slice(1, -1); // removes first and last rows of the grid array.  

        stackGrid = grid.map(function(arr){
            return arr.slice();
        })

        recursiveGrid = grid.map(function(arr){
            return arr.slice();
        })

        console.log ("grid: ");
        console.log (grid);
        
        maze = new Maze(grid);
        
        mazeDisplay.appendChild(getMazeElement(grid));
    }
    reader.readAsText(input.files[0]);
}, false)

stackSolveButton.onclick = function() {
    
    stackMaze = new Maze (stackGrid);
    let stackSolver = new StackMazeSolver(stackMaze);
    
    console.log ("STACK");
    const wasSolved = stackSolver.traverse();

    /* Post announcement for solved/ unsolvable */
    let resultsMsg = document.createElement("H3");
    resultsText = wasSolved ? SOLVED : UNSOLVABLE; 
    let textElement = document.createTextNode(resultsText);
    resultsMsg.appendChild(textElement);
    resultsMsg.classList.add ("results-text", wasSolved ? "green-text" : "red-text");  
    stackResults.appendChild(resultsMsg);

    stackMazeSolution.appendChild(getMazeElement(stackGrid));
    console.log(stackMaze.toString());
}

recursiveSolveButton.onclick = function() {
    
    recursiveMaze = new Maze (recursiveGrid);
    let recursiveSolver = new RecursiveMazeSolver(recursiveMaze);

    console.log ("RECURSIVE");
    const wasSolved = recursiveSolver.traverse(0, 0);

    /* Post announcement for solved/ unsolvable */
    let resultsMsg = document.createElement("H3");
    resultsText = wasSolved ? SOLVED : UNSOLVABLE; 
    let textElement = document.createTextNode(resultsText);
    resultsMsg.appendChild(textElement);
    resultsMsg.classList.add ("results-text", wasSolved ? "green-text" : "red-text");  
    recursiveResults.appendChild(resultsMsg);
    
    recursiveMazeSolution.appendChild(getMazeElement(recursiveGrid));
    console.log(recursiveMaze.toString());
}


const getMazeElement = (mazeGrid) =>
{   
    let mazeElement = document.createElement("div");
    mazeElement.classList.add("maze-image");

    for (let row = 0; row < mazeGrid.length; row++)
    {
        let rowElement = document.createElement("div");
        rowElement.classList.add("row");

        for (let col = 0; col < mazeGrid[row].length; col++)
        {
            let square = document.createElement("div");
            square.classList.add("square");

            if (mazeGrid[row][col] === 0)
            {
                square.classList.add("black");
            }
            else if (mazeGrid[row][col] === 1) {

                square.classList.add ("white");  
            }
            else if (mazeGrid[row][col] === 2){
                square.classList.add ("red");  
            }
            else if (mazeGrid[row][col] === 3){
                square.classList.add ("gold");  
            }
            rowElement.appendChild(square);
        }
        mazeElement.appendChild(rowElement);
    }
    
    return mazeElement;
}
/* 
    removes all images and text associated with previous maze.
*/
const clearPrevious = () => {
    while (mazeDisplay.firstChild)
        mazeDisplay.removeChild(mazeDisplay.firstChild);
    while (stackMazeSolution.firstChild)
        stackMazeSolution.removeChild(stackMazeSolution.firstChild);
    while (recursiveMazeSolution.firstChild)
        recursiveMazeSolution.removeChild(recursiveMazeSolution.firstChild);
    while (stackResults.firstChild)
        stackResults.removeChild(stackResults.firstChild);
    while (recursiveResults.firstChild){
        recursiveResults.removeChild(recursiveResults.firstChild);
    }
    
}
 


     


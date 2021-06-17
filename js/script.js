/* 
MazeSolver-JS
Solving first with Vanilla JS in non-graphical form
*/

let mazeDisplay = document.getElementById("maze-display");
let mazeSolution = document.getElementById("maze-solution");
let solveButton = document.getElementById("solve-btn");

let grid = [];
let maze;
let numRows, numCols;
let stack = new Stack();
let isSolved = false; 

const input = document.querySelector('input[type="file"]')


solveButton.onclick = function() {
    mazeSolution.appendChild(getMazeElement());
}
input.addEventListener('change', function(e) {
    console.log(input.files);
    const reader = new FileReader();
    reader.onload = function() {
        grid = reader.result.split('\n').map(function(line){
            return line.split(" ").map(x => parseInt(x))
        });
    numRows = parseInt(grid[0][0]);
    numCols = parseInt(grid[0][1]);

    //console.log ("r, c", numRows, " ", numCols);
    grid = grid.slice(1, -1); // removes first and last rows of the grid array.  
   // console.log(grid);
   console.log ("grid: ");
   console.log (grid);
    maze = new Maze(grid);
    console.log(maze.toString());
    let solver = new MazeSolver2(maze);
    mazeDisplay.appendChild(getMazeElement());
 
    if (solver.traverse(0, 0))
       console.log("The maze was successfully traversed!");
    else
       console.log("There is no possible path.");
 
    console.log(maze.toString());
 
       

    
   


    }
    reader.readAsText(input.files[0]);

}, false)

const getMazeElement = () =>
{   
    let mazeElement = document.createElement("div");
    mazeElement.classList.add("maze-image");

    for (let row = 0; row < maze.grid.length; row++)
    {
        let rowElement = document.createElement("div");
        rowElement.classList.add("row");

        for (let col = 0; col < maze.grid[row].length; col++)
        {
            let square = document.createElement("div");
            square.classList.add("square");

            if (grid[row][col] === 0)
            {
                square.classList.add("black");
            }
            else if (grid[row][col] === 1) {

                square.classList.add ("white");  
            }
            else if (grid[row][col] === 2){
                square.classList.add ("red");  
            }
            else if (grid[row][col] === 3){
                square.classList.add ("gold");  
            }
            rowElement.appendChild(square);
        }
        mazeElement.appendChild(rowElement);
    }
    
    return mazeElement;
}
 


     


        // const processSquareSelection = (event) => {

        //     // option to play sound
        //     if (dingSoundOn) {
        //         dingSound.play();
        //     }

        //     const location = event.target.id;


        //     console.log("target: " + location);
        //     console.log("element: " + document.getElementById(location));

        //     /* make square  unclickable */
        //     //document.getElementById(location).removeEventListener("click", processSquareSelection);

        //     /* id has format "r#c#" */
        //     let rowClicked = location.charAt(1);
        //     let colClicked = location.charAt(3);

        //     console.log("Square played at (" + rowClicked + " , " + colClicked + ")");

        //     // change grid for given row and column
        //     grid[rowClicked][colClicked] = currentPlayer;
        //     flipTiles(rowClicked, colClicked);



        //     updateHTML();
        // }


       // init();
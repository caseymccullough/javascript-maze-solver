/* 
MazeSolver-JS
Solving first with Vanilla JS in non-graphical form
*/
let grid;
let gameBoard = document.getElementById("board");
let restartButton = document.getElementById("restart-btn");




const init = () => {

    dingSound = new sound ("sounds/ding.wav");
    restartSound = new sound ("sounds/fairy-restart.wav");
    victorySound = new sound ("sounds/cheer.wav");
    yawn = new sound ("sounds/yawn.wav");

    grid = [];

    grid.push ([0, 0, 0, 0, 0, 0, 0, 0]);
    grid.push ([0, 0, 0, 0, 0, 0, 0, 0]);
    grid.push ([0, 0, 0, 0, 0, 0, 0, 0]);
    grid.push ([0, 0, 0, 1, -1, 0, 0, 0]);
    grid.push ([0, 0, 0, -1, 1, 0, 0, 0]);
    grid.push ([0, 0, 0, 0, 0, 0, 0, 0]);
    grid.push ([0, 0, 0, 0, 0, 0, 0, 0]);
    grid.push ([0, 0, 0, 0, 0, 0, 0, 0]);
    
    currentPlayer= -1; // black goes first in Othello. 

    restartButton.addEventListener('click', restartGame);

    for (let row = 0; row < grid.length; row++)
    {
        for (let col = 0; col < grid[row].length; col++)
        {
            let square = document.createElement("div");
            square.id = "r" + row + "c" + col;
            square.classList.add("square");

            let circleDiv = document.createElement("div");
     

            if (grid[row][col] === 0)
            {
                square.addEventListener('click', processSquareSelection);
            }
            else if (grid[row][col] < 0) {

                circleDiv.classList.add ("white");  
            }
            else {
                circleDiv.classList.add ("black");  
            }

            square.appendChild(circleDiv);


            gameBoard.appendChild(square);
        }
    }
    // set up board for first time.
    updateHTML();
}


const processSquareSelection = (event) => {

    // option to play sound
    if (dingSoundOn)
    {
        dingSound.play();
    }
    
    const location = event.target.id;


    console.log ("target: " + location);
    console.log ("element: " + document.getElementById(location));

    /* make square  unclickable */
    //document.getElementById(location).removeEventListener("click", processSquareSelection);
    
    /* id has format "r#c#" */
    let rowClicked = location.charAt(1);
    let colClicked = location.charAt(3);

    console.log ("Square played at (" + rowClicked + " , " + colClicked + ")" );

    // change grid for given row and column
    grid[rowClicked][colClicked] = currentPlayer;
    flipTiles(rowClicked, colClicked);



    updateHTML();
}


  

init();


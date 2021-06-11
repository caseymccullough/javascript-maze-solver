

function App() {
   console.log("in app");
   const firstRow = [1, 0, 0];
   const secondRow = [1, 1, 1];
   const thirdRow = [0, 0, 1];
   const stack = new Stack();
   const grid = [firstRow, secondRow, thirdRow];
   console.log(grid);

   let maze = new Maze(grid);
   console.log(maze.toString());


   const solver = new MazeSolver(maze);

   if (solver.traverse())
      console.log("The maze was successfully traversed!");
   else
      console.log("There is no possible path.");

   console.log(maze.toString());

}

App();

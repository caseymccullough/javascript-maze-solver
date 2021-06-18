/**
 * MazeSolver2 uses recursion to not only determine whether a maze CAN be 
 * solved, but also marks the solution graphically upon completion.
 *
 * @author Java Foundations, modified to JS by Casey McCullough
 * Graphical representation by Casey McCullough
 * 
 */
 class RecursiveMazeSolver
 {
    /**
     * Constructor for the MazeSolver class.
     */
    constructor (maze)
    {
       this.maze = maze;
    }
 
    /**
     * Attempts to recursively traverse the maze (find a solution). Inserts special
     * characters indicating locations that have been TRIED and that
     * eventually become part of the solution PATH.
     *
     * @param row row index of current location
     * @param column column index of current location
     * @return true if the maze has been solved
     */
    traverse(row, col)
    {
      console.log ("(", row, ", ", col, ")");
      console.log (this.maze.toString());
      
      let done = false;
      if (this.maze.validPosition(row, col))
      {
         console.log ("a valid position");
         this.maze.tryPosition(row, col); // (row, col) marked as tried
         
         if (row == this.maze.getRows()-1 && col == this.maze.getColumns()-1)
         {
            done = true;  // the maze is solved
         }
         else {
            done = this.traverse(row + 1, col); // down
            if (!done){
               done = this.traverse (row, col + 1); // right
            }
            if (!done){
               done = this.traverse (row - 1, col); // up
            }
            if (!done){
               done = this.traverse (row, col - 1); // left
            }   
         }
         if (done){
            this.maze.markPath(row, col);
         }
         return done;    
      }
 
   }
 } 
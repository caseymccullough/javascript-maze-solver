/**
 * Maze represents a maze of characters. The goal is to get from the
 * top left corner to the bottom right, following a path of 1's. Arbitrary
 * constants are used to represent locations in the maze that have been TRIED
 * and that are part of the solution PATH.
 *
 * @author Java Foundations--Modified to JS by Casey McCullough
 * @version 4.0
 */
// For react you have fist to import the file you want to read from 


class Maze {

   constructor(grid)
   {
      this.grid = grid;
   }
   // Awkward hack to get class constants in JS
   static get TRIED() { return 2;} 
   static get PATH() { return 3;}


  	/**
	 * Marks the specified position in the maze as TRIED
	 *
	 * @param row the index of the row to try
	 * @param col the index of the column to try 
	 */
	tryPosition(row, col)
	{
		this.grid[row][col] = Maze.TRIED;
	}

   /**
	 * Return the number of rows in this maze
	 *
	 * @return the number of rows in this maze
	 */
	getRows()
	{
		return this.grid.length;
	}

   	/**
	 * Return the number of columns in this maze
	 *
	 * @return the number of columns in this maze
	 */
   getColumns()
	{
		return this.grid[0].length;
	}

   /**
	 * Marks a given position in the maze as part of the PATH
	 *
	 * @param row the index of the row to mark as part of the PATH
	 * @param col the index of the column to mark as part of the PATH 
	 */
	 markPath(row, col)
	{
		this.grid[row][col] = Maze.PATH;
	}

   	/**
	 * Determines if a specific location is valid. A valid location
	 * is one that is on the grid, is not blocked, and has not been TRIED.
	 *
	 * @param row the row to be checked
	 * @param column the column to be checked
	 * @return true if the location is valid    
	 */
	
   validPosition(row, col)
	{
		let result = false;

		// check if cell is in the bounds of the matrix 
		if (row >= 0 && row < this.grid.length &&
				col >= 0 && col < this.grid[row].length)

			//  check if cell is not blocked and not previously tried 
			if (this.grid[row][col] === 1)
				result = true;

		return result;
	}

   	/**
	 * Returns the maze as a string.
	 * 
	 * @return a string representation of the maze
	 */
	toString()
	{
		let result = "\n";

		for (let row = 0; row < this.grid.length; row++)
		{
			for (let column = 0; column < this.grid[row].length; column++)
				result += this.grid[row][column] + "";
			result += "\n";
		}

		return result;
	}

}
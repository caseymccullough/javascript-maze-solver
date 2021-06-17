
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
	 */

	tryPosition(row, col)
	{
		this.grid[row][col] = Maze.TRIED;
	}


	getRows()
	{
		return this.grid.length;
	}


   	getColumns()
	{
		return this.grid[0].length;
	}


	 // Marks a given position in the maze as part of the PATH
	 
	 markPath(row, col)
	{
		this.grid[row][col] = Maze.PATH;
	}

   	/**
	 * Determines if a specific location is valid. A valid location
	 * is one that is on the grid, is not blocked, and has not been TRIED.
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
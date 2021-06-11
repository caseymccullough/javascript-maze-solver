
/**
 * MazeSolver attempts to traverse a Maze using a stack. The goal is to get from the
 * given starting position to the bottom right, following a path of 1's. Arbitrary
 * constants are used to represent locations in the maze that have been TRIED
 * and that are part of the solution PATH.
 *
 * @author Java Foundations
 * @version 4.0
 */
class MazeSolver
{

	/**
	 * Constructor for the MazeSolver class.
	 */
	constructor (maze)
	{
		this.maze = maze;
	}

	/**
	 * Attempts to traverse the maze using a stack. Inserts special
	 * characters indicating locations that have been TRIED and that
	 * eventually become part of the solution PATH.
	 *
	 * @param row row index of current location
	 * @param column column index of current location
	 * @return true if the maze has been solved
	 */
	traverse()
	{
		let done = false;
		let pos = new Position();
		let stack = new Stack();
		stack.push(pos);

		while (!(done) && !stack.isEmpty())
		{
			pos = stack.pop();
			this.maze.tryPosition(pos.getx(),pos.gety());  // this cell has been tried
			if (pos.getx() == this.maze.getRows()-1 && pos.gety() == this.maze.getColumns()-1)
				done = true;  // the maze is solved
			else
			{
				this.pushNewPos(pos.getx() - 1,pos.gety(), stack); // position to the left
				this.pushNewPos(pos.getx() + 1,pos.gety(), stack); // to the right
				this.pushNewPos(pos.getx(),pos.gety() - 1, stack);  // above
				this.pushNewPos(pos.getx(),pos.gety() + 1, stack);  // below
			}
		}

		return done;
	}

	/**
	 * Push a new attempted move onto the stack
	 * @param x represents x coordinate
	 * @param y represents y coordinate
	 * @param stack the working stack of moves within the grid
	 * @return stack of moves within the grid
	 */
	pushNewPos(x,  y, stack)
	{
		let npos = new Position();
		npos.setx(x);
		npos.sety(y);
		if (this.maze.validPosition(x,y))
			stack.push(npos);
	}

}

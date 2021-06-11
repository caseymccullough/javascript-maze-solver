class Position
{
	
	/**
	 * Constructs a position and sets the x & y coordinates to 0,0.
	 */
	constructor ()
	{
		this.x = 0;
		this.y = 0;
	}

	/**
	 * Returns the x-coordinate value of this position.
	 * @return the x-coordinate of this position
	 */
	getx()
	{
		return this.x;
	}

	/**
	 * Returns the y-coordinate value of this position.
	 * @return the y-coordinate of this position
	 */
	gety()
	{
		return this.y;
	}

	/**
	 * Sets the value of the current position's x-coordinate.
	 * @param a value of x-coordinate
	 */
	setx(a)
	{
		this.x = a;
	}

	/**
	 * Sets the value of the current position's x-coordinate.
	 * @param a value of y-coordinate
	 */ 
	sety(a)
	{
		this.y = a;
	}
}
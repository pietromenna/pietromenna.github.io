var width = 15;
var height = 15;

var board =[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	 		[0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	 		[0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
	 		[0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
	 		[0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
	 		[0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	 		[0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	 		[0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
	 		[0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
	 		[0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
	 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	 		[0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

function printBoard(board) {
	for (var i = 0; i < height; i++){
		for (var j= 0; j < width; j++)
			document.write(board[i][j] + " ");
		document.write("</br>");
	}
};

function countAliveAdjacentCells(x,y){
	var count = 0;
	for (var i = x-1; i<= x + 1; i++ )
		for (var j = y-1; j<= y + 1; j++)
			if (i< 0 || j<0 || i>= height || j >= width || (i == x && j == y ))
				continue;
			else {
				count = count + board[i][j];
			}
			return count;
};

function processNewBoard(board){
	var newBoard = new Array(height);
	for (var i = 0; i < height; i++){
		newBoard[i] = new Array(width);
		for (var j= 0; j < width; j++)
			newBoard[i][j] = processCell(board[i][j], countAliveAdjacentCells(i, j));
	}
	return newBoard;
}

function processCell(currentState, count){
	if ((currentState == 1 && count <= 3 && count >= 2) ||
		(currentState == 0 && count == 3))
		return 1;
	return 0;
}

function MainLoop() {
	drawCanvas();
	board = processNewBoard(board);
	drawCanvas();
}

function drawCanvas() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	canvas_height = canvas.height;
	canvas_width = canvas.width;
	square_width = canvas.width / width;
	square_height = canvas.height / height;
	// Clear the entire Canvas
	context.fillStyle = "white";
	context.fillRect(0,0,canvas_height,canvas_width);
	// Draw the board
	context.fillStyle = "black";
	for (var i = 0; i < height; i++)
		for (var j= 0; j < width; j++)
			if (board[i][j] == 1)
				context.fillRect(square_height*i,square_width*j,square_height,square_width);

}

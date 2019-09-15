let cube;
let button;
let size = 200;
let spacing = 10;
function setup() {
	createCanvas(windowWidth, windowHeight);
	cube = new Cube(size, spacing);
		cube.rotateDown();
		button = createButton('Front');
		button.position(1000, 200);
		button.mousePressed(front);
		button = createButton('FrontIn');
		button.position(1100, 200);
		button.mousePressed(frontInverted);
		button = createButton('Back');
		button.position(1000, 250);
		button.mousePressed(back);
		button = createButton('BackIn');
		button.position(1100, 250);
		button.mousePressed(backInverted);
		button = createButton('right');
		button.position(1000, 300);
		button.mousePressed(right);
		button = createButton('RightIn');
		button.position(1100, 300);
		button.mousePressed(rightInverted);
		button = createButton('Left');
		button.position(1000, 350);
		button.mousePressed(left);
		button = createButton('LeftIn');
		button.position(1100, 350);
		button.mousePressed(leftInverted);
		button = createButton('Up');
		button.position(1000, 400);
		button.mousePressed(up);
		button = createButton('UpIn');
		button.position(1100, 400);
		button.mousePressed(upInverted);
		button = createButton('Down');
		button.position(1000, 450);
		button.mousePressed(down);
		button = createButton('DownIn');
		button.position(1100, 450);
		button.mousePressed(downInverted);

		button = createButton('SpinUp');
		button.position(1200, 200);
		button.mousePressed(spinUp);
		button = createButton('SpinDown');
		button.position(1200, 250);
		button.mousePressed(spinDown);
		button = createButton('SpinRight');
		button.position(1200, 300);
		button.mousePressed(spinRight);
		button = createButton('SpinLeft');
		button.position(1200, 350);
		button.mousePressed(spinLeft);

		button = createButton('Solve');
		button.position(1050, 500);
		button.mousePressed(solve);
		button = createButton('Test');
		button.position(1000, 150);
		button.mousePressed(solveFirstCross);
		button = createButton('MixUp');
		button.position(1200, 150);
		button.mousePressed(mixUp);

		button = createButton('SolveFirstCross');
		button.position(1050, 550);
		button.mousePressed(solveFirstCross);
		button = createButton('SolveFirstCorners');
		button.position(1200, 550);
		button.mousePressed(solveFirstCorners);
		button = createButton('MidEdgeRight-ALG');
		button.position(1050, 600);
		button.mousePressed(midEdgeRightAlgorithm);
		button = createButton('MidEdgeLeft-ALG');
		button.position(1200, 600);
		button.mousePressed(midEdgeLeftAlgorithm);
		button = createButton('MidCrosses-ALG');
		button.position(1050, 650);
		button.mousePressed(midCrossesAlgorithm);
		button = createButton('FinalCornerRepeat-ALG');
		button.position(1200, 650);
		button.mousePressed(finalCornerRepeatAlgorithm);
		button = createButton('TopCross-ALG');
		button.position(1050, 700);
		button.mousePressed(topCrossAlgorithm);
		button = createButton('ShuffleTopCorners-ALG');
		button.position(1200, 700);
		button.mousePressed(shuffleTopCornersAlgorithm);

		cube.mixUp();
		findCorner();
}

function draw() {
	background(0);
	cube.show();
}


//rotation functions, rotating cube side------------------------------------------
function front(){
	cube.rotateFront();
}
function frontInverted(){
	cube.rotateFrontInverted();
}
function back(){
	cube.rotateBack();
}
function backInverted(){
	cube.rotateBackInverted();
}
function right(){
	cube.rotateRight();
}
function rightInverted(){
	cube.rotateRightInverted();
}
function left(){
	cube.rotateLeft();
}
function leftInverted(){
	cube.rotateLeftInverted();
}
function up(){
	cube.rotateUp();
}
function upInverted(){
	cube.rotateUpInverted();
}
function down(){
	cube.rotateDown();
}
function downInverted(){
	cube.rotateDownInverted();
}

//spin functions, rotating entire cube--------------------------------------------
function spinUp(){
	cube.spinUp();
}
function spinDown(){
	cube.spinDown();
}
function spinRight(){
	cube.spinRight();
}
function spinLeft(){
	cube.spinLeft();
}

//find side color functions-------------------------------------------------------
function getFrontColor(){
	return cube.front.squares[4].color;
}
function getRightColor(){
	return cube.right.squares[4].color;
}
function getLeftColor(){
	return cube.left.squares[4].color;
}
function getBackColor(){
	return cube.back.squares[4].color;
}
function getUpColor(){
	return cube.up.squares[4].color;
}
function getDownColor(){
	return cube.down.squares[4].color;
}

//other cube API's ---------------------------------------------------------------
function findEdge(color1, color2){
	return cube.findEdge(color1, color2);
}

function mixUp(){
	cube.mixUp();
}
function test(){
  for (let i=0; i<500000; i++){
    cube.mixUp();
    solve();
    let checkcolor = getFrontColor();
    if (checkIsSolved){
			console.log(i);
		}
		else{
			console.log("Fail");
			break;
		}
  }
}

function findCorner (color1, color2, color3){
	if (
		color1 == cube.front.squares[0].color && color2 == cube.up.squares[6].color && color3 == cube.left.squares[2].color ||
		color1 == cube.front.squares[0].color && color3 == cube.up.squares[6].color && color2 == cube.left.squares[2].color ||
		color1 == cube.up.squares[6].color && color2 == cube.left.squares[2].color && color3 == cube.front.squares[0].color ||
		color1 == cube.up.squares[6].color && color3 == cube.left.squares[2].color && color2 == cube.front.squares[0].color ||
		color1 == cube.left.squares[2].color && color2 == cube.up.squares[6].color && color3 == cube.front.squares[0].color ||
		color1 == cube.left.squares[2].color && color3 == cube.up.squares[6].color && color2 == cube.front.squares[0].color
	){
		return 1;
	}
	else if (
		color1 == cube.front.squares[2].color && color2 == cube.up.squares[8].color && color3 == cube.right.squares[0].color ||
		color1 == cube.front.squares[2].color && color3 == cube.up.squares[8].color && color2 == cube.right.squares[0].color ||
		color1 == cube.up.squares[8].color && color2 == cube.right.squares[0].color && color3 == cube.front.squares[2].color ||
		color1 == cube.up.squares[8].color && color3 == cube.right.squares[0].color && color2 == cube.front.squares[2].color ||
		color1 == cube.right.squares[0].color && color2 == cube.up.squares[8].color && color3 == cube.front.squares[2].color ||
		color1 == cube.right.squares[0].color && color3 == cube.up.squares[8].color && color2 == cube.front.squares[2].color
	) {
		return 2;
	}
	else if (
		color1 == cube.front.squares[6].color && color2 == cube.down.squares[0].color && color3 == cube.left.squares[8].color ||
		color1 == cube.front.squares[6].color && color3 == cube.down.squares[0].color && color2 == cube.left.squares[8].color ||
		color1 == cube.down.squares[0].color && color2 == cube.left.squares[8].color && color3 == cube.front.squares[6].color ||
		color1 == cube.down.squares[0].color && color3 == cube.left.squares[8].color && color2 == cube.front.squares[6].color ||
		color1 == cube.left.squares[8].color && color2 == cube.down.squares[0].color && color3 == cube.front.squares[6].color ||
		color1 == cube.left.squares[8].color && color3 == cube.down.squares[0].color && color2 == cube.front.squares[6].color
	) {
		return 3;
	}
	else if (
		color1 == cube.front.squares[8].color && color2 == cube.down.squares[2].color && color3 == cube.right.squares[6].color ||
		color1 == cube.front.squares[8].color && color3 == cube.down.squares[2].color && color2 == cube.right.squares[6].color ||
		color1 == cube.down.squares[2].color && color2 == cube.right.squares[6].color && color3 == cube.front.squares[8].color ||
		color1 == cube.down.squares[2].color && color3 == cube.right.squares[6].color && color2 == cube.front.squares[8].color ||
		color1 == cube.right.squares[6].color && color2 == cube.down.squares[2].color && color3 == cube.front.squares[8].color ||
		color1 == cube.right.squares[6].color && color3 == cube.down.squares[2].color && color2 == cube.front.squares[8].color
	) {
		return 4;
	}
	else if (
		color1 == cube.back.squares[2].color && color2 == cube.up.squares[0].color && color3 == cube.left.squares[0].color ||
		color1 == cube.back.squares[2].color && color3 == cube.up.squares[0].color && color2 == cube.left.squares[0].color ||
		color1 == cube.up.squares[0].color && color2 == cube.left.squares[0].color && color3 == cube.back.squares[2].color ||
		color1 == cube.up.squares[0].color && color3 == cube.left.squares[0].color && color2 == cube.back.squares[2].color ||
		color1 == cube.left.squares[0].color && color2 == cube.up.squares[0].color && color3 == cube.back.squares[2].color ||
		color1 == cube.left.squares[0].color && color3 == cube.up.squares[0].color && color2 == cube.back.squares[2].color
	) {
		return 5;
	}
	else if (
		color1 == cube.back.squares[0].color && color2 == cube.up.squares[2].color && color3 == cube.right.squares[2].color ||
		color1 == cube.back.squares[0].color && color3 == cube.up.squares[2].color && color2 == cube.right.squares[2].color ||
		color1 == cube.up.squares[2].color && color2 == cube.right.squares[2].color && color3 == cube.back.squares[0].color ||
		color1 == cube.up.squares[2].color && color3 == cube.right.squares[2].color && color2 == cube.back.squares[0].color ||
		color1 == cube.right.squares[2].color && color2 == cube.up.squares[2].color && color3 == cube.back.squares[0].color ||
		color1 == cube.right.squares[2].color && color3 == cube.up.squares[2].color && color2 == cube.back.squares[0].color
	) {
		return 6;
	}
	else if (
		color1 == cube.back.squares[8].color && color2 == cube.down.squares[6].color && color3 == cube.left.squares[6].color ||
		color1 == cube.back.squares[8].color && color3 == cube.down.squares[6].color && color2 == cube.left.squares[6].color ||
		color1 == cube.down.squares[6].color && color2 == cube.left.squares[6].color && color3 == cube.back.squares[8].color ||
		color1 == cube.down.squares[6].color && color3 == cube.left.squares[6].color && color2 == cube.back.squares[8].color ||
		color1 == cube.left.squares[6].color && color2 == cube.down.squares[6].color && color3 == cube.back.squares[8].color ||
		color1 == cube.left.squares[6].color && color3 == cube.down.squares[6].color && color2 == cube.back.squares[8].color
	) {
		return 7;
	}
	else if (
		color1 == cube.back.squares[6].color && color2 == cube.down.squares[8].color && color3 == cube.right.squares[8].color ||
		color1 == cube.back.squares[6].color && color3 == cube.down.squares[8].color && color2 == cube.right.squares[8].color ||
		color1 == cube.down.squares[8].color && color2 == cube.right.squares[8].color && color3 == cube.back.squares[6].color ||
		color1 == cube.down.squares[8].color && color3 == cube.right.squares[8].color && color2 == cube.back.squares[6].color ||
		color1 == cube.right.squares[8].color && color2 == cube.down.squares[8].color && color3 == cube.back.squares[6].color ||
		color1 == cube.right.squares[8].color && color3 == cube.down.squares[8].color && color2 == cube.back.squares[6].color
	) {
		return 8;
	}
}

//returns an array of 8 elements
//each element is true if the corner in its position is the correct corner, regardless of rotation

function cornerPositions(){
	let results = [];
	let color1;
	let color2;
	let color3;

	color1 = cube.front.squares[4].color;
	color2 = cube.up.squares[4].color;
	color3 = cube.left.squares[4].color;

	if (
		color1 == cube.front.squares[0].color && color2 == cube.up.squares[6].color && color3 == cube.left.squares[2].color ||
		color1 == cube.front.squares[0].color && color3 == cube.up.squares[6].color && color2 == cube.left.squares[2].color ||
		color1 == cube.up.squares[6].color && color2 == cube.left.squares[2].color && color3 == cube.front.squares[0].color ||
		color1 == cube.up.squares[6].color && color3 == cube.left.squares[2].color && color2 == cube.front.squares[0].color ||
		color1 == cube.left.squares[2].color && color2 == cube.up.squares[6].color && color3 == cube.front.squares[0].color ||
		color1 == cube.left.squares[2].color && color3 == cube.up.squares[6].color && color2 == cube.front.squares[0].color
	){
		results[0] = true;
	}
	else {
		results[0] = false;
	}

	color1 = cube.front.squares[4].color;
	color2 = cube.up.squares[4].color;
	color3 = cube.right.squares[4].color;

	if (
		color1 == cube.front.squares[2].color && color2 == cube.up.squares[8].color && color3 == cube.right.squares[0].color ||
		color1 == cube.front.squares[2].color && color3 == cube.up.squares[8].color && color2 == cube.right.squares[0].color ||
		color1 == cube.up.squares[8].color && color2 == cube.right.squares[0].color && color3 == cube.front.squares[2].color ||
		color1 == cube.up.squares[8].color && color3 == cube.right.squares[0].color && color2 == cube.front.squares[2].color ||
		color1 == cube.right.squares[0].color && color2 == cube.up.squares[8].color && color3 == cube.front.squares[2].color ||
		color1 == cube.right.squares[0].color && color3 == cube.up.squares[8].color && color2 == cube.front.squares[2].color
	) {
		results[1] = true;
	}
	else {
		results[1] = false;
	}

	color1 = cube.front.squares[4].color;
	color2 = cube.down.squares[4].color;
	color3 = cube.left.squares[4].color;

	if (
		color1 == cube.front.squares[6].color && color2 == cube.down.squares[0].color && color3 == cube.left.squares[8].color ||
		color1 == cube.front.squares[6].color && color3 == cube.down.squares[0].color && color2 == cube.left.squares[8].color ||
		color1 == cube.down.squares[0].color && color2 == cube.left.squares[8].color && color3 == cube.front.squares[6].color ||
		color1 == cube.down.squares[0].color && color3 == cube.left.squares[8].color && color2 == cube.front.squares[6].color ||
		color1 == cube.left.squares[8].color && color2 == cube.down.squares[0].color && color3 == cube.front.squares[6].color ||
		color1 == cube.left.squares[8].color && color3 == cube.down.squares[0].color && color2 == cube.front.squares[6].color
	) {
		results[2] = true;
	}
	else {
		results[2] = false;
	}

	color1 = cube.front.squares[4].color;
	color2 = cube.down.squares[4].color;
	color3 = cube.right.squares[4].color;

	if (
		color1 == cube.front.squares[8].color && color2 == cube.down.squares[2].color && color3 == cube.right.squares[6].color ||
		color1 == cube.front.squares[8].color && color3 == cube.down.squares[2].color && color2 == cube.right.squares[6].color ||
		color1 == cube.down.squares[2].color && color2 == cube.right.squares[6].color && color3 == cube.front.squares[8].color ||
		color1 == cube.down.squares[2].color && color3 == cube.right.squares[6].color && color2 == cube.front.squares[8].color ||
		color1 == cube.right.squares[6].color && color2 == cube.down.squares[2].color && color3 == cube.front.squares[8].color ||
		color1 == cube.right.squares[6].color && color3 == cube.down.squares[2].color && color2 == cube.front.squares[8].color
	) {
		results[3] = true;
	}
	else {
		results[3] = false;
	}

	color1 = cube.back.squares[4].color;
	color2 = cube.up.squares[4].color;
	color3 = cube.left.squares[4].color;

	if (
		color1 == cube.back.squares[2].color && color2 == cube.up.squares[0].color && color3 == cube.left.squares[0].color ||
		color1 == cube.back.squares[2].color && color3 == cube.up.squares[0].color && color2 == cube.left.squares[0].color ||
		color1 == cube.up.squares[0].color && color2 == cube.left.squares[0].color && color3 == cube.back.squares[2].color ||
		color1 == cube.up.squares[0].color && color3 == cube.left.squares[0].color && color2 == cube.back.squares[2].color ||
		color1 == cube.left.squares[0].color && color2 == cube.up.squares[0].color && color3 == cube.back.squares[2].color ||
		color1 == cube.left.squares[0].color && color3 == cube.up.squares[0].color && color2 == cube.back.squares[2].color
	) {
		results[4] = true;
	}
	else {
		results[4] = false;
	}

	color1 = cube.back.squares[4].color;
	color2 = cube.up.squares[4].color;
	color3 = cube.right.squares[4].color;

	if (
		color1 == cube.back.squares[0].color && color2 == cube.up.squares[2].color && color3 == cube.right.squares[2].color ||
		color1 == cube.back.squares[0].color && color3 == cube.up.squares[2].color && color2 == cube.right.squares[2].color ||
		color1 == cube.up.squares[2].color && color2 == cube.right.squares[2].color && color3 == cube.back.squares[0].color ||
		color1 == cube.up.squares[2].color && color3 == cube.right.squares[2].color && color2 == cube.back.squares[0].color ||
		color1 == cube.right.squares[2].color && color2 == cube.up.squares[2].color && color3 == cube.back.squares[0].color ||
		color1 == cube.right.squares[2].color && color3 == cube.up.squares[2].color && color2 == cube.back.squares[0].color
	) {
		results[5] = true;
	}
	else {
		results[5] = false;
	}

	color1 = cube.back.squares[4].color;
	color2 = cube.down.squares[4].color;
	color3 = cube.left.squares[4].color;

	if (
		color1 == cube.back.squares[8].color && color2 == cube.down.squares[6].color && color3 == cube.left.squares[6].color ||
		color1 == cube.back.squares[8].color && color3 == cube.down.squares[6].color && color2 == cube.left.squares[6].color ||
		color1 == cube.down.squares[6].color && color2 == cube.left.squares[6].color && color3 == cube.back.squares[8].color ||
		color1 == cube.down.squares[6].color && color3 == cube.left.squares[6].color && color2 == cube.back.squares[8].color ||
		color1 == cube.left.squares[6].color && color2 == cube.down.squares[6].color && color3 == cube.back.squares[8].color ||
		color1 == cube.left.squares[6].color && color3 == cube.down.squares[6].color && color2 == cube.back.squares[8].color
	) {
		results[6] = true;
	}
	else {
		results[6] = false;
	}

	color1 = cube.back.squares[4].color;
	color2 = cube.down.squares[4].color;
	color3 = cube.right.squares[4].color;

	if (
		color1 == cube.back.squares[6].color && color2 == cube.down.squares[8].color && color3 == cube.right.squares[8].color ||
		color1 == cube.back.squares[6].color && color3 == cube.down.squares[8].color && color2 == cube.right.squares[8].color ||
		color1 == cube.down.squares[8].color && color2 == cube.right.squares[8].color && color3 == cube.back.squares[6].color ||
		color1 == cube.down.squares[8].color && color3 == cube.right.squares[8].color && color2 == cube.back.squares[6].color ||
		color1 == cube.right.squares[8].color && color2 == cube.down.squares[8].color && color3 == cube.back.squares[6].color ||
		color1 == cube.right.squares[8].color && color3 == cube.down.squares[8].color && color2 == cube.back.squares[6].color
	) {
		results[7] = true;
	}
	else {
		results[7] = false;
	}
	return results;
}

function isCornerRotationCorrect(address){
	switch (address) {
		case 1:
			if (
				cube.front.squares[4].color == cube.front.squares[0].color &&
				cube.up.squares[4].color == cube.up.squares[6].color &&
				cube.left.squares[4].color == cube.left.squares[2].color
			){
				return true;
			}
			else{
				return false;
			}
			break;
		case 2:
			if (
				cube.front.squares[4].color == cube.front.squares[2].color &&
				cube.up.squares[4].color == cube.up.squares[8].color &&
				cube.right.squares[4].color == cube.right.squares[0].color
			){
				return true;
			}
			else{
				return false;
			}
			break;
		case 3:
			if (
				cube.front.squares[4].color == cube.front.squares[6].color &&
				cube.down.squares[4].color == cube.down.squares[0].color &&
				cube.left.squares[4].color == cube.left.squares[8].color
			){
				return true;
			}
			else{
				return false;
			}
			break;
		case 4:
			if (
				cube.front.squares[4].color == cube.front.squares[8].color &&
				cube.down.squares[4].color == cube.down.squares[2].color &&
				cube.right.squares[4].color == cube.right.squares[6].color
			){
				return true;
			}
			else{
				return false;
			}
			break;
		case 5:
			if (
				cube.back.squares[4].color == cube.back.squares[2].color &&
				cube.up.squares[4].color == cube.up.squares[0].color &&
				cube.left.squares[4].color == cube.left.squares[0].color
			){
				return true;
			}
			else{
				return false;
			}
			break;
		case 6:
			if (
				cube.back.squares[4].color == cube.back.squares[0].color &&
				cube.up.squares[4].color == cube.up.squares[2].color &&
				cube.right.squares[4].color == cube.right.squares[2].color
			){
				return true;
			}
			else{
				return false;
			}
			break;
		case 7:
			if (
				cube.back.squares[4].color == cube.back.squares[8].color &&
				cube.down.squares[4].color == cube.down.squares[6].color &&
				cube.left.squares[4].color == cube.left.squares[6].color
			){
				return true;
			}
			else{
				return false;
			}
			break;
		case 8:
			if (
				cube.back.squares[4].color == cube.back.squares[6].color &&
				cube.down.squares[4].color == cube.down.squares[8].color &&
				cube.right.squares[4].color == cube.right.squares[8].color
			){
				return true;
			}
			else{
				return false;
			}
			break;
		default:

	}
}

function getFaceColors(face){
	let colors = [];
	switch (face) {
		case "front":
			for (let i=0; i<cube.front.squares.length; i++){
				colors[i] = cube.front.squares[i].color;
			}
			break;
		case "back":
			for (let i=0; i<cube.back.squares.length; i++){
				colors[i] = cube.back.squares[i].color;
			}
			break;
		case "right":
			for (let i=0; i<cube.right.squares.length; i++){
				colors[i] = cube.right.squares[i].color;
			}
			break;
		case "left":
			for (let i=0; i<cube.left.squares.length; i++){
				colors[i] = cube.left.squares[i].color;
			}
			break;
		case "up":
			for (let i=0; i<cube.up.squares.length; i++){
				colors[i] = cube.up.squares[i].color;
			}
			break;
		case "down":
			for (let i=0; i<cube.down.squares.length; i++){
				colors[i] = cube.down.squares[i].color;
			}
			break;
		default:

	}
	return colors;
}

function checkMidCrosses(){
	let results = [];
	if (cube.left.squares[1].color == cube.left.squares[4].color){
		results[0] = true;
	}
	else{
		results[0] = false;
	}
	if (cube.front.squares[1].color == cube.front.squares[4].color) {
		results[1] = true;
	}
	else{
		results[1] = false;
	}
	if (cube.right.squares[1].color == cube.right.squares[4].color) {
		results[2] = true;
	}
	else{
		results[2] = false;
	}
	if (cube.back.squares[1].color == cube.back.squares[4].color) {
		results[3] = true;
	}
	else{
		results[3] = false;
	}
	return results;
}

function checkIsSolved(){
	let checkcolor = cube.front.squares[4].color;
	//check front
	if (
		cube.front.squares[0].color == checkcolor &&
		cube.front.squares[1].color == checkcolor &&
		cube.front.squares[2].color == checkcolor &&
		cube.front.squares[3].color == checkcolor &&
		cube.front.squares[5].color == checkcolor &&
		cube.front.squares[6].color == checkcolor &&
		cube.front.squares[7].color == checkcolor &&
		cube.front.squares[8].color == checkcolor
	){}
	else {return false;}
	//check right
	checkcolor = cube.right.squares[4].color;
	if (
		cube.right.squares[0].color == checkcolor &&
		cube.right.squares[1].color == checkcolor &&
		cube.right.squares[2].color == checkcolor &&
		cube.right.squares[3].color == checkcolor &&
		cube.right.squares[5].color == checkcolor &&
		cube.right.squares[6].color == checkcolor &&
		cube.right.squares[7].color == checkcolor &&
		cube.right.squares[8].color == checkcolor
	){}
	else {return false;}
	//check left
	checkcolor = cube.left.squares[4].color;
	if (
		cube.left.squares[0].color == checkcolor &&
		cube.left.squares[1].color == checkcolor &&
		cube.left.squares[2].color == checkcolor &&
		cube.left.squares[3].color == checkcolor &&
		cube.left.squares[5].color == checkcolor &&
		cube.left.squares[6].color == checkcolor &&
		cube.left.squares[7].color == checkcolor &&
		cube.left.squares[8].color == checkcolor
	){}
	else {return false;}
	//check back
	checkcolor = cube.back.squares[4].color;
	if (
		cube.back.squares[0].color == checkcolor &&
		cube.back.squares[1].color == checkcolor &&
		cube.back.squares[2].color == checkcolor &&
		cube.back.squares[3].color == checkcolor &&
		cube.back.squares[5].color == checkcolor &&
		cube.back.squares[6].color == checkcolor &&
		cube.back.squares[7].color == checkcolor &&
		cube.back.squares[8].color == checkcolor
	){}
	else {return false;}
	//check up
	checkcolor = cube.up.squares[4].color;
	if (
		cube.up.squares[0].color == checkcolor &&
		cube.up.squares[1].color == checkcolor &&
		cube.up.squares[2].color == checkcolor &&
		cube.up.squares[3].color == checkcolor &&
		cube.up.squares[5].color == checkcolor &&
		cube.up.squares[6].color == checkcolor &&
		cube.up.squares[7].color == checkcolor &&
		cube.up.squares[8].color == checkcolor
	){}
	else {return false;}
	//check down
	checkcolor = cube.down.squares[4].color;
	if (
		cube.down.squares[0].color == checkcolor &&
		cube.down.squares[1].color == checkcolor &&
		cube.down.squares[2].color == checkcolor &&
		cube.down.squares[3].color == checkcolor &&
		cube.down.squares[5].color == checkcolor &&
		cube.down.squares[6].color == checkcolor &&
		cube.down.squares[7].color == checkcolor &&
		cube.down.squares[8].color == checkcolor
	){}
	else {return false;}
	return true;
}

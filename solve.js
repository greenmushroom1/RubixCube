function solve(){
  solveFirstCross();
  solveFirstCorners();
  solveMidEdges();
  solveTopCross();
  solveMidCrosses();
  solveTopCornerPositions();
  solveTopCornerRotation();
}

function solveFirstCross(){
  //front and up edge piece-----------------------------------------------------
  let frontColor = getFrontColor();
  let sideColor = getUpColor();
  let edge = findEdge(frontColor, sideColor);
  switch (edge[0]) {
    case "front":
      if (edge[2] == "up"){

      }
      else {
        let n = 0;
        if (edge[2] == "left"){
          n = 1;
        }
        else if (edge[2] == "down") {
          n = 2;
        }
        else if (edge[2] == "right") {
          n = 3;
        }
        for (let i=0; i<n; i++){
          front();
        }
      }
      break;
    case "back":
      if (edge[2] == "up"){
        up();
        up();
      }
      else{
        let n=0;
        if (edge[2] == "right"){
          n = 1;
        }
        else if (edge[2] == "down") {
          n = 2;
        }
        else if (edge[2] == "left") {
          n = 3;
        }
        for (let i=0; i<n; i++){
          back();
        }
        up();
        up();
      }
      break;
    case "up":
      if (edge[2] == "right"){
        right();
        back();
        up();
        up();
      }
      else if (edge[2] == "left") {
        leftInverted();
        backInverted();
        up();
        up();
      }
      break;
    case "right":
      if (edge[2] == "up"){
        up();
      }
      else if (edge[2] == "down") {
        right();
        right();
        up();
      }
      break;
    case "down":
      if (edge[2] == "right"){
        right();
        frontInverted();
      }
      else if (edge[2] == "left") {
        leftInverted();
        front();
      }
      break;
    case "left":
      if (edge[2] == "down"){
        left();
        left();
        upInverted();
      }
      else if (edge[2] == "up") {
        upInverted();
      }
      break;
    default:
  }
  switch (edge[2]) {
    case "front":
      switch (edge[0]) {
        case "up":
          up();
          left();
          front();
          break;
        case "right":
          right();
          up();
          break;
        case "down":
          down();
          right();
          frontInverted();
          break;
        case "left":
          leftInverted();
          upInverted();
          break;
        default:
      }
      break;
    case "back":
      switch (edge[0]) {
        case "up":
          back();
          left();
          upInverted();
          break;
        case "right":
          rightInverted();
          up();
          break;
        case "down":
          backInverted();
          left();
          upInverted();
          break;
        case "left":
          left();
          upInverted();
          break;
        default:
      }
      break;
    default:
  }
  //front and right edge piece --------------------------------------------------
  frontColor = getFrontColor();
  sideColor = getRightColor();
  edge = findEdge(frontColor, sideColor);
  switch (edge[0]) {
    case "front":
      if (edge[2] == "down"){
        down();
        front();
        downInverted();
        frontInverted();
      }
      else if (edge[2] == "left") {
        left();
        front();
        front();
        leftInverted();
        front();
        front();
      }
      else if (edge[2] == "right") {

      }
      else if (edge[2] == "up") {
        console.log("Error Solving First Cross Top");
      }
      break;
    case "back":
      if (edge[2] == "up"){
        backInverted();
        right();
        right();
      }
      else if (edge[2] == "right") {
        right();
        right();
      }
      else if (edge[2] == "down") {
        back();
        right();
        right();
      }
      else if (edge[2] == "left") {
        back();
        back();
        right();
        right();
      }
      break;
    case "right":
      if (edge[2] == "up"){
        frontInverted();
        up();
        front();
      }
      else if (edge[2] == "down") {
        front();
        downInverted();
        frontInverted();
      }
      else if (edge[2] == "front") {
        rightInverted();
        front();
        downInverted();
        frontInverted();
      }
      else if (edge[2] == "back") {
        rightInverted();
        frontInverted();
        up();
        front();
      }
      break;
    case "down":
      if (edge[2] == "right"){
        right();
      }
      else if (edge[2] == "left") {
        front();
        front();
        leftInverted();
        front();
        front();
      }
      else if (edge[2] == "front") {
        down();
        right();
      }
      else if (edge[2] == "back") {
        downInverted();
        right();
      }
      break;
    case "left":
      if (edge[2] == "down"){
        front();
        down();
        frontInverted();
      }
      else if (edge[2] == "up") {
        frontInverted();
        upInverted();
        front();
      }
      else if (edge[2] == "front") {
        left();
        front();
        down();
        frontInverted();
      }
      else if (edge[2] == "back") {
        leftInverted();
        front();
        down();
        frontInverted();
      }
      break;
    case "up":
      if (edge[2] == "left"){
        front();
        front();
        left();
        front();
        front();
      }
      else if (edge[2] == "right") {
        rightInverted();
      }
      else if (edge[2] == "front") {
        console.log("Error Solving First Cross Top");
      }
      else if (edge[2] == "back") {
        up();
        rightInverted();
        upInverted();
      }
      break;
    default:
  }

  //front Down edge piece ------------------------------------------------------
  frontColor = getFrontColor();
  sideColor = getDownColor();
  edge = findEdge(frontColor, sideColor);

  switch (edge[0]) {
    case "front":
      if (edge[2] == "down"){

      }
      else if (edge[2] == "left") {
        left();
        front();
        leftInverted();
        frontInverted();
      }
      else if (edge[2] == "up") {
        console.log("Error Solving First Cross Top");
      }
      else if (edge[2] == "right") {
        console.log("Error Solving First Cross Top");
      }
      break;
    case "back":
      if (edge[2] == "down"){

      }
      else if (edge[2] == "up") {
        back();
        back();
      }
      else if (edge[2] == "right") {
        backInverted();
      }
      else if (edge[2] == "left") {
        back();
      }
      down();
      down();
      break;
    case "down":
      if (edge[2] == "front"){
        downInverted();
      }
      else if (edge[2] == "back") {
        down();
      }
      else if (edge[2] == "right") {
        down();
        down();
      }
      else if (edge[2] == "left") {

      }
      front();
      leftInverted();
      frontInverted();
      break;
    case "left":
      if (edge[2] == "down"){

      }
      else if (edge[2] == "up") {
        left();
        left();
      }
      else if (edge[2] == "front") {
        left();
      }
      else if (edge[2] == "back") {
        leftInverted();
      }
      down();
      break;
    case "up":
      front();
      if (edge[2] == "front"){
        console.log("Error Solving First Cross Top");
      }
      else if (edge[2] == "back") {
        upInverted();
      }
      else if (edge[2] == "right") {
        up();
        up();
      }
      else if (edge[2] == "left") {

      }
      left();
      frontInverted();
      break;
    case "right":
      if (edge[2] == "down"){
        down();
      }
      else if (edge[2] == "up") {
        upInverted();
        back();
        back();
        up();
      }
      else if (edge[2] == "front") {
        console.log("Error Solving First Cross Top");
      }
      else if (edge[2] == "back") {
        right();
        down();
        rightInverted();
      }
      down();
      down();
      break;
    default:
  }
  //front Left edge piece ------------------------------------------------------
  frontColor = getFrontColor();
  sideColor = getLeftColor();
  edge = findEdge(frontColor, sideColor);

  switch (edge[0]) {
    case "front":
      if (edge[2] == "up"){
        console.log("Error Solving First Cross Top");
      }
      else if (edge[2] == "down") {
        console.log("Error Solving First Cross Top");
      }
      else if (edge[2] == "left") {

      }
      else if (edge[2] == "right") {
        console.log("Error Solving First Cross Top");
      }
      break;
    case "back":
      if (edge[2] == "up"){
        back();
      }
      else if (edge[2] == "down") {
        backInverted();
      }
      else if (edge[2] == "left") {

      }
      else if (edge[2] == "right") {
        back();
        back();
      }
      left();
      left();
      break;
    case "left":
      if (edge[2] == "up"){

      }
      else if (edge[2] == "down") {
        left();
        left();
      }
      else if (edge[2] == "front") {
        leftInverted();
      }
      else if (edge[2] == "back") {
        left();
      }
      front();
      upInverted();
      frontInverted();
      break;
    case "up":
      if (edge[2] == "front"){
        console.log("Error Solving First Cross Top");
      }
      else if (edge[2] == "back") {
        upInverted();
        left();
        up();
      }
      else if (edge[2] == "left") {
        left();
      }
      else if (edge[2] == "right") {
        up();
        up();
        left();
        up();
        up();
      }
      break;
    case "right":
      frontInverted();
      if (edge[2] == "up"){
        right();
        right();
        downInverted();
        right();
        right();
      }
      else if (edge[2] == "down") {
        downInverted();
      }
      else if (edge[2] == "front") {
        console.log("Error Solving First Cross Top");
      }
      else if (edge[2] == "back") {
        right();
        downInverted();
        rightInverted();
      }
      front();
      break;
    case "down":
      if (edge[2] == "front"){
        console.log("Error Solving First Cross Top");
      }
      else if (edge[2] == "back") {
        down();
        leftInverted();
        downInverted();
      }
      else if (edge[2] == "left") {
        leftInverted();
      }
      else if (edge[2] == "right") {
        down();
        down();
        leftInverted();
        down();
        down();
      }
      break;
    default:

  }
}

function solveFirstCorners(){
  //top left corner ------------------------------------------------------------
  let color1 = getFrontColor();
  let color2 = getUpColor();
  let color3 = getLeftColor();
  let address = findCorner(color1, color2, color3);
  switch (address) {
    case 1:

      break;
    case 2:
      topRightCornerRepeatAlgorithm();
      back();
      topLeftCornerRepeatAlgorithm();
      break;
    case 3:
      bottomLeftCornerRepeatAlgorithm();
      backInverted();
      topLeftCornerRepeatAlgorithm();
      break;
    case 4:
      bottomRightCornerRepeatAlgorithm();
      back();
      back();
      topLeftCornerRepeatAlgorithm();
      break;
    case 5:
      topLeftCornerRepeatAlgorithm();
      break;
    case 6:
      back();
      topLeftCornerRepeatAlgorithm();
      break;
    case 7:
      backInverted();
      topLeftCornerRepeatAlgorithm();
      break;
    case 8:
      back();
      back();
      topLeftCornerRepeatAlgorithm();
      break;
    default:
  }
  let n=0;
  while (n<4){
    if (isCornerRotationCorrect(1)){
      break;
    }
    else {
      topLeftCornerRepeatAlgorithm();
      topLeftCornerRepeatAlgorithm();
    }
    n+=1;
    if (n >= 4){
      console.log("Failed to solve Corner Top Left");
      break;
    }
  }
  //top right corner solve -----------------------------------------------------
  color1 = getFrontColor();
  color2 = getUpColor();
  color3 = getRightColor();
  address = findCorner(color1, color2, color3);
  switch (address) {
    case 1:
      console.log("Failed to solve Corner Top Left");
      break;
    case 2:

      break;
    case 3:
      bottomLeftCornerRepeatAlgorithm();
      back();
      back();
      topRightCornerRepeatAlgorithm();
      break;
    case 4:
      bottomRightCornerRepeatAlgorithm();
      back();
      topRightCornerRepeatAlgorithm();
      break;
    case 5:
      backInverted();
      topRightCornerRepeatAlgorithm();
      break;
    case 6:
      topRightCornerRepeatAlgorithm();
      break;
    case 7:
      back();
      back();
      topRightCornerRepeatAlgorithm();
      break;
    case 8:
      back();
      topRightCornerRepeatAlgorithm();
      break;
    default:

  }
  n=0;
  while (n<4){
    if (isCornerRotationCorrect(2)){
      break;
    }
    else {
      topRightCornerRepeatAlgorithm();
      topRightCornerRepeatAlgorithm();
    }
    n+=1;
    if (n >= 4){
      console.log("Failed to solve Corner Top Right");
      break;
    }
  }

  color1 = getFrontColor();
  color2 = getDownColor();
  color3 = getLeftColor();
  address = findCorner(color1, color2, color3);
  switch (address) {
    case 1:
      console.log("Failed to solve Corner Top Left");
      break;
    case 2:
      console.log("Failed to solve Corner Top Right");
      break;
    case 3:

      break;
    case 4:
      bottomRightCornerRepeatAlgorithm();
      backInverted();
      bottomLeftCornerRepeatAlgorithm();
      break;
    case 5:
      back();
      bottomLeftCornerRepeatAlgorithm();
      break;
    case 6:
      back();
      back();
      bottomLeftCornerRepeatAlgorithm();
      break;
    case 7:
      bottomLeftCornerRepeatAlgorithm();
      break;
    case 8:
      backInverted();
      bottomLeftCornerRepeatAlgorithm();
      break;
    default:

  }
  n=0;
  while (n<4){
    if (isCornerRotationCorrect(3)){
      break;
    }
    else {
      bottomLeftCornerRepeatAlgorithm();
      bottomLeftCornerRepeatAlgorithm();
    }
    n+=1;
    if (n >= 4){
      console.log("Failed to solve Corner Bottom Left");
      break;
    }
  }


  color1 = getFrontColor();
  color2 = getDownColor();
  color3 = getRightColor();
  address = findCorner(color1, color2, color3);
  switch (address) {
    case 1:
      console.log("Failed to solve Corner Top Left");
      break;
    case 2:
      console.log("Failed to solve Corner Top Right");
      break;
    case 3:
      console.log("Failed to solve Corner Bottom Left");
      break;
    case 4:

      break;
    case 5:
      back();
      back();
      bottomRightCornerRepeatAlgorithm();
      break;
    case 6:
      backInverted();
      bottomRightCornerRepeatAlgorithm();
      break;
    case 7:
      back();
      bottomRightCornerRepeatAlgorithm();
      break;
    case 8:
      bottomRightCornerRepeatAlgorithm();
      break;
    default:

  }
  n=0;
  while (n<4){
    if (isCornerRotationCorrect(4)){
      break;
    }
    else {
      bottomRightCornerRepeatAlgorithm();
      bottomRightCornerRepeatAlgorithm();
    }
    n+=1;
    if (n >= 4){
      console.log("Failed to solve Corner Bottom Right");
      break;
    }
  }
  spinDown();
}

function solveMidEdges(){
  //first face -----------------------------------------------------------------
  let frontColor = getFrontColor();
  let sideColor = getRightColor();
  let edge = findEdge(frontColor, sideColor);
  let skipAlgorithm = false;
  switch (edge[0]) {
    case "front":
      if (edge[2] == "right"){
        skipAlgorithm = true;
      }
      else if (edge[2] == "left") {
        midEdgeLeftAlgorithm();
        up();
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {

      }
      break;
    case "right":
      if (edge[2] == "front"){
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {
        up();
      }
      else if (edge[2] == "back") {
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      break;
    case "back":
      if (edge[2] == "right"){
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
      }
      else if (edge[2] == "up") {
        up();
        up();
      }
      else if (edge[2] == "left") {
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
      }
      break;
    case "left":
      if (edge[2] == "back"){
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {
        upInverted();
      }
      else if (edge[2] == "front") {
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    case "up":
      if (edge[2] == "front"){
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "right") {
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "back") {
        up();
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "left") {
        upInverted();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      break;
    default:
  }
  if (!skipAlgorithm) {
    midEdgeRightAlgorithm();
  }
  frontColor = getFrontColor();
  sideColor = getLeftColor();
  edge = findEdge(frontColor, sideColor);
  skipAlgorithm = false;
  switch (edge[0]) {
    case "front":
      if (edge[2] == "left"){
        skipAlgorithm = true;
      }
      else if (edge[2] == "up") {

      }
      else if (edge[2] == "right") {
        console.log("Mid Edge Solve error");
      }
      break;
    case "right":
      if (edge[2] == "front"){
        console.log("Mid Edge Solve error");
      }
      else if (edge[2] == "up") {
        up();
      }
      else if (edge[2] == "back") {
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    case "back":
      if (edge[2] == "right"){
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
      }
      else if (edge[2] == "up") {
        up();
        up();
      }
      else if (edge[2] == "left") {
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
      }
      break;
    case "left":
      if (edge[2] == "back"){
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {
        upInverted();
      }
      else if (edge[2] == "front") {
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    case "up":
      if (edge[2] == "front"){
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "right") {
        up();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "back") {
        up();
        up();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "left") {
        upInverted();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    default:

  }
  if (!skipAlgorithm){
    midEdgeLeftAlgorithm();
  }

//second face-------------------------------------------------------------------

  spinRight();
  frontColor = getFrontColor();
  sideColor = getRightColor();
  edge = findEdge(frontColor, sideColor);
  skipAlgorithm = false;
  switch (edge[0]) {
    case "front":
      if (edge[2] == "right"){
        skipAlgorithm = true;
      }
      else if (edge[2] == "left") {
        midEdgeLeftAlgorithm();
        up();
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {

      }
      break;
    case "right":
      if (edge[2] == "front"){
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {
        up();
      }
      else if (edge[2] == "back") {
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      break;
    case "back":
      if (edge[2] == "right"){
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
      }
      else if (edge[2] == "up") {
        up();
        up();
      }
      else if (edge[2] == "left") {
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
      }
      break;
    case "left":
      if (edge[2] == "back"){
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {
        upInverted();
      }
      else if (edge[2] == "front") {
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    case "up":
      if (edge[2] == "front"){
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "right") {
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "back") {
        up();
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "left") {
        upInverted();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      break;
    default:
  }
  if (!skipAlgorithm) {
    midEdgeRightAlgorithm();
  }
  frontColor = getFrontColor();
  sideColor = getLeftColor();
  edge = findEdge(frontColor, sideColor);
  skipAlgorithm = false;
  switch (edge[0]) {
    case "front":
      if (edge[2] == "left"){
        skipAlgorithm = true;
      }
      else if (edge[2] == "up") {

      }
      else if (edge[2] == "right") {
        console.log("Mid Edge Solve error");
      }
      break;
    case "right":
      if (edge[2] == "front"){
        console.log("Mid Edge Solve error");
      }
      else if (edge[2] == "up") {
        up();
      }
      else if (edge[2] == "back") {
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    case "back":
      if (edge[2] == "right"){
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
      }
      else if (edge[2] == "up") {
        up();
        up();
      }
      else if (edge[2] == "left") {
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
      }
      break;
    case "left":
      if (edge[2] == "back"){
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {
        upInverted();
      }
      else if (edge[2] == "front") {
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    case "up":
      if (edge[2] == "front"){
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "right") {
        up();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "back") {
        up();
        up();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "left") {
        upInverted();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    default:

  }
  if (!skipAlgorithm){
    midEdgeLeftAlgorithm();
  }

// third face ------------------------------------------------------------------
  spinRight();
  frontColor = getFrontColor();
  sideColor = getRightColor();
  edge = findEdge(frontColor, sideColor);
  skipAlgorithm = false;
  switch (edge[0]) {
    case "front":
      if (edge[2] == "right"){
        skipAlgorithm = true;
      }
      else if (edge[2] == "left") {
        midEdgeLeftAlgorithm();
        up();
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {

      }
      break;
    case "right":
      if (edge[2] == "front"){
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {
        up();
      }
      else if (edge[2] == "back") {
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      break;
    case "back":
      if (edge[2] == "right"){
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
      }
      else if (edge[2] == "up") {
        up();
        up();
      }
      else if (edge[2] == "left") {
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
      }
      break;
    case "left":
      if (edge[2] == "back"){
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {
        upInverted();
      }
      else if (edge[2] == "front") {
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    case "up":
      if (edge[2] == "front"){
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "right") {
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "back") {
        up();
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "left") {
        upInverted();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      break;
    default:
  }
  if (!skipAlgorithm) {
    midEdgeRightAlgorithm();
  }
  frontColor = getFrontColor();
  sideColor = getLeftColor();
  edge = findEdge(frontColor, sideColor);
  skipAlgorithm = false;
  switch (edge[0]) {
    case "front":
      if (edge[2] == "left"){
        skipAlgorithm = true;
      }
      else if (edge[2] == "up") {

      }
      else if (edge[2] == "right") {
        console.log("Mid Edge Solve error");
      }
      break;
    case "right":
      if (edge[2] == "front"){
        console.log("Mid Edge Solve error");
      }
      else if (edge[2] == "up") {
        up();
      }
      else if (edge[2] == "back") {
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    case "back":
      if (edge[2] == "right"){
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
      }
      else if (edge[2] == "up") {
        up();
        up();
      }
      else if (edge[2] == "left") {
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
      }
      break;
    case "left":
      if (edge[2] == "back"){
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {
        upInverted();
      }
      else if (edge[2] == "front") {
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    case "up":
      if (edge[2] == "front"){
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "right") {
        up();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "back") {
        up();
        up();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "left") {
        upInverted();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    default:

  }
  if (!skipAlgorithm){
    midEdgeLeftAlgorithm();
  }

//fourth face ------------------------------------------------------------------
  spinRight();
  frontColor = getFrontColor();
  sideColor = getRightColor();
  edge = findEdge(frontColor, sideColor);
  skipAlgorithm = false;
  switch (edge[0]) {
    case "front":
      if (edge[2] == "right"){
        skipAlgorithm = true;
      }
      else if (edge[2] == "left") {
        midEdgeLeftAlgorithm();
        up();
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {

      }
      break;
    case "right":
      if (edge[2] == "front"){
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {
        up();
      }
      else if (edge[2] == "back") {
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      break;
    case "back":
      if (edge[2] == "right"){
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
      }
      else if (edge[2] == "up") {
        up();
        up();
      }
      else if (edge[2] == "left") {
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
      }
      break;
    case "left":
      if (edge[2] == "back"){
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {
        upInverted();
      }
      else if (edge[2] == "front") {
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    case "up":
      if (edge[2] == "front"){
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "right") {
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "back") {
        up();
        up();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "left") {
        upInverted();
        midEdgeRightAlgorithm();
        midEdgeRightAlgorithm();
        up();
        up();
      }
      break;
    default:
  }
  if (!skipAlgorithm) {
    midEdgeRightAlgorithm();
  }
  frontColor = getFrontColor();
  sideColor = getLeftColor();
  edge = findEdge(frontColor, sideColor);
  skipAlgorithm = false;
  switch (edge[0]) {
    case "front":
      if (edge[2] == "left"){
        skipAlgorithm = true;
      }
      else if (edge[2] == "up") {

      }
      else if (edge[2] == "right") {
        console.log("Mid Edge Solve error");
      }
      break;
    case "right":
      if (edge[2] == "front"){
        console.log("Mid Edge Solve error");
      }
      else if (edge[2] == "up") {
        up();
      }
      else if (edge[2] == "back") {
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    case "back":
      if (edge[2] == "right"){
        spinLeft();
        midEdgeRightAlgorithm();
        spinRight();
        upInverted();
      }
      else if (edge[2] == "up") {
        up();
        up();
      }
      else if (edge[2] == "left") {
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
      }
      break;
    case "left":
      if (edge[2] == "back"){
        spinRight();
        midEdgeLeftAlgorithm();
        spinLeft();
        up();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "up") {
        upInverted();
      }
      else if (edge[2] == "front") {
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    case "up":
      if (edge[2] == "front"){
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "right") {
        up();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "back") {
        up();
        up();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      else if (edge[2] == "left") {
        upInverted();
        midEdgeLeftAlgorithm();
        midEdgeLeftAlgorithm();
        up();
        up();
      }
      break;
    default:

  }
  if (!skipAlgorithm){
    midEdgeLeftAlgorithm();
  }
}


function solveTopCross(){
  let topColors = getFaceColors("up");
  let n = 0;
  while (n<5){
    topColors = getFaceColors("up");
    if (topColors[1] == topColors[4] && topColors[3] == topColors[4] && topColors[5] == topColors[4] && topColors[7]){
      break;
    }
    else if (topColors[1] == topColors[4] && topColors[7] == topColors[4]) {
      up();
    }
    else if (topColors[5] == topColors[4] && topColors[7] == topColors[4]) {
      up();
      up();
    }
    else if (topColors[1] == topColors[4] && topColors[5] == topColors[4]) {
      upInverted();
    }
    else if (topColors[3] == topColors[4] && topColors[7] == topColors[4]) {
      up();
    }
    n+=1;
    if (n>=5){
      console.log("Top Cross Solve Error");
      break;
    }
    topCrossAlgorithm();
  }
}

function solveMidCrosses(){
  let n=0;
  let complete = false;
  let results = [];
  while (n<3){
    for (let i=0; i<4; i++){
      results = checkMidCrosses();
      if (results[2] && results[3]){
        complete = true;
        break;
      }
      else if (results[0] && results[3]) {
        spinRight();
        spinRight();
        spinRight();
        complete = true;
        break;
      }
      else if (results[0] && results[1]) {
        spinRight();
        spinRight();
        complete = true;
        break;
      }
      else if (results[1] && results[2]) {
        spinRight();
        complete = true;
        break;
      }
      else {
        up();
      }
    }
    if (complete){
      if (results[0] && results[1] && results[2] && results[3]){}
      else {midCrossesAlgorithm();}
      break;
    }
    n++;
    midCrossesAlgorithm();
    if (n>=3){
      console.log("Failed Solving Mid Crosses");
    }
  }
  results = checkMidCrosses();
  if (results[0] && results[1] && results[2] && results[3]){}
  else {console.log("Error Solving Mid Crosses");
        console.log(checkMidCrosses())}
}

function solveTopCornerPositions(){
  let results = [];
  results = cornerPositions();
  if (results[0] && results[1] && results[4] && results[5]){}
  else {
    for(let i=0; i<6; i++){
      results = cornerPositions();

      if (results[0] && results[1] && results[4] && results[5]){break;}

      else if (results[0] || results[1] || results[4] || results[5]){
        if (results[0]){
          spinRight();
          shuffleTopCornersAlgorithm();
        }
        else if (results[1]) {
          shuffleTopCornersAlgorithm();
        }
        else if (results[4]) {
          spinRight();
          spinRight();
          shuffleTopCornersAlgorithm();
        }
        else if (results[5]) {
          spinLeft();
          shuffleTopCornersAlgorithm();
        }
      }
      else {
        shuffleTopCornersAlgorithm();
      }
    }
  }
}

function solveTopCornerRotation(){
  if (checkIsSolved()){return;}
  for (let i=0; i<4; i++){
    if (isCornerRotationCorrect(2)){spinRight();}
    else {break;}
    if (i >= 4){console.log("Error Solving Top Corner Positions");}
  }
  if (checkIsSolved()){return;}
  for (let i=0; i<3; i++){
    if (isCornerRotationCorrect(2)){break;}
    else {
      finalCornerRepeatAlgorithm();
      finalCornerRepeatAlgorithm();
    }
    if (i>=3){console.log("Error Solving Top Corner Rotation");}
  }
  if (checkIsSolved()){return;}
  for (i=0; i<3; i++){
    if (isCornerRotationCorrect(1)){break;}
    else {
      upInverted();
      finalCornerRepeatAlgorithm();
      finalCornerRepeatAlgorithm();
      up();
    }
    if (i>=3){console.log("Error Solving Top Corner Rotation");}
  }
  if (checkIsSolved()){return;}
  for (i=0; i<3; i++){
    if (isCornerRotationCorrect(5)){break;}
    else {
      upInverted();
      upInverted();
      finalCornerRepeatAlgorithm();
      finalCornerRepeatAlgorithm();
      up();
      up();
    }
    if (i>=3){console.log("Error Solving Top Corner Rotation");}
  }
  if (checkIsSolved()){return;}
  for (i=0; i<3; i++){
    if (isCornerRotationCorrect(6)){break;}
    else{
      up();
      finalCornerRepeatAlgorithm();
      finalCornerRepeatAlgorithm();
      upInverted();
    }
    if (i>=3){console.log("Error Solving Top Corner Rotation");}
  }
  if (checkIsSolved()){return;}
  else{console.log("Error In Final Solve");}
}

function midEdgeRightAlgorithm(){
  up();
  right();
  upInverted();
  rightInverted();
  upInverted();
  frontInverted();
  up();
  front();
}

function midEdgeLeftAlgorithm(){
  upInverted();
  leftInverted();
  up();
  left();
  up();
  front();
  upInverted();
  frontInverted();
}

function midCrossesAlgorithm(){
  right();
  up();
  rightInverted();
  up();
  right();
  up();
  up();
  rightInverted();
  up();
}

function topCrossAlgorithm(){
  front();
  right();
  up();
  rightInverted();
  upInverted();
  frontInverted();
}
function shuffleTopCornersAlgorithm(){
  up();
  right();
  upInverted();
  leftInverted();
  up();
  rightInverted();
  upInverted();
  left();
}
function finalCornerRepeatAlgorithm(){
  rightInverted();
  downInverted();
  right();
  down();
}

function bottomRightCornerRepeatAlgorithm(){
  rightInverted();
  backInverted();
  right();
  back();
}
function bottomLeftCornerRepeatAlgorithm(){
  downInverted();
  backInverted();
  down();
  back();
}
function topRightCornerRepeatAlgorithm(){
  upInverted();
  backInverted();
  up();
  back();
}
function topLeftCornerRepeatAlgorithm(){
  leftInverted();
  backInverted();
  left();
  back();
}

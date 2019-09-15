class Cube{
  constructor(size, spacing){
    this.size = size;
    this.spacing = spacing;
    this.left = new Side(this.size, color(255, 128, 0));
    this.right = new Side(this.size, color(204, 0, 0));
    this.front = new Side(this.size, color(0, 204, 0));
    this.back = new Side(this.size, color(0, 0, 204));
    this.up = new Side(this.size, color(204, 204, 204));
    this.down = new Side(this.size, color(204, 204, 0));
  }

  show(){
    let sidepos = createVector(300, 100);
    this.up.show(sidepos);
    sidepos.x -= this.size + this.spacing;
    sidepos.y += this.size + this.spacing;
    this.left.show(sidepos);
    sidepos.x += this.size + this.spacing;
    this.front.show(sidepos);
    sidepos.x += this.size + this.spacing;
    this.right.show(sidepos);
    sidepos.x += this.size + this.spacing;
    this.back.show(sidepos);
    sidepos.x -= (this.size+this.spacing) * 2;
    sidepos.y += this.size + this.spacing;
    this.down.show(sidepos);
  }
//Cube Side Rotation Functions---------------------------------------------------------------
  rotateFront(){
    let square1 = this.right.squares[0];
    let square2 = this.right.squares[3];
    let square3 = this.right.squares[6];
    this.right.squares[0] = this.up.squares[6];
    this.right.squares[3] = this.up.squares[7];
    this.right.squares[6] = this.up.squares[8];
    this.up.squares[6] = this.left.squares[8];
    this.up.squares[7] = this.left.squares[5];
    this.up.squares[8] = this.left.squares[2];
    this.left.squares[8] = this.down.squares[2];
    this.left.squares[5] = this.down.squares[1];
    this.left.squares[2] = this.down.squares[0];
    this.down.squares[2] = square1;
    this.down.squares[1] = square2;
    this.down.squares[0] = square3;
    this.front.spinCW();
  }
  rotateFrontInverted(){
    let square1 = this.left.squares[2];
    let square2 = this.left.squares[5];
    let square3 = this.left.squares[8];
    this.left.squares[2] = this.up.squares[8];
    this.left.squares[5] = this.up.squares[7];
    this.left.squares[8] = this.up.squares[6];
    this.up.squares[8] = this.right.squares[6];
    this.up.squares[7] = this.right.squares[3];
    this.up.squares[6] = this.right.squares[0];
    this.right.squares[6] = this.down.squares[0];
    this.right.squares[3] = this.down.squares[1];
    this.right.squares[0] = this.down.squares[2];
    this.down.squares[0] = square1;
    this.down.squares[1] = square2;
    this.down.squares[2] = square3;
    this.front.spinCCW();
  }
  rotateBack(){
    let square1 = this.left.squares[0];
    let square2 = this.left.squares[3];
    let square3 = this.left.squares[6];
    this.left.squares[0] = this.up.squares[2];
    this.left.squares[3] = this.up.squares[1];
    this.left.squares[6] = this.up.squares[0];
    this.up.squares[2] = this.right.squares[8];
    this.up.squares[1] = this.right.squares[5];
    this.up.squares[0] = this.right.squares[2];
    this.right.squares[8] = this.down.squares[6];
    this.right.squares[5] = this.down.squares[7];
    this.right.squares[2] = this.down.squares[8];
    this.down.squares[6] = square1;
    this.down.squares[7] = square2;
    this.down.squares[8] = square3;
    this.back.spinCW();
  }
  rotateBackInverted(){
    let square1 = this.right.squares[2];
    let square2 = this.right.squares[5];
    let square3 = this.right.squares[8];
    this.right.squares[2] = this.up.squares[0];
    this.right.squares[5] = this.up.squares[1];
    this.right.squares[8] = this.up.squares[2];
    this.up.squares[0] = this.left.squares[6];
    this.up.squares[1] = this.left.squares[3];
    this.up.squares[2] = this.left.squares[0];
    this.left.squares[6] = this.down.squares[8];
    this.left.squares[3] = this.down.squares[7];
    this.left.squares[0] = this.down.squares[6];
    this.down.squares[8] = square1;
    this.down.squares[7] = square2;
    this.down.squares[6] = square3;
    this.back.spinCCW();
  }
  rotateRight(){
    let square1 = this.down.squares[2];
    let square2 = this.down.squares[5];
    let square3 = this.down.squares[8];
    this.down.squares[2] = this.back.squares[6];
    this.down.squares[5] = this.back.squares[3];
    this.down.squares[8] = this.back.squares[0];
    this.back.squares[6] = this.up.squares[2];
    this.back.squares[3] = this.up.squares[5];
    this.back.squares[0] = this.up.squares[8];
    this.up.squares[2] = this.front.squares[2];
    this.up.squares[5] = this.front.squares[5];
    this.up.squares[8] = this.front.squares[8];
    this.front.squares[2] = square1;
    this.front.squares[5] = square2;
    this.front.squares[8] = square3;
    this.right.spinCW();
  }
  rotateRightInverted(){
    let square1 = this.up.squares[2];
    let square2 = this.up.squares[5];
    let square3 = this.up.squares[8];
    this.up.squares[2] = this.back.squares[6];
    this.up.squares[5] = this.back.squares[3];
    this.up.squares[8] = this.back.squares[0];
    this.back.squares[6] = this.down.squares[2];
    this.back.squares[3] = this.down.squares[5];
    this.back.squares[0] = this.down.squares[8];
    this.down.squares[2] = this.front.squares[2];
    this.down.squares[5] = this.front.squares[5];
    this.down.squares[8] = this.front.squares[8];
    this.front.squares[2] = square1;
    this.front.squares[5] = square2;
    this.front.squares[8] = square3;
    this.right.spinCCW();
  }
  rotateLeft(){
    let square1 = this.up.squares[0];
    let square2 = this.up.squares[3];
    let square3 = this.up.squares[6];
    this.up.squares[0] = this.back.squares[8];
    this.up.squares[3] = this.back.squares[5];
    this.up.squares[6] = this.back.squares[2];
    this.back.squares[8] = this.down.squares[0];
    this.back.squares[5] = this.down.squares[3];
    this.back.squares[2] = this.down.squares[6];
    this.down.squares[0] = this.front.squares[0];
    this.down.squares[3] = this.front.squares[3];
    this.down.squares[6] = this.front.squares[6];
    this.front.squares[0] = square1;
    this.front.squares[3] = square2;
    this.front.squares[6] = square3;
    this.left.spinCW();
  }
  rotateLeftInverted(){
    let square1 = this.down.squares[0];
    let square2 = this.down.squares[3];
    let square3 = this.down.squares[6];
    this.down.squares[0] = this.back.squares[8];
    this.down.squares[3] = this.back.squares[5];
    this.down.squares[6] = this.back.squares[2];
    this.back.squares[8] = this.up.squares[0];
    this.back.squares[5] = this.up.squares[3];
    this.back.squares[2] = this.up.squares[6];
    this.up.squares[0] = this.front.squares[0];
    this.up.squares[3] = this.front.squares[3];
    this.up.squares[6] = this.front.squares[6];
    this.front.squares[0] = square1;
    this.front.squares[3] = square2;
    this.front.squares[6] = square3;
    this.left.spinCCW();
  }
  rotateUp(){
    let square1 = this.right.squares[0];
    let square2 = this.right.squares[1];
    let square3 = this.right.squares[2];
    this.right.squares[0] = this.back.squares[0];
    this.right.squares[1] = this.back.squares[1];
    this.right.squares[2] = this.back.squares[2];
    this.back.squares[0] = this.left.squares[0];
    this.back.squares[1] = this.left.squares[1];
    this.back.squares[2] = this.left.squares[2];
    this.left.squares[0] = this.front.squares[0];
    this.left.squares[1] = this.front.squares[1];
    this.left.squares[2] = this.front.squares[2];
    this.front.squares[0] = square1;
    this.front.squares[1] = square2;
    this.front.squares[2] = square3;
    this.up.spinCW();
  }
  rotateUpInverted(){
    let square1 = this.left.squares[0];
    let square2 = this.left.squares[1];
    let square3 = this.left.squares[2];
    this.left.squares[0] = this.back.squares[0];
    this.left.squares[1] = this.back.squares[1];
    this.left.squares[2] = this.back.squares[2];
    this.back.squares[0] = this.right.squares[0];
    this.back.squares[1] = this.right.squares[1];
    this.back.squares[2] = this.right.squares[2];
    this.right.squares[0] = this.front.squares[0];
    this.right.squares[1] = this.front.squares[1];
    this.right.squares[2] = this.front.squares[2];
    this.front.squares[0] = square1;
    this.front.squares[1] = square2;
    this.front.squares[2] = square3;
    this.up.spinCCW();
  }
  rotateDown(){
    let square1 = this.left.squares[6];
    let square2 = this.left.squares[7];
    let square3 = this.left.squares[8];
    this.left.squares[6] = this.back.squares[6];
    this.left.squares[7] = this.back.squares[7];
    this.left.squares[8] = this.back.squares[8];
    this.back.squares[6] = this.right.squares[6];
    this.back.squares[7] = this.right.squares[7];
    this.back.squares[8] = this.right.squares[8];
    this.right.squares[6] = this.front.squares[6];
    this.right.squares[7] = this.front.squares[7];
    this.right.squares[8] = this.front.squares[8];
    this.front.squares[6] = square1;
    this.front.squares[7] = square2;
    this.front.squares[8] = square3;
    this.down.spinCW();
  }
  rotateDownInverted(){
    let square1 = this.right.squares[6];
    let square2 = this.right.squares[7];
    let square3 = this.right.squares[8];
    this.right.squares[6] = this.back.squares[6];
    this.right.squares[7] = this.back.squares[7];
    this.right.squares[8] = this.back.squares[8];
    this.back.squares[6] = this.left.squares[6];
    this.back.squares[7] = this.left.squares[7];
    this.back.squares[8] = this.left.squares[8];
    this.left.squares[6] = this.front.squares[6];
    this.left.squares[7] = this.front.squares[7];
    this.left.squares[8] = this.front.squares[8];
    this.front.squares[6] = square1;
    this.front.squares[7] = square2;
    this.front.squares[8] = square3;
    this.down.spinCCW();
  }
//-------------------------------------------------------------------------------------------
//Spin Cube Functions------------------------------------------------------------------------
  spinRight(){
    let sides = [this.left, this.right, this.front, this.back, this.up, this.down];
    this.left = sides[3];
    this.right = sides[2];
    this.front = sides[0];
    this.back = sides[1];
    this.up.spinCCW();
    this.down.spinCW();
  }
  spinLeft(){
    let sides = [this.left, this.right, this.front, this.back, this.up, this.down];
    this.left = sides[2];
    this.right = sides[3];
    this.front = sides[1];
    this.back = sides[0];
    this.up.spinCW();
    this.down.spinCCW();
  }
  spinUp(){
    let sides = [this.left, this.right, this.front, this.back, this.up, this.down];
    this.up = sides[2];
    this.down = sides[3];
    this.front = sides[5];
    this.back = sides[4];
    this.right.spinCW();
    this.left.spinCCW();
    this.down.spinCW();
    this.down.spinCW();
    this.back.spinCW();
    this.back.spinCW();
  }
  spinDown(){
    let sides = [this.left, this.right, this.front, this.back, this.up, this.down];
    this.up = sides[3];
    this.down = sides[2];
    this.front = sides[4];
    this.back = sides[5];
    this.right.spinCCW();
    this.left.spinCW();
    this.up.spinCW();
    this.up.spinCW();
    this.back.spinCW();
    this.back.spinCW();
  }
//------------------------------------------------------------------------------------------
  mixUp(){
    let n;
    for(let i=0; i<200; i++){
      n = Math.floor(Math.random() * 12) + 1;
      switch (n){
        case 1:
          this.rotateFront();
          break;
        case 2:
          this.rotateFrontInverted();
          break;
        case 3:
          this.rotateBack();
          break;
        case 4:
          this.rotateBackInverted();
          break;
        case 5:
          this.rotateRight();
          break;
        case 6:
          this.rotateRightInverted();
          break;
        case 7:
          this.rotateLeft();
          break;
        case 8:
          this.rotateLeftInverted();
          break;
        case 9:
          this.rotateRight();
          break;
        case 10:
          this.rotateRightInverted();
          break;
        case 11:
          this.rotateLeft();
          break;
        case 12:
          this.rotateLeftInverted();
      }
    }
  }
//this function is passed two colors and find the corisponding edge with those two colors
//[color1 face, color1 index on face, color2 face, color2 index on face]
  findEdge(color1, color2){
    let result = [];
    //color1 on front face
    if (this.front.squares[1].color == color1 && this.up.squares[7].color == color2){
      result = ["front", 1, "up", 7];
      return result;
    }
    else if (this.front.squares[5].color == color1 && this.right.squares[3].color == color2) {
      result = ["front", 5, "right", 3];
      return result;
    }
    else if (this.front.squares[7].color == color1 && this.down.squares[1].color == color2) {
      result = ["front", 7, "down", 1];
      return result;
    }
    else if (this.front.squares[3].color == color1 && this.left.squares[5].color == color2) {
      result = ["front", 3, "left", 5];
      return result;
    }
    //color2 on front face
    else if (this.up.squares[7].color == color1 && this.front.squares[1].color == color2) {
      result = ["up", 7, "front", 1];
      return result;
    }
    else if (this.right.squares[3].color == color1 && this.front.squares[5].color == color2) {
      result = ["right", 3, "front", 5];
      return result;
    }
    else if (this.down.squares[1].color == color1 && this.front.squares[7].color == color2) {
      result = ["down", 1, "front", 7];
      return result;
    }
    else if (this.left.squares[5].color == color1 && this.front.squares[3].color == color2) {
      result = ["left", 5, "front", 3];
      return result;
    }
    //color1 on back face
    else if (this.back.squares[1].color == color1 && this.up.squares[1].color == color2) {
      result = ["back", 1, "up", 1];
      return result;
    }
    else if (this.back.squares[5].color == color1 && this.left.squares[3].color == color2) {
      result = ["back", 5, "left", 3];
      return result;
    }
    else if (this.back.squares[7].color == color1 && this.down.squares[7].color == color2) {
      result = ["back", 7, "down", 7];
      return result;
    }
    else if (this.back.squares[3].color == color1 && this.right.squares[5].color == color2) {
      result = ["back", 3, "right", 5];
      return result;
    }
    //color2 on back face
    else if (this.up.squares[1].color == color1 && this.back.squares[1].color == color2) {
      result = ["up", 1, "back", 1];
      return result;
    }
    else if (this.left.squares[3].color == color1 && this.back.squares[5].color == color2) {
      result = ["left", 3, "back", 5];
      return result;
    }
    else if (this.down.squares[7].color == color1 && this.back.squares[7].color == color2) {
      result = ["down", 7, "back", 7];
      return result;
    }
    else if (this.right.squares[5].color == color1 && this.back.squares[3].color == color2) {
      result = ["right", 5, "back", 3];
      return result;
    }
    //edges that do not touch front or back
    else if (this.up.squares[5].color == color1 && this.right.squares[1].color == color2) {
      result = ["up", 5, "right", 1];
      return result;
    }
    else if (this.right.squares[1].color == color1 && this.up.squares[5].color == color2) {
      result = ["right", 1, "up", 5];
      return result;
    }
    else if (this.right.squares[7].color == color1 && this.down.squares[5].color == color2) {
      result = ["right", 7, "down", 5];
      return result;
    }
    else if (this.down.squares[5].color == color1 && this.right.squares[7].color == color2) {
      result = ["down", 5, "right", 7];
      return result;
    }
    else if (this.down.squares[3].color == color1 && this.left.squares[7].color == color2) {
      result = ["down", 3, "left", 7];
      return result;
    }
    else if (this.left.squares[7].color == color1 && this.down.squares[3].color == color2) {
      result = ["left", 7, "down", 3];
      return result;
    }
    else if (this.left.squares[1].color == color1 && this.up.squares[3].color == color2) {
      result = ["left", 1, "up", 3];
      return result;
    }
    else if (this.up.squares[3].color == color1 && this.left.squares[1].color == color2) {
      result = ["up", 3, "left", 1];
      return result;
    }
  }
}

class Side{
  constructor(size, color){
    this.size = size;
    this.squares = [];
    for (let i=0; i<9; i++){
      this.squares[i] = new Square(color, size/3);
    }
  }

  show(pos){
    let i=0;
    let n=0;
    stroke(255);
    for (let square of this.squares){
      fill(square.color);
      rect(pos.x + (i*square.size), pos.y + (n * square.size), square.size, square.size);
      i++;
      if (i>=3){
        i=0;
        n++;
      }
    }
  }

  spinCW(){
    let square1 = this.squares[0];
    let square2 = this.squares[1];
    let square3 = this.squares[2];
    let square4 = this.squares[3];
    let square5 = this.squares[4];
    let square6 = this.squares[5];
    let square7 = this.squares[6];
    let square8 = this.squares[7];
    let square9 = this.squares[8];
    this.squares[0] = square7;
    this.squares[1] = square4;
    this.squares[2] = square1;
    this.squares[3] = square8;
    this.squares[4] = square5;
    this.squares[5] = square2;
    this.squares[6] = square9;
    this.squares[7] = square6;
    this.squares[8] = square3;
  }
  spinCCW(){
    let square1 = this.squares[0];
    let square2 = this.squares[1];
    let square3 = this.squares[2];
    let square4 = this.squares[3];
    let square5 = this.squares[4];
    let square6 = this.squares[5];
    let square7 = this.squares[6];
    let square8 = this.squares[7];
    let square9 = this.squares[8];
    this.squares[0] = square3;
    this.squares[1] = square6;
    this.squares[2] = square9;
    this.squares[3] = square2;
    this.squares[4] = square5;
    this.squares[5] = square8;
    this.squares[6] = square1;
    this.squares[7] = square4;
    this.squares[8] = square7;
  }
}

const DIM = 100
const CANVAS = 900

const tiles =[]
let gridIndex = [] // GridPiece at x, y is at gridIndex[x][y]

const UNIT = CANVAS / DIM

class GridPiece {
  possibleTiles = [];
  x;
  y;

  constructor(x, y, possibleTiles) {
    this.x = x;
    this.y = y;
    this.possibleTiles = possibleTiles;
  }

  avaluate() {
    let neighbours = this.findNeighbours()

    this.eliminateOptionsUsingNeighbours(neighbours)
  }
  findNeighbours() {
    let neighbours = []
    if (this.x > 0) {
      let leftPiece = gridIndex[this.x - 1][this.y]
      neighbours.push({
        piece: leftPiece,
        side: 'left'
      })
    }

    if (this.x < DIM - 1) {
      let rightPiece = gridIndex[this.x + 1][this.y]
      neighbours.push({
        piece: rightPiece,
        side: 'right'
      })
    }

    if (this.y > 0) {
      let upPiece = gridIndex[this.x][this.y - 1]
      neighbours.push({
        piece: upPiece,
        side: 'up'
      })
    }

    if (this.y < DIM - 1) {
      let downPiece = gridIndex[this.x][this.y + 1]
      neighbours.push({
        piece: downPiece,
        side: 'down'
      })
    }
    return neighbours
  }

  hasCollapsedNeighbour() {
    let neighbours = this.findNeighbours()

    for (let i = 0; i < neighbours.length; i++) {
      const n = neighbours[i];
      if (n.piece.possibleTiles.length === 1) {
        return true;
      }
    }
    return false;
  }

  eliminateOptionsUsingNeighbours(neighbours) {
    let matchedTiles = []
    for (let i = 0; i < this.possibleTiles.length; i++) {
      const tile = this.possibleTiles[i]
      let allMatched = true
      let hasCollapsedNeighbour = false
      for (let j = 0; j < neighbours.length; j++) {
        const n = neighbours[j];
        if (n.piece.possibleTiles.length === 1) {
          let fixedTile = n.piece.possibleTiles[0]
          allMatched = allMatched && tile.socketMatch(fixedTile, n.side)
          hasCollapsedNeighbour = true;
        }
      }

      if(allMatched && hasCollapsedNeighbour) {
        matchedTiles.push(tile)
      }
    }

    if(matchedTiles.length > 1) {
      this.possibleTiles = [matchedTiles[parseInt(random(0, matchedTiles.length))]]
    } else if(matchedTiles.length == 1) {
      this.possibleTiles = [matchedTiles[0]]
    }
  }
  eliminateOptions(piece, side) {
    if (piece.possibleTiles.length === 1) {
      let fixedTile = piece.possibleTiles[0]
      let matchedTiles = []
      for (let i = 0; i < this.possibleTiles.length; i++) {
        const tile = this.possibleTiles[i]
        if (tile.socketMatch(fixedTile, side)) {
          matchedTiles.push(tile)
        }
      }

      if(matchedTiles.length > 1) {
        this.possibleTiles = [matchedTiles[parseInt(random(0, matchedTiles.length))]]
      } else if(matchedTiles.length == 1) {
        this.possibleTiles = [matchedTiles[0]]
      }
    }
  }

  onlyTile(index) {
    this.possibleTiles = [this.possibleTiles[index]];
  }

  draw() {
    if(this.possibleTiles.length > 1) {
      fill(255, 204, 0);
      const locX = ((this.x) * UNIT) + 1
      const locY = ((this.y) * UNIT) + 1
      rect(locX, locY, UNIT - 2);
      textSize(20);
      fill(255, 0, 0);
      text(this.possibleTiles.length + " tiles", locX + (UNIT / 10), locY  + (UNIT / 2));
    } else {
      this.possibleTiles[0].draw(this.x, this.y)
    }
    // translate(CANVAS / 2, CANVAS / 2);
    // rotate(PI / 180 * 45);
    // imageMode(CENTER);
    // image(img, 0, 0, 150, 150);

  }
}

class Tile {
  img;
  sockets; // TOP, RIGHT, DOWN, LEFT
  rotation = 0

  constructor(img, sockets, rotation = 0) {
    this.img = img
    this.sockets = sockets
    this.rotation = rotation % 4

    for (let t = 0; t < this.rotation; t++) {
      this.sockets.unshift(this.sockets[this.sockets.length - 1])
      this.sockets.splice(this.sockets.length - 1)
    }
  }

  socketMatch(otherTile, onMy) {
    const UP = 0
    const RIGHT = 1
    const DOWN = 2
    const LEFT = 3

    if(onMy === 'left') {
      return this.sockets[LEFT] === otherTile.sockets[RIGHT]
    } else if(onMy === 'right') {
      return this.sockets[RIGHT] === otherTile.sockets[LEFT]
    } else if(onMy === 'up') {
      return this.sockets[UP] === otherTile.sockets[DOWN]
    } else if(onMy === 'down') {
      return this.sockets[DOWN] === otherTile.sockets[UP]
    } 
  }

  rotate(times) {
    return new Tile(this.img, [...this.sockets], this.rotation + times)
  }

  draw(x, y) {
    let rotationFactor = this.rotation / 2
    if(this.rotation == 0) {
      rotationFactor = 2
    }

    const locX = x * UNIT + UNIT / 2
    const locY = y * UNIT + UNIT / 2
    translate(locX, locY)
    rotate(PI * rotationFactor);
    imageMode(CENTER);
    image(this.img, 0, 0, UNIT, UNIT);
    textSize(32);
    fill(255, 0, 0);
    text(tiles.indexOf(this), 0, 0);
    rotate(PI * -rotationFactor);
    // console.log(this.rotation)
  // rotate(PI / 180 * 45);
  // imageMode(CENTER);
  // image(img, 0, 0, 150, 150);
    translate(-locX, -locY);
  }
}

function preload() {
  knots(tiles)
  //faraz(tiles)
  // summer(tiles)
}

function setup() {
  randomSeed(701)

  createCanvas(CANVAS, CANVAS);

  for (let x = 0; x < DIM; x++) {
    gridIndex[x] = {}
    for (let y = 0; y < DIM; y++) {
      gridIndex[x][y] = new GridPiece(x, y, [...tiles])
    }
  }

  let gridX = parseInt(random(0, DIM));
  let gridY = parseInt(random(0, DIM));
  let tile = parseInt(random(0, tiles.length));

  gridIndex[gridX][gridY].onlyTile(tile)

  //setInterval(calculateNext, 100)
  setInterval(calculateOne, 100)
}

function draw() {

  for (let x = 0; x < DIM; x++) {
    for (let y = 0; y < DIM; y++) {
      gridIndex[x][y].draw()
    }
  }  
  // background(220);
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);

  // background('#111');
  // translate(CANVAS / 2, CANVAS / 2);
  // rotate(PI / 180 * 45);
  // imageMode(CENTER);
  // image(img, 0, 0, 150, 150);

  // reset()
  // rotate(PI / 180 * -45);
  // image(img, 0, 0, 150, 150);

}

function mouseClicked() {
  // calculateNext()
  calculateOne()
}

function* piecesItr() {
  while(true) {
    for (let x = 0; x < DIM; x++) {
      for (let y = 0; y < DIM; y++) {
        yield gridIndex[x][y]
      }
    }
  }
}

const PITR = piecesItr()

function calculateNext() {
  for (let x = 0; x < DIM; x++) {
    for (let y = 0; y < DIM; y++) {
      gridIndex[x][y].avaluate()
    }
  }

  for (let x = DIM - 1; x >= 0; x--) {
    for (let y = DIM - 1; y >= 0; y--) {
      gridIndex[x][y].avaluate()
    }
  }
  // PITR.next().value.avaluate()
}

function calculateOne() {
  for (let x = 0; x < DIM; x++) {
    for (let y = 0; y < DIM; y++) {
      const targetPiece = gridIndex[x][y]
      if(targetPiece.possibleTiles.length > 1 && targetPiece.hasCollapsedNeighbour()) {
        console.log('Evaluating: ' + x + ', ' + y)
        targetPiece.avaluate();

        if(targetPiece.possibleTiles.length <= 1) {
          // return;
        }
      }
    }
  }

  for (let x = DIM; x >= 0; x--) {
    for (let y = DIM; y >= 0; y--) {
      const targetPiece = gridIndex[x][y]
      if(targetPiece.possibleTiles.length > 1 && targetPiece.hasCollapsedNeighbour()) {
        console.log('Evaluating: ' + x + ', ' + y)
        targetPiece.avaluate();

        if(targetPiece.possibleTiles.length <= 1) {
          // return;
        }
      }
    }
  }
}

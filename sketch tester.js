const DIM = 50
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

  isCollapsed() {
    return this.possibleTiles.length <= 1;
  }

  forceRandomCollapse() {
    this.possibleTiles = [this.possibleTiles[parseInt(random(0, this.possibleTiles.length))]]
  }

  avaluate() {
    if(this.isCollapsed()) {
      return;
    }
    let neighbours = this.findNeighbours()
    this.eliminateOptionsUsingNeighbours(neighbours)

    let allNeighboursCollapsed = true;
    neighbours.forEach(n => {
      allNeighboursCollapsed = allNeighboursCollapsed && n.piece.isCollapsed()
    })

    if(allNeighboursCollapsed) {
      this.forceRandomCollapse()
    }
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
      if (n.piece.isCollapsed()) {
        return true;
      }
    }
    return false;
  }

  plugsInAnySocket(otherTile, side) {
    for (let i = 0; i < this.possibleTiles.length; i++) {
      const tile = this.possibleTiles[i]
      if(otherTile.socketMatch(tile, side)) {
        return true
      }
    }

    return false
  }

  eliminateOptionsUsingNeighbours(neighbours) {
    if(neighbours.length === 0) {
      return
    }
    let matchedTiles = []
    let neighbourWithLeastEntropy = neighbours[0].piece
    for (let j = 0; j < neighbours.length; j++) {
      const n = neighbours[j];
      if(n.piece.possibleTiles.length < neighbourWithLeastEntropy.possibleTiles.leftPiece) {
        neighbourWithLeastEntropy = n.piece
      }
    }

    for (let i = 0; i < this.possibleTiles.length; i++) {
      const tile = this.possibleTiles[i]
      let allMatched = true
      for (let j = 0; j < neighbours.length; j++) {
        const n = neighbours[j];
        allMatched = allMatched && n.piece.plugsInAnySocket(tile, n.side)
      }

      if(allMatched) {
        matchedTiles.push(tile)
      }
    }

    this.possibleTiles = matchedTiles;
    // this.forceRandomCollapse()

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

  fillGreenVal = 204
  lastEntropy = 0

  infoRectAndText(str, rr, rg, rb, tr, tg, tb) {
    const locX = ((this.x) * UNIT) + 1
    const locY = ((this.y) * UNIT) + 1

    fill(rr, rg, rb);
    rect(locX, locY, UNIT - 2);

    textSize(12);
    fill(tr, tg, tb);
    text(str, locX + (UNIT / 10), locY  + (UNIT / 2));
  }

  draw() {
    if(!this.isCollapsed()) {
      this.infoRectAndText(this.possibleTiles.length, 255, this.fillGreenVal, 0, 255, 0, 0)

      let currentEntropy = this.possibleTiles.length
      if(currentEntropy != this.lastEntropy) {
        if(this.fillGreenVal == 204) {
          this.fillGreenVal = 230
        } else {
          this.fillGreenVal = 204
        }
      }
      this.lastEntropy = currentEntropy

    } else {
      if(this.possibleTiles.length === 1) {
        try {
          this.possibleTiles[0].draw(this.x, this.y)
        } catch(e) {
          this.infoRectAndText('e', 255, 0, 0, 255, 255, 200)
        }
      } else {
        this.infoRectAndText(0, 255, 0, 0, 255, 255, 200)
      }
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
    textSize(16);
    fill(255, 255, 255);
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
  //knots(tiles)
  //faraz(tiles)
  summer(tiles)
}

function setup() {

  createCanvas(CANVAS, CANVAS);

  initialSetup()
  // gridIndex[0][0].onlyTile(37)
  // gridIndex[1][0].onlyTile(32)
  // gridIndex[0][1].onlyTile(29)

  //setInterval(calculateNext, 100)
  // setInterval(calculateOne, 10)
  setTimeout(calculateOneWithTimeout, 1)
}

function initialSetup() {
  let seed = parseInt(random(0, 10000000))
  // seed = 2978301; // with DIM = 4
  // seed = 904496
  // seed = 9828633
  // seed = 3669319
  // seed = 8906879
  console.log("Seed: " + seed)
  randomSeed(seed)

  for (let x = 0; x < DIM; x++) {
    gridIndex[x] = {}
    for (let y = 0; y < DIM; y++) {
      gridIndex[x][y] = new GridPiece(x, y, [...tiles])
    }
  }

  let gridX = parseInt(random(0, DIM))
  let gridY = parseInt(random(0, DIM))
  let tile = parseInt(random(0, tiles.length))

  gridIndex[gridX][gridY].onlyTile(tile)
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
let continueEvaluation = true
function mousePressed(e) {
  // console.log(e.button)
  // calculateNext()
  if (mouseButton === CENTER) {
    continueEvaluation = !continueEvaluation 
  } else if (mouseButton === LEFT) {
    continueEvaluation = false
    calculateOne()
  }
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

function calculateOneWithTimeout() {
  if(continueEvaluation) {
    calculateOne()
  }
  setTimeout(calculateOneWithTimeout, 10)
}

let totalCounter = 0;
let fatalError = false
function calculateOne() {
  if(fatalError) {
    return
  }
  totalCounter++
  // console.log("Total Counter: " + totalCounter)
  let pieceWithLowestEntropy = null
  let anyChangeInEntropy = false
  let allCollapsed = true
  for (let x = 0; x < DIM; x++) {
    for (let y = 0; y < DIM; y++) {
      const targetPiece = gridIndex[x][y]
      if(!targetPiece.isCollapsed()) {
        allCollapsed = false
        let oldEntropy = targetPiece.possibleTiles.length
        targetPiece.avaluate();
        let newEntropy = targetPiece.possibleTiles.length
        anyChangeInEntropy = anyChangeInEntropy || oldEntropy !== newEntropy

        if(targetPiece.isCollapsed()) {
          return;
        } else {
          if(pieceWithLowestEntropy == null || pieceWithLowestEntropy.possibleTiles.length > targetPiece.possibleTiles.length) {
            pieceWithLowestEntropy = targetPiece;
          }
        }
      } else {
        if(targetPiece.possibleTiles.length === 0) {
          fatalError = true
          console.error('!! entropy = 0! at itr ' + totalCounter)
        }
      }

    }
  }

  // no natural collapse. lets force collapse the piece with least entropy
  if(!anyChangeInEntropy && pieceWithLowestEntropy != null) {
    // console.log('No entropy change. Enforcing collapse.')
    pieceWithLowestEntropy.forceRandomCollapse()
  }

  if(allCollapsed) {
    initialSetup()
  }
}


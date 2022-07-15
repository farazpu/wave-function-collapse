let VIEW = 20
const CANVAS = 900
let error_tile = {}
const availableImgs = new Set()
const tiles = []
let gridIndex = {} // GridPiece at x, y is at gridIndex[x][y]

let UNIT = CANVAS / VIEW

let adjacencyRules = { right: {}, top: {}}

const BLANK = "img/blank.png"
const LOCATION = {
  x: 0,
  y: 0
}

const TOTAL_DIM = {
  x: VIEW,
  y: VIEW
}


class GridPiece {
  possibleTiles = [];
  x;
  y;
  fullEvaluate = false;

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
    if (this.x > LOCATION.x) {
      let leftPiece = gridIndex[this.x - 1][this.y]
      neighbours.push({
        piece: leftPiece,
        side: 'left'
      })
    }

    if (this.x < VIEW - 1 + LOCATION.x) {
      let rightPiece = gridIndex[this.x + 1][this.y]
      neighbours.push({
        piece: rightPiece,
        side: 'right'
      })
    }

    if (this.y > LOCATION.y) {
      let upPiece = gridIndex[this.x][this.y - 1]
      neighbours.push({
        piece: upPiece,
        side: 'up'
      })
    }

    if (this.y < VIEW - 1 + LOCATION.y) {
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
          //this.infoRectAndText('e', 255, 0, 0, 255, 255, 200)
          this.possibleTiles = [tiles[12]]
          this.possibleTiles[0].draw(this.x, this.y)
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
  imgName;
  img;
  rotation = 0
  hflip = false
  vflip = false

  constructor(imgName, img, rotation = 0, hflip = false, vflip = false) {
    this.imgName = imgName
    this.img = img
    this.rotation = rotation % 4
    this.hflip = hflip
    this.vflip = vflip
  }

  socketMatch(otherTile, onMy) {

    if(this.imgName === "error") {
      return true;
    }

    if(onMy === 'up') {
      const topRules = adjacencyRules.top[this.imgName]
      if(topRules) {
        return topRules.has(otherTile.imgName)
      } else {
        //console.error("Nothing can be on top of: " + this.imgName)
        return false;
      }
    } else if(onMy === 'right') {
      const rightRules = adjacencyRules.right[this.imgName]
      if(rightRules) {
        return rightRules.has(otherTile.imgName)
      } else {
        //console.error("Nothing can be on the right of: " + this.imgName)
        return false;
      }
    } else if(onMy === 'left') {
      return otherTile.socketMatch(this, 'right')
    } else if(onMy === 'down') {
      return otherTile.socketMatch(this, 'up')
    } 
  }

  rotate(times) {
    return new Tile(this.img, [...this.sockets], this.rotation + times)
  }

  fliph() {
    return new Tile(this.img, [this.sockets[2], this.sockets[1], this.sockets[0], this.sockets[3]], this.rotation, true)
  }

  flipv() {
    return new Tile(this.img, [this.sockets[0], this.sockets[3], this.sockets[2], this.sockets[1]], this.rotation, false, true)
  }

  draw(x, y) {

    const locX = x * UNIT + UNIT / 2
    const locY = y * UNIT + UNIT / 2

    if(this.imgName === "error") {
      fill(255, 10, 10);  
      rect(locX - UNIT / 2, locY - UNIT / 2, UNIT, UNIT)
      return true;
    }

    let rotationFactor = this.rotation / 2
    if(this.rotation == 0) {
      rotationFactor = 2
    }

    translate(locX, locY)
    rotate(PI * rotationFactor);
    imageMode(CENTER);
    image(this.img, 0, 0, UNIT, UNIT);
    textSize(16);
    fill(255, 255, 255);
    // text(tiles.indexOf(this), 0, 0);
    rotate(PI * -rotationFactor);
    // console.log(this.rotation)
  // rotate(PI / 180 * 45);
  // imageMode(CENTER);
  // image(img, 0, 0, 150, 150);
    translate(-locX, -locY);
  }
}

function loadTileMap(key) {
  let loadedData = localStorage.getItem(key)
  if(loadedData == null) {
    loadedData = defaultData()
  }
  let imgMap = JSON.parse(loadedData)

  imgMap.forEach((col, y) => {
    col.forEach( (cell, x) => {
      if(cell !== BLANK) {
        availableImgs.add(cell)
        if(y > 0) {
          let topPieces = adjacencyRules.top[cell];
          if(topPieces === undefined) {
            topPieces = adjacencyRules.top[cell] = new Set()
          }
          if(imgMap[y - 1][x] !== BLANK) {
            topPieces.add(imgMap[y - 1][x]);
          }
        }
        if(x < col.length - 1) {
          let rightPieces = adjacencyRules.right[cell];
          if(rightPieces === undefined) {
            rightPieces = adjacencyRules.right[cell] = new Set()
          }
          if(imgMap[y][x + 1] !== BLANK) {
            rightPieces.add(imgMap[y][x + 1]);
          }
        }
      }
    })
  })

  console.log("Available tiles for ", key, availableImgs)

}

function preload() {
  loadTileMap('tileMap')
  //loadTileMap('tileMap-1')

  availableImgs.forEach(img => {
    tiles.push(new Tile(img, loadImage(img)))
  })


  error_tile = new Tile("error")
  // error_tile = tiles[0]

}

function setup() {
  let seed = parseInt(random(0, 10000000))
  // seed = 2978301; // with DIM = 4
  // seed = 904496
  // seed = 9828633
  // seed = 3669319
  //let seed = 9531558 //DIM = 20
  // seed = 790277
  // seed = 7510908
  //seed = 7742019
  console.log("Seed: " + seed)
  randomSeed(seed)

  createCanvas(CANVAS, CANVAS);

  for (let x = 0; x < VIEW; x++) {
    gridIndex[x] = {}
    for (let y = 0; y < VIEW; y++) {
      gridIndex[x][y] = new GridPiece(x, y, [...tiles])
    }
  }

  let prefill = VIEW / 2
  prefill = 1
  for(let s = 0; s < prefill; s++) {
    let gridX = parseInt(random(0, VIEW));
    let gridY = parseInt(random(0, VIEW));
    let tile = parseInt(random(0, tiles.length));
  
    gridIndex[0][0].onlyTile(tile)
  }

  // gridIndex[0][0].onlyTile(37)
  // gridIndex[1][0].onlyTile(32)
  // gridIndex[0][1].onlyTile(29)

  //setInterval(calculateNext, 100)
  // setInterval(calculateOne, 10)
  setTimeout(calculateOneWithTimeout, 1)
}

function draw() {
  translate(-LOCATION.x * UNIT, -LOCATION.y * UNIT);
  for (let x = LOCATION.x; x < VIEW + LOCATION.x; x++) {
    for (let y = LOCATION.y; y < VIEW + LOCATION.y; y++) {
      gridIndex[x][y].draw()
    }
  }  
}

let continueEvaluation = true
function mousePressed(e) {
  for (let x = LOCATION.x; x < VIEW + LOCATION.x; x++) {
    for (let y = LOCATION.y; y < VIEW + LOCATION.y; y++) {
      const p = gridIndex[x][y]
      if(p.possibleTiles.length === 0
          || p.possibleTiles[0] === error_tile) {
        p.possibleTiles = [...tiles]
        p.fullEvaluate = true;
      }
    }
  }  

  // console.log(e.button)
  // calculateNext()
  // if (mouseButton === CENTER) {
  //   continueEvaluation = !continueEvaluation 
  // } else if (mouseButton === LEFT) {
  //   continueEvaluation = false
  //   calculateOne()
  // }
}

function calculateOneWithTimeout() {
  if(continueEvaluation) {
    calculateOne()
  }
  setTimeout(calculateOneWithTimeout, 10)
}

let startTime = new Date()

function calculateOne() {
  let targetPieces = new Set();

  for (let x = LOCATION.x; x < VIEW + LOCATION.x; x++) {
    for (let y = LOCATION.y; y < VIEW + LOCATION.y; y++) {
      const targetPiece = gridIndex[x][y]
      if(!targetPiece.isCollapsed()) {
        targetPieces.add(targetPiece)
      }
    }
  }

  if(targetPieces.size === 0) {
    if(startTime !== null) {
      console.log(new Date() - startTime)
      startTime = null // 5822
    }
    return;
  }

  targetPieces = [...targetPieces]
  targetPieces.sort((a, b) => {
    if(a.hasCollapsedNeighbour()) {
      return 1
    } 
    if(b.hasCollapsedNeighbour()) {
      return -1
    } 

    return compareTo(a.possibleTiles.length, b.possibleTiles.length)
  })


  let pieceWithLowestEntropy = null
  let anyChangeInEntropy = false


  targetPieces.forEach(p => {
    let oldEntropy = p.possibleTiles.length
    p.avaluate();
    let newEntropy = p.possibleTiles.length
    if(oldEntropy !== newEntropy) {
      anyChangeInEntropy = true    
    }

    if(p.possibleTiles.length === 0) {
      p.possibleTiles = [error_tile]
      console.error(`!! entropy = 0. x == ${p.x} && y == ${p.y}. img ${p.imgName}`)
    }
    if(pieceWithLowestEntropy == null || pieceWithLowestEntropy.possibleTiles.length > p.possibleTiles.length) {
      pieceWithLowestEntropy = p;
    }
  })

  if(!anyChangeInEntropy && pieceWithLowestEntropy != null) {
    //console.log(`anyChangeInEntropy: ${anyChangeInEntropy}. pieceWithLowestEntropy: `, pieceWithLowestEntropy)
    pieceWithLowestEntropy.forceRandomCollapse()
  }
}

function addMapRight() {
  if(gridIndex[LOCATION.x + VIEW] === undefined) {
    gridIndex[LOCATION.x + VIEW] = {}
    for (let y = 0; y < TOTAL_DIM.y; y++) {
      gridIndex[LOCATION.x + VIEW][y] = new GridPiece(LOCATION.x + VIEW, y, [...tiles])
    }
  }
}

function addMapDown() {
  let y = LOCATION.y + VIEW

  if(gridIndex[0][y] === undefined) {
    for (let x = 0; x < TOTAL_DIM.x; x++) {
      gridIndex[x][y] = new GridPiece(x, y, [...tiles])
    }  
  }  
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if(LOCATION.x > 0) {
      LOCATION.x--
    }
  } else if (keyCode === RIGHT_ARROW) {
    addMapRight()
    LOCATION.x++
  } else if(keyCode === UP_ARROW) {
    if(LOCATION.y > 0) {
      LOCATION.y--
    }
  } else if (keyCode === DOWN_ARROW) {
    addMapDown()
    LOCATION.y++
  } else if (keyCode === 107) {
    if(LOCATION.x + VIEW < TOTAL_DIM.x && LOCATION.y + VIEW < TOTAL_DIM.y) {
      VIEW++
      UNIT = CANVAS / VIEW
    }
  } else if (keyCode === 109) {
    if(VIEW > 2) {
      VIEW--
      UNIT = CANVAS / VIEW
    }
  }

  TOTAL_DIM.x = max(TOTAL_DIM.x, LOCATION.x + VIEW)
  TOTAL_DIM.y = max(TOTAL_DIM.y, LOCATION.y + VIEW)

  // console.log(keyCode)
}

function compareTo(num1, num2) {
  if (num2 < num1) return 1;
  else if (num2 > num1) return -1;
  else return 0;
};


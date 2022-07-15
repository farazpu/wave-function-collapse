function faraz(tiles) {
  tiles.push(new Tile(loadImage('img/0.png'), [0, 0, 0, 0]));
  const tile1 = new Tile(loadImage('img/1.png'), [1, 1, 0, 1]);
  tiles.push(tile1);
  tiles.push(tile1.rotate(1));
  tiles.push(tile1.rotate(2));
  tiles.push(tile1.rotate(3));

  const tile2 = new Tile(loadImage('img/2.png'), [1, 0, 0, 0]);
  tiles.push(tile2);
  tiles.push(tile2.rotate(1));
  tiles.push(tile2.rotate(2));
  tiles.push(tile2.rotate(3));

  const tile3 = new Tile(loadImage('img/3.png'), [0, 1, 0, 1]);
  tiles.push(tile3);
  tiles.push(tile3.rotate(1));

  const tile4 = new Tile(loadImage('img/4.png'), [1, 1, 0, 0]);
  tiles.push(tile4);
  tiles.push(tile4.rotate(1));
  tiles.push(tile4.rotate(2));
  tiles.push(tile4.rotate(3));
}

function knots(tiles) {
  let t = null
  tiles.push(t = new Tile(loadImage('img/Knots/corner.png'), [1, 1, 0, 0]));
  tiles.push(t.rotate(1))
  tiles.push(t.rotate(2))
  tiles.push(t.rotate(3))

  tiles.push(t = new Tile(loadImage('img/Knots/cross.png'), [1, 1, 1, 1]));

  tiles.push(t = new Tile(loadImage('img/Knots/line.png'), [0, 1, 0, 1]));
  tiles.push(t.rotate(1))

  tiles.push(t = new Tile(loadImage('img/Knots/t.png'), [0, 1, 1, 1]));
  tiles.push(t.rotate(1))
  tiles.push(t.rotate(2))
  tiles.push(t.rotate(3))

  tiles.push(t = new Tile(loadImage('img/Knots/empty.png'), [0, 0, 0, 0]));
}

function knots2(tiles) {
  let t = null
  tiles.push(t = new Tile(loadImage('img/Knots/corner.png'), [1, 1, 2, 2]));
  tiles.push(t.rotate(1))
  tiles.push(t.rotate(2))
  tiles.push(t.rotate(3))

  tiles.push(t = new Tile(loadImage('img/Knots/cross.png'), [1, 1, 1, 1]));

  tiles.push(t = new Tile(loadImage('img/Knots/line.png'), [2, 1, 2, 1]));
  tiles.push(t.rotate(1))

  tiles.push(t = new Tile(loadImage('img/Knots/t.png'), [2, 1, 1, 1]));
  tiles.push(t.rotate(1))
  tiles.push(t.rotate(2))
  tiles.push(t.rotate(3))

  tiles.push(t = new Tile(loadImage('img/Knots/empty.png'), [2, 0, 2, 0]));
  tiles.push(t.rotate(1))
  tiles.push(t.rotate(2))
  tiles.push(t.rotate(3))

  tiles.push(t = new Tile(loadImage('img/Knots/empty.png'), [0, 0, 0, 0]));

}

function summer(tiles) {
  let t = null

  tiles.push(t = new Tile(loadImage('img/Summer/cliff 0.png'), ['A', 'B', 'A', 'B']));
  t.guessSockets();

  tiles.push(t = new Tile(loadImage('img/Summer/cliff 1.png'), ['B', 'A', 'B', 'A'])); // 1
  tiles.push(t = new Tile(loadImage('img/Summer/cliff 2.png'), ['A', 'C', 'A', 'C']));
  tiles.push(t = new Tile(loadImage('img/Summer/cliff 3.png'), ['D', 'A', 'D', 'A']));
  tiles.push(t = new Tile(loadImage('img/Summer/cliffcorner 0.png'), ['B', 'C', 'A', 'A'])); // 4
  tiles.push(t = new Tile(loadImage('img/Summer/cliffcorner 1.png'), ['B', 'A', 'A', 'C'])); // 5
  tiles.push(t = new Tile(loadImage('img/Summer/cliffcorner 2.png'), ['A', 'A', 'B', 'B'])); // 6
  tiles.push(t = new Tile(loadImage('img/Summer/cliffcorner 3.png'), ['A', 'B', 'B', 'A'])); //
  tiles.push(t = new Tile(loadImage('img/Summer/cliffturn 0.png'), ['D', 'D', 'A', 'A'])); // 8
  tiles.push(t = new Tile(loadImage('img/Summer/cliffturn 1.png'), ['D', 'A', 'A', 'D']));

  tiles.push(t = new Tile(loadImage('img/Summer/cliffturn 2.png'), ['A', 'A', 'B', 'C']));
  tiles.push(t = new Tile(loadImage('img/Summer/cliffturn 3.png'), ['A', 'C', 'D', 'A']));
  tiles.push(t = new Tile(loadImage('img/Summer/grass 0.png'), ['A', 'A', 'A', 'A']));
  tiles.push(t = new Tile(loadImage('img/Summer/grasscorner 0.png'), ['F', 'F', 'G', 'G']));
  tiles.push(t = new Tile(loadImage('img/Summer/grasscorner 1.png'), ['H', 'G', 'G', 'F']));
  tiles.push(t = new Tile(loadImage('img/Summer/grasscorner 2.png'), ['G', 'G', 'H', 'I']));
  tiles.push(t = new Tile(loadImage('img/Summer/grasscorner 3.png'), ['G', 'I', 'F', 'G']));
  tiles.push(t = new Tile(loadImage('img/Summer/road 0.png'), ['G', 'I', 'A', 'I']));
  tiles.push(t = new Tile(loadImage('img/Summer/road 1.png'), ['F', 'A', 'F', 'G']));
  tiles.push(t = new Tile(loadImage('img/Summer/road 2.png'), ['A', 'F', 'G', 'F']));

  tiles.push(t = new Tile(loadImage('img/Summer/road 3.png'), ['H', 'G', 'H', 'A']));
  tiles.push(t = new Tile(loadImage('img/Summer/roadturn 0.png'), ['H', 'I', 'A', 'A']));
  tiles.push(t = new Tile(loadImage('img/Summer/roadturn 1.png'), ['F', 'A', 'A', 'I'])); // 22
  tiles.push(t = new Tile(loadImage('img/Summer/roadturn 2.png'), ['A', 'A', 'F', 'F']));
  tiles.push(t = new Tile(loadImage('img/Summer/roadturn 3.png'), ['A', 'F', 'H', 'A']));
  tiles.push(t = new Tile(loadImage('img/Summer/water_a 0.png'), ['W', 'W', 'W', 'W']));
  tiles.push(t = new Tile(loadImage('img/Summer/water_b 0.png'), ['W', 'W', 'W', 'W']));
  tiles.push(t = new Tile(loadImage('img/Summer/water_c 0.png'), ['W', 'W', 'W', 'W']));
  tiles.push(t = new Tile(loadImage('img/Summer/watercorner 0.png'), ['J', 'K', 'A', 'A']));
  tiles.push(t = new Tile(loadImage('img/Summer/watercorner 1.png'), ['L', 'A', 'A', 'K'])); // 29

  tiles.push(t = new Tile(loadImage('img/Summer/watercorner 2.png'), ['A', 'A', 'L', 'M']));
  tiles.push(t = new Tile(loadImage('img/Summer/watercorner 3.png'), ['A', 'M', 'J', 'A']));
  tiles.push(t = new Tile(loadImage('img/Summer/waterside 0.png'), ['W', 'K', 'A', 'K'])); // 32
  tiles.push(t = new Tile(loadImage('img/Summer/waterside 1.png'), ['L', 'A', 'L', 'W']));
  tiles.push(t = new Tile(loadImage('img/Summer/waterside 2.png'), ['A', 'M', 'W', 'M']));
  tiles.push(t = new Tile(loadImage('img/Summer/waterside 3.png'), ['J', 'W', 'J', 'A']));
  tiles.push(t = new Tile(loadImage('img/Summer/waterturn 0.png'), ['W', 'W', 'J', 'K']));
  tiles.push(t = new Tile(loadImage('img/Summer/waterturn 1.png'), ['W', 'K', 'L', 'W']));
  tiles.push(t = new Tile(loadImage('img/Summer/waterturn 2.png'), ['L', 'M', 'W', 'W']));
  tiles.push(t = new Tile(loadImage('img/Summer/waterturn 3.png'), ['J', 'W', 'W', 'M']));

}

function circles() {
  let t = null

  tiles.push(t = new Tile(loadImage('img/Circles/b.png'), ['b', 'b', 'b', 'b']));
  tiles.push(t = new Tile(loadImage('img/Circles/b_half.png'), ['b', 'w', 'w', 'w']));
  tiles.push(t.rotate(1))
  tiles.push(t.rotate(2))
  tiles.push(t.rotate(3))
  tiles.push(t = new Tile(loadImage('img/Circles/b_i.png'), ['b', 'w', 'b', 'w']));
  tiles.push(t.rotate(1))
  tiles.push(t = new Tile(loadImage('img/Circles/b_quarter.png'), ['b', 'b', 'w', 'w']));
  tiles.push(t.rotate(1))
  tiles.push(t.rotate(2))
  tiles.push(t.rotate(3))
 
  tiles.push(t = new Tile(loadImage('img/Circles/w.png'), ['w', 'w', 'w', 'w']));
  tiles.push(t = new Tile(loadImage('img/Circles/w_half.png'), ['w', 'b', 'b', 'b']));
  tiles.push(t.rotate(1))
  tiles.push(t.rotate(2))
  tiles.push(t.rotate(3))
  tiles.push(t = new Tile(loadImage('img/Circles/w_i.png'), ['w', 'b', 'w', 'b']));
  tiles.push(t.rotate(1))
  tiles.push(t = new Tile(loadImage('img/Circles/w_quarter.png'), ['w', 'w', 'b', 'b']));
  tiles.push(t.rotate(1))
  tiles.push(t.rotate(2))
  tiles.push(t.rotate(3))

}

function dungeon(tiles) {
  let imgs = [
    "img/Dungeon/tile_0000.png",
    "img/Dungeon/tile_0001.png",
    "img/Dungeon/tile_0002.png",
    "img/Dungeon/tile_0003.png",
    "img/Dungeon/tile_0004.png",
    "img/Dungeon/tile_0005.png",
    "img/Dungeon/tile_0006.png",
    "img/Dungeon/tile_0007.png",
    "img/Dungeon/tile_0008.png",
    "img/Dungeon/tile_0009.png",
    "img/Dungeon/tile_0010.png",
    "img/Dungeon/tile_0011.png",
    "img/Dungeon/tile_0012.png",
    "img/Dungeon/tile_0013.png",
    "img/Dungeon/tile_0014.png",
    "img/Dungeon/tile_0015.png",
    "img/Dungeon/tile_0016.png",
    "img/Dungeon/tile_0017.png",
    "img/Dungeon/tile_0018.png",
    "img/Dungeon/tile_0019.png",
    "img/Dungeon/tile_0020.png",
    "img/Dungeon/tile_0021.png",
    "img/Dungeon/tile_0022.png",
    "img/Dungeon/tile_0023.png",
    "img/Dungeon/tile_0024.png",
    "img/Dungeon/tile_0025.png",
    "img/Dungeon/tile_0026.png",
    "img/Dungeon/tile_0027.png",
    "img/Dungeon/tile_0028.png",
    "img/Dungeon/tile_0029.png",
    "img/Dungeon/tile_0030.png",
    "img/Dungeon/tile_0031.png",
    "img/Dungeon/tile_0032.png",
    "img/Dungeon/tile_0033.png",
    "img/Dungeon/tile_0034.png",
    "img/Dungeon/tile_0035.png",
    "img/Dungeon/tile_0036.png",
    "img/Dungeon/tile_0037.png",
    "img/Dungeon/tile_0038.png",
    "img/Dungeon/tile_0039.png",
    "img/Dungeon/tile_0040.png",
    "img/Dungeon/tile_0041.png",
    "img/Dungeon/tile_0042.png",
    "img/Dungeon/tile_0043.png",
    "img/Dungeon/tile_0044.png",
    "img/Dungeon/tile_0045.png",
    "img/Dungeon/tile_0046.png",
    "img/Dungeon/tile_0047.png",
    "img/Dungeon/tile_0048.png",
    "img/Dungeon/tile_0049.png",
    "img/Dungeon/tile_0050.png",
    "img/Dungeon/tile_0051.png",
    "img/Dungeon/tile_0052.png",
    "img/Dungeon/tile_0053.png"
  ]
  
  let matchingRight = {
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0012.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0024.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0003.png": true
  }
  
  let matchingTop = {
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0012.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0024.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0027.png": true
  }
  
  let tileActions = {}  

  let tileSides = {
    "img/Dungeon/tile_0000.png": "AAAA"
  }

  prepareTiles(imgs, matchingRight, matchingTop, tiles, tileActions, tileSides);
}

function prepareTiles(imgs, matchingRight, matchingTop, tiles, tileActions, tileSides) {
  let validTiles = [];
  let socketList = {};

  let adjacencyRules = parseRules(matchingRight, matchingTop);

  imgs.forEach((img, index) => {
    let rightRules = adjacencyRules.right[img]
    let topRules = adjacencyRules.top[img]
    if (rightRules || topRules) {
      validTiles.push(img);
      socketList[img] = [-1, -1, -1, -1]
    }
  });

  validTiles.forEach((vt, index) => {
    let rightTiles = adjacencyRules.right[vt]
    let topTiles = adjacencyRules.top[vt]

    let tileSideInfo = tileSides[vt]
    let pieceSockets = socketList[vt]
    
    let topSocket = index + '-' + tileSideInfo.charAt(0);
    let rightSocket = index + '-' + tileSideInfo.charAt(1);
    let bottomSocket = index + '-' + tileSideInfo.charAt(2);
    let leftSocket = index + '-' + tileSideInfo.charAt(3);

    if(pieceSockets[0] === -1) { // top
      for (let index = 0; index < topTiles.length; index++) {
        const t = topTiles[index];
        let socket = socketList[t]
        if(socket !== -1) {
          topSocket = socket
          break;
        }
      }
    }

    // TODO continue parsing and making sokets (Work In Progress)
    // Moving to use the output of tiletag directly in index2.html and sketch2.js and tile-set2.js

  })

  validTiles.forEach(vt => {

    let t = new Tile(loadImage(vt), socketList[vt]);
    tiles.push(t);

    if (tileActions[vt + '$$$rotate1']) {
      tiles.push(t.rotate(1));
    }
    if (tileActions[vt + '$$$rotate2']) {
      tiles.push(t.rotate(2));
    }
    if (tileActions[vt + '$$$rotate3']) {
      tiles.push(t.rotate(3));
    }
    if (tileActions[vt + '$$$fliph']) {
      tiles.push(t.fliph());
    }
    if (tileActions[vt + '$$$flipv']) {
      tiles.push(t.flipv());
    }
  });
}
function parseRules(matchingRight, matchingTop) {
  let rules = { right: {}, top: {}}
  for (let k in matchingRight) { 
    let fromTo = k.split('$$$');
    if(rules.right[fromTo[0]]) {
      rules.right[fromTo[0]].push(fromTo[1])
    } else {
      rules.right[fromTo[0]] = [fromTo[1]]
    }
  }

  for (let k in matchingTop) { 
    let fromTo = k.split('$$$');
    if(rules.top[fromTo[0]]) {
      rules.top[fromTo[0]].push(fromTo[1])
    } else {
      rules.top[fromTo[0]] = [fromTo[1]]
    }
  }
}

function anyMatchIn(rules) {
  for (let k in rules) { 
    if(k.includes(k + '$$$') || k.includes('$$$' + k)) {
      return true;
    }
  }

  return false;
}
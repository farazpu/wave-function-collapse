function dungeon() {
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

  loadGridData(imgs, matchingRight, matchingTop, tileActions);
}

function dungeon2() {
  let imgs = [
    "img/Dungeon/tile_0000.png",
    "img/Dungeon/tile_0001.png",
    "img/Dungeon/tile_0002.png",
    "img/Dungeon/tile_0003.png",
    "img/Dungeon/tile_0013.png",
    "img/Dungeon/tile_0015.png",
    "img/Dungeon/tile_0025.png",
    "img/Dungeon/tile_0026.png",
    "img/Dungeon/tile_0027.png"
  ]
  
  let matchingRight = {
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0001.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0013.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0015.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0003.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0001.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0001.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0013.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0015.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0001.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0013.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0015.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0025.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0026.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0026.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0026.png$$$img/Dungeon/tile_0027.png": true,
    "img/Dungeon/tile_0027.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0027.png$$$img/Dungeon/tile_0001.png": true,
    "img/Dungeon/tile_0027.png$$$img/Dungeon/tile_0013.png": true,
    "img/Dungeon/tile_0027.png$$$img/Dungeon/tile_0015.png": true,
    "img/Dungeon/tile_0027.png$$$img/Dungeon/tile_0025.png": true
  }
  
  let matchingTop = {
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0027.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0027.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0027.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0027.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0001.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0013.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0003.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0015.png": true,
    "img/Dungeon/tile_0025.png$$$img/Dungeon/tile_0013.png": true,
    "img/Dungeon/tile_0026.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0027.png$$$img/Dungeon/tile_0015.png": true
  }
  
  let tileActions = {}
  
  loadGridData(imgs, matchingRight, matchingTop, tileActions);  
}

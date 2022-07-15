function dungeon3() {
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
    "img/Dungeon/tile_0050r3.png",
    "img/Dungeon/tile_0051.png",
    "img/Dungeon/tile_0051r3.png",
    "img/Dungeon/tile_0052.png",
    "img/Dungeon/tile_0052fh.png",
    "img/Dungeon/tile_0053.png",
    "img/Dungeon/tile_0053fv.png",
    "img/Dungeon/tile_0057.png",
    "img/Dungeon/tile_0058.png",
    "img/Dungeon/tile_0059.png"
  ]
  
  let matchingRight = {
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0001.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0013.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0003.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0006.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0001.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0012.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0013.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0024.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0004.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0005.png$$$img/Dungeon/tile_0053fv.png": true,
    "img/Dungeon/tile_0006.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0007.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0008.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0009.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0009.png$$$img/Dungeon/tile_0059.png": true,
    "img/Dungeon/tile_0010.png$$$img/Dungeon/tile_0011.png": true,
    "img/Dungeon/tile_0011.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0050r3.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0051r3.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0024.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0012.png": true,
    "img/Dungeon/tile_0016.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0017.png$$$img/Dungeon/tile_0051r3.png": true,
    "img/Dungeon/tile_0017.png$$$img/Dungeon/tile_0050r3.png": true,
    "img/Dungeon/tile_0018.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0019.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0020.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0021.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0022.png$$$img/Dungeon/tile_0023.png": true,
    "img/Dungeon/tile_0023.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0024.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0025.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0026.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0026.png$$$img/Dungeon/tile_0005.png": true,
    "img/Dungeon/tile_0027.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0028.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0029.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0030.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0030.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0031.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0031.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0033.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0034.png$$$img/Dungeon/tile_0035.png": true,
    "img/Dungeon/tile_0035.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0007.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0008.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0009.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0010.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0019.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0018.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0020.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0021.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0022.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0028.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0029.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0033.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0034.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0059.png": true,
    "img/Dungeon/tile_0041.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0041.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0042.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0043.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0043.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0044.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0044.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0045.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0046.png$$$img/Dungeon/tile_0047.png": true,
    "img/Dungeon/tile_0047.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0049.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0050r3.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0050r3.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0051.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0051.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0051.png$$$img/Dungeon/tile_0053.png": true,
    "img/Dungeon/tile_0051r3.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0052fh.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0052fh.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0052fh.png$$$img/Dungeon/tile_0053.png": true,
    "img/Dungeon/tile_0053.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0053.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0053fv.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0053fv.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0053fv.png$$$img/Dungeon/tile_0042.png": true,
    "img/Dungeon/tile_0053.png$$$img/Dungeon/tile_0042.png": true,
    "img/Dungeon/tile_0057.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0059.png$$$img/Dungeon/tile_0051r3.png": true,
    "img/Dungeon/tile_0059.png$$$img/Dungeon/tile_0050r3.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0052fh.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0015.png": true,
    "img/Dungeon/tile_0012.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0053.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0031.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0030.png": true,
    "img/Dungeon/tile_0032.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0044.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0015.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0016.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0004.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0057.png": true,
    "img/Dungeon/tile_0049.png$$$img/Dungeon/tile_0015.png": true,
    "img/Dungeon/tile_0049.png$$$img/Dungeon/tile_0016.png": true,
    "img/Dungeon/tile_0049.png$$$img/Dungeon/tile_0004.png": true,
    "img/Dungeon/tile_0049.png$$$img/Dungeon/tile_0057.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0043.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0057.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0032.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0032.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0037.png$$$img/Dungeon/tile_0038.png": true,
    "img/Dungeon/tile_0037.png$$$img/Dungeon/tile_0037.png": true,
    "img/Dungeon/tile_0036.png$$$img/Dungeon/tile_0037.png": true,
    "img/Dungeon/tile_0059.png$$$img/Dungeon/tile_0036.png": true,
    "img/Dungeon/tile_0005.png$$$img/Dungeon/tile_0036.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0036.png": true,
    "img/Dungeon/tile_0017.png$$$img/Dungeon/tile_0036.png": true,
    "img/Dungeon/tile_0038.png$$$img/Dungeon/tile_0057.png": true,
    "img/Dungeon/tile_0038.png$$$img/Dungeon/tile_0015.png": true,
    "img/Dungeon/tile_0038.png$$$img/Dungeon/tile_0016.png": true,
    "img/Dungeon/tile_0038.png$$$img/Dungeon/tile_0004.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0058.png": true,
    "img/Dungeon/tile_0036.png$$$img/Dungeon/tile_0038.png": true
  }
  
  let matchingTop = {
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0024.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0027.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0012.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0024.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0001.png$$$img/Dungeon/tile_0027.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0012.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0002.png$$$img/Dungeon/tile_0027.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0012.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0025.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0026.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0027.png": true,
    "img/Dungeon/tile_0003.png$$$img/Dungeon/tile_0024.png": true,
    "img/Dungeon/tile_0004.png$$$img/Dungeon/tile_0042.png": true,
    "img/Dungeon/tile_0004.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0004.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0004.png$$$img/Dungeon/tile_0053.png": true,
    "img/Dungeon/tile_0004.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0004.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0005.png$$$img/Dungeon/tile_0042.png": true,
    "img/Dungeon/tile_0005.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0005.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0005.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0005.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0005.png$$$img/Dungeon/tile_0053.png": true,
    "img/Dungeon/tile_0006.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0006.png$$$img/Dungeon/tile_0012.png": true,
    "img/Dungeon/tile_0006.png$$$img/Dungeon/tile_0024.png": true,
    "img/Dungeon/tile_0007.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0008.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0010.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0011.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0013.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0001.png": true,
    "img/Dungeon/tile_0013.png$$$img/Dungeon/tile_0005.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0015.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0004.png": true,
    "img/Dungeon/tile_0015.png$$$img/Dungeon/tile_0003.png": true,
    "img/Dungeon/tile_0016.png$$$img/Dungeon/tile_0015.png": true,
    "img/Dungeon/tile_0017.png$$$img/Dungeon/tile_0013.png": true,
    "img/Dungeon/tile_0018.png$$$img/Dungeon/tile_0006.png": true,
    "img/Dungeon/tile_0019.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0020.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0021.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0022.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0023.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0024.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0025.png$$$img/Dungeon/tile_0013.png": true,
    "img/Dungeon/tile_0026.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0026.png$$$img/Dungeon/tile_0053.png": true,
    "img/Dungeon/tile_0026.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0026.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0027.png$$$img/Dungeon/tile_0015.png": true,
    "img/Dungeon/tile_0028.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0029.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0030.png$$$img/Dungeon/tile_0018.png": true,
    "img/Dungeon/tile_0031.png$$$img/Dungeon/tile_0007.png": true,
    "img/Dungeon/tile_0031.png$$$img/Dungeon/tile_0019.png": true,
    "img/Dungeon/tile_0033.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0034.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0035.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0036.png$$$img/Dungeon/tile_0050r3.png": true,
    "img/Dungeon/tile_0036.png$$$img/Dungeon/tile_0051r3.png": true,
    "img/Dungeon/tile_0036.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0036.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0036.png$$$img/Dungeon/tile_0042.png": true,
    "img/Dungeon/tile_0037.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0037.png$$$img/Dungeon/tile_0042.png": true,
    "img/Dungeon/tile_0038.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0038.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0038.png$$$img/Dungeon/tile_0042.png": true,
    "img/Dungeon/tile_0040.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0041.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0041.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0041.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0041.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0042.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0042.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0043.png$$$img/Dungeon/tile_0007.png": true,
    "img/Dungeon/tile_0043.png$$$img/Dungeon/tile_0019.png": true,
    "img/Dungeon/tile_0045.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0046.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0047.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0049.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0049.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0049.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0049.png$$$img/Dungeon/tile_0053.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0059.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0057.png": true,
    "img/Dungeon/tile_0050r3.png$$$img/Dungeon/tile_0050r3.png": true,
    "img/Dungeon/tile_0050r3.png$$$img/Dungeon/tile_0051r3.png": true,
    "img/Dungeon/tile_0050r3.png$$$img/Dungeon/tile_0052fh.png": true,
    "img/Dungeon/tile_0050r3.png$$$img/Dungeon/tile_0053fv.png": true,
    "img/Dungeon/tile_0051.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0051.png$$$img/Dungeon/tile_0059.png": true,
    "img/Dungeon/tile_0051.png$$$img/Dungeon/tile_0057.png": true,
    "img/Dungeon/tile_0051r3.png$$$img/Dungeon/tile_0051r3.png": true,
    "img/Dungeon/tile_0051r3.png$$$img/Dungeon/tile_0050r3.png": true,
    "img/Dungeon/tile_0051r3.png$$$img/Dungeon/tile_0052fh.png": true,
    "img/Dungeon/tile_0051r3.png$$$img/Dungeon/tile_0053fv.png": true,
    "img/Dungeon/tile_0052fh.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0052fh.png$$$img/Dungeon/tile_0059.png": true,
    "img/Dungeon/tile_0053.png$$$img/Dungeon/tile_0050r3.png": true,
    "img/Dungeon/tile_0053.png$$$img/Dungeon/tile_0051r3.png": true,
    "img/Dungeon/tile_0053fv.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0053fv.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0053fv.png$$$img/Dungeon/tile_0042.png": true,
    "img/Dungeon/tile_0053fv.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0053fv.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0053fv.png$$$img/Dungeon/tile_0053.png": true,
    "img/Dungeon/tile_0059.png$$$img/Dungeon/tile_0017.png": true,
    "img/Dungeon/tile_0009.png$$$img/Dungeon/tile_0002.png": true,
    "img/Dungeon/tile_0044.png$$$img/Dungeon/tile_0008.png": true,
    "img/Dungeon/tile_0044.png$$$img/Dungeon/tile_0020.png": true,
    "img/Dungeon/tile_0032.png$$$img/Dungeon/tile_0020.png": true,
    "img/Dungeon/tile_0032.png$$$img/Dungeon/tile_0008.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0028.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0029.png": true,
    "img/Dungeon/tile_0050.png$$$img/Dungeon/tile_0040.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0048.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0049.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0050.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0051.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0053.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0042.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0030.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0031.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0032.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0043.png": true,
    "img/Dungeon/tile_0048.png$$$img/Dungeon/tile_0044.png": true,
    "img/Dungeon/tile_0057.png$$$img/Dungeon/tile_0016.png": true,
    "img/Dungeon/tile_0000.png$$$img/Dungeon/tile_0012.png": true,
    "img/Dungeon/tile_0012.png$$$img/Dungeon/tile_0000.png": true,
    "img/Dungeon/tile_0037.png$$$img/Dungeon/tile_0048.png": true
  }
  
  let tileActions = {}
  
    
  
  loadGridData(imgs, matchingRight, matchingTop, tileActions);  
}
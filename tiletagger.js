const { createApp } = Vue

createApp({

  methods: {

    showData() {
      this.tileDataShow = !this.tileDataShow;
      var data = ""

      data += "let imgs = ";
      data += JSON.stringify(this.imgs, null, 2);
      data += "\r\n\r\n";

      data += "let matchingRight = ";
      data += JSON.stringify(this.matchingRight, null, 2);
      data += "\r\n\r\n";

      data += "let matchingTop = ";
      data += JSON.stringify(this.matchingTop, null, 2);
      data += "\r\n\r\n";

      data += "let tileActions = ";
      data += JSON.stringify(this.tileActions, null, 2);
      data += "\r\n\r\n";

      // data += "let tileSides = ";
      // data += JSON.stringify(this.tileSides, null, 2);
      // data += "\r\n\r\n";

      this.data = data

    },
    selectForImageToMap(img, imgi) {
      this.imgToMatch[img] = imgi
    },
    toggleMatchingRight(img, imgi) {
      this.selectForImageToMap(img, imgi)
      if(this.matchingRight[img + '$$$' + imgi]) {
        delete this.matchingRight[img + '$$$' + imgi]
      } else {
        this.matchingRight[img + '$$$' + imgi] = true
      }

      // console.log(JSON.stringify(this.matchingRight))
      localStorage.setItem('matchingRight', JSON.stringify(this.matchingRight));
    },
    toggleMatchingTop(img, imgi) {
      this.selectForImageToMap(img, imgi)
      if(this.matchingTop[img + '$$$' + imgi]) {
        delete this.matchingTop[img + '$$$' + imgi]
      } else {
        this.matchingTop[img + '$$$' + imgi] = true
      }

      // console.log(JSON.stringify(this.matchingRight))
      localStorage.setItem('matchingTop', JSON.stringify(this.matchingTop));
    },
    tileActionToggle(img, action) {
      if(this.tileActions[img + '$$$' + action]) {
        delete this.tileActions[img + '$$$' + action]
      } else {
        this.tileActions[img + '$$$' + action] = true
      }

      // console.log(JSON.stringify(this.matchingRight))
      localStorage.setItem('tileActions', JSON.stringify(this.tileActions));
    },
    saveTileSides() {
      localStorage.setItem('tileSides', JSON.stringify(this.tileSides));
    }
  },
  data() {
    if(!localStorage.getItem('matchingRight')) {
      localStorage.setItem('matchingRight', "{}");
    }
    if(!localStorage.getItem('matchingTop')) {
      localStorage.setItem('matchingTop', "{}");
    }
    if(!localStorage.getItem('tileActions')) {
      localStorage.setItem('tileActions', "{}");
    }
    if(!localStorage.getItem('tileSides')) {
      localStorage.setItem('tileSides', "{}");
    }

    return {
      tileDataShow: false,
      data: '',
      availableTileActions: ['rotate1', 'rotate2', 'rotate3', 'fliph', 'flipv'],
      message: 'Hello Vue!',
      matchMode: 'right',
      imgToMatch: { 'img/Dungeon/tile_0000.png' : 'img/Dungeon/tile_0000.png' },
      matchingRight: JSON.parse(localStorage.getItem('matchingRight')),
      matchingTop: JSON.parse(localStorage.getItem('matchingTop')),
      tileActions: JSON.parse(localStorage.getItem('tileActions')),
      tileSides: JSON.parse(localStorage.getItem('tileSides')),
      imgs: [
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
        // "img/Dungeon/tile_0014.png",
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
        
        // "img/Dungeon/tile_0054.png",
        // "img/Dungeon/tile_0055.png",
        // "img/Dungeon/tile_0056.png",
        
        "img/Dungeon/tile_0057.png",
        "img/Dungeon/tile_0058.png",
        "img/Dungeon/tile_0059.png",
        
        // "img/Dungeon/tile_0060.png",
        // "img/Dungeon/tile_0061.png",
        // "img/Dungeon/tile_0062.png",
        // "img/Dungeon/tile_0063.png",
        // "img/Dungeon/tile_0064.png",
        // "img/Dungeon/tile_0065.png",
        // "img/Dungeon/tile_0066.png",
        // "img/Dungeon/tile_0067.png",
        // "img/Dungeon/tile_0068.png",
        // "img/Dungeon/tile_0069.png",
        // "img/Dungeon/tile_0070.png",
        // "img/Dungeon/tile_0071.png",
        // "img/Dungeon/tile_0072.png",
        // "img/Dungeon/tile_0073.png",
        // "img/Dungeon/tile_0074.png",
        // "img/Dungeon/tile_0075.png",
        // "img/Dungeon/tile_0076.png",
        // "img/Dungeon/tile_0077.png",
        // "img/Dungeon/tile_0078.png",
        // "img/Dungeon/tile_0079.png",
        // "img/Dungeon/tile_0080.png",
        // "img/Dungeon/tile_0081.png",
        // "img/Dungeon/tile_0082.png",
        // "img/Dungeon/tile_0083.png",
        // "img/Dungeon/tile_0084.png",
        // "img/Dungeon/tile_0085.png",
        // "img/Dungeon/tile_0086.png",
        // "img/Dungeon/tile_0087.png",
        // "img/Dungeon/tile_0088.png",
        // "img/Dungeon/tile_0089.png",
        // "img/Dungeon/tile_0090.png",
        // "img/Dungeon/tile_0091.png",
        // "img/Dungeon/tile_0092.png",
        // "img/Dungeon/tile_0093.png",
        // "img/Dungeon/tile_0094.png",
        // "img/Dungeon/tile_0095.png",
        // "img/Dungeon/tile_0096.png",
        // "img/Dungeon/tile_0097.png",
        // "img/Dungeon/tile_0098.png",
        // "img/Dungeon/tile_0099.png",
        // "img/Dungeon/tile_0100.png",
        // "img/Dungeon/tile_0101.png",
        // "img/Dungeon/tile_0102.png",
        // "img/Dungeon/tile_0103.png",
        // "img/Dungeon/tile_0104.png",
        // "img/Dungeon/tile_0105.png",
        // "img/Dungeon/tile_0106.png",
        // "img/Dungeon/tile_0107.png",
        // "img/Dungeon/tile_0108.png",
        // "img/Dungeon/tile_0109.png",
        // "img/Dungeon/tile_0110.png",
        // "img/Dungeon/tile_0111.png",
        // "img/Dungeon/tile_0112.png",
        // "img/Dungeon/tile_0113.png",
        // "img/Dungeon/tile_0114.png",
        // "img/Dungeon/tile_0115.png",
        // "img/Dungeon/tile_0116.png",
        // "img/Dungeon/tile_0117.png",
        // "img/Dungeon/tile_0118.png",
        // "img/Dungeon/tile_0119.png",
        // "img/Dungeon/tile_0120.png",
        // "img/Dungeon/tile_0121.png",
        // "img/Dungeon/tile_0122.png",
        // "img/Dungeon/tile_0123.png",
        // "img/Dungeon/tile_0124.png",
        // "img/Dungeon/tile_0125.png",
        // "img/Dungeon/tile_0126.png",
        // "img/Dungeon/tile_0127.png",
        // "img/Dungeon/tile_0128.png",
        // "img/Dungeon/tile_0129.png",
        // "img/Dungeon/tile_0130.png",
        // "img/Dungeon/tile_0131.png"        
      ]
    }
  }
}).mount('#app')

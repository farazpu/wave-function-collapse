const { createApp } = Vue
const BLANK = "img/blank.png"

/********* IMAGE SETS *********/
let imgSet1 = [ 
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

let imgSet2 = [
  "img/Summer/cliff 0.png",
  "img/Summer/cliff 1.png",
  "img/Summer/cliff 2.png",
  "img/Summer/cliff 3.png",
  "img/Summer/cliffcorner 0.png",
  "img/Summer/cliffcorner 1.png",
  "img/Summer/cliffcorner 2.png",
  "img/Summer/cliffcorner 3.png",
  "img/Summer/cliffturn 0.png",
  "img/Summer/cliffturn 1.png",
  "img/Summer/cliffturn 2.png",
  "img/Summer/cliffturn 3.png",
  "img/Summer/grass 0.png",
  "img/Summer/grasscorner 0.png",
  "img/Summer/grasscorner 1.png",
  "img/Summer/grasscorner 2.png",
  "img/Summer/grasscorner 3.png",
  "img/Summer/road 0.png",
  "img/Summer/road 1.png",
  "img/Summer/road 2.png",
  "img/Summer/road 3.png",
  "img/Summer/roadturn 0.png",
  "img/Summer/roadturn 1.png",
  "img/Summer/roadturn 2.png",
  "img/Summer/roadturn 3.png",
  "img/Summer/watercorner 0.png",
  "img/Summer/watercorner 1.png",
  "img/Summer/watercorner 2.png",
  "img/Summer/watercorner 3.png",
  "img/Summer/waterside 0.png",
  "img/Summer/waterside 1.png",
  "img/Summer/waterside 2.png",
  "img/Summer/waterside 3.png",
  "img/Summer/waterturn 0.png",
  "img/Summer/waterturn 1.png",
  "img/Summer/waterturn 2.png",
  "img/Summer/waterturn 3.png",
  "img/Summer/water_a 0.png",
  "img/Summer/water_b 0.png",
  "img/Summer/water_c 0.png"
]

/********** End Image Set *********/

function generateInitialData() {
  let mapDim = 24;

  let imgMap = [];

  for (let i = 0; i < mapDim; i++) {
    imgMap.push([])
    for (let j = 0; j < mapDim; j++) {
      imgMap[i].push(BLANK)
    }      
  }
  
  return imgMap
}

createApp({

  methods: {

    showData() {
      this.tileDataShow = !this.tileDataShow;
      var data = ""

      data += "let tileMap = ";
      data += JSON.stringify(this.imgMap, null, 2);
      data += "\r\n\r\n";

      this.data = data
    },
    selectedImg(i) {
      this.selectedImage = i
      this.loadSlot()
    },
    drawImg(x, y, ev) {
      //console.log(ev)
      if(ev) {
        if(ev.altKey) {
          this.imgMap[x][y] = this.imgs[this.selectedImageSet][this.selectedImage]
        } else if(ev.ctrlKey) {
          this.imgMap[x][y] = BLANK
        }
      } else {
        this.imgMap[x][y] = this.imgs[this.selectedImageSet][this.selectedImage]
      }
      if(this.selectedImageSet === 0) {
        localStorage.setItem('tileMap' + this.saveSlot, JSON.stringify(this.imgMap));
      } else {
        localStorage.setItem('tileMap' + this.saveSlot + '-' + this.selectedImageSet, JSON.stringify(this.imgMap));
      }
    },
    loadSlot() {
      if(this.selectedImageSet === 0) {
        this.imgMap = JSON.parse(localStorage.getItem('tileMap' + this.saveSlot))
      } else {
        this.imgMap = JSON.parse(localStorage.getItem('tileMap' + this.saveSlot + '-' + this.selectedImageSet))
      }

      if(!this.imgMap) {
        this.imgMap = generateInitialData()
      }
    }
  },
  data() {
    if(!localStorage.getItem('tileMap')) {
      let imgMap = generateInitialData()

      localStorage.setItem('tileMap', JSON.stringify(imgMap));
    }

    return {
      saveSlot: '',
      selectedImage: 0,
      selectedImageSet: 0,
      tileDataShow: false,
      data: '',
      imgMap: JSON.parse(localStorage.getItem('tileMap')),
      imgs: [
        imgSet1, imgSet2
      ]
    }
  }
}).mount('#app')

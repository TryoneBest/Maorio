var scaleXY = 1.5

function createBlocks(x, y, img) {
    //console.log(img)
    var block_data = {
        "images": [img],
        "frames": [
            [33, 0, 31, 32],
            [66, 0, 31, 32],
            [99, 0, 31, 32],
            [132, 0, 31, 32],
            [165, 0, 31, 32],
            [198, 0, 31, 32]
        ],
        "animations": {
            "fragile": [0],
            "unknown": [1],
            "known": [2],
            "iron": [3],
            "floor": [4],
            "deep-floor": [5]
        }
    }
    var block_sheet = new createjs.SpriteSheet(block_data)
    var fragile_block = new createjs.Sprite(block_sheet, "fragile")
    fragile_block.setTransform(x, y, scaleXY, scaleXY)
    stage.addChild(fragile_block)
}
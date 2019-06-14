const ARROW_KEY_LEFT = 37 //left control on key board
const ARROW_KEY_RIGHT = 39 // right control
const SPACE_KEY = 32 //space control to jump
var leftkeyDown = false //if left key is put on
var rightkeyDown = false //if right key is put on
var isKeyDown = false
var player_speed = 6
var jump_speed = 5
var gravity = 15
var isKeyDown = false
var scaleXY = 1.5
var player

function createPlayer(x, y, player_img) {
    //console.log(player_img)
    var player_data = {
        "images": [player_img],
        "frames": [
            [0, 0, 29, 35],
            [32, 0, 28, 35],
            [64, 0, 27, 35],
            [96, 0, 26, 35],
            [128, 0, 25, 35]
        ],
        "animations": {
            "stand": {
                frames: [0],
                next: "stand",
                speed: 1
            },
            "run": {
                frames:[1, 4],
                next: "run",
                speed: 0.5
            },
            "jump": {
                frames: [2],
                next: "jump",
                speed: 1
            },
            "die": {
                frames: [3],
                next: "die",
                speed: 1
            }
        }
    }
    var player_spritesheet = new createjs.SpriteSheet(player_data)
    player = new createjs.Sprite(player_spritesheet, "stand")
    player.setTransform(x, y, scaleXY, scaleXY)
    stage.addChild(player)
}

function setControl() {
    if(!isKeyDown) {
        window.onkeydown = handleKeyDown
    } else {
        window.onkeydown = handleKeyPress
    }
    window.onkeyup = handleKeyUp
}

function handleKeyDown(e) {
    e = !e ? window.event : e
    isKeyDown = true
    setControl()
    switch(e.keyCode) {
        case ARROW_KEY_LEFT:
            player.gotoAndPlay("run")
            leftkeyDown = true
            break
        case ARROW_KEY_RIGHT:
            player.gotoAndPlay("run")
            rightkeyDown = true
            break
    }
}

function handleKeyPress(e) {
    e = !e ? window.event : e
    switch(e.keyCode) {
        case ARROW_KEY_LEFT:
            leftkeyDown = true
            break
        case ARROW_KEY_RIGHT:
            rightkeyDown = true
            break
    }
}

function handleKeyUp(e) {
    e = !e ? window.event : e
    isKeyDown = false
    setControl()
    player.gotoAndPlay("stand")
    switch(e.keyCode) {
        case ARROW_KEY_LEFT:
            leftkeyDown = false
            break
        case ARROW_KEY_RIGHT:
            rightkeyDown = false
            break
        case SPACE_KEY:
            player_jump = true
            player_stand = false
    }
}

function updatePlayer() {
    var nextX = player.x
    if(leftkeyDown) {
        nextX = player.x - player_speed
        if(nextX < 0) {
            nextX = 0
        }
    }else if(rightkeyDown) {
        nextX = player.x + player_speed
    }
    player.x = nextX
}


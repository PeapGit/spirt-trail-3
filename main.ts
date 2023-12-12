scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . 9 . . . . . . 
    . . . . . 9 9 9 . . . . . 
    . . . . . 9 8 9 . . . . . 
    . . . 9 9 9 8 9 9 9 . . . 
    . . . 9 8 8 8 8 8 9 . . . 
    . 9 9 9 8 9 8 9 8 9 9 9 . 
    9 9 8 8 8 9 8 9 8 8 8 9 9 
    . 9 9 9 8 9 8 9 8 9 9 9 . 
    . . . 9 8 8 8 8 8 9 . . . 
    . . . 9 9 9 8 9 9 9 . . . 
    . . . . . 9 8 9 . . . . . 
    . . . . . 9 9 9 . . . . . 
    . . . . . . 9 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 70, 70)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . 9 . . . . . . 
    . . . . . 9 9 9 . . . . . 
    . . . . . 9 8 9 . . . . . 
    . . . 9 9 9 8 9 9 9 . . . 
    . . . 9 8 8 8 8 8 9 . . . 
    . 9 9 9 8 9 8 9 8 9 9 9 . 
    9 9 8 8 8 9 8 9 8 8 8 9 9 
    . 9 9 9 8 9 8 9 8 9 9 9 . 
    . . . 9 8 8 8 8 8 9 . . . 
    . . . 9 9 9 8 9 9 9 . . . 
    . . . . . 9 8 9 . . . . . 
    . . . . . 9 9 9 . . . . . 
    . . . . . . 9 . . . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . . . 9 . . . . . . 
    . . 9 9 . 9 8 9 . 9 9 . . 
    . . 9 8 9 9 8 9 9 8 9 . . 
    . . . 9 8 8 8 8 8 9 . . . 
    . . 9 9 8 9 8 9 8 9 9 . . 
    . 9 8 8 8 9 8 9 8 8 8 9 . 
    . . 9 9 8 9 8 9 8 9 9 . . 
    . . . 9 8 8 8 8 8 9 . . . 
    . . 9 8 9 9 8 9 9 8 9 . . 
    . . 9 9 . 9 8 9 . 9 9 . . 
    . . . . . . 9 . . . . . . 
    . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . 9 9 . . . . . . . 9 9 . 
    . 9 8 9 9 . . . 9 9 8 9 . 
    . . 9 8 8 9 9 9 8 8 9 . . 
    . . 9 8 8 8 8 8 8 8 9 . . 
    . . . 9 8 9 8 9 8 9 . . . 
    . . . 9 8 9 8 9 8 9 . . . 
    . . . 9 8 9 8 9 8 9 . . . 
    . . 9 8 8 8 8 8 8 8 9 . . 
    . . 9 8 8 9 9 9 8 8 9 . . 
    . 9 8 9 9 . . . 9 9 8 9 . 
    . 9 9 . . . . . . . 9 9 . 
    . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . . . 9 . . . . . . 
    . . . . 9 9 8 9 9 . . . . 
    . . . 9 8 8 8 8 8 9 . . . 
    . . 9 8 8 8 8 8 8 8 9 . . 
    . . 9 8 8 9 8 9 8 8 9 . . 
    . 9 8 8 8 9 8 9 8 8 8 9 . 
    . . 9 8 8 9 8 9 8 8 9 . . 
    . . 9 8 8 8 8 8 8 8 9 . . 
    . . . 9 8 8 8 8 8 9 . . . 
    . . . . 9 9 8 9 9 . . . . 
    . . . . . . 9 . . . . . . 
    . . . . . . . . . . . . . 
    `,img`
    . . . . . . 9 . . . . . . 
    . . . . . 9 9 9 . . . . . 
    . . . . 9 9 8 9 9 . . . . 
    . . . . 9 8 8 8 9 . . . . 
    . . 9 9 8 8 8 8 8 9 9 . . 
    . 9 9 8 8 9 8 9 8 8 9 9 . 
    9 9 8 8 8 9 8 9 8 8 8 9 9 
    . 9 9 8 8 9 8 9 8 8 9 9 . 
    . . 9 9 8 8 8 8 8 9 9 . . 
    . . . . 9 8 8 8 9 . . . . 
    . . . . 9 9 8 9 9 . . . . 
    . . . . . 9 9 9 . . . . . 
    . . . . . . 9 . . . . . . 
    `],
200,
true
)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
info.setLife(9)
scene.cameraFollowSprite(mySprite)

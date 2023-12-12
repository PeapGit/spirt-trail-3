namespace SpriteKind {
    export const lighting = SpriteKind.create()
    export const lighting2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    sprites.destroy(lighting)
    sprites.destroy(lighting2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level9`)
    info.changeScoreBy(1)
    info.setLife(9)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    info.setLife(9)
    sprites.destroy(lighting)
    sprites.destroy(lighting2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    lighting = sprites.create(img`
        d 
        `, SpriteKind.lighting)
    tiles.placeOnRandomTile(lighting, assets.tile`myTile4`)
    lighting2 = sprites.create(img`
        c 
        `, SpriteKind.lighting2)
    tiles.placeOnRandomTile(lighting2, assets.tile`myTile6`)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let lighting2: Sprite = null
let lighting: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . 9 . . . . . 
    . . . . 9 8 9 . . . . 
    . . . . 9 8 9 . . . . 
    . . . 9 8 8 8 9 . . . 
    . 9 9 8 9 8 9 8 9 9 . 
    9 8 8 8 9 8 9 8 8 8 9 
    . 9 9 8 9 8 9 8 9 9 . 
    . . . 9 8 8 8 9 . . . 
    . . . . 9 8 9 . . . . 
    . . . . 9 8 9 . . . . 
    . . . . . 9 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 70, 70)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . 9 . . . . . 
    . . . . 9 8 9 . . . . 
    . . . . 9 8 9 . . . . 
    . . . 9 8 8 8 9 . . . 
    . 9 9 8 9 8 9 8 9 9 . 
    9 8 8 8 9 8 9 8 8 8 9 
    . 9 9 8 9 8 9 8 9 9 . 
    . . . 9 8 8 8 9 . . . 
    . . . . 9 8 9 . . . . 
    . . . . 9 8 9 . . . . 
    . . . . . 9 . . . . . 
    `,img`
    . . . . . . . . . . . 
    . . . . . 9 . . . . . 
    . . 9 . 9 8 9 . 9 . . 
    . . . 9 8 8 8 9 . . . 
    . . 9 8 9 8 9 8 9 . . 
    . 9 8 8 9 8 9 8 8 9 . 
    . . 9 8 9 8 9 8 9 . . 
    . . . 9 8 8 8 9 . . . 
    . . 9 . 9 8 9 . 9 . . 
    . . . . . 9 . . . . . 
    . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . 
    . 9 9 . . . . . 9 9 . 
    . 9 8 9 9 . 9 9 8 9 . 
    . . 9 8 8 8 8 8 9 . . 
    . . 9 8 9 8 9 8 9 . . 
    . . . 8 9 8 9 8 . . . 
    . . 9 8 9 8 9 8 9 . . 
    . . 9 8 8 8 8 8 9 . . 
    . 9 8 9 9 . 9 9 8 9 . 
    . 9 9 . . . . . 9 9 . 
    . . . . . . . . . . . 
    `,img`
    . . . . . 9 . . . . . 
    . 9 . . 9 8 9 . . 9 . 
    . . . 9 8 8 8 9 . . . 
    . . 9 8 8 8 8 8 9 . . 
    . 9 8 8 9 8 9 8 8 9 . 
    9 8 8 8 9 8 9 8 8 8 9 
    . 9 8 8 9 8 9 8 8 9 . 
    . . 9 8 8 8 8 8 9 . . 
    . . . 9 8 8 8 9 . . . 
    . 9 . . 9 8 9 . . 9 . 
    . . . . . 9 . . . . . 
    `],
200,
true
)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
info.setLife(9)
scene.cameraFollowSprite(mySprite)
forever(function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        ....9.....9....9....
        ....9.....99...9....
        ....99.....9..99....
        .....99....99.9.....
        999...9.....999.....
        ..99999......9.....9
        ......99....99....99
        99.....9....9....99.
        .999...999.9999..9..
        ...99....999..999999
        ....99999999.......9
        99999....999........
        .........9.9........
        ........99.99.......
        .......99...99.....9
        ......99.....9999999
        ....999.......9.....
        ..999.9.......99....
        999...9........9....
        9.....9......9999...
        `, lighting2, 0, 0)
    pause(1000)
    sprites.destroy(projectile2)
    pause(3000)
})
forever(function () {
    projectile = sprites.createProjectileFromSprite(img`
        ....9.....9....9....
        ....9.....99...9....
        ....99.....9..99....
        .....99....99.9.....
        999...9.....999.....
        ..99999......9.....9
        ......99....99....99
        99.....9....9....99.
        .999...999.9999..9..
        ...99....999..999999
        ....99999999.......9
        99999....999........
        .........9.9........
        ........99.99.......
        .......99...99.....9
        ......99.....9999999
        ....999.......9.....
        ..999.9.......99....
        999...9........9....
        9.....9......9999...
        `, lighting, 0, 0)
    pause(1000)
    sprites.destroy(projectile)
    pause(3000)
})

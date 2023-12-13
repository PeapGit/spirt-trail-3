namespace SpriteKind {
    export const lighting = SpriteKind.create()
    export const lighting2 = SpriteKind.create()
    export const lighting3 = SpriteKind.create()
    export const lighting4 = SpriteKind.create()
    export const lighting5 = SpriteKind.create()
    export const lighting6 = SpriteKind.create()
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level10`)
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
    sprites.destroy(lighting_3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
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
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile11`)
    lighting = sprites.create(img`
        d 
        `, SpriteKind.lighting)
    tiles.placeOnRandomTile(lighting, assets.tile`myTile4`)
    lighting2 = sprites.create(img`
        c 
        `, SpriteKind.lighting2)
    tiles.placeOnRandomTile(lighting2, assets.tile`myTile6`)
    lighting_3 = sprites.create(img`
        2 
        `, SpriteKind.lighting3)
    tiles.placeOnRandomTile(lighting_3, assets.tile`myTile7`)
    lighting_4 = sprites.create(img`
        5 
        `, SpriteKind.lighting4)
    tiles.placeOnRandomTile(lighting_4, assets.tile`myTile10`)
    lighting_5 = sprites.create(img`
        8 
        `, SpriteKind.lighting5)
    tiles.placeOnRandomTile(lighting_5, assets.tile`myTile12`)
    mySprite2 = sprites.create(img`
        a 
        `, SpriteKind.lighting6)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile13`)
    mySprite3 = sprites.create(img`
        4 
        `, SpriteKind.lighting)
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile14`)
})
let projectile7: Sprite = null
let projectile6: Sprite = null
let projectile5: Sprite = null
let projectile4: Sprite = null
let projectile3: Sprite = null
let projectile: Sprite = null
let projectile2: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let lighting_5: Sprite = null
let lighting_4: Sprite = null
let lighting_3: Sprite = null
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
forever(function () {
    projectile3 = sprites.createProjectileFromSprite(img`
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
        `, lighting_3, 0, 0)
    pause(1000)
    sprites.destroy(projectile3)
    pause(3000)
})
forever(function () {
    projectile4 = sprites.createProjectileFromSprite(img`
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
        `, lighting_4, 0, 0)
    pause(1000)
    sprites.destroy(projectile4)
    pause(3000)
})
forever(function () {
    projectile5 = sprites.createProjectileFromSprite(img`
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
        `, lighting_5, 0, 0)
    pause(1000)
    sprites.destroy(projectile5)
    pause(3000)
})
forever(function () {
    projectile6 = sprites.createProjectileFromSprite(img`
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
        `, mySprite2, 0, 0)
    pause(1000)
    sprites.destroy(projectile6)
    pause(3000)
})
forever(function () {
    projectile7 = sprites.createProjectileFromSprite(img`
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
        `, mySprite3, 0, 0)
    pause(1000)
    sprites.destroy(projectile7)
    pause(3000)
})

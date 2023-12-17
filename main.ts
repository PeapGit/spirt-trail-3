namespace SpriteKind {
    export const lighting = SpriteKind.create()
    export const lighting2 = SpriteKind.create()
    export const lighting3 = SpriteKind.create()
    export const lighting4 = SpriteKind.create()
    export const lighting5 = SpriteKind.create()
    export const lighting6 = SpriteKind.create()
    export const lighting7 = SpriteKind.create()
    export const rift = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setCurrentTilemap(tilemap`level12`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    sprites.destroy(my_enemy)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`level19`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    sprites.destroy(my_enemy)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level20`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    rift = sprites.create(img`
        f 
        `, SpriteKind.Enemy)
    rift.follow(mySprite, 20)
    tiles.placeOnRandomTile(rift, assets.tile`myTile29`)
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
    sprites.destroy(lighting_4)
    sprites.destroy(lighting_5)
    sprites.destroy(lighting2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level14`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    my_enemy = sprites.create(img`
        ................................................................................
        .......................................444444...................................
        .......................................4444444..................................
        .......................................4444444444...............................
        .......................................444444444444.............................
        .......................................4444444444444............................
        ........................................4444444444444...........................
        .........................................4444444444444..........................
        .........................................44444444444444.........................
        ..........................................44444444444444........................
        ...........................................44444444444444.......................
        ...........................................444444444444444......................
        ............................................44444444444444......................
        ............................................444444444444444.....................
        ............................4................444444444444444....................
        ............................44...............444444444444444....................
        ............................44...............4444444444444444...................
        ...........................4444..............44444444444444444..................
        ...........................444444...........4444444454444444444.................
        ...........................444444...........4444444455444444444.................
        ...........................4444444..........44444444555444444444................
        ..........................44444444..........44444444555544444444................
        .........................4444444444.........4444444455554444444444..............
        .........................44444444444........4444444455555444444444..............
        ........................444444444444........44444444555554444444444.............
        ........................44444444444444.....444444444455555444444444.............
        .......................444444444444444.....4444444444555555444444444............
        .......................4444444444444444...444444444445555554444444444...........
        .......................44444445444444444..444444444445555555444444444...........
        ......................444444455444444444..444444444445555555544444444...........
        ......................444444555544444444..4444444444455555555444444444..........
        .....................4444444555544444444.44444444444555555555544444444..........
        .....................44444455555544444444444444444445555555555544444444.........
        ....................444444455555544444444444444444455555555555544444444.........
        ....................4444444555555544444444444444444555555555555544444444........
        ...................44444445555555554444444444444445555555555555544444444........
        ..................444444445555555554444444444444445555555555555554444444........
        ..................4444444455555555554444444444444555555555555555554444444.......
        .................444444444555555555544444444444455555555555555555544444444......
        .................444444445555555555544444444444555555555555555555554444444......
        ................4444444555555555555544444444444555555555555555555554444444......
        ................44444445555555555555444444444455555555555555555555544444444.....
        ...............444444455555555555555544444444555555555555555555555545444444.....
        ...............4444444555555555555555444444455555555555555555555555544444444....
        ..............44444445555555555555555444444455555555555555555555555544444444....
        .............444444445555555555555555444444455555555555555555555555554444444....
        ............4444444445555555555555555544444555555555555555555555555554444444....
        ...........444444444555555555555555555444445555555555555555555555555554444444...
        ..........4444444444555555555555555555544445555555555555555555555555554444444...
        .........44444444445555555555555555555554455554445555555555555555555555444444...
        .........44444444445555555555555444555555455544444555555555555555555555444444...
        .........44444444455555555555554444455555455542224555555555555555555555444444...
        .........44444444555555555555554222455555555542224555555555555555555555544444...
        ........444444445555555555555544222445555555442252455555555555555555555544444...
        ........444444445555555555555544225245555555442252455555555555555555555544444...
        .......44444444455555555555555422252455555554422524555555555555555555555444444..
        .......44444444555555555555555422252455555554422524555555555555555555555444444..
        ......444444445555555555555555422252455555554422524555555555555555555555444444..
        .....4444444455555555555555555422252455555554422524555555555555555555555444444..
        .....4444444455555555555555555422252455555554422524555555555555555555555444444..
        .....4444444555555555555555555422252455555554422524555555555555555555555444444..
        .....4444444555555555555555555422252455555554422524555555555555555555555444444..
        .....4444444555555555555555555422252455555554422524555555555555555555555444444..
        .....2222255555555555555555555422252455555554422524555555555555555555555444444..
        .....2222222555555555555555555422252455555554422524555555555555555555555444444..
        .....2222222225555555555555555442224455555555422545555555555555555555555444444..
        .....2222222222255555555555555542224555555555422245555555555555555555555444444..
        .....2222222222222555555555555544444555555555444445555555555555522222222244444..
        .....22222222222222255555555555544455555555555444555555555552222222222222222....
        .......222222222222222555555555555555555555555555555555555222222222222222222....
        ..........222222222222255555555555555555555555555555555552222222222222222222....
        ...........22222222222222255555555555555555555555555555522222222222222222222....
        .............2222222222222225555555555555555555555555222222222222222222222......
        ...............22222222222222225555555555555555552222222222222222222222.........
        ..................2222222222222222555555555552222222222222222222222.............
        ...................22222222222222222222222222222222222222222222222..............
        .....................2222222222222222222222222222222222222222222................
        ........................222222222222222222222222222222222222222.................
        ..........................22222222222222222222222222222222222...................
        ..............................22222222222222222222222222222.....................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(my_enemy, assets.tile`myTile23`)
    my_enemy.follow(mySprite, 38)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`level12`)
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
        `, SpriteKind.lighting7)
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile14`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rift, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.setCurrentTilemap(tilemap`level19`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setCurrentTilemap(tilemap`level19`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    info.changeScoreBy(3)
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.setCurrentTilemap(tilemap`level12`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    sprites.destroy(my_enemy)
})
let projectile7: Sprite = null
let projectile6: Sprite = null
let projectile5: Sprite = null
let projectile4: Sprite = null
let projectile3: Sprite = null
let projectile: Sprite = null
let projectile2: Sprite = null
let projectile8: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let lighting_5: Sprite = null
let lighting_4: Sprite = null
let lighting_3: Sprite = null
let lighting2: Sprite = null
let lighting: Sprite = null
let rift: Sprite = null
let my_enemy: Sprite = null
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
    projectile8 = sprites.createProjectileFromSprite(img`
        ......fffffffffffffffffff.....
        .....fffffff1fff8ffffffffff...
        ...ffffff8fffffffffffff1fffff.
        ..fffffffffff9ffffff9fffffffff
        .fffff9fffffffffffffffffffffff
        .ffffffffffffffffffffffff8ffff
        ffff8fffff9fffff9fffffffffffff
        fffffffffffff1fffff8ff8fffff1f
        ffff9ffffffffffffffffffff9ffff
        f9ffffffff8fffffffffffffffffff
        fffffff9fffffff8ffffffffffffff
        ffffffffffffffffffff9fffffffff
        fffffffffff9fffffffffffffff9ff
        ff9ff8fffffffffff1ffffffffffff
        ffffffff9ffffff9ffff8fff8fffff
        fffffffffff8ffffffffffffffffff
        fff1ffffffffffffffffffffff1fff
        ffffffffffffffff9ffffff9ffffff
        9ffffff8ffffffffffffffffffff9f
        ffff9fffff9fff8fffffffffffffff
        fffffffffffffffffff9ff8fffffff
        ffffffffffffffffffffffffffffff
        fffff8ffffffffffffffffff9fffff
        fffffffff8ff1ff9fffffffffffff.
        .ffffff9fffffffffffffffffffff.
        .ff1fffffffffffffff9ff8ffffff.
        ..ffffffffffffffffffffffffff..
        ..ffffff8ffff9ff8fffffff1ff...
        ...fffffffffffffffff9ffffff...
        .....fffff1fffffffffffffff....
        `, rift, 0, 0)
    pause(5000)
    sprites.destroy(projectile8)
})
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

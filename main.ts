input.onButtonPressed(Button.A, function () {
    mi_personaje.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    game.gameOver()
})
input.onButtonPressed(Button.B, function () {
    mi_personaje.change(LedSpriteProperty.X, 1)
})
let mi_personaje: game.LedSprite = null
game.setScore(0)
mi_personaje = game.createSprite(2, 4)
let enemigo = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    if (enemigo.get(LedSpriteProperty.Y) == 4) {
        if (enemigo.isTouching(mi_personaje)) {
            game.addScore(1)
            enemigo.set(LedSpriteProperty.Y, 0)
            enemigo.set(LedSpriteProperty.X, randint(0, 4))
        } else {
            basic.showIcon(IconNames.Sad)
            game.gameOver()
        }
    } else {
        basic.pause(500)
        enemigo.change(LedSpriteProperty.Y, 1)
    }
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
scene.setBackgroundImage(assets.image`TheStage`)
game.splash("Press A to play")
info.startCountdown(10)

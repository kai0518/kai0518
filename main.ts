input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    basic.showString("Now")
    basic.showString("" + input.temperature() + "*c")
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    basic.showNumber(歩数)
})
let 不快指数ー表示 = 0
let 不快指数 = 0
let 歩数 = 0
歩数 = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.InBackground)
basic.showNumber(input.temperature())
basic.pause(5000)
basic.clearScreen()
basic.forever(function () {
    if (32 <= input.temperature()) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.LoopingInBackground)
    }
    if (input.isGesture(Gesture.Shake)) {
        歩数 += 1
    }
})
basic.forever(function () {
    不快指数 = input.temperature() * 0.81 + grove.aht20ReadTemperatureC() * 0.01 * (input.temperature() * 0.99 - 14.3) + 46.3
    basic.showString("|" + 不快指数 + "|")
})
basic.forever(function () {
    if (不快指数 < 70) {
        不快指数ー表示 = 1
    } else if (70 <= (不快指数 < 75)) {
        不快指数ー表示 = 2
    } else if (75 <= (不快指数 < 80)) {
        不快指数ー表示 = 3
    } else if (80 <= (不快指数 < 86)) {
        不快指数ー表示 = 4
    } else if (86 <= 不快指数) {
        不快指数ー表示 = 5
    }
})

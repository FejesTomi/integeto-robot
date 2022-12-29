input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . .
            . # # # .
            . . # . #
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . # # . .
            . # # # .
            . . # . #
            . # . # .
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . #
            . # # # .
            # . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # # .
            . # # # .
            # . # . .
            . # . # .
            . # . # .
            `)
    }
})
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . # . # .
    . # . # .
    `)

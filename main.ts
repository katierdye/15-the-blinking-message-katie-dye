input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(3)
        basic.pause(1000)
        basic.showNumber(2)
        basic.pause(1000)
        basic.showNumber(1)
        basic.pause(1000)
        basic.showNumber(0)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            # # # # #
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.clearScreen()
        basic.showString("BLAST OFF!")
        basic.clearScreen()
    } else {
        basic.showString("BLAST OFF!")
        basic.clearScreen()
    }
})

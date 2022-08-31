// Knopf A erhöht die Zeit die der Timer läuft: pro Klick eine Minute mehr
input.onButtonPressed(Button.A, function () {
    Restzeit += 10
    Startwert += 10
})
// A+B setzt den Timer zurück auf den Startwert
input.onButtonPressed(Button.AB, function () {
    Restzeit = Startwert
})
// ohne das Timer läuft:
// Knopf B startet den Timer. 
// 
// bei laufendem Timer:
// Knopf B pausiert den Timer
input.onButtonPressed(Button.B, function () {
    if (Timer_ist_an) {
        Timer_ist_an = false
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            `)
    } else {
        Timer_ist_an = true
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
    }
})
// Werte für den ersten Start festlegen.
let Startwert = 0
let Restzeit = 0
let Timer_ist_an = false
Timer_ist_an = false
Restzeit = 0
Startwert = 0
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
// Falls Timer läuft zählen die Sekunden runter bis 0
// Dann stoppe Timer
basic.forever(function () {
    while (Timer_ist_an && Restzeit > 0) {
        basic.pause(1000)
        Restzeit += -1
        if (Restzeit == 0) {
            basic.showIcon(IconNames.Yes)
            for (let index = 0; index < 3; index++) {
                music.playMelody("C5 - C5 - C5 - C5 - ", 500)
            }
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
    }
    Timer_ist_an = false
})

music.playTone(262, music.beat(BeatFraction.Breve))
let Ready = 0
let Runprogram = 0
let Speedstyle = false
let Hit = 0
let Invalidhit = 0
let Validhit = 0
basic.forever(function () {
    if (Runprogram == 1 && Ready == 0) {
        if (Speedstyle == false) {
            music.playMelody("- E - G - - B - ", 120)
            basic.pause(randint(100, 5000))
            basic.showNumber(3)
            basic.pause(100)
            basic.showNumber(2)
            basic.pause(100)
            basic.showNumber(1)
        } else {
        	
        }
    }
})

// Individual code for "tilt left" gesture, Screensaver 2

//variables
let timer = 0
let seconds = 0
let gestureVariable = 0

function buttonB(){
input.onButtonPressed(Button.B, function () { // On B button, awake screen
    basic.showString("Awake!")
    basic.pause(100)
    basic.clearScreen()
    control.reset()
})
}

function saverTwo(){
    // On tilt left, activate screensaver 2
    input.onGesture(Gesture.TiltLeft, function () {
        seconds = 45
        while (seconds > 0) { //Timer
            gestureVariable = Math.randomRange(0, 5)
            basic.pause(200)
            seconds += 0 - 1
            if (gestureVariable == 0) { // Screensaver begins
                led.plotBrightness(gestureVariable, Math.randomRange(0, 5), 255)
                basic.pause(150)
                basic.clearScreen()
            } else if (gestureVariable == 1) {
                led.plotBrightness(gestureVariable, Math.randomRange(0, 5), 205)
                basic.pause(150)
                basic.clearScreen()
            } else if (gestureVariable == 2) {
                led.plotBrightness(gestureVariable, Math.randomRange(0, 5), 155)
                basic.pause(150)
                basic.clearScreen()
            } else if (gestureVariable == 3) {
                led.plotBrightness(gestureVariable, Math.randomRange(0, 5), 105)
                basic.pause(150)
                basic.clearScreen()
            } else if (gestureVariable == 4) {
                led.plotBrightness(gestureVariable, Math.randomRange(0, 5), 55)
                basic.pause(150)
                basic.clearScreen()
            } else {
                led.plotBrightness(gestureVariable, Math.randomRange(0, 5), 5)
                basic.pause(150)
                basic.clearScreen()
            }
        }
        basic.showString("Boom!")
        basic.clearScreen()
    })
    }

// On A button, go into "sleep mode"
input.onButtonPressed(Button.A, function () {
    basic.showString("Sleep Mode-")
    basic.clearScreen()
    basic.showString("Hold button A for 2 seconds ") // Hold button A for 2 seconds to activate screensavers
    basic.clearScreen()
    basic.showNumber(3) // countdown to let user know when to hold button A
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(2500)
    timer = input.runningTime()
    timer = 2
    if (input.buttonIsPressed(Button.A) && input.runningTime() >= timer) { // Button A held for 2 seconds
        saverTwo(); // Functions (Methods)
        buttonB();
        basic.pause(3000)
    }
    basic.clearScreen()
})


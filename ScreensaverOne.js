// Individual code for "On Shake" gesture, Screensaver 1

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

function saverOne(){
    // On gesture shake, activate screensaver 1
    input.onGesture(Gesture.Shake, function () {
        seconds = 15
        while (seconds > 0) { // Timer
            gestureVariable = Math.randomRange(0, 4)
            basic.pause(200)
            seconds += 0 - 1
            if (gestureVariable == 0) { // Screensaver begins
                led.plot(0, 1)
                led.plot(0, 2)
                led.plot(0, 3)
                basic.pause(500)
                basic.clearScreen()
            } else if (gestureVariable == 1) {
                led.plot(0, 1)
                led.plot(1, 2)
                led.plot(2, 3)
                basic.pause(500)
                basic.clearScreen()
            } else if (gestureVariable == 2) {
                led.plot(1, 2)
                led.plot(2, 2)
                led.plot(3, 2)
                basic.pause(500)
                basic.clearScreen()
            } else if (gestureVariable == 3) {
                led.plot(4, 1)
                led.plot(3, 2)
                led.plot(2, 3)
                basic.pause(500)
                basic.clearScreen()
            } else if (gestureVariable == 4) {
                led.plot(4, 1)
                led.plot(4, 2)
                led.plot(4, 3)
                basic.pause(500)
                basic.clearScreen()
            }
        }
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
        saverOne(); // Functions (Methods)
        buttonB();
        basic.pause(3000)
    }
    basic.clearScreen()
})
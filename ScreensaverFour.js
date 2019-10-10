// Individual code for "On logo up", gesture Screensaver 4

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

function saverFour(){ // On logo up, activate screensaver 4
    input.onGesture(Gesture.LogoUp, function () {
        seconds = 11
        while (seconds > 0) { // Timer
            gestureVariable = Math.randomRange(0, 2)
            basic.pause(200)
            seconds += 0 - 1
            if (gestureVariable == 0) { // Screensaver begins
                led.plot(1, 0)
                led.plot(2, 0)
                led.plot(3, 0)
                led.plot(4, 1)
                led.plot(4, 2)
                led.plot(4, 3)
                led.plot(3, 4)
                led.plot(2, 4)
                led.plot(1, 4)
                led.plot(0, 3)
                led.plot(0, 2)
                led.plot(0, 1)
                basic.pause(300)
                basic.clearScreen()
                led.plot(2, 1)
                led.plot(3, 2)
                led.plot(2, 3)
                led.plot(1, 2)
                basic.pause(300)
                basic.clearScreen()
                led.plot(2, 2)
                basic.pause(600)
                basic.clearScreen()
            } else if (gestureVariable == 1) {
                led.plot(0, 0)
                led.plot(0, 1)
                led.plot(0, 2)
                led.plot(0, 3)
                led.plot(0, 4)
                led.plot(1, 0)
                led.plot(2, 0)
                led.plot(3, 0)
                led.plot(4, 0)
                led.plot(0, 4)
                led.plot(1, 4)
                led.plot(2, 4)
                led.plot(3, 4)
                led.plot(4, 4)
                led.plot(4, 1)
                led.plot(4, 2)
                led.plot(4, 3)
                led.plot(4, 4)
                basic.pause(300)
                basic.clearScreen()
                led.plot(1, 1)
                led.plot(2, 1)
                led.plot(3, 1)
                led.plot(3, 2)
                led.plot(3, 3)
                led.plot(1, 3)
                led.plot(2, 3)
                led.plot(1, 2)
                basic.pause(300)
                basic.clearScreen()
                led.plot(2, 2)
                basic.pause(600)
                basic.clearScreen()
            } else if (gestureVariable == 2) {
                led.plot(2, 0)
                led.plot(1, 1)
                led.plot(0, 2)
                led.plot(1, 3)
                led.plot(2, 4)
                led.plot(3, 3)
                led.plot(4, 2)
                led.plot(3, 1)
                basic.pause(300)
                basic.clearScreen()
                led.plot(2, 1)
                led.plot(3, 2)
                led.plot(2, 3)
                led.plot(1, 2)
                basic.pause(300)
                basic.clearScreen()
                led.plot(2, 2)
                basic.pause(600)
                basic.clearScreen()
            }
            basic.clearScreen()
        }
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
        saverFour(); // Functions (Methods)
        buttonB();
        basic.pause(3000)
    }
    basic.clearScreen()
})

/* 
Program: Micro-bit Screensavers
Date: October, 2019

Description: This program will display 5 different screensavers based on various gestures of the microbit,
and by using the corresponding "sleep mode" or "awake mode".

Assumptions & Limitations:
1. Perfect user will follow instructions
2. Limited to 5 screeensavers
3. Limited gestures and buttons
*/

class Screensavers {

constructor (){
let timer = 0
let seconds = 0
let gestureVariable = 0
}

function buttonB (){ // On B button, awake screen
input.onButtonPressed(Button.B, function () {
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

function saverThree(){ // On tilt right, activate screensaver 3
input.onGesture(Gesture.TiltRight, function () {
    seconds = 13
    while (seconds > 0) { //Timer
        gestureVariable = Math.randomRange(0, 4)
        basic.pause(200)
        seconds += 0 - 1
        if (gestureVariable == 0) { // Screensaver begins
            led.plot(0, 4)
            basic.pause(200)
            led.unplot(0, 4)
            led.plot(0, 3)
            basic.pause(200)
            led.unplot(0, 3)
            led.plot(0, 2)
            basic.pause(200)
            led.unplot(0, 2)
            led.plot(0, 1)
            basic.pause(200)
            led.unplot(0, 1)
            led.plot(0, 0)
            basic.pause(200)
            led.unplot(0, 0)
        } else if (gestureVariable == 1) {
            led.plot(1, 4)
            basic.pause(200)
            led.unplot(1, 4)
            led.plot(1, 3)
            basic.pause(200)
            led.unplot(1, 3)
            led.plot(1, 2)
            basic.pause(200)
            led.unplot(1, 2)
            led.plot(1, 1)
            basic.pause(200)
            led.unplot(1, 1)
            led.plot(1, 0)
            basic.pause(200)
            led.unplot(1, 0)
        } else if (gestureVariable == 2) {
            led.plot(2, 4)
            basic.pause(200)
            led.unplot(2, 4)
            led.plot(2, 3)
            basic.pause(200)
            led.unplot(2, 3)
            led.plot(2, 2)
            basic.pause(200)
            led.unplot(2, 2)
            led.plot(2, 1)
            basic.pause(200)
            led.unplot(2, 1)
            led.plot(2, 0)
            basic.pause(200)
            led.unplot(2, 0)
        } else if (gestureVariable == 3) {
            led.plot(3, 4)
            basic.pause(200)
            led.unplot(3, 4)
            led.plot(3, 3)
            basic.pause(200)
            led.unplot(3, 3)
            led.plot(3, 2)
            basic.pause(200)
            led.unplot(3, 2)
            led.plot(3, 1)
            basic.pause(200)
            led.unplot(3, 1)
            led.plot(3, 0)
            basic.pause(200)
            led.unplot(3, 0)
        } else if (gestureVariable == 4) {
            led.plot(4, 4)
            basic.pause(200)
            led.unplot(4, 4)
            led.plot(4, 3)
            basic.pause(200)
            led.unplot(4, 3)
            led.plot(4, 2)
            basic.pause(200)
            led.unplot(4, 2)
            led.plot(4, 1)
            basic.pause(200)
            led.unplot(4, 1)
            led.plot(4, 0)
            basic.pause(200)
            led.unplot(4, 0)
        }
        basic.clearScreen()
    }
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

function saverFive(){ // On logo down, activate screensaver 5
input.onGesture(Gesture.LogoDown, function () {
    seconds = 17
    while (seconds > 0) { //Timer
        led.plot(1, 0) //Plot clock design
        led.plot(2, 0)
        led.plot(2, 1)
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
        led.plot(2, 2)
        basic.pause(200)
        gestureVariable = Math.randomRange(0, 6)
        basic.pause(200)
        seconds += 0 - 1
        if (gestureVariable == 0) { // Screensaver begins
            led.toggle(3, 1)
            basic.pause(500)
            led.unplot(3, 1)
        } else if (gestureVariable == 1) {
            led.toggle(3, 2)
            basic.pause(500)
            led.unplot(3, 2)
        } else if (gestureVariable == 2) {
            led.toggle(3, 3)
            basic.pause(500)
            led.unplot(3, 3)
        } else if (gestureVariable == 3) {
            led.toggle(2, 3)
            basic.pause(500)
            led.unplot(2, 3)
        } else if (gestureVariable == 4) {
            led.toggle(1, 3)
            basic.pause(500)
            led.unplot(1, 3)
        } else if (gestureVariable == 5) {
            led.toggle(1, 2)
            basic.pause(500)
            led.unplot(1, 2)
        } else if (gestureVariable == 6) {
            led.toggle(1, 1)
            basic.pause(500)
            led.unplot(1, 1)
        }
        basic.clearScreen()
    }
})
}

function buttonA() 
{
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
        saverTwo();
        saverThree();
        saverFour();
        saverFive();
        buttonB();
        basic.pause(3000)
    }
    basic.clearScreen()
})
}
}
let tempp = 0
let compass = 0
input.onButtonPressed(Button.A, function () {
    tempp = input.temperature()
    if (tempp > 37) {
        basic.showString("high temp")
    } else {
        basic.showString("normal")
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString("SOS")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("SOS")
})
basic.forever(function () {
    compass = input.compassHeading()
    if (compass < 45 || compass > 315) {
        basic.showString("N")
    } else if (compass < 135) {
        basic.showString("E")
    } else if (compass < 225) {
        basic.showString("S")
    } else if (compass < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})

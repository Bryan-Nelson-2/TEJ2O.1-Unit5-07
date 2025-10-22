/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bryan
 * Created on: Oct 2025
 * This program makes a servo turn when buttons a and b are pressed.
*/


// variable
const servoNumber1 = robotbit.Servos.S1

// set up
basic.clearScreen()
basic.showIcon (IconNames.Happy)

// turns to 0 degrees when you press A
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString('0')
    robotbit.Servo(servoNumber1, 0)
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// turns to 180 degrees when you press B
input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showString('180')
    robotbit.Servo(servoNumber1, 180)
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

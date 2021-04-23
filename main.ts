radio.setGroup(107)
basic.forever(function () {
    if (input.lightLevel() > 5) {
        radio.sendNumber(1)
    }
    basic.pause(3000)
})

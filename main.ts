/**
 * allow easy use of much arduino components, like buzzer and photoresistor
 */
//% icon="\uf287" color="#FE6423" weight=300 block="Multi Port"
//% groups=["Buzzer", "Rotating system", "Light system", "Arduino", "other"]
namespace MultiPort {
    //% group="Buzzer"
    export namespace buzzer {
        /**
         * turn on or off a connected buzzer
         * 
         * @param pin the pin whichs the buzzer/piezo is connected
         * @param on the state of the buzzer/piezo
         */
        //% block="set state of buzzer (piezo) in pin %pin to %on"
        //% group="Buzzer"
        //% on.shadow="toggleOnOff"
        export function turnBuzzer(pin: DigitalPin, on: boolean) {
            if (on) {
                pins.digitalWritePin(pin, 1)
            } else {
                pins.digitalWritePin(pin, 0)
            }
        }
        /**
         * play note in a connected buzzer
         * 
         * @param note the note to be played
         */
        //% block="buzzer in note %note"
        //% group="Buzzer"
        export function hz(note: Note) {
            music.tonePlayable(Note.C, music.beat(BeatFraction.Whole))
        }
    }
    //% group="Light system"
    export namespace photoresistor {
        /**
         * read the light detected by a photoresistor
         * 
         * @param pin the pin is the photoresistor
         */
        //% block="read photoresistor at pin %pin"
        //% group="Light system"
        export function read(pin: AnalogPin) {
            return pins.analogReadPin(pin)
        }
    }
    //% group="Arduino"
    export namespace DistanceSensor {
        /**
         * Check the distance of a sensor (sonar extension required)
         * 
         * @param trigger the trig
         * @param echo the echo
         * @param unit the unit
         */
        //% block="check distance of a object using pins trig %trigger and echo %echo, result in %unit"
        //% group="Arduino"
        export function checkDistance(trigger: DigitalPin, echo: DigitalPin, unit: PingUnit) {
            return sonar.ping(trigger, echo, unit)
        }
    }
    /**
     * read the digital pin, can check anything which is connected to the pin
     * 
     * @param pin the pin to be read
     */
    //% block="read digital pin %pin"
    //% blockAliasFor="pins.digitalReadPin"
    //% group="other"
    export function readDigital(pin: DigitalPin) {
        return pins.digitalReadPin(pin)
    }
}

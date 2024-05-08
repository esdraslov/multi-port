//% icon="\uf287" color="#FE6423" weight=300 block="Multi Port"
//% groups=["Buzzer", "Rotating system", "Light system", "Arduino"]
namespace MultiPort {
    //% group="buzzer"
    export namespace buzzer {
        //% block="set state of buzzer (piezo) in pin %pin to %on"
        //% groups=["Buzzer"]
        export function TurnBuzzer(pin: DigitalPin, on: boolean) {
            if (on) {
                pins.digitalWritePin(pin, 1)
            } else {
                pins.digitalWritePin(pin, 0)
            }
        }
        //% block="buzzer in note %note"
        //% group="buzzer"
        export function Hz(note: Note) {
            music.tonePlayable(Note.C, music.beat(BeatFraction.Whole))
        }
    }
    //% groups=["Light system", "Arduino"]
    export namespace photoresistor {
        //% block="read photoresistor at pin %pin"
        //% groups=["Light system", "Arduino"]
        export function read(pin: AnalogPin) {
            return pins.analogReadPin(pin)
        }
    }
}

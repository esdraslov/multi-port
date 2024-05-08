namespace MultiPort {
    export namespace buzzer {
        //% block="set state of buzzer (piezo) in pin %pin to %on"
        export function TurnBuzzer(on: boolean, pin: DigitalPin) {
            if (on) {
                pins.digitalWritePin(pin, 1)
            } else {
                pins.digitalWritePin(pin, 0)
            }
        }
        //% block="buzzer in note %note"
        export function Hz(note: Note) {
            music.tonePlayable(Note.C, music.beat(BeatFraction.Whole))
        }
    }
}

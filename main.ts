namespace MultiPort {
    export namespace buzzer {
        //% block="set buzzer frequency at pin %pin to %Hz"
        export function SetFrequency(Hz: number, pin: DigitalPin) {
            pins.digitalWritePin(pin, Hz)
        }
    }
}

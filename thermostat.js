class Thermostat {
    constructor(temp = 20) {
        this.temp = temp
        this.powerSavingMode = false
    }

    getTemperature() {
        return this.temp
    }

    up() {
        this.temp += 1;
        if (this.temp > 25 && this.powerSavingMode) {
            return this.temp = 25
        } else {
            return this.temp
        }
    }
    
    down() {
        return this.temp -= 1
    }

    setPowerSavingMode(isSaving) {
        this.powerSavingMode = isSaving
        if (isSaving && this.temp > 25) {
            this.temp = 25
        } 
    }

    reset() {
        this.temp = 20
    }
}

module.exports = Thermostat


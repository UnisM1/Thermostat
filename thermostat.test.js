const Thermostat = require('./thermostat.js')

describe('Thermostat', () => {
    it('checks that thermostat has initial temp of 20 degrees', () => {
        const thermostat = new Thermostat()
        expect(thermostat.getTemperature()).toBe(20)
    })
    
    it('temp up by 1 degree with up method and vice versa for down.', () => {
        const thermostat = new Thermostat()
        expect(thermostat.getTemperature()).toBe(20)
        
        thermostat.up()
        thermostat.up()
        expect(thermostat.getTemperature()).toBe(22)
        
        thermostat.down()
        expect(thermostat.getTemperature()).toBe(21)
    })
    
    it('when PSM is on, max temp is 25 degrees.', () => {
        const thermostat = new Thermostat()
        expect(thermostat.getTemperature()).toBe(20)
        
        thermostat.setPowerSavingMode(true)
        
        for (let i = 0; i < 10; i++) {
            thermostat.up()
        }
        // Should be 25 degrees as max of 25 reached under power saving mode
        expect(thermostat.getTemperature()).toBe(25) 
        
        thermostat.setPowerSavingMode(false)
        thermostat.up()
        // Power saving mode turned off so can now go beyond previous max of 25.
        expect(thermostat.getTemperature()).toBe(26)
    })
    
    it('checks reset method sets temp back to 20 degrees', () => {
        const thermostat = new Thermostat()
        thermostat.up()
        thermostat.up()
        thermostat.reset()
        expect(thermostat.getTemperature()).toBe(20)
    })
})         
    

        
        



        






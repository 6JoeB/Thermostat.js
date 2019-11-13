'use strict';

var thermostat;

describe("Thermostat", function () {

    beforeEach(function () {
        thermostat = new Thermostat;
    });

    it('creates an instance of thermostat', function () {
        expect(thermostat).toBeInstanceOf(Thermostat);
    });

    it('starts with a temperature of 20', function () {
        expect(thermostat.temperature).toEqual(20)
    });

    it('can increase the temperature with an up function', function () {
        thermostat.increase(1);
        expect(thermostat.temperature).toEqual(21)
    });

    it('can decrease the temperature with an up function', function () {
        thermostat.decrease(1);
        expect(thermostat.temperature).toEqual(19)
    });

    it('has a minimum temperature of 10', function () {
        thermostat.decrease(15)
        expect(thermostat.temperature).toEqual(10)
    });
});
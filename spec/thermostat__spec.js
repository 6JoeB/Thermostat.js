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
});
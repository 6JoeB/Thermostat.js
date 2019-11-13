'use strict';

var thermostat;

beforeEach(function () {
    thermostat = new Thermostat;
});

describe("Thermostat", function () {

    it('creates an instance of thermostat', function () {
        expect(thermostat).toBeInstanceOf(Thermostat);
    });

    it('starts with a temperature of 20', function () {
        expect(thermostat.temperature).toEqual(20);
    });

    it('can reset to 20 with a reset function', function () {
        thermostat.decrease(10);
        expect(thermostat.temperature).toEqual(10);
        thermostat.resetTemp
        expect(thermostat.temperature).toEqual(20);
    })

    describe("Decreasing temp", function () {

        it('can decrease the temperature with a decrease function', function () {
            thermostat.decrease(1);
            expect(thermostat.temperature).toEqual(19);
        });

        it('has a minimum temperature of 10', function () {
            thermostat.decrease(15);
            expect(thermostat.temperature).toEqual(10);
        });

    });

    describe("Increasing temp", function () {

        it('can increase the temperature with an increase function', function () {
            thermostat.increase(1);
            expect(thermostat.temperature).toEqual(21);
        });

        it('has a power saving mode that defaults to on', function () {
            expect(thermostat.powerSavingMode).toEqual(true);
        });

        it('has a power saving mode that sets the max temp to 25', function () {
            thermostat.increase(100);
            expect(thermostat.temperature).toEqual(25);
        });

        it('can change power saving mode to off', function () {
            thermostat.powerSavingModeButton(false);
            expect(thermostat.powerSavingMode).toEqual(false);
        });

        it('has a max temp of 32 when power saving mode is off', function () {
            thermostat.powerSavingModeButton(false);
            thermostat.increase(100);
            expect(thermostat.temperature).toEqual(32);
        });

    });

});
'use strict';

class Thermostat {
    constructor() {
        this.temperature = 20;
    }
};

Thermostat.prototype.increase = function (number) {
    this.temperature += number
};
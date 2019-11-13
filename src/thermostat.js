'use strict';

class Thermostat {
    constructor() {
        this.temperature = 20;
        this._MINTEMP = 10;
    }
};

Thermostat.prototype.increase = function (number) {
    this.temperature += number
};

Thermostat.prototype.decrease = function (number) {
    if (this.temperature - number < this._MINTEMP) {
        this.temperature = this._MINTEMP;
    } else {
        this.temperature -= number;
    }
};
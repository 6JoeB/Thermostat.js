'use strict';

class Thermostat {
    constructor() {
        this.temperature = 20;
        this._MINTEMP = 10;
        this.powerSavingMode = true;
        this._SAVINGMAXTEMP = 25;
    }
};

Thermostat.prototype.increase = function (number) {
    if (this.powerSavingMode = true && this.temperature + number > this._SAVINGMAXTEMP) {
        this.temperature = this._SAVINGMAXTEMP;
    } else {
        this.temperature += number
    }
};

Thermostat.prototype.decrease = function (number) {
    if (this.temperature - number < this._MINTEMP) {
        this.temperature = this._MINTEMP;
    } else {
        this.temperature -= number;
    }
};
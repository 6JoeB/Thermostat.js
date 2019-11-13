'use strict';
const _MINTEMP = 10;
const _POWSAVMAXTEMP = 25;
const _MAXTEMP = 32;

class Thermostat {
    constructor() {
        this.temperature = 20;
        this.powerSavingMode = true;
    }
};

Thermostat.prototype.increase = function (number) {
    if (this.powerSavingMode == true && this.temperature + number > _POWSAVMAXTEMP) {
        this.temperature = _POWSAVMAXTEMP;
    } else if (this.powerSavingMode == false && this.temperature + number > _MAXTEMP) {
        this.temperature = _MAXTEMP;
    } else {
        this.temperature += number
    }
};

Thermostat.prototype.decrease = function (number) {
    if (this.temperature - number < _MINTEMP) {
        this.temperature = _MINTEMP;
    } else {
        this.temperature -= number;
    }
};

Thermostat.prototype.powerSavingModeButton = function (setting) {
    if (setting == false) { this.powerSavingMode = false }
    else if (setting == true) { this.powerSavingMode = true }
};

Thermostat.prototype.resetTemp = function () {
    this.temperature = 20;
};
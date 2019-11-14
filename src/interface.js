$(document).ready(function () {
    var thermostat = new Thermostat();
    updateTemperature();

    $('#temperature-up').click(function () {
        thermostat.increase(1);
        updateTemperature();
    });

    $('#temperature-down').click(function () {
        thermostat.decrease(1);
        updateTemperature();
    });

    $('#temperature-reset').click(function () {
        thermostat.resetTemp();
        updateTemperature();
    });

    $('#powersaving-on').click(function () {
        thermostat.powerSavingModeButton(true);
        updateTemperature();
    });

    $('#powersaving-off').click(function () {
        thermostat.powerSavingModeButton(false);
        updateTemperature();
    });

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        thermostat.checkUsage();
        if (thermostat.currentEnergyUsage === "low-usage") {
            $('#temperature').css('color', 'green');
        } if (thermostat.currentEnergyUsage === "medium-usage") {
            $('#temperature').css('color', 'orange');
        } if (thermostat.currentEnergyUsage === "high-usage") {
            $('#temperature').css('color', 'red');
        }
        // $('#temperature').attr('class', thermostat.currentEnergyUsage());
    };
});

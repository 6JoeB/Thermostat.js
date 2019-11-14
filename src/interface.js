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
        $('#power-saving-status').text("on");
        updateTemperature();
    });

    $('#powersaving-off').click(function () {
        thermostat.powerSavingModeButton(false);
        $('#power-saving-status').text("off");
        updateTemperature();
    });

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        thermostat.checkUsage();
        if (thermostat.currentEnergyUsage === "low-usage") {
            $('#temperature').addClass("low-usage");
            $('#temperature').removeClass("medium-usage");
        } if (thermostat.currentEnergyUsage === "medium-usage") {
            $('#temperature').addClass("medium-usage");
            $('#temperature').removeClass("low-usage");
            $('#temperature').removeClass("high-usage");
        } if (thermostat.currentEnergyUsage === "high-usage") {
            $('#temperature').addClass("high-usage");
            $('#temperature').removeClass("medium-usage");
        }
        // $('#temperature').attr('class', thermostat.currentEnergyUsage());
    };
});

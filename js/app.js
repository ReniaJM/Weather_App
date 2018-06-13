import {getTodayWeather, getTomorrowWeather, getCustomCityWeather,hideCustomCity} from "./ajax.js";
import {getTime} from "./time";

$(()=> {
    //wywołanie ma na celu eliminację opóźnienia sekundowego
    $('#czas').html(getTime());

    getTodayWeather();

    $('#tomorrowWeather').click(function (event) {
        event.preventDefault();
        $('.day').text('');
        $('.day').text('-na jutro-');
        getTomorrowWeather();

    });

    $('#todayWeather').click(function (event) {
        event.preventDefault();
        $('.day').text('');
        $('.day').text('-na dziś-');
        getTodayWeather();

    });

    $('#searchButton').click(function (event) {
        event.preventDefault();

        var inputParam = $('.name').val();

       if (inputParam !== ""){
           getCustomCityWeather(inputParam);
       } else {
           $('.searchedBox').css("visibility","hidden");
           $('.day').text('');
           $('.day').text('-na dziś-');
           $('#searchedCityNameHeader').html('...');
           getTodayWeather();
           hideCustomCity();
           alert("Pole nie może być puste ! ");
       }

    })

});






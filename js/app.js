import {getTodayWeather, getTomorrowWeather} from "./ajax.js";
$(()=> {

     getTodayWeather();

    $('#tomorrowWeather').click(function (event) {
        event.preventDefault();
        $('.day').text('');
        getTomorrowWeather();
        $('.day').text('-na jutro-');

    })

    $('#todayWeather').click(function (event) {
        event.preventDefault();
        $('.day').text('');
        getTodayWeather();
        $('.day').text('-na dziś-');

    })

});






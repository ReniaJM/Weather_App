//utworzenie funkcji o nazwie czas
function getTime()
{
    return (new Date()).toLocaleTimeString();
}

//wywołanie ma na celu eliminację opóźnienia sekundowego
$('#czas').html(getTime());

setInterval(function() {

    $('#czas').html(getTime());

}, 1000);

function checkForecastTemperature(element, res) {
    if (Math.floor(res.list[8].main.temp) < 25 && (res.list[8].clouds.all) < 40) {
        element.parent().parent().find(".iconAll").attr("src", "images_2/slonce_male.png")
    } else if (Math.floor(res.list[8].main.temp) > 25 && (res.list[8].clouds.all) < 40 ){
        element.parent().parent().find(".iconAll").attr("src", "images_2/slonce.png")
    } else {
        element.parent().parent().find(".iconAll").attr("src", "images_2/slonce_chmury.png")
    };
};

function checkTodayWeather(element, res) {
    console.log(res);
    if (Math.floor(res.main.temp) < 25 && (res.clouds.all) < 40) {
        element.parent().parent().find(".iconAll").attr("src", "images_2/slonce_male.png")
    } else if (Math.floor(res.main.temp) > 25 && (res.clouds.all) < 40 ) {
        element.parent().parent().find(".iconAll").attr("src", "images_2/slonce.png")
    }else {
        element.parent().parent().find(".iconAll").attr("src", "images_2/slonce_chmury.png")
    };
};

function getTodayWeather() {

    const urlApiWarsaw = 'https://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&units=metric&APPID=b8ceed1573c329eec18a0dafed246483';

    $.ajax({
        url: urlApiWarsaw,
        data: {
            key: 'b8ceed1573c329eec18a0dafed246483',
        }
    }).done(function (res) {

        let spanElementToChange = $(".weatherDataresult_1 span");
        $(".temperature").eq(0).html((Math.floor(res.main.temp) + '°'));
        spanElementToChange.eq(0).html(res.main.pressure + ' hPA');

        spanElementToChange.eq(1).html(res.main.humidity + ' %');
        spanElementToChange.eq(2).html(res.wind.speed + ' km/h');
        spanElementToChange.eq(3).html(res.clouds.all + ' %');

        checkTodayWeather(spanElementToChange, res);
    });
    const urlApiLondon = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=b8ceed1573c329eec18a0dafed246483';

    $.ajax({
        url: urlApiLondon,
        data: {
            key: 'b8ceed1573c329eec18a0dafed246483',
        }
    }).done(function (res) {

        let spanElementToChange = $(".weatherDataresult_2 span");
        $(".temperature").eq(1).html(Math.floor(res.main.temp) + '°');
        spanElementToChange.eq(0).html(res.main.pressure + ' hPA');
        spanElementToChange.eq(1).html(res.main.humidity + ' %');
        spanElementToChange.eq(2).html(res.wind.speed + ' km/h');
        spanElementToChange.eq(3).html(res.clouds.all + ' %');

        checkTodayWeather(spanElementToChange, res);
    });
    const urlApiNewYork = 'https://api.openweathermap.org/data/2.5/weather?q=NY,U.S&units=metric&APPID=b8ceed1573c329eec18a0dafed246483';

    $.ajax({
        url: urlApiNewYork,
        data: {
            key: 'b8ceed1573c329eec18a0dafed246483',
        }
    }).done(function (res) {

        let spanElementToChange = $(".weatherDataresult_3 span");
        $(".temperature").eq(2).html((Math.floor(res.main.temp) + '°'));
        spanElementToChange.eq(0).html(res.main.pressure + ' hPA');
        spanElementToChange.eq(1).html(res.main.humidity + ' %');
        spanElementToChange.eq(2).html(res.wind.speed + ' km/h');
        spanElementToChange.eq(3).html(res.clouds.all + ' %');

        checkTodayWeather(spanElementToChange, res);
    });
};

function getTomorrowWeather() {
    
    const tomorrowWeatherWarsaw = 'https://api.openweathermap.org/data/2.5/forecast?q=Warsaw,pl&units=metric&APPID=b8ceed1573c329eec18a0dafed246483';
    $.ajax({
        url: tomorrowWeatherWarsaw,
        data: {
            key: 'b8ceed1573c329eec18a0dafed246483',
        }
    }).done(function (res) {
        let elementToChange = $(".weatherDataresult_1 span");
        $(".temperature").eq(0).html((Math.floor(res.list[8].main.temp) + '°'));
        elementToChange.eq(0).html(res.list[8].main.pressure + ' hPA');

        elementToChange.eq(1).html(res.list[8].main.humidity + ' %');
        elementToChange.eq(2).html(res.list[8].wind.speed + ' km/h');
        elementToChange.eq(3).html(res.list[8].clouds.all + ' %');

        checkForecastTemperature(elementToChange, res);
    });
    const urlApiLondon = 'https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&APPID=b8ceed1573c329eec18a0dafed246483';

    $.ajax({
        url: urlApiLondon,
        data: {
            key: 'b8ceed1573c329eec18a0dafed246483',
        }
    }).done(function (res) {

        let elementToChange = $(".weatherDataresult_2 span ");
        $(".temperature").eq(1).html(Math.floor(res.list[8].main.temp) + '°');
        elementToChange.eq(0).html(res.list[8].main.pressure + ' hPA');
        elementToChange.eq(1).html(res.list[8].main.humidity + ' %');
        elementToChange.eq(2).html(res.list[8].wind.speed + ' km/h');
        elementToChange.eq(3).html(res.list[8].clouds.all + ' %');

        checkForecastTemperature(elementToChange, res);
    });
    const urlApiNewYork = 'https://api.openweathermap.org/data/2.5/forecast?q=NY,U.S&units=metric&APPID=b8ceed1573c329eec18a0dafed246483';

    $.ajax({
        url: urlApiNewYork,
        data: {
            key: 'b8ceed1573c329eec18a0dafed246483',
        }
    }).done(function (res) {
        console.log(res.list[8].main.temp)

        let elementToChange = $(".weatherDataresult_3 span");
        $(".temperature").eq(2).html((Math.floor(res.list[8].main.temp) + '°'));
        elementToChange.eq(0).html(res.list[8].main.pressure + ' hPA');
        elementToChange.eq(1).html(res.list[8].main.humidity + ' %');
        elementToChange.eq(2).html(res.list[8].wind.speed + ' km/h');
        elementToChange.eq(3).html(res.list[8].clouds.all + ' %');
        checkForecastTemperature(elementToChange, res);
    });

}
getTime()
export {getTodayWeather, getTomorrowWeather}

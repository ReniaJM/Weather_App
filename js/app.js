$(function () {

    const urlApiWarsaw = 'https://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&units=metric&APPID=b8ceed1573c329eec18a0dafed246483';

    $.ajax({
        url: urlApiWarsaw,
        data: {
            key: 'b8ceed1573c329eec18a0dafed246483',

        }
    }).done(function (res) {
        console.log(res)
        const warsawSpan = $(".weatherDataresult_1");

        $(".temperatura").eq(0).html((Math.floor(res.main.temp) + '°'));
        $(".weatherDataresult_1 span").eq(0).html(res.main.pressure +' hPA');

        $(".weatherDataresult_1 span").eq(1).html(res.main.humidity +' %');
        $(".weatherDataresult_1 span").eq(2).html(res.wind.speed +' km/h');
        $(".weatherDataresult_1 span").eq(3).html(res.clouds.all +' %');

    });
    const urlApiLondon = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=b8ceed1573c329eec18a0dafed246483';

    $.ajax({
        url: urlApiLondon,
        data: {
            key: 'b8ceed1573c329eec18a0dafed246483',

        }
    }).done(function (res) {
        console.log(res.main.humidity)

        $(".temperatura").eq(1).html(Math.floor(res.main.temp) + '°');
        $(".weatherDataresult_2 span ").eq(0).html(res.main.pressure +' hPA');
        $(".weatherDataresult_2 span").eq(1).html(res.main.humidity +' %');
        $(".weatherDataresult_2 span").eq(2).html(res.wind.speed +' km/h');
        $(".weatherDataresult_2 span").eq(3).html(res.clouds.all +' %');


    });
    const urlApiNewYork = 'https://api.openweathermap.org/data/2.5/weather?q=NY,U.S&units=metric&APPID=b8ceed1573c329eec18a0dafed246483';

    $.ajax({
        url: urlApiNewYork,
        data: {
            key: 'b8ceed1573c329eec18a0dafed246483',

        }
    }).done(function (res) {
        console.log(res.main.humidity)

        $(".temperatura").eq(2).html((Math.floor(res.main.temp) + '°'));
        $(".weatherDataresult_3 span").eq(0).html(res.main.pressure +' hPA');
        $(".weatherDataresult_3 span").eq(1).html(res.main.humidity +' %');
        $(".weatherDataresult_3 span").eq(2).html(res.wind.speed +' km/h');
        $(".weatherDataresult_3 span").eq(3).html(res.clouds.all +' %');


    });


});





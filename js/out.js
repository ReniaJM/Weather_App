!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t,a){"use strict";function n(){return(new Date).toLocaleTimeString()}function r(e,t){Math.floor(t.list[8].main.temp)<25&&t.list[8].clouds.all<40?e.parent().parent().find(".iconAll").attr("src","images_2/slonce_male.png"):Math.floor(t.list[8].main.temp)>25&&t.list[8].clouds.all<40?e.parent().parent().find(".iconAll").attr("src","images_2/slonce.png"):e.parent().parent().find(".iconAll").attr("src","images_2/slonce_chmury.png")}function l(e,t){console.log(t),Math.floor(t.main.temp)<25&&t.clouds.all<40?e.parent().parent().find(".iconAll").attr("src","images_2/slonce_male.png"):Math.floor(t.main.temp)>25&&t.clouds.all<40?e.parent().parent().find(".iconAll").attr("src","images_2/slonce.png"):e.parent().parent().find(".iconAll").attr("src","images_2/slonce_chmury.png")}Object.defineProperty(t,"__esModule",{value:!0}),$("#czas").html(n()),setInterval(function(){$("#czas").html(n())},1e3),n(),t.getTodayWeather=function(){$.ajax({url:"https://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&units=metric&APPID=b8ceed1573c329eec18a0dafed246483",data:{key:"b8ceed1573c329eec18a0dafed246483"}}).done(function(e){var t=$(".weatherDataresult_1 span");$(".temperature").eq(0).html(Math.floor(e.main.temp)+"°"),t.eq(0).html(e.main.pressure+" hPA"),t.eq(1).html(e.main.humidity+" %"),t.eq(2).html(e.wind.speed+" km/h"),t.eq(3).html(e.clouds.all+" %"),l(t,e)}),$.ajax({url:"https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=b8ceed1573c329eec18a0dafed246483",data:{key:"b8ceed1573c329eec18a0dafed246483"}}).done(function(e){var t=$(".weatherDataresult_2 span");$(".temperature").eq(1).html(Math.floor(e.main.temp)+"°"),t.eq(0).html(e.main.pressure+" hPA"),t.eq(1).html(e.main.humidity+" %"),t.eq(2).html(e.wind.speed+" km/h"),t.eq(3).html(e.clouds.all+" %"),l(t,e)}),$.ajax({url:"https://api.openweathermap.org/data/2.5/weather?q=NY,U.S&units=metric&APPID=b8ceed1573c329eec18a0dafed246483",data:{key:"b8ceed1573c329eec18a0dafed246483"}}).done(function(e){var t=$(".weatherDataresult_3 span");$(".temperature").eq(2).html(Math.floor(e.main.temp)+"°"),t.eq(0).html(e.main.pressure+" hPA"),t.eq(1).html(e.main.humidity+" %"),t.eq(2).html(e.wind.speed+" km/h"),t.eq(3).html(e.clouds.all+" %"),l(t,e)})},t.getTomorrowWeather=function(){$.ajax({url:"https://api.openweathermap.org/data/2.5/forecast?q=Warsaw,pl&units=metric&APPID=b8ceed1573c329eec18a0dafed246483",data:{key:"b8ceed1573c329eec18a0dafed246483"}}).done(function(e){var t=$(".weatherDataresult_1 span");$(".temperature").eq(0).html(Math.floor(e.list[8].main.temp)+"°"),t.eq(0).html(e.list[8].main.pressure+" hPA"),t.eq(1).html(e.list[8].main.humidity+" %"),t.eq(2).html(e.list[8].wind.speed+" km/h"),t.eq(3).html(e.list[8].clouds.all+" %"),r(t,e)}),$.ajax({url:"https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&APPID=b8ceed1573c329eec18a0dafed246483",data:{key:"b8ceed1573c329eec18a0dafed246483"}}).done(function(e){var t=$(".weatherDataresult_2 span ");$(".temperature").eq(1).html(Math.floor(e.list[8].main.temp)+"°"),t.eq(0).html(e.list[8].main.pressure+" hPA"),t.eq(1).html(e.list[8].main.humidity+" %"),t.eq(2).html(e.list[8].wind.speed+" km/h"),t.eq(3).html(e.list[8].clouds.all+" %"),r(t,e)}),$.ajax({url:"https://api.openweathermap.org/data/2.5/forecast?q=NY,U.S&units=metric&APPID=b8ceed1573c329eec18a0dafed246483",data:{key:"b8ceed1573c329eec18a0dafed246483"}}).done(function(e){console.log(e.list[8].main.temp);var t=$(".weatherDataresult_3 span");$(".temperature").eq(2).html(Math.floor(e.list[8].main.temp)+"°"),t.eq(0).html(e.list[8].main.pressure+" hPA"),t.eq(1).html(e.list[8].main.humidity+" %"),t.eq(2).html(e.list[8].wind.speed+" km/h"),t.eq(3).html(e.list[8].clouds.all+" %"),r(t,e)})}},function(e,t,a){"use strict";var n=a(0);$(function(){(0,n.getTodayWeather)(),$("#tomorrowWeather").click(function(e){e.preventDefault(),$(".day").text(""),(0,n.getTomorrowWeather)(),$(".day").text("-na jutro-")}),$("#todayWeather").click(function(e){e.preventDefault(),$(".day").text(""),(0,n.getTodayWeather)(),$(".day").text("-na dziś-")})})}]);
//# sourceMappingURL=out.js.map
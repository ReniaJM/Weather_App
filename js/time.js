//utworzenie funkcji o nazwie czas
function getTime()
{
    return (new Date()).toLocaleTimeString();
}

setInterval(function() {

    $('#czas').html(getTime());

}, 1000);

export {getTime}
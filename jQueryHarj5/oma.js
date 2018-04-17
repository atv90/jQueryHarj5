// oma JQuery JavaScript 
$(document).ready(function () {
    //piilotetaan sisältöalueet
    $('.content').hide();
    //click-tapahtuma ja anonyymi-funktio
    $('#yks').on('click', function () {
        //piilotetaan alueet klikatessa
        $('.content').hide();
        //näytetään haluttu alue klikatessa
        $('#one').show();
    });
});

// oma JQuery JavaScript 
$(document).ready(function () {
    //piilotetaan sis�lt�alueet
    $('.content').hide();
    //click-tapahtuma ja anonyymi-funktio
    $('#yks').on('click', function () {
        //piilotetaan alueet klikatessa
        $('.content').hide();
        //n�ytet��n haluttu alue klikatessa
        $('#one').show();
    });
});

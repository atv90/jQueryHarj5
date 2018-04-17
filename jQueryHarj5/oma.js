// oma JQuery JavaScript 
$(document).ready(function () {
    //piilotetaan sis‰ltˆalueet
    $('.content').hide();
    //click-tapahtuma ja anonyymi-funktio
    $('#yks').on('click', function () {
        //piilotetaan alueet klikatessa
        $('.content').hide();
        //n‰ytet‰‰n haluttu alue klikatessa
        $('#one').show('slow');
    });
    $('#kaks').on('click', function () {
        //piilotetaan alueet klikatessa
        $('.content').hide();
        //n‰ytet‰‰n haluttu alue klikatessa
        $('#two').show('normal');
    });
    $('#kol').on('click', function () {
        //piilotetaan alueet klikatessa
        $('.content').hide();
        //n‰ytet‰‰n haluttu alue klikatessa
        $('#three').show('fast');
    });
});

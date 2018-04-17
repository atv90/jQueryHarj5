// oma JQuery JavaScript 
$(document).ready(function () {
    //piilotetaan sis‰ltˆalueet
    $('.content').hide();
    //click-tapahtuma ja anonyymi-funktio
    $('#yks').on('click', function () {
        //piilotetaan alueet klikatessa
        $('.content').hide();
        //n‰ytet‰‰n haluttu alue klikatessa
        $('#one').show('slow').addClass('laatikko');
    });
    $('#kaks').on('click', function () {
        //piilotetaan alueet klikatessa
        $('.content').hide();
        //n‰ytet‰‰n haluttu alue klikatessa
        $('#two').show('normal').addClass('laatikko');
    });
    $('#kol').on('click', function () {
        //piilotetaan alueet klikatessa
        $('.content').hide();
        //n‰ytet‰‰n haluttu alue klikatessa
        $('#three').show('fast').addClass('laatikko');
    });
});

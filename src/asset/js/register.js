$(document).ready(function(){
    $('#register-customer').hide();
    $('#button-seller').addClass('tombol-aktif');

    // Kalo button customer di klik
    $('#button-customer').click(function(){
        $('#register-customer').show();
        $('#register-seller').hide();
        $('#button-seller').css({"background-color" : "#FFFFFF", "color" : "#9B9B9B"});
        $('#button-customer').css({"background-color" : "#DB3022", "color" : "#FFFFFF"});
    });

    // Kalo button seller di klik
    $('#button-seller').click(function(){
        $('#register-seller').show();
        $('#register-customer').hide();
        $('#button-customer').css({"background-color" : "#FFFFFF", "color" : "#9B9B9B"});
        $('#button-seller').css({"background-color" : "#DB3022", "color" : "#FFFFFF"});
    });
}); 
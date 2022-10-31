$(document).ready(function(){

    let size = 0;
    let jumlah = 0;

    $(document).on('click', '#size-minus', function(){
        if(size > 0){
            size--;
            $('#size-value').text(size);
        }else{
            alert("Size tidak bisa kurang dari 0!")
            return false;
        }
    });

    $(document).on('click', '#size-plus', function(){
        size++;
        $('#size-value').text(size);
    });

    $(document).on('click', '#jumlah-minus', function(){
        if(jumlah > 0){
            jumlah--;
            $('#jumlah-value').text(jumlah);
        }else{  
            alert("Jumlah tidak bisa kurang dari 0!")
            return false;
        }
        
    });

    $(document).on('click', '#jumlah-plus', function(){
        jumlah++;
        $('#jumlah-value').text(jumlah);
    });

    $('#size-value').text(size);
    $('#jumlah-value').text(jumlah);

});
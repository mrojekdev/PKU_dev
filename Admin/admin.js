    $(document).ready(function() {
        $('.JadwalDok').submit(function() {
            var validasi = $('#validasi').val().length; 
            var validasi2 = $('#validasi2').val().length; 
            var validasi3 = $('#validasi3').val().length; 
            var validasi4 = $('#validasi4').val().length; 
            console.log("eek: " + validasi.toString() + validasi2.toString());   
 
            if(validasi > 0 && validasi2 > 0 && validasi3 > 0 && validasi4 > 0)
            {
                $("#ParentVal").attr('class','form-group has-success');
                $("#validasi").attr('class','form-control form-control-success');
                $("#ParentVal2").attr('class','form-group has-success');
                $("#validasi2").attr('class','form-control form-control-success');
                $("#ParentVal3").attr('class','form-group has-success');
                $("#validasi3").attr('class','form-control form-control-success');
                $("#ParentVal4").attr('class','form-group has-success');
                $("#validasi4").attr('class','form-control form-control-success');
                return true;
            }
            else
            {    
                if(validasi > 0 )
                {
                    $("#ParentVal").attr('class','form-group has-success');
                    $("#validasi").attr('class','form-control form-control-success');
                }
                else
                {
                    $("#ParentVal").attr('class','form-group has-danger');
                    $("#validasi").attr('class','form-control form-control-danger');
                }
                if(validasi2 > 0 )
                {
                    $("#ParentVal2").attr('class','form-group has-success');
                    $("#validasi2").attr('class','form-control form-control-success');
                }
                else
                {
                    $("#ParentVal2").attr('class','form-group has-danger');
                    $("#validasi2").attr('class','form-control form-control-danger');
                }
                if(validasi3 > 0 )
                {
                    $("#ParentVal3").attr('class','form-group has-success');
                    $("#validasi3").attr('class','form-control form-control-success');
                }
                else
                {
                    $("#ParentVal3").attr('class','form-group has-danger');
                    $("#validasi3").attr('class','form-control form-control-danger');
                }
                if(validasi4 > 0 )
                {
                    $("#ParentVal4").attr('class','form-group has-success');
                    $("#validasi4").attr('class','form-control form-control-success');
                }
                else
                {
                    $("#ParentVal4").attr('class','form-group has-danger');
                    $("#validasi4").attr('class','form-control form-control-danger');
                }
            }
        });
    });

    $(document).ready(function() {
        $('.ManJadDok').submit(function() {
            var validasi5 = $('#validasi5').val().length; 
            var validasi6 = $('#validasi6').val().length; 
            var validasi7 = $('#validasi7').val().length; 
            var validasi8 = $('#validasi8').val().length; 
            console.log("eek: " + validasi.toString() + validasi2.toString());   
 
            if(validasi5 > 0 && validasi6 > 0 && validasi7 > 0 && validasi8 > 0)
            {
                $("#ParentVal5").attr('class','form-group has-success');
                $("#validasi5").attr('class','form-control form-control-success');
                $("#ParentVal6").attr('class','form-group has-success');
                $("#validasi6").attr('class','form-control form-control-success');
                $("#ParentVal7").attr('class','form-group has-success');
                $("#validasi7").attr('class','form-control form-control-success');
                $("#ParentVal8").attr('class','form-group has-success');
                $("#validasi8").attr('class','form-control form-control-success');
                return true;
            }
            else
            {    
                if(validasi5 > 0 )
                {
                    $("#ParentVal5").attr('class','form-group has-success');
                    $("#validasi5").attr('class','form-control form-control-success');
                }
                else
                {
                    $("#ParentVal5").attr('class','form-group has-danger');
                    $("#validasi5").attr('class','form-control form-control-danger');
                }
                if(validasi6 > 0 )
                {
                    $("#ParentVal6").attr('class','form-group has-success');
                    $("#validasi6").attr('class','form-control form-control-success');
                }
                else
                {
                    $("#ParentVal6").attr('class','form-group has-danger');
                    $("#validasi6").attr('class','form-control form-control-danger');
                }
                if(validasi7 > 0 )
                {
                    $("#ParentVal7").attr('class','form-group has-success');
                    $("#validasi7").attr('class','form-control form-control-success');
                }
                else
                {
                    $("#ParentVal7").attr('class','form-group has-danger');
                    $("#validasi7").attr('class','form-control form-control-danger');
                }
                if(validasi8 > 0 )
                {
                    $("#ParentVal8").attr('class','form-group has-success');
                    $("#validasi8").attr('class','form-control form-control-success');
                }
                else
                {
                    $("#ParentVal8").attr('class','form-group has-danger');
                    $("#validasi8").attr('class','form-control form-control-danger');
                }
            }
        });
    });

/* ERROR
parent :has-error
span : glyphicon-remove

SUCCESS
parent : has-success
span : glyphicon-ok

*/


    $(document).ready(function() {
        $('.JadwalDok').submit(function() {
            var validasi = $('#validasi').val().length; 
            var validasi2 = $('#validasi2').val().length; 
            var validasi3 = $('#validasi3').val().length; 
            var validasi4 = $('#validasi4').val().length; 
            // console.log("eek: " + validasi.toString() + validasi2.toString());   
 
            if(validasi > 0 && validasi2 > 0 && validasi3 > 0 && validasi4 > 0)
            {
                $("#ParentVal").attr('class','form-group has-feedback has-success');
                $("#ParentVal2").attr('class','form-group has-feedback has-success');
                $("#ParentVal3").attr('class','form-group has-feedback has-success');
                $("#ParentVal4").attr('class','form-group has-feedback has-success');
                $("#LogoVal").attr('class','glyphicon form-control-feedback glyphicon-ok');
                $("#LogoVal2").attr('class','glyphicon form-control-feedback glyphicon-ok');
                $("#LogoVal3").attr('class','glyphicon form-control-feedback glyphicon-ok');
                $("#LogoVal4").attr('class','glyphicon form-control-feedback glyphicon-ok');
                return true;
            }
            else
            {    
                if(validasi > 0 )
                {
                    $("#ParentVal").attr('class','form-group has-feedback has-success');
                    $("#LogoVal").attr('class','glyphicon form-control-feedback glyphicon-ok');
                }
                else
                {
                    $('#ParentVal').attr('class','form-group has-feedback has-error');
                    $("#LogoVal").attr('class','glyphicon form-control-feedback glyphicon-remove');
                }

                if(validasi2 > 0)
                {
                    $("#ParentVal2").attr('class','form-group has-feedback has-success');
                    $("#LogoVal2").attr('class','glyphicon form-control-feedback glyphicon-ok');
                }
                else
                {
                    $('#ParentVal2').attr('class','form-group has-feedback has-error');
                    $("#LogoVal2").attr('class','glyphicon form-control-feedback glyphicon-remove');
                }

                if(validasi3 > 0)
                {
                     $("#ParentVal3").attr('class','form-group has-feedback has-success');
                     $("#LogoVa3l").attr('class','glyphicon form-control-feedback glyphicon-ok');
                }
                else
                {
                    $('#ParentVal3').attr('class','form-group has-feedback has-error');
                    $("#LogoVal3").attr('class','glyphicon form-control-feedback glyphicon-remove');
                }

                if(validasi4 > 0)
                {
                    $("#ParentVal4").attr('class','form-group has-feedback has-success');
                    $("#LogoVal4").attr('class','glyphicon form-control-feedback glyphicon-ok');
                } 
                else
                {
                    $('#ParentVal4').attr('class','form-group has-feedback has-error');
                    $("#LogoVal4").attr('class','glyphicon form-control-feedback glyphicon-remove');
                }
                return false;
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